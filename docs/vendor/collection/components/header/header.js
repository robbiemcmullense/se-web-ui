export class HeaderComponent {
    constructor() {
        this.domain = "ecostruxure";
    }
    async componentDidLoad() {
        this.elLeftNav = this.el.querySelector("se-sidenav");
        this.hasMenu = !!this.elLeftNav;
    }
    onClickMenu() {
        this.elLeftNav.toggle();
    }
    getFullTitle() {
        const titleArray = this.appTitle.split(" ");
        const last = titleArray.pop();
        const first = titleArray.join(" ");
        return {
            first,
            last
        };
    }
    render() {
        const { first, last } = this.getFullTitle();
        let domain;
        if (this.domain.toLowerCase() === `ecostruxure`) {
            domain = h("se-icon-ecostruxure", { class: "header-title-type" });
        }
        else if (this.domain.toLowerCase() !== 'none') {
            domain = h("span", { class: "header-title-type" }, this.domain);
        }
        return (h("header", { class: "header-container" },
            h("div", { class: "d-flex" },
                this.hasMenu && (h("i", { class: "se-icon menu-sidenav", onClick: () => this.onClickMenu() }, "burger_menu")),
                h("div", { class: "d-flex-column" },
                    domain,
                    h("h1", { class: "header-title" },
                        h("span", { class: "font-regular" }, first),
                        h("span", { class: "font-lighter" },
                            "\u00A0",
                            last))),
                this.project && [
                    h("span", { class: "line" }),
                    h("span", { class: "project-section" }, this.project)
                ]),
            h("div", { id: "fill-space center-header-container" },
                h("slot", null)),
            h("div", { class: "padding-container user-icon-wrapper" },
                h("slot", { name: "user" })),
            h("div", { class: "padding-container d-flex" },
                h("slot", { name: "end" }),
                h("se-icon-schneider", { class: "header-title-type" }))));
    }
    static get is() { return "se-header"; }
    static get properties() { return {
        "appTitle": {
            "type": String,
            "attr": "app-title"
        },
        "domain": {
            "type": String,
            "attr": "domain"
        },
        "el": {
            "elementRef": true
        },
        "hasMenu": {
            "state": true
        },
        "project": {
            "type": String,
            "attr": "project"
        }
    }; }
    static get style() { return "/**style-placeholder:se-header:**/"; }
}
