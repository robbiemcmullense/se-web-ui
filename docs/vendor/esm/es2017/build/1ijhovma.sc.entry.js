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
    static get style() { return ".sc-se-link-h   a.sc-se-link{font-size:14px;line-height:17px;color:#219bfd;color:var(--accent,#219bfd);text-decoration:none}.sc-se-link-h   a.external.sc-se-link{text-decoration:underline}.sc-se-link-h   a.external.sc-se-link:before{content:\">\"}.sc-se-link-h   a[data-disabled].sc-se-link{pointer-events:none;color:#ededed;color:var(--,#ededed)}"; }
}

export { LabelComponent as SeLink };
