import { h } from '../se-components.core.js';

class WidgetContent {
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
    static get style() { return ":host{overflow:auto;padding:8px;position:relative;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}:host(.full-content){padding:0;overflow:hidden}"; }
}

export { WidgetContent as SeWidgetContent };
