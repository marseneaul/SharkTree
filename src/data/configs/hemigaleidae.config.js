import { hemigaleusAustraliensis } from "../species/carcharhiniformes/hemigaleidae/hemigaleus-australiensis";
import { hemigaleusMicrostoma } from "../species/carcharhiniformes/hemigaleidae/hemigaleus-microstoma";
import { hemipristisElongata } from "../species/carcharhiniformes/hemigaleidae/hemipristis-elongata";
import { paragaleusPectoralis } from "../species/carcharhiniformes/hemigaleidae/paragaleus-pectoralis";
import { paragaleusRandalli } from "../species/carcharhiniformes/hemigaleidae/paragaleus-randalli";

export const hemigaleidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        hemigaleusAustraliensis,
                        hemigaleusMicrostoma
                    ]
                },
                {
                    children: [
                        paragaleusPectoralis,
                        paragaleusRandalli
                    ]
                }
            ]
        },
        hemipristisElongata
    ]
}