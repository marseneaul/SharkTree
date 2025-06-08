import { chimaeraFulva } from "../../species/chimaeras/chimaeridae/chimaera-fulva";
import { chimaeraMonstrosa } from "../../species/chimaeras/chimaeridae/chimaera-monstrosa";
import { chimaeraPhantasma } from "../../species/chimaeras/chimaeridae/chimaera-phantasma";
import { hydrolagusAfricanus } from "../../species/chimaeras/chimaeridae/hydrolagus-africanus";
import { hydrolagusAlberti } from "../../species/chimaeras/chimaeridae/hydrolagus-alberti";
import { hydrolagusColliei } from "../../species/chimaeras/chimaeridae/hydrolagus-colliei";
import { hydrolagusLemures } from "../../species/chimaeras/chimaeridae/hydrolagus-lemures";
import { hydrolagusNovaezealandiae } from "../../species/chimaeras/chimaeridae/hydrolagus-novaezealandiae";

export const chimaeiridaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        hydrolagusLemures,
                        chimaeraPhantasma
                    ]
                },
                {
                    children: [
                        hydrolagusColliei,
                        {
                            children: [
                                hydrolagusAfricanus,
                                hydrolagusAlberti
                            ]
                        }
                    ]
                }
            ]
        },
        {
            children: [
                chimaeraFulva,
                {
                    children: [
                        hydrolagusNovaezealandiae,
                        chimaeraMonstrosa
                    ]
                }
            ]
        }
    ]
}