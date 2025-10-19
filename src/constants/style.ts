import { TAXONOMIC_LEVELS } from "./enums";

export const DEFAULT_STROKE_WIDTH = 1;
export const HIGHLIGHTED_STROKE_WIDTH = 2;

export const DEFAULT_STROKE_OPACITY = 1;
export const HIGHLIGHTED_STROKE_OPACITY = 0.1;

export const DEFAULT_SOLID_PATTERN = "solid";
export const DEFAULT_DASH_PATTERN = "5,5";

// Line thickness for taxonomic levels (thicker = more specific)
export const TAXONOMIC_THICKNESS = {
    [TAXONOMIC_LEVELS.GENUS]: 4,          // Thickest for most specific
    [TAXONOMIC_LEVELS.FAMILY]: 3,         // Thick
    [TAXONOMIC_LEVELS.ORDER]: 2.5,        // Medium-thick
    [TAXONOMIC_LEVELS.SUPERORDER]: 2,     // Medium
    [TAXONOMIC_LEVELS.SUBDIVISION]: 1.5   // Thinnest for most general
}