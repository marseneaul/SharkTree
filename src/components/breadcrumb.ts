import { SPECIES_TYPE } from "../constants/enums";

export interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
}

export class BreadcrumbComponent {
    private container: HTMLElement;
    private items: BreadcrumbItem[] = [];

    constructor(container: HTMLElement) {
        this.container = container;
        this.render();
    }

    updateBreadcrumb(items: BreadcrumbItem[]) {
        this.items = items;
        this.render();
    }

    private render() {
        this.container.innerHTML = `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <ol class="breadcrumb-list">
                    ${this.items.map((item, index) => `
                        <li class="breadcrumb-item ${item.active ? 'active' : ''}">
                            ${item.href && !item.active 
                                ? `<a href="${item.href}" class="breadcrumb-link">${item.label}</a>`
                                : `<span class="breadcrumb-current">${item.label}</span>`
                            }
                        </li>
                    `).join('')}
                </ol>
            </nav>
        `;
    }

    static createBreadcrumbForSharkTree(
        speciesType: SPECIES_TYPE, 
        configName?: string, 
        selectedSpecies?: string
    ): BreadcrumbItem[] {
        const items: BreadcrumbItem[] = [
            { label: "Shark Tree", href: "/", active: !configName }
        ];

        if (configName) {
            const typeLabel = this.getSpeciesTypeLabel(speciesType);
            items.push({ 
                label: typeLabel, 
                href: `/?type=${speciesType}`, 
                active: !selectedSpecies 
            });

            const configLabel = this.getConfigLabel(configName);
            items.push({ 
                label: configLabel, 
                href: `/?type=${speciesType}&config=${configName}`, 
                active: !selectedSpecies 
            });

            if (selectedSpecies) {
                items.push({ 
                    label: selectedSpecies, 
                    active: true 
                });
            }
        }

        return items;
    }

    static createBreadcrumbForFossilTree(): BreadcrumbItem[] {
        return [
            { label: "Fossil Tree", active: true }
        ];
    }

    private static getSpeciesTypeLabel(speciesType: SPECIES_TYPE): string {
        switch (speciesType) {
            case SPECIES_TYPE.SHARKS:
                return "Sharks";
            case SPECIES_TYPE.RAYS:
                return "Rays";
            case SPECIES_TYPE.CHIMAERAS:
                return "Chimaeras";
            default:
                return "Unknown";
        }
    }

    private static getConfigLabel(configName: string): string {
        // Convert config names to more readable labels
        const configLabels: { [key: string]: string } = {
            'selachii': 'Selachii',
            'galeomorphii': 'Galeomorphii',
            'squalomorphii': 'Squalomorphii',
            'carcharhiniformes': 'Carcharhiniformes',
            'lamniformes': 'Lamniformes',
            'orectolobiformes': 'Orectolobiformes',
            'heterodontiformes': 'Heterodontiformes',
            'squatiniformes': 'Squatiniformes',
            'hexanchiformes': 'Hexanchiformes',
            'pristiophoriformes': 'Pristiophoriformes',
            'squaliformes': 'Squaliformes',
            'carcharhinidae': 'Carcharhinidae',
            'lamnidae': 'Lamnidae',
            'scyliorhinidaeI': 'Scyliorhinidae I',
            'scyliorhinidaeII': 'Scyliorhinidae II',
            'scyliorhinidaeIII': 'Scyliorhinidae III',
            'dalatiidae': 'Dalatiidae',
            'etmopteridae': 'Etmopteridae',
            'squalidae': 'Squalidae',
            'triakidae': 'Triakidae',
            'batomorphi': 'Batomorphi',
            'rajiformes': 'Rajiformes',
            'rhinopristiformes': 'Rhinopristiformes',
            'torpediniformes': 'Torpediniformes',
            'myliobatiformes': 'Myliobatiformes',
            'arhynchobatidae': 'Arhynchobatidae',
            'dasyatidae': 'Dasyatidae',
            'gymnuridae': 'Gymnuridae',
            'mobulidae': 'Mobulidae',
            'myliobatidae': 'Myliobatidae',
            'rajidae': 'Rajidae',
            'urotrygonidae': 'Urotrygonidae',
            'urolophus': 'Urolophus',
            'holocephali': 'Holocephali',
            'callorhinchidae': 'Callorhinchidae',
            'chimaeridae': 'Chimaeridae',
            'rhinochimaeridae': 'Rhinochimaeridae'
        };

        return configLabels[configName] || configName;
    }
}
