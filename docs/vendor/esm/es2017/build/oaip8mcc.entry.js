import { h } from '../se-components.core.js';

class ChipComponent {
    constructor() {
        this.canClose = true;
    }
    closeChip() {
        this.close.emit(this.value);
    }
    hostData() {
        return {
            'class': this.color
        };
    }
    render() {
        return [
            h("div", { class: "value" }, this.value),
            this.canClose && h("div", { class: "close se-icon", onClick: () => this.closeChip() }, "action_delete_cross")
        ];
    }
    static get is() { return "se-chip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "canClose": {
            "type": Boolean,
            "attr": "can-close"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "close",
            "method": "close",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{display:-ms-inline-flexbox;display:inline-flex;margin:8px;height:32px;padding-left:16px;padding-right:16px;font-size:14px;line-height:16px;text-align:left;outline:none;border:none;border-radius:16px;color:#333;color:var(--,#333);background-color:#e6e6e6;background-color:var(--,#e6e6e6)}:host:not([disabled]):focus,:host:not([disabled]):hover{background-color:#cbcbcb}:host:not([disabled]):active{background-color:#626469;color:#fff}:host .se-icon,:host .value{padding-top:8px}:host .se-icon{cursor:pointer;font-size:24px;margin-left:10px;margin-right:-10px;font-family:se-icon}:host .se-icon[data-hide]{display:none}:host(.primary){background-color:#3dcd58;background-color:var(--primary,#3dcd58);color:#fff;color:var(--,#fff)}:host(.primary):not([disabled]):focus,:host(.primary):not([disabled]):hover{background-color:#32ad3c}:host(.primary):not([disabled]):active{background-color:#626469;color:#fff}:host(.primary.active){background-color:#007626;background-color:var(--,#007626)}:host(.accent){background-color:#219bfd;background-color:var(--accent,#219bfd);color:#fff;color:var(--,#fff)}:host(.accent):not([disabled]):focus,:host(.accent):not([disabled]):hover{background-color:#0087cd}:host(.accent):not([disabled]):active{background-color:#626469;color:#fff}:host(.accent.active){background-color:#0087cd;background-color:var(--,#0087cd)}:host(.warn){background-color:#e47f00;background-color:var(--warn,#e47f00);color:#fff;color:var(--,#fff)}:host(.warn):not([disabled]):focus,:host(.warn):not([disabled]):hover{background-color:#ffd100}:host(.warn):not([disabled]):active{background-color:#626469;color:#fff}:host(.warn.active){background-color:#ffd100;background-color:var(--,#ffd100)}:host(.error){background-color:#dc0a0a;background-color:var(--error,#dc0a0a);color:#fff;color:var(--,#fff)}:host(.error):not([disabled]):focus,:host(.error):not([disabled]):hover{background-color:#b10043}:host(.error):not([disabled]):active{background-color:#626469;color:#fff}:host(.error.active) button,:host(.error.active) button:focus{background-color:#b10043;background-color:var(--,#b10043)}"; }
}

class ListComponent {
    constructor() {
        this.mode = "classic";
    }
    PropDidChange() {
        this.updateItemMode();
    }
    componentDidLoad() {
        this.updateItemMode();
    }
    updateItemMode() {
        let items = this.el.querySelectorAll('se-list-item');
        items.forEach((item) => {
            item.mode = this.mode;
        });
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "se-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode",
            "watchCallbacks": ["PropDidChange"]
        }
    }; }
    static get style() { return ":host(){width:100%;height:100%;z-index:0;position:relative;overflow:hidden}"; }
}

class ListItemComponent {
    hostData() {
        return {
            class: [this.selected && 'selected', this.mode].join(' ')
        };
    }
    render() {
        return [
            h("button", null,
                h("div", null,
                    h("div", { class: "selectedBar" }),
                    h("div", { class: "nav-text" }, this.itemTitle)),
                h("i", { class: "se-icon" }, "arrow2_right")),
            h("se-divider", null)
        ];
    }
    static get is() { return "se-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "itemTitle": {
            "type": String,
            "attr": "item-title"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "selected": {
            "type": Boolean,
            "attr": "selected"
        }
    }; }
    static get style() { return ":host{position:relative;display:block;margin:0;font-weight:lighter;font-size:20px;width:100%;height:50px}:host .se-icon{font-family:se-icon;font-style:normal;font-size:40px}:host button{border:none;margin:0;padding:0;width:100%;height:100%;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;text-align:start}:host button .selectedBar{display:none}:host button .nav-text{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;padding-left:20px}:host(.nav.selected){color:mat-color(#3dcd58);color:var(--primary,mat-color(#3dcd58))}:host(.nav.selected) .selectedBar{display:block;position:absolute;top:0;bottom:0;width:5px;background-color:#3dcd58;background-color:var(----primary,#3dcd58)}"; }
}

const SHOW_MENU = 'show-menu';
const HIDE_MENU = 'hide-menu';
class SidenavComponent {
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
    static get style() { return "\@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}\@keyframes fadeOut{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}:host{display:none;height:100%;width:100%;z-index:20;background-color:transparent!important}:host,:host .full-content{position:absolute;top:0;left:0}:host .full-content{bottom:0;right:0}:host .actual-menu{position:absolute;top:0;left:0;width:80%;height:100%;background-color:#fff;z-index:30}:host .actual-menu.show-menu{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}:host .actual-menu.hide-menu{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}:host .menu-button{width:100%;margin:0;padding:10px}:host .animated{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .image-logo{height:45px;margin:0 auto}:host .menu-background{position:absolute;background-color:rgba(38,38,38,.2);top:0;left:0;width:100%;min-height:100%;z-index:5}:host .menu-background.show-menu{-webkit-animation-name:fadeIn;animation-name:fadeIn}:host .menu-background.hide-menu{-webkit-animation-name:fadeOut;animation-name:fadeOut}:host .se-icon{font-family:se-icon;font-style:normal}:host .menu-sidenav{color:#3dcd58;color:var(--primary,#3dcd58);cursor:pointer;font-size:63px!important;margin-right:-17px}:host .flex{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}:host .d-flex{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left}:host .d-flex,:host .d-flex-center{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}:host .d-flex-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}:host .d-flex-column{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left}:host .d-flex-column,:host .listNavItems{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host .listNavItems{width:250px;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}:host .header-title{color:#333;padding-left:18px;font-size:30px;line-height:20px;font-weight:lighter;margin:0}:host(.show-menu){display:block}"; }
}

export { ChipComponent as SeChip, ListComponent as SeList, ListItemComponent as SeListItem, SidenavComponent as SeSidenav };
