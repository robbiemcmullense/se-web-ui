export class WidgetFooter {
    render() {
        return [
            h("div", { class: "flex" },
                h("slot", null)),
            h("slot", { name: "end" })
        ];
    }
    static get is() { return "se-widget-footer"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:se-widget-footer:**/"; }
}
