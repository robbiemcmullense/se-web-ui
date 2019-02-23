export class ListComponent {
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
    static get style() { return "/**style-placeholder:se-list:**/"; }
}
