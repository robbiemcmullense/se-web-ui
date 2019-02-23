export class SidenavItemComponent {
    constructor() {
        this.active = false;
    }
    async setActive() {
        this.active = true;
    }
    hostData() {
        const { active } = this;
        return {
            'role': 'sidenavpanel',
            'aria-hidden': !active ? 'true' : null,
            'class': {
                'navitem-hidden': !active
            }
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "se-sidenav-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "active": {
            "type": Boolean,
            "attr": "active",
            "mutable": true
        },
        "itemTitle": {
            "type": String,
            "attr": "item-title"
        },
        "setActive": {
            "method": true
        }
    }; }
    static get style() { return "/**style-placeholder:se-sidenav-item:**/"; }
}
