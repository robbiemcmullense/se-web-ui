export class ButtonsComponent {
    constructor() {
        this.mode = 'checkbox';
        this.disabled = false;
        this.value = [];
    }
    buttonClickedHandler(event) {
        let buttonInfo = event.detail;
        let isChecked = this.value.indexOf(buttonInfo.value) > -1;
        if (this.mode == 'radio') {
            this.value = [];
            this.value = [...this.value, buttonInfo.value];
            let buttons = this.el.querySelectorAll('se-button');
            buttons.forEach((button) => {
                button.setActive(false);
            });
            buttonInfo.setActive(true);
        }
        else if (this.mode == 'checkbox' && !isChecked) {
            this.value = [...this.value, buttonInfo.value];
        }
        else {
            this.value.splice(this.value.indexOf(buttonInfo.value), 1);
        }
        this.change.emit(this.value);
    }
    render() {
        let buttons = this.el.querySelectorAll('se-button');
        buttons.forEach((button) => {
            button.setGrouped();
            if (this.disabled) {
                button.setDisabled(true);
            }
            if (this.color) {
                button.setColor(this.color);
            }
        });
        return (h("slot", null));
    }
    static get is() { return "se-buttons"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "mutable": true
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "clicked",
            "method": "buttonClickedHandler"
        }]; }
    static get style() { return "/**style-placeholder:se-buttons:**/"; }
}
