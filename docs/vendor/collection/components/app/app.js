export class AppComponent {
    render() {
        return h("div", { class: "se-app-body" },
            h("slot", null));
    }
    static get is() { return "se-app"; }
    static get style() { return "/**style-placeholder:se-app:**/"; }
}
