const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';
export class SidenavComponent {
    constructor() {
        this.open = false;
        this.items = [];
    }
    toggle() {
        this.open = !this.open;
        if (this.open) {
            this.el.classList.add(SHOW_MENU);
            this.addAnimation(null);
        }
        else {
            this.removeAnimation(() => {
                this.el.classList.remove(SHOW_MENU);
            });
        }
    }
    async componentWillLoad() {
        this.items = Array.from(this.el.querySelectorAll('se-sidenav-item'));
    }
    componentDidLoad() {
        this.initSelect();
    }
    componentDidUnload() {
        this.items.length = 0;
        this.selectedItem = undefined;
    }
    async initSelect() {
        if (!this.selectedItem) {
            this.setActive(this.items[0]);
        }
    }
    setActive(item) {
        this.items.forEach((item) => {
            item.active = false;
        });
        item.active = true;
        this.selectedItem = item;
    }
    addAnimation(callback) {
        this.menuInnerEl.classList.add(SHOW_MENU);
        this.backdropEl.classList.add(SHOW_MENU);
        setTimeout(() => {
            this.menuInnerEl.classList.remove(SHOW_MENU);
            this.backdropEl.classList.remove(SHOW_MENU);
            callback && callback();
        }, 500);
    }
    removeAnimation(callback) {
        this.menuInnerEl.classList.add(HIDE_MENU);
        this.backdropEl.classList.add(HIDE_MENU);
        setTimeout(() => {
            this.menuInnerEl.classList.remove(HIDE_MENU);
            this.backdropEl.classList.remove(HIDE_MENU);
            callback && callback();
        }, 500);
    }
    renderList() {
        return this.items.map((item) => {
            return [
                h("se-list-item", { onClick: () => this.setActive(item), selected: item.active, "item-title": item.itemTitle }),
            ];
        });
    }
    render() {
        return [
            h("div", { class: "menu-background animated", onClick: () => this.toggle(), ref: el => this.backdropEl = el }),
            h("div", { class: "actual-menu animated full-content d-flex-column flex", ref: el => this.menuInnerEl = el },
                h("div", { class: "d-flex-center" },
                    h("div", { class: "d-flex-center flex" },
                        h("i", { class: "se-icon menu-sidenav", onClick: () => this.toggle() }, "test_results_nok"),
                        h("h3", { class: "header-title" }, "Menu")),
                    h("se-chip", { color: "primary", "can-close": "false", value: "https://schneider-electric.com" })),
                h("se-divider", null),
                h("div", { class: "d-flex flex" },
                    h("div", { class: "listNavItems" },
                        h("se-list", { mode: "nav" }, this.renderList()),
                        h("img", { class: "image-logo", alt: "Schneider electric logo" })),
                    h("se-divider", { mode: "vertical" }),
                    h("div", { class: "flex" },
                        h("slot", null))))
        ];
    }
    static get is() { return "se-sidenav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "items": {
            "state": true
        },
        "open": {
            "state": true
        },
        "selectedItem": {
            "state": true
        },
        "toggle": {
            "method": true
        }
    }; }
    static get style() { return "/**style-placeholder:se-sidenav:**/"; }
}
