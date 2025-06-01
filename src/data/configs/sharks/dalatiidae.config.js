import { dalatiasLicha } from "../../species/sharks/squaliformes/dalatiidae/dalatias-licha";
import { isistiusBrasiliensis } from "../../species/sharks/squaliformes/dalatiidae/isistius-brasiliensis";
import { euprotomicrusBispinatus } from "../../species/sharks/squaliformes/dalatiidae/euprotomicrus-bispinatus";
import { squaliolusAliae } from "../../species/sharks/squaliformes/dalatiidae/squaliolus-aliae";
import { squaliolusLaticaudus } from "../../species/sharks/squaliformes/dalatiidae/squaliolus-laticaudus";

export const dalatiidaeConfig = {
    children: [
        {
            children: [
                dalatiasLicha,
                isistiusBrasiliensis
            ]
        },
        {
            children: [
                {
                    children: [
                        euprotomicrusBispinatus,
                        squaliolusAliae
                    ]
                },
                squaliolusLaticaudus
            ]
        }
    ]
}
