export class TaxonomyDiagram {
    private container: HTMLElement;
    private taxonomyData: {
        domain: string;
        kingdom: string;
        phylum: string;
        class: string;
        order: string;
        family: string;
        genus: string;
        species: string;
    };

    constructor(container: HTMLElement, taxonomyData: any) {
        this.container = container;
        this.taxonomyData = taxonomyData;
        this.render();
    }

    private render(): void {
        const taxonomyLevels = [
            { level: 'Domain', value: this.taxonomyData.domain, icon: '🌍', color: '#00688B', bgColor: '#E0F7FA' },
            { level: 'Kingdom', value: this.taxonomyData.kingdom, icon: '👑', color: '#43AA8B', bgColor: '#E8F5E8' },
            { level: 'Phylum', value: this.taxonomyData.phylum, icon: '🔬', color: '#F9C74F', bgColor: '#FEF9E7' },
            { level: 'Class', value: this.taxonomyData.class, icon: '📚', color: '#F94144', bgColor: '#FEE8E8' },
            { level: 'Order', value: this.taxonomyData.order, icon: '📋', color: '#F3722C', bgColor: '#FEF3E8' },
            { level: 'Family', value: this.taxonomyData.family, icon: '👨‍👩‍👧‍👦', color: '#8B5CF6', bgColor: '#F3F0FF' },
            { level: 'Genus', value: this.taxonomyData.genus, icon: '🧬', color: '#06B6D4', bgColor: '#E0F7FA' },
            { level: 'Species', value: this.taxonomyData.species, icon: '🐟', color: '#10B981', bgColor: '#E8F5E8' }
        ];

        this.container.innerHTML = `
            <div class="taxonomy-diagram">
                <div class="taxonomy-header">
                    <div class="taxonomy-title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3>Taxonomic Classification</h3>
                    </div>
                    <p class="taxonomy-subtitle">Scientific hierarchy from broadest to most specific</p>
                </div>
                <div class="taxonomy-hierarchy">
                    ${taxonomyLevels.map((item, index) => `
                        <div class="taxonomy-level" style="--level-index: ${index}; --level-color: ${item.color}; --level-bg: ${item.bgColor}">
                            <div class="taxonomy-level-card">
                                <div class="taxonomy-level-icon">${item.icon}</div>
                                <div class="taxonomy-level-content">
                                    <div class="taxonomy-level-label">${item.level}</div>
                                    <div class="taxonomy-level-value">${item.value}</div>
                                </div>
                                <div class="taxonomy-level-number">${index + 1}</div>
                            </div>
                            ${index < taxonomyLevels.length - 1 ? `
                                <div class="taxonomy-connector">
                                    <div class="connector-line"></div>
                                    <div class="connector-arrow">↓</div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    public updateTaxonomy(newTaxonomyData: any): void {
        this.taxonomyData = newTaxonomyData;
        this.render();
    }
}
