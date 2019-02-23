export class CheckboxComponent {
    constructor() {
        this.color = 'primary';
        this.disabled = false;
    }
    emitEvent() {
        this.checked = !this.checked;
        let checkboxObject = { value: this.value, selected: this.checked };
        this.change.emit(checkboxObject);
    }
    render() {
        return (h("label", { class: "checkbox-container", "data-disabled": this.disabled },
            h("slot", null),
            h("input", { type: "checkbox", disabled: this.disabled }),
            h("span", { class: "checkmark", "data-color": this.color, onClick: () => this.emitEvent() })));
    }
    static get is() { return "se-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "checked": {
            "state": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:se-checkbox:**/"; }
}
