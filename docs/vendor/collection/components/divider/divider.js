export class DividerComponent {
    constructor() {
        this.mode = "horizontal";
        this.color = "light";
    }
    hostData() {
        return {
            class: [this.mode, this.color].join(' ')
        };
    }
    render() {
        return "";
    }
    static get is() { return "se-divider"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "/**style-placeholder:se-divider:**/"; }
}
