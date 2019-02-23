export class LabelComponent {
    render() {
        return (h("label", { class: "se-label" },
            this.value,
            this.required ? h("span", null, "*") : ''));
    }
    static get is() { return "se-label"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:se-label:**/"; }
}
