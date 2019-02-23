import { h } from '../se-components.core.js';

class LabelComponent {
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
    static get style() { return ".sc-se-label-h   label.sc-se-label{font-size:12px;line-height:14px;padding-right:7px}.sc-se-label-h   label.sc-se-label   span.sc-se-label{font-size:14px;color:#dc0a0a;color:var(--error,#dc0a0a);padding-left:3px}"; }
}

export { LabelComponent as SeLabel };
