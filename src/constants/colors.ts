import { PathStyle } from "../interfaces/path-style";
import { TAXONOMIC_LEVELS } from "./enums";

export const BLACK = "rgba(0, 0, 0, 1)";
export const WHITE = "rgba(255, 255, 255, 1";
export const RED = "rgba(255, 0, 0, 1)";

export const LIGHT_GRAY = "rgba(245, 245, 245, 1)";
export const BLOOD_RED = "rgba(136, 8, 8, 1)";

// Base color for all taxonomic highlighting (deep teal for accessibility and clarity)
export const TAXONOMIC_BASE_COLOR = "#2D5A87"; // Deep teal - accessible, professional, high contrast

// Single opacity for all taxonomic levels
export const TAXONOMIC_OPACITIES = {
    [TAXONOMIC_LEVELS.GENUS]: 1.0,        // Full opacity
    [TAXONOMIC_LEVELS.FAMILY]: 1.0,       // Full opacity
    [TAXONOMIC_LEVELS.ORDER]: 1.0,        // Full opacity
    [TAXONOMIC_LEVELS.SUPERORDER]: 1.0,   // Full opacity
    [TAXONOMIC_LEVELS.SUBDIVISION]: 1.0   // Full opacity
}

// Line thickness for taxonomic levels (thicker = more specific)
export const TAXONOMIC_THICKNESS = {
    [TAXONOMIC_LEVELS.GENUS]: 4,          // Thickest for most specific
    [TAXONOMIC_LEVELS.FAMILY]: 3,         // Thick
    [TAXONOMIC_LEVELS.ORDER]: 2.5,        // Medium-thick
    [TAXONOMIC_LEVELS.SUPERORDER]: 2,     // Medium
    [TAXONOMIC_LEVELS.SUBDIVISION]: 1.5   // Thinnest for most general
}

// Tag category base colors (more muted palette)
export const TAG_CATEGORY_COLORS = {
    conservationStatus: "#E53E3E",      // Red for conservation concerns
    reproductiveStrategy: "#805AD5",    // Purple for reproduction
    temperatureRegulation: "#00B5D8",   // Cyan for temperature
    behavior: "#38A169",                // Green for behavior
    feedingBehavior: "#DD6B20",         // Orange for feeding
    groupBehavior: "#D69E2E",           // Yellow for group dynamics
    physicalCharacteristics: "#718096", // Gray for physical traits
    habitat: "#38A169",                 // Green for habitat
    distribution: "#3182CE"             // Blue for distribution
}

// Single opacity for all tag categories
export const TAG_OPACITIES = {
    conservationStatus: 1.0,            // Full opacity
    reproductiveStrategy: 1.0,          // Full opacity
    temperatureRegulation: 1.0,         // Full opacity
    behavior: 1.0,                      // Full opacity
    feedingBehavior: 1.0,               // Full opacity
    groupBehavior: 1.0,                 // Full opacity
    physicalCharacteristics: 1.0,       // Full opacity
    habitat: 1.0,                       // Full opacity
    distribution: 1.0                   // Full opacity
}

// Dash patterns for different tag categories (more subtle)
export const TAG_DASH_PATTERNS = {
    conservationStatus: "6,3",          // Medium dashes for conservation
    reproductiveStrategy: "4,2",        // Short dashes for reproduction
    temperatureRegulation: "8,4",       // Medium-long dashes for temperature
    behavior: "5,5",                    // Standard dashes for behavior
    feedingBehavior: "7,3",             // Medium dashes for feeding
    groupBehavior: "3,3",               // Dots for group behavior
    physicalCharacteristics: "2,2",     // Very short dashes for physical
    habitat: "5,5",                     // Standard dashes for habitat
    distribution: "10,5"                // Long dashes for distribution
}

// Helper function to get RGBA color with opacity
export const getColorWithOpacity = (hexColor: string, opacity: number): string => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Helper function to get taxonomic visual properties
export const getTaxonomicVisualProps = (level: string) => {
    return {
        color: getColorWithOpacity(TAXONOMIC_BASE_COLOR, TAXONOMIC_OPACITIES[level] || 1.0),
        thickness: TAXONOMIC_THICKNESS[level] || 2,
        opacity: TAXONOMIC_OPACITIES[level] || 1.0
    };
};

// Helper function to get tag visual properties
export const getTagVisualProps = (category: string): PathStyle => {
    return {
        strokeColor: getColorWithOpacity(TAG_CATEGORY_COLORS[category] || TAXONOMIC_BASE_COLOR, TAG_OPACITIES[category] || 1.0),
        strokeWidth: "1",
        dashPattern: TAG_DASH_PATTERNS[category] || "5,5"
    };
};