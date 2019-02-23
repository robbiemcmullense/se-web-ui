import { h } from '../se-components.core.js';

class WidgetHeader {
    render() {
        return [
            h("div", { class: "flex" },
                h("slot", null)),
            h("slot", { name: "end" })
        ];
    }
    static get is() { return "se-widget-header"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".sc-se-widget-header-h{padding:8px;border-bottom:2px solid #e5e5e5;font-size:20px;min-height:32px;position:relative;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.sc-se-widget-header-h   .flex.sc-se-widget-header{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}"; }
}

export { WidgetHeader as SeWidgetHeader };
