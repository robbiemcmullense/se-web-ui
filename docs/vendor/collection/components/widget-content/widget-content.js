export class WidgetContent {
    hostData() {
        return {
            'class': { 'full-content': this.mode === 'fill' }
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "se-widget-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "/**style-placeholder:se-widget-content:**/"; }
}
