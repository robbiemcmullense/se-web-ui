export class ContainerComponent {
    constructor() {
        this.mode = 'fill';
        this.position = 'relative';
    }
    hostData() {
        return {
            'class': {
                'widget-content': this.mode === 'widget',
                'full-content': this.mode === 'fill',
                'card-content': this.mode === 'card',
                'centered-content': this.mode === 'centered',
                'relative': this.position === 'relative',
                'absolute': this.position === 'absolute'
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "se-container"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "position": {
            "type": String,
            "attr": "position"
        }
    }; }
    static get style() { return "/**style-placeholder:se-container:**/"; }
}
