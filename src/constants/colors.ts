import { TAXONOMIC_LEVELS } from "./enums";

export const BLACK = "rgba(0, 0, 0, 1)";
export const WHITE = "rgba(255, 255, 255, 1";
export const RED = "rgba(255, 0, 0, 1)";

export const DEFAULT_NODE_COLOR = BLACK;
export const PULSING_NODE_COLOR = RED;

export const DEFAULT_PATH_COLOR = BLACK;

export const ORANGE = "orange";

export const TAXONOMIC_LEVEL_COLORS = {
    [TAXONOMIC_LEVELS.GENUS]: "orange",
    [TAXONOMIC_LEVELS.FAMILY]: "blue",
    [TAXONOMIC_LEVELS.ORDER]: "purple",
    [TAXONOMIC_LEVELS.SUPERORDER]: "yellow",
    [TAXONOMIC_LEVELS.SUBDIVISION]: "grey"
};