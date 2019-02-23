export class NavbarComponent {
    constructor() {
        this.color = 'primary';
    }
    render() {
        return (h("nav", { class: [this.color, "d-flex-main"].join(' ') },
            h("div", { class: "nav-left-wrapper" },
                h("slot", { name: "start" })),
            h("div", { class: "fill-space nav-center-wrapper" },
                h("slot", null)),
            h("div", { class: "nav-right-wrapper" },
                h("slot", { name: "end" }))));
    }
    static get is() { return "se-navbar"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        }
    }; }
    static get style() { return "/**style-placeholder:se-navbar:**/"; }
}
