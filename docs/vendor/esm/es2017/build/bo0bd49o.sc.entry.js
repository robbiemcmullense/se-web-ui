import { h } from '../se-components.core.js';

class ContainerComponent {
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
    static get style() { return ".sc-se-container-h{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;overflow:auto}.absolute.sc-se-container-h{position:absolute;top:0;bottom:0;left:0;right:0}.relative.sc-se-container-h{position:relative;height:100%}.widget-content.sc-se-container-h{margin:4px;background-color:#e6e6e6}.card-content.sc-se-container-h{margin:4px;background-color:#fff}.full-content.sc-se-container-h{margin:0;overflow:hidden}.centered-content.sc-se-container-h{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}\@media (min-width:768px){.centered-content.sc-se-container-h{width:750px}}\@media (min-width:992px){.centered-content.sc-se-container-h{width:970px}}\@media (min-width:1200px){.centered-content.sc-se-container-h{width:1170px}}"; }
}

export { ContainerComponent as SeContainer };
