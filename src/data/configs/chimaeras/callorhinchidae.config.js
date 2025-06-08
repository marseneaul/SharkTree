import { callorhinchusCallorynchus } from "../../species/chimaeras/callorhinchidae/callorhinchus-callorynchus";
import { callorhinchusCapensis } from "../../species/chimaeras/callorhinchidae/callorhinchus-capensis";
import { callorhinchusMilii } from "../../species/chimaeras/callorhinchidae/callorhinchus-milii";

export const callorhinchidaeConfig = {
    children: [
        callorhinchusCapensis,
        {
            children: [
                callorhinchusMilii,
                callorhinchusCallorynchus
            ]
        }
    ]
}