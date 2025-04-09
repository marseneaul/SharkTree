export interface SharkTreeNodeConfig {
    children: (SharkTreeNodeConfig | SharkConfig)[];
}

export interface SharkConfig {
    commonName: string
    alternativeNames: string[]
    binomialName: string

    imageUrl?: string

    domain:	string
    kingdom: string
    phylum:	string
    class: string
    subclass?: string
    subdivision?: string
    superorder?: string
    order: string
    family: string
    genus: string
    species: string
    tags?: string[]
}
