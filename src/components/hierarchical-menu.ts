export interface HierarchicalOption {
    value: string;
    label: string;
    level: number;
    children?: HierarchicalOption[];
    disabled?: boolean;
}

export class HierarchicalMenu {
    private container: HTMLElement;
    private options: HierarchicalOption[] = [];
    private selectedValue: string = '';
    private onSelectionChange: (value: string, level: string) => void;

    constructor(container: HTMLElement, onSelectionChange: (value: string, level: string) => void) {
        this.container = container;
        this.onSelectionChange = onSelectionChange;
        this.setupEventListeners();
    }

    public setOptions(options: HierarchicalOption[]): void {
        this.options = options;
        this.render();
    }

    public getSelectedValue(): string {
        return this.selectedValue;
    }

    public setSelectedValue(value: string): void {
        this.selectedValue = value;
        this.updateDisplay();
    }

    public clearSelection(): void {
        this.selectedValue = '';
        this.updateDisplay();
    }

    private render(): void {
        this.container.innerHTML = `
            <div class="hierarchical-menu">
                <div class="hierarchical-menu-trigger">
                    <span class="hierarchical-menu-label">Select Taxonomic Level</span>
                    <span class="hierarchical-menu-arrow">▼</span>
                </div>
                <div class="hierarchical-menu-dropdown">
                    ${this.renderOptions(this.options)}
                </div>
            </div>
        `;
    }

    private renderOptions(options: HierarchicalOption[]): string {
        return options.map(option => {
            const indent = '  '.repeat(option.level);
            const hasChildren = option.children && option.children.length > 0;
            const isSelected = this.selectedValue === option.value;
            
            let html = `
                <div class="hierarchical-option ${isSelected ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}" 
                     data-value="${option.value}" 
                     data-level="${option.level}"
                     style="padding-left: ${option.level * 20}px">
                    <span class="option-label">${option.label}</span>
                    ${hasChildren ? '<span class="option-arrow">▶</span>' : ''}
                </div>
            `;

            if (hasChildren) {
                html += `<div class="hierarchical-children" style="display: none;">`;
                html += this.renderOptions(option.children!);
                html += `</div>`;
            }

            return html;
        }).join('');
    }

    private setupEventListeners(): void {
        this.container.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const trigger = target.closest('.hierarchical-menu-trigger');
            const option = target.closest('.hierarchical-option') as HTMLElement;
            
            // Handle trigger click to open/close dropdown
            if (trigger) {
                e.stopPropagation();
                const dropdown = this.container.querySelector('.hierarchical-menu-dropdown') as HTMLElement;
                if (dropdown) {
                    const isOpen = dropdown.style.display === 'block';
                    dropdown.style.display = isOpen ? 'none' : 'block';
                }
                return;
            }
            
            if (option && !option.classList.contains('disabled')) {
                const value = option.dataset.value;
                const level = option.dataset.level;
                
                if (value) {
                    this.selectedValue = value;
                    this.updateDisplay();
                    this.onSelectionChange(value, level || '0');
                    this.closeDropdown();
                }
            }

            // Handle expand/collapse for parent options
            const arrow = target.closest('.option-arrow');
            if (arrow) {
                e.stopPropagation();
                const option = arrow.closest('.hierarchical-option') as HTMLElement;
                const children = option.nextElementSibling as HTMLElement;
                
                if (children && children.classList.contains('hierarchical-children')) {
                    const isExpanded = children.style.display !== 'none';
                    children.style.display = isExpanded ? 'none' : 'block';
                    arrow.textContent = isExpanded ? '▶' : '▼';
                }
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target as Node)) {
                this.closeDropdown();
            }
        });
    }

    private updateDisplay(): void {
        const trigger = this.container.querySelector('.hierarchical-menu-trigger .hierarchical-menu-label') as HTMLElement;
        if (trigger) {
            const selectedOption = this.findOptionByValue(this.selectedValue);
            trigger.textContent = selectedOption ? selectedOption.label : 'Select Taxonomic Level';
        }

        // Update selected state in dropdown
        this.container.querySelectorAll('.hierarchical-option').forEach(option => {
            option.classList.remove('selected');
            if (option.getAttribute('data-value') === this.selectedValue) {
                option.classList.add('selected');
            }
        });
    }

    private findOptionByValue(value: string): HierarchicalOption | null {
        const findInOptions = (options: HierarchicalOption[]): HierarchicalOption | null => {
            for (const option of options) {
                if (option.value === value) {
                    return option;
                }
                if (option.children) {
                    const found = findInOptions(option.children);
                    if (found) return found;
                }
            }
            return null;
        };
        return findInOptions(this.options);
    }

    private closeDropdown(): void {
        const dropdown = this.container.querySelector('.hierarchical-menu-dropdown') as HTMLElement;
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }

    public openDropdown(): void {
        const dropdown = this.container.querySelector('.hierarchical-menu-dropdown') as HTMLElement;
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    }
}