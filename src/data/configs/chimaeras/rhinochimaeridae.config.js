import { harriottaRaleighana } from "../../species/chimaeras/rhinochimaeridae/harriotta-raleighana";
import { neoharriottaPinnata } from "../../species/chimaeras/rhinochimaeridae/neoharriotta-pinnata";
import { rhinochimaeraPacifica } from "../../species/chimaeras/rhinochimaeridae/rhinochimaera-pacifica";

export const rhinochimaeridaeConfig = {
    children: [
        neoharriottaPinnata,
        {
            children: [
                rhinochimaeraPacifica,
                harriottaRaleighana
            ]
        }
    ]
}