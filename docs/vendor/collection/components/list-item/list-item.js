export class ListItemComponent {
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
    static get style() { return "/**style-placeholder:se-list-item:**/"; }
}
