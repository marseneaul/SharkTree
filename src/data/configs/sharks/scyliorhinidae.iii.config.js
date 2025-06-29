import { scyliorhinusCanicula } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-canicula";
import { scyliorhinusCapensis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-capensis";
import { scyliorhinusRetifer } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-retifer";
import { scyliorhinusStellaris } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-stellaris";
import { cephaloscylliumAlbipinnum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-albipinnum";
import { cephaloscylliumHiscosellum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-hiscosellum";
import { cephaloscylliumLaticeps } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-laticeps";
import { cephaloscylliumUmbratile } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-umbratile";
import { cephaloscylliumVentriosum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-ventriosum";
import { cephaloscylliumVariegatum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-variegatum";
import { porodermaAfricanum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/poroderma-africanum";
import { porodermaPantherinum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-iii/poroderma-pantherinum";

export const scyliorhinidaeIIIConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        cephaloscylliumAlbipinnum,
                                        cephaloscylliumHiscosellum
                                    ]
                                },
                                cephaloscylliumUmbratile,
                                cephaloscylliumVariegatum
                            ]
                        },
                        cephaloscylliumLaticeps
                    ]
                },
                cephaloscylliumVentriosum
            ]
        },
        {
            children: [
                {
                    children: [
                        porodermaAfricanum,
                        porodermaPantherinum
                    ]
                },
                {
                    children: [
                        scyliorhinusCanicula,
                        {
                            children: [
                                scyliorhinusCapensis,
                                {
                                    children: [
                                        scyliorhinusRetifer,
                                        scyliorhinusStellaris
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}