export class ButtonComponent {
    constructor() {
        this.mode = 'flat';
        this.disabled = false;
    }
    setActive(val) {
        this.selected = val;
    }
    setColor(val) {
        this.color = val;
        this.el.classList.add(this.color);
    }
    setDisabled(val) {
        this.disabled = val;
        this.el.classList.add('disabled');
    }
    setGrouped() {
        this.el.classList.add('grouped');
    }
    emitEvent() {
        if (!this.disabled) {
            this.selected = !this.selected;
            this.clicked.emit(this.el);
        }
    }
    hostData() {
        return {
            'class': { 'active': this.selected }
        };
    }
    render() {
        if (this.icon) {
            this.el.classList.add('hasIcon');
        }
        return (h("button", { "data-mode": this.mode, color: this.color, disabled: this.disabled, onClick: () => this.emitEvent() },
            this.icon ? h("i", { class: "se-icon" }, this.icon) : '',
            h("slot", null)));
    }
    static get is() { return "se-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "selected": {
            "state": true
        },
        "setActive": {
            "method": true
        },
        "setColor": {
            "method": true
        },
        "setDisabled": {
            "method": true
        },
        "setGrouped": {
            "method": true
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "clicked",
            "method": "clicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:se-button:**/"; }
}
