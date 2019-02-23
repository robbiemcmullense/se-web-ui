export class WidgetComponent {
    hostData() {
        return {
            'class': this.mode
        };
    }
    render() {
        return (h("div", { class: "widget-body" },
            h("slot", null)));
    }
    static get is() { return "se-widget"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get style() { return "/**style-placeholder:se-widget:**/"; }
}
