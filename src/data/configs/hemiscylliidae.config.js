import { chiloscylliumGriseum } from "../species/orectolobiformes/hemiscylliidae/chiloscyllium-griseum";
import { chiloscylliumHasseltii } from "../species/orectolobiformes/hemiscylliidae/chiloscyllium-hasseltii";
import { chiloscylliumIndicum } from "../species/orectolobiformes/hemiscylliidae/chiloscyllium-indicum";
import { chiloscylliumPlagiosum } from "../species/orectolobiformes/hemiscylliidae/chiloscyllium-plagiosum";
import { chiloscylliumPunctatum } from "../species/orectolobiformes/hemiscylliidae/chiloscyllium-punctatum";
import { hemiscylliumOcellatum } from "../species/orectolobiformes/hemiscylliidae/hemiscyllium-ocellatum";

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