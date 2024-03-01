import { dalatiasLicha } from "../species/squaliformes/dalatiidae/dalatias-licha";
import { isistiusBrasiliensis } from "../species/squaliformes/dalatiidae/isistius-brasiliensis";
import { euprotomicrusBispinatus } from "../species/squaliformes/dalatiidae/euprotomicrus-bispinatus";
import { squaliolusAliae } from "../species/squaliformes/dalatiidae/squaliolus-aliae";
import { squaliolusLaticaudus } from "../species/squaliformes/dalatiidae/squaliolus-laticaudus";

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
