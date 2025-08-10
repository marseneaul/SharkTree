import { GEOCHRONOLOGIC_UNIT, TAXONOMIC_LEVELS } from "./enums";

export const BLACK = "rgba(0, 0, 0, 1)";
export const WHITE = "rgba(255, 255, 255, 1";
export const RED = "rgba(255, 0, 0, 1)";

export const LIGHT_GRAY = "rgba(245, 245, 245, 1)";
export const BLOOD_RED = "rgba(136, 8, 8, 1)";

export const TAXONOMIC_COLORS = {
    [TAXONOMIC_LEVELS.GENUS]: "#F94144",
    [TAXONOMIC_LEVELS.FAMILY]: "#F3722C",
    [TAXONOMIC_LEVELS.ORDER]: "#F9C74F",
    [TAXONOMIC_LEVELS.SUPERORDER]: "#43AA8B",
    [TAXONOMIC_LEVELS.SUBDIVISION]: "#577590"
}

export const GEOLOGICAL_COLORS = [
    "#F94144",
    "#F3722C",
    "#F9C74F",
    "#43AA8B",
    "#577590"
];