import { rhinopteraBonasus } from "../../species/rays/myliobatiformes/rhinopteridae/rhinoptera-bonasus";
import { rhinopteraJavanica } from "../../species/rays/myliobatiformes/rhinopteridae/rhinoptera-javanica";
import { rhinopteraJayakari } from "../../species/rays/myliobatiformes/rhinopteridae/rhinoptera-jayakari";
import { rhinopteraNeglecta } from "../../species/rays/myliobatiformes/rhinopteridae/rhinoptera-neglecta";
import { rhinopteraSteindachneri } from "../../species/rays/myliobatiformes/rhinopteridae/rhinoptera-steindachneri";

export const rhinopteridaeConfig = {
    children: [
        rhinopteraBonasus,
        {
            children: [
                rhinopteraSteindachneri,
                rhinopteraJayakari
            ]
        },
        {
            children: [
                rhinopteraJavanica,
                rhinopteraNeglecta
            ]
        }
    ]
}