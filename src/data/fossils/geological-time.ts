import { GEOCHRONOLOGIC_UNIT } from "../../constants/enums";

export const geologicalTimeConfig = {
    children: [
        {
            geologicalName: "Phanerozoic",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "538.8(Ma)-0(Ma)",
            color: "rgb(102, 192, 146)",
            children: [
                {
                    geologicalName: "Cenozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "66(Ma)-0(Ma)",
                    color: "rgb(242, 249, 29)",
                    children: [
                        {
                            geologicalName: "Quaternary",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2.58(Ma)-0(Ma)",
                            color: "rgb(249, 249, 127)",
                            children: [
                                {
                                    geologicalName: "Holocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "0.0117(Ma)-0(Ma)",
                                    color: "rgb(254, 242, 224)",
                                },
                                {
                                    geologicalName: "Pleistocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "2.58(Ma)-0.0117(Ma)",
                                    color: "rgb(255, 242, 174)",
                                }
                            ]
                        },
                        {
                            geologicalName: "Neogene",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "23.03(Ma)-2.58(Ma)",
                            color: "rgb(255, 230, 25)",
                            children: [
                                {
                                    geologicalName: "Pliocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "5.333(Ma)-2.58(Ma)",
                                    color: "rgb(255, 255, 153)",
                                },
                                {
                                    geologicalName: "Miocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "23.03(Ma)-5.333(Ma)",
                                    color: "rgb(255, 255, 0)",
                                }
                            ]
                        },
                        {
                            geologicalName: "Paleogene",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "66(Ma)-23.03(Ma)",
                            color: "rgb(253, 154, 82)",
                            children: [
                                {
                                    geologicalName: "Oligocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "33.9(Ma)-23.03(Ma)",
                                    color: "rgb(253, 192, 122)",
                                },
                                {
                                    geologicalName: "Eocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "56(Ma)-33.9(Ma)",
                                    color: "rgb(253, 180, 108)",
                                },
                                {
                                    geologicalName: "Paleocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "66(Ma)-56(Ma)",
                                    color: "rgb(253, 167, 95)",
                                }
                            ]
                        },
                    ]
                },
                {
                    geologicalName: "Mesozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "251.902(Ma)-66(Ma)",
                    color: "rgb(103, 197, 202)",
                    children: [
                        {
                            geologicalName: "Cretaceous",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "145(Ma)-66(Ma)",
                            color: "rgb(127, 198, 78)",
                        },
                        {
                            geologicalName: "Jurassic",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "201.4(Ma)-145(Ma)",
                            color: "rgb(52, 178, 201)",
                        },
                        {
                            geologicalName: "Triassic",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "251.902(Ma)-201.4(Ma)",
                            color: "rgb(129, 43, 146)",
                        },
                    ]
                },
                {
                    geologicalName: "Paleozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "538.8(Ma)-251.902(Ma)",
                    color: "rgb(116, 198, 156)",
                    children: [
                        {
                            geologicalName: "Permian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "298.9(Ma)-251.902(Ma)",
                            color: "rgb(240, 4, 127)",
                        },
                        {
                            geologicalName: "Carboniferous",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "358.9(Ma)-298.9(Ma)",
                            color: "rgb(103, 165, 153)",
                            children: [
                                {
                                    geologicalName: "Pennsylvanian",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.SUBPERIOD,
                                    timeInterval: "323.2(Ma)-298.9(Ma)",
                                    color: "rgb(153, 179, 153)",
                                },
                                {
                                    geologicalName: "Mississippian",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.SUBPERIOD,
                                    timeInterval: "358.9(Ma)-323.2(Ma)",
                                    color: "rgb(179, 191, 165)",
                                },
                            ]
                        },
                        {
                            geologicalName: "Devonian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "419.2(Ma)-358.9(Ma)",
                            color: "rgb(203, 140, 55)",
                        },
                        {
                            geologicalName: "Silurian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "443.8(Ma)-419.2(Ma)",
                            color: "rgb(179, 225, 182)",
                        },
                        {
                            geologicalName: "Ordovician",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "485.4(Ma)-443.8(Ma)",
                            color: "rgb(0, 146, 112)",
                        },
                        {
                            geologicalName: "Cambrian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "538.8(Ma)-485.4(Ma)",
                            color: "rgb(127, 160, 86)",
                        }
                    ]
                }
            ]
        },
        {
            geologicalName: "Proterozoic",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "2500(Ma)-538.8(Ma)",
            color: "rgb(247, 6, 167)",
            children: [
                {
                    geologicalName: "Neoproterozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "1000(Ma)-538.8(Ma)",
                    color: "rgb(240, 5, 121)",
                    children: [
                        {
                            geologicalName: "Ediacaran",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "635(Ma)-538.8(Ma)",
                            color: "rgb(254, 217, 106)",
                        },
                        {
                            geologicalName: "Cryogenian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "720(Ma)-635(Ma)",
                            color: "rgb(254, 204, 92)",
                        },
                        {
                            geologicalName: "Tonian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1000(Ma)-720(Ma)",
                            color: "rgb(254, 191, 78)",
                        }
                    ]
                },
                {
                    geologicalName: "Mesoproterozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "1600(Ma)-1000(Ma)",
                    color: "rgb(240, 65, 149)",
                    children: [
                        {
                            geologicalName: "Stenian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1200(Ma)-1000(Ma)",
                            color: "rgb(248, 129, 184)",
                        },
                        {
                            geologicalName: "Ectasian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1400(Ma)-1200(Ma)",
                            color: "rgb(248, 116, 170)",
                        },
                        {
                            geologicalName: "Calymmian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1600(Ma)-1400(Ma)",
                            color: "rgb(248, 103, 156)",
                        }
                    ]
                },
                {
                    geologicalName: "Paleoproterozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "2500(Ma)-1600(Ma)",
                    color: "rgb(247, 52, 136)",
                    children: [
                        {
                            geologicalName: "Statherian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1800(Ma)-1600(Ma)",
                            color: "rgb(254, 180, 123)",
                        },
                        {
                            geologicalName: "Orosirian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2050(Ma)-1800(Ma)",
                            color: "rgb(254, 167, 109)",
                        },
                        {
                            geologicalName: "Rhyacian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2300(Ma)-2050(Ma)",
                            color: "rgb(254, 154, 95)",
                        },
                        {
                            geologicalName: "Siderian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2500(Ma)-2300(Ma)",
                            color: "rgb(254, 141, 81)",
                        }
                    ]
                }
            ]
        },
        {
            geologicalName: "Archean",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "4031(Ma)-2500(Ma)",
            color: "rgb(240, 5, 121)",
            children: [
                {
                    geologicalName: "Neoarchean",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "2800(Ma)-2500(Ma)",
                    color: "rgb(249, 66, 158)",
                },
                {
                    geologicalName: "Mesoarchean",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "3200(Ma)-2800(Ma)",
                    color: "rgb(249, 53, 144)",
                },
                {
                    geologicalName: "Paleoarchean",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "3600(Ma)-3200(Ma)",
                    color: "rgb(249, 40, 130)",
                },
                {
                    geologicalName: "Eoarchean",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "4031(Ma)-3600(Ma)",
                    color: "rgb(249, 27, 116)",
                }
            ]
        },
        {
            geologicalName: "Hadean",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "4567(Ma)-4031(Ma)",
            color: "rgb(231, 7, 71)",
        }
    ]
};