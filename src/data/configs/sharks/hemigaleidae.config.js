import { hemigaleusAustraliensis } from "../../species/sharks/carcharhiniformes/hemigaleidae/hemigaleus-australiensis";
import { hemigaleusMicrostoma } from "../../species/sharks/carcharhiniformes/hemigaleidae/hemigaleus-microstoma";
import { hemipristisElongata } from "../../species/sharks/carcharhiniformes/hemigaleidae/hemipristis-elongata";
import { paragaleusPectoralis } from "../../species/sharks/carcharhiniformes/hemigaleidae/paragaleus-pectoralis";
import { paragaleusRandalli } from "../../species/sharks/carcharhiniformes/hemigaleidae/paragaleus-randalli";

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