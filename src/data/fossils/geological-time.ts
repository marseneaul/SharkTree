import { GEOCHRONOLOGIC_UNIT } from "../../constants/enums";

export const geologicalTimeConfig = {
    children: [
        {
            geologicalName: "Phanerozoic",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeRange: "538.8(Ma)-0(Ma)",
            children: [
                {
                    geologicalName: "Cenozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeRange: "66(Ma)-0(Ma)",
                    children: [
                        {
                            geologicalName: "Quaternary",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "2.58(Ma)-0(Ma)",
                            children: [
                                {
                                    geologicalName: "Holocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeRange: "11.7(ka)-0(ka)"
                                },
                                {
                                    geologicalName: "Plesitocene",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeRange: "2.58(Ma)-11.7(ka)"
                                }
                            ]
                        },
                        {
                            geologicalName: "Neogene",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "20.45(Ma)-23.04(Ma)",
                        },
                        {
                            geologicalName: "Paleogene",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "66(Ma)-23.04(Ma)",
                        },
                    ]
                },
                {
                    geologicalName: "Mesozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeRange: "251.902(Ma)-66(Ma)",
                    children: [
                        {
                            geologicalName: "Cretaceous",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "143.1(Ma)-66(Ma)",
                        },
                        {
                            geologicalName: "Jurassic",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "201.4(Ma)-143.1(Ma)",
                        },
                        {
                            geologicalName: "Triassic",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "251.902(Ma)-201.4(Ma)",
                        },
                    ]
                },
                {
                    geologicalName: "Paleozoic",
                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.ERA,
                    timeRange: "538.8(Ma)-251.902(Ma)",
                    children: [
                        {
                            geologicalName: "Permian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "298.9(Ma)-251.902(Ma)",
                        },
                        {
                            geologicalName: "Carboniferous",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "358.9(Ma)-298.9(Ma)",
                            children: [
                                {
                                    geologicalName: "Pennsylvanian",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.SUBPERIOD,
                                    timeRange: "323.2(Ma)-298.9(Ma)",
                                },
                                {
                                    geologicalName: "Mississippian",
                                    geochronologicUnit: GEOCHRONOLOGIC_UNIT.SUBPERIOD,
                                    timeRange: "358.9(Ma)-323.2(Ma)",
                                },
                            ]
                        },
                        {
                            geologicalName: "Devonian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "419.2(Ma)-358.9(Ma)",
                        },
                        {
                            geologicalName: "Silurian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "443.1(Ma)-419.2(Ma)",
                        },
                        {
                            geologicalName: "Ordovician",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "486.85(Ma)-443.1(Ma)",
                        },
                        {
                            geologicalName: "Cambrian",
                            geochronologicUnit: GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeRange: "538.8(Ma)-486.85(Ma)",
                        }
                    ]
                }
            ]
        },
        {
            geologicalName: "Proterozoic",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeRange: "2.5(Ga)-538.8(Ma)",
        },
        {
            geologicalName: "Archaen",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeRange: "4.031(Ga)-2.5(Ga)",
        },
        {
            geologicalName: "Hadean",
            geochronologicUnit: GEOCHRONOLOGIC_UNIT.EON,
            timeRange: "4.567(Ga)-4.031(Ga)",
        }
    ]
}