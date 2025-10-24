# export_aquamaps.R
# Usage: Rscript export_aquamaps.R species.csv out_dir

# Set a default CRAN mirror for non-interactive installs (Rscript)
options(repos = c(CRAN = "https://cloud.r-project.org"))

args <- commandArgs(trailingOnly = TRUE)
if (length(args) < 2) stop("Usage: Rscript export_aquamaps.R species.csv out_dir")
csv_path <- args[1]
out_dir  <- args[2]

dir.create(out_dir, showWarnings = FALSE, recursive = TRUE)

# ---- packages ----
need <- c("remotes","aquamapsdata","dplyr","readr","raster")
for (p in need) if (!requireNamespace(p, quietly = TRUE)) install.packages(p)

# aquamapsdata is on GitHub; install/update if missing
if (!requireNamespace("aquamapsdata", quietly = TRUE)) {
  remotes::install_github("raquamaps/aquamapsdata")
}

library(aquamapsdata)
library(dplyr)
library(readr)
library(raster)

# ---- one-time: download database (cached locally) ----
# This is the curated AquaMaps snapshot; large but done once and reused
if (!file.exists(aquamapsdata::am_db_sqlite())) {
  message("Downloading AquaMaps DB (one-time)…")
  aquamapsdata::download_db()
}

# ---- read species ----
sp <- readr::read_csv(csv_path, show_col_types = FALSE) |>
  dplyr::distinct(name) |>
  dplyr::mutate(name = trimws(name)) |>
  dplyr::filter(nchar(name) > 0)

# ---- helpers ----
lookup_key <- function(s) {
  # try exact (Genus + Species), else fuzzy
  parts <- strsplit(s, "\\s+")[[1]]
  key <- NA_character_
  if (length(parts) >= 2) {
    ex <- try(aquamapsdata::am_search_exact(Genus = parts[1], Species = parts[2]), silent = TRUE)
    if (!inherits(ex, "try-error") && nrow(ex) > 0) key <- ex$key[1]
  }
  if (is.na(key)) {
    fu <- try(aquamapsdata::am_search_fuzzy(s), silent = TRUE)
    if (!inherits(fu, "try-error") && nrow(fu) > 0) key <- fu$key[1]
  }
  key
}

render_png <- function(key, label, outfile) {
  # Build native habitat raster (0.5° grid). am_raster returns a RasterLayer.
  ras <- aquamapsdata::am_raster(key)

  # Export a clean PNG (transparent bg around plot margins; no axes/box)
  png(outfile, width = 2400, height = 1200, res = 300, bg = "transparent")
  par(mar = c(1,1,1,1))
  # Simple palette from package docs; customize if you like
  plot(ras, axes = FALSE, box = FALSE, legend = TRUE,
       col = colorRampPalette(c("#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#B10026"))(12),
       main = label)
  # Optional: print a small credit/citation
  mtext(aquamapsdata::am_citation(), side = 1, line = -1.2, adj = 0, cex = 0.6)
  dev.off()
}

# ---- process all ----
misses <- list()
dups   <- list()

for (i in seq_len(nrow(sp))) {
  nm <- sp$name[i]
  message(sprintf("[%d/%d] %s", i, nrow(sp), nm))
  key <- lookup_key(nm)

  if (is.na(key)) {
    misses[[length(misses)+1]] <- nm
    next
  }

  # Sanitize filename
  fname <- gsub("[^A-Za-z0-9_\\-]+", "_", nm)
  outfile <- file.path(out_dir, paste0(fname, ".png"))

  # Render
  try(render_png(key, nm, outfile), silent = TRUE)
}

# ---- write logs ----
if (length(misses)) writeLines(unlist(misses), file.path(out_dir, "_not_found.txt"))
message("Done. See: ", normalizePath(out_dir))
