const t=window.SeComponents.h;class e{constructor(){this.isDisabled=!1}render(){return t("button",{"data-appearance":this.appearance,color:this.color,disabled:this.isDisabled},t("slot",null))}static get is(){return"se-button"}static get encapsulation(){return"shadow"}static get properties(){return{appearance:{type:String,attr:"appearance"},color:{type:String,attr:"color"},isDisabled:{type:Boolean,attr:"is-disabled"}}}static get style(){return"button.sc-se-button{color:#333;color:var(--,#333);background-color:#ededed;background-color:var(--,#ededed);height:32px;width:96px;padding:0;border:none;border-radius:1px;outline:none;font-size:14px;font-family:Nunito,Roboto,monospace;line-height:17px;font-weight:300;cursor:pointer}button.sc-se-button:not([disabled]):hover{background-color:#cbcbcb}button.sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}button[color=primary].sc-se-button{background-color:#3dcd58;background-color:var(--primary,#3dcd58);color:#fff;color:var(--,#fff)}button[color=primary].sc-se-button:not([disabled]):hover{background-color:#32ad3c}button[color=primary].sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}button[color=warning].sc-se-button{background-color:#dc0a0a;background-color:var(--error,#dc0a0a);color:#fff;color:var(--,#fff)}button[color=warning].sc-se-button:not([disabled]):hover{background-color:#b10043}button[color=warning].sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}button[data-appearance=raised].sc-se-button{-webkit-box-shadow:1px 1px 4px 0 rgba(0,0,0,.3);box-shadow:1px 1px 4px 0 rgba(0,0,0,.3)}button[data-appearance=text].sc-se-button{background-color:#fff;background-color:var(--,#fff)}button[data-appearance=text].sc-se-button:not([disabled]):hover{background-color:#f7f7f7}button[data-appearance=text].sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}button[data-appearance=text][color=primary].sc-se-button{color:#3dcd58;color:var(--primary,#3dcd58)}button[data-appearance=text][color=primary].sc-se-button:not([disabled]):hover{background-color:#f7f7f7}button[data-appearance=text][color=primary].sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}button[disabled].sc-se-button{cursor:default;opacity:.26}button[data-appearance=login].sc-se-button{width:144px;font-size:18px;line-height:22px;background-color:#3dcd58;background-color:var(--primary,#3dcd58);color:#fff;color:var(--,#fff)}button[data-appearance=login].sc-se-button:not([disabled]):hover{background-color:#32ad3c}button[data-appearance=login].sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}button[data-appearance=signup].sc-se-button{width:144px;font-size:18px;line-height:22px;background-color:#219bfd;background-color:var(--accent,#219bfd);color:#fff;color:var(--,#fff)}button[data-appearance=signup].sc-se-button:not([disabled]):hover{background-color:#0087cd}button[data-appearance=signup].sc-se-button:not([disabled]):active{background-color:#626469;color:#fff}"}}export{e as SeButton};