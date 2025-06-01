import { chiloscylliumGriseum } from "../../species/sharks/orectolobiformes/hemiscylliidae/chiloscyllium-griseum";
import { chiloscylliumHasseltii } from "../../species/sharks/orectolobiformes/hemiscylliidae/chiloscyllium-hasseltii";
import { chiloscylliumIndicum } from "../../species/sharks/orectolobiformes/hemiscylliidae/chiloscyllium-indicum";
import { chiloscylliumPlagiosum } from "../../species/sharks/orectolobiformes/hemiscylliidae/chiloscyllium-plagiosum";
import { chiloscylliumPunctatum } from "../../species/sharks/orectolobiformes/hemiscylliidae/chiloscyllium-punctatum";
import { hemiscylliumOcellatum } from "../../species/sharks/orectolobiformes/hemiscylliidae/hemiscyllium-ocellatum";

export const hemiscylliidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        chiloscylliumPunctatum,
                        {
                            children: [
                                chiloscylliumIndicum,
                                chiloscylliumPlagiosum
                            ]
                        }
                    ]
                },
                hemiscylliumOcellatum
            ]
        },
        {
            children: [
                chiloscylliumGriseum,
                chiloscylliumHasseltii
            ]
        }
    ]
}