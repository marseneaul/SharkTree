export class StringUtils {
    static capitalizeFirstLetter(str: string): string {
        if (typeof str !== "string" || str.length === 0) {
            return str; // Return unchanged if not a string or empty
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}