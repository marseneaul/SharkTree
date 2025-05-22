import { rhinopteraBonasus } from "../species/myliobatiformes/rhinopteridae/rhinoptera-bonasus";
import { rhinopteraJavanica } from "../species/myliobatiformes/rhinopteridae/rhinoptera-javanica";
import { rhinopteraJayakari } from "../species/myliobatiformes/rhinopteridae/rhinoptera-jayakari";
import { rhinopteraNeglecta } from "../species/myliobatiformes/rhinopteridae/rhinoptera-neglecta";
import { rhinopteraSteindachneri } from "../species/myliobatiformes/rhinopteridae/rhinoptera-steindachneri";

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