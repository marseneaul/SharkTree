import { CONSERVATION_STATUS } from "../constants/enums";

/**
 * IUCN Red List conservation status graphics
 * These are SVG-based graphics that match the official IUCN Red List categories
 */
export const IUCN_GRAPHICS = {
    [CONSERVATION_STATUS.EX]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#000000"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">EX</text>
        </svg>`,
        color: "#000000",
        description: "Extinct"
    },
    [CONSERVATION_STATUS.EW]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#7C1E3F"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="8" font-weight="bold">EW</text>
        </svg>`,
        color: "#7C1E3F",
        description: "Extinct in the Wild"
    },
    [CONSERVATION_STATUS.CR]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#D73027"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">CR</text>
        </svg>`,
        color: "#D73027",
        description: "Critically Endangered"
    },
    [CONSERVATION_STATUS.EN]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#E97E32"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">EN</text>
        </svg>`,
        color: "#E97E32",
        description: "Endangered"
    },
    [CONSERVATION_STATUS.VU]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F6D55C"/>
            <text x="12" y="16" text-anchor="middle" fill="black" font-family="Arial, sans-serif" font-size="10" font-weight="bold">VU</text>
        </svg>`,
        color: "#F6D55C",
        description: "Vulnerable"
    },
    [CONSERVATION_STATUS.NT]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#4CAF50"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">NT</text>
        </svg>`,
        color: "#4CAF50",
        description: "Near Threatened"
    },
    [CONSERVATION_STATUS.CD]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#4CAF50"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="8" font-weight="bold">CD</text>
        </svg>`,
        color: "#4CAF50",
        description: "Conservation Dependent"
    },
    [CONSERVATION_STATUS.LC]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#4CAF50"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">LC</text>
        </svg>`,
        color: "#4CAF50",
        description: "Least Concern"
    },
    [CONSERVATION_STATUS.DD]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#9E9E9E"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">DD</text>
        </svg>`,
        color: "#9E9E9E",
        description: "Data Deficient"
    },
    [CONSERVATION_STATUS.NE]: {
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#9E9E9E"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="8" font-weight="bold">NE</text>
        </svg>`,
        color: "#9E9E9E",
        description: "Not Evaluated"
    }
};

/**
 * Get IUCN graphic for a conservation status
 */
export function getIUCNGraphic(conservationStatus: CONSERVATION_STATUS): string {
    return IUCN_GRAPHICS[conservationStatus]?.svg || "";
}

/**
 * Get IUCN color for a conservation status
 */
export function getIUCNColor(conservationStatus: CONSERVATION_STATUS): string {
    return IUCN_GRAPHICS[conservationStatus]?.color || "#9E9E9E";
}

/**
 * Get IUCN description for a conservation status
 */
export function getIUCNDescription(conservationStatus: CONSERVATION_STATUS): string {
    return IUCN_GRAPHICS[conservationStatus]?.description || "Unknown";
}
