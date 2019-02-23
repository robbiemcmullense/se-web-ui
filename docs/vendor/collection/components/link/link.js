export class LabelComponent {
    constructor() {
        this.type = 'internal';
    }
    render() {
        return (h("a", { href: this.url, "data-disabled": this.disabled, class: this.type == 'external' ? 'external' : '', target: this.type == 'external' ? '_blank' : '' }, this.link));
    }
    static get is() { return "se-link"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "link": {
            "type": String,
            "attr": "link"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "/**style-placeholder:se-link:**/"; }
}
