export class SharkPopupEvent extends Event {
    customProperty: string;

    constructor(customProperty: string) {
        super("shark-popup");

        this.customProperty = customProperty;
    }
}