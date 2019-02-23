export class ChipComponent {
    constructor() {
        this.canClose = true;
    }
    closeChip() {
        this.close.emit(this.value);
    }
    hostData() {
        return {
            'class': this.color
        };
    }
    render() {
        return [
            h("div", { class: "value" }, this.value),
            this.canClose && h("div", { class: "close se-icon", onClick: () => this.closeChip() }, "action_delete_cross")
        ];
    }
    static get is() { return "se-chip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "canClose": {
            "type": Boolean,
            "attr": "can-close"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "close",
            "method": "close",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:se-chip:**/"; }
}
