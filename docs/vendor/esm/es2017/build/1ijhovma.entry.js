import { h } from '../se-components.core.js';

class LabelComponent {
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
    static get style() { return ":host a{font-size:14px;line-height:17px;color:#219bfd;color:var(--accent,#219bfd);text-decoration:none}:host a.external{text-decoration:underline}:host a.external:before{content:\">\"}:host a[data-disabled]{pointer-events:none;color:#ededed;color:var(--,#ededed)}"; }
}

export { LabelComponent as SeLink };
