import { h } from '../se-components.core.js';

class RadioOnOffComponent {
    constructor() {
        this.mode = 'default';
        this.textOn = 'ON';
        this.textOff = 'OFF';
        this.disabled = false;
    }
    render() {
        return (h("div", { "data-mode": this.mode, class: 'se-radio-on-off' + (this.disabled ? ' disabled' : '') },
            h("button", { class: 'active' + (this.selected ? ' selected' : ''), onClick: () => this.toggleActive() }, this.textOn),
            h("button", { class: 'inactive' + (!this.selected ? ' selected' : ''), onClick: () => this.toggleActive() }, this.textOff)));
    }
    toggleActive() {
        if (!this.disabled) {
            this.selected = !this.selected;
            this.change.emit({ selected: this.selected });
        }
    }
    static get is() { return "se-radio-on-off"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "mutable": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "selected": {
            "state": true
        },
        "textOff": {
            "type": String,
            "attr": "text-off"
        },
        "textOn": {
            "type": String,
            "attr": "text-on"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "button{color:#333;color:var(--,#333);padding:4px 16px;border:none;outline:none;font-size:11px;line-height:13px;font-weight:300;cursor:pointer}button.active.selected{color:#fff;color:var(--,#fff);background-color:#3dcd58;background-color:var(--primary,#3dcd58)}button.inactive.selected{color:#fff;color:var(--,#fff);background-color:#dc0a0a;background-color:var(--error,#dc0a0a)}.se-radio-on-off button:first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}.se-radio-on-off button:last-child{border-top-right-radius:2px;border-bottom-right-radius:2px}.se-radio-on-off.disabled{opacity:.26}.se-radio-on-off.disabled button{cursor:default}.se-radio-on-off[data-mode=header] button{height:16px}"; }
}

export { RadioOnOffComponent as SeRadioOnOff };
