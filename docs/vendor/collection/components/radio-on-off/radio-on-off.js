export class RadioOnOffComponent {
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
    static get style() { return "/**style-placeholder:se-radio-on-off:**/"; }
}
