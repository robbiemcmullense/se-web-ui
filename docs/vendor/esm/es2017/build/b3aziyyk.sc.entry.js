import { h } from '../se-components.core.js';

class WidgetFooter {
    render() {
        return [
            h("div", { class: "flex" },
                h("slot", null)),
            h("slot", { name: "end" })
        ];
    }
    static get is() { return "se-widget-footer"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".sc-se-widget-footer-h{position:relative;padding:8px;border-top:2px solid #e5e5e5;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-se-widget-footer-h   .flex.sc-se-widget-footer{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}"; }
}

export { WidgetFooter as SeWidgetFooter };
