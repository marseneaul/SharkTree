import { GEOCHRONOLOGIC_UNIT } from "../constants/enums";

export interface TimeConfig {
    children?: TimeConfig[];
    geologicalName?: string;
    geochronologicUnit?: GEOCHRONOLOGIC_UNIT;
    timeRange?: string;
}