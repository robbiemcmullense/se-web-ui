(window.webpackJsonpweb_ui_dash=window.webpackJsonpweb_ui_dash||[]).push([[63],{73:function(e,t,o){"use strict";o.r(t),o.d(t,"SeCheckbox",function(){return r});var c=o(2),r=function(){function e(){this.color="primary",this.disabled=!1,this.selected=!1}return e.prototype.emitEvent=function(){this.checked=!this.checked,this.didCheck.emit({value:this.value,selected:this.checked})},e.prototype.componentDidLoad=function(){this.selected&&(this.checked=this.selected)},e.prototype.render=function(){var e=this;return Object(c.b)("label",{class:"checkbox-container","data-disabled":this.disabled},this.label,Object(c.b)("input",{type:"checkbox",checked:this.checked,disabled:this.disabled}),Object(c.b)("span",{class:"checkmark","data-color":this.color,onClick:function(){return e.emitEvent()}}))},Object.defineProperty(e,"is",{get:function(){return"se-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{state:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},label:{type:String,attr:"label"},selected:{type:Boolean,attr:"selected",mutable:!0},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"didCheck",method:"didCheck",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return':host{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}:host .checkbox-container{position:relative;padding-left:20px;font-weight:300;line-height:1.4!important;line-height:1.2!important;font-size:12px;margin:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .checkbox-container[data-disabled]{opacity:.26}:host .checkbox-container input{height:0;width:0;opacity:0}:host .checkbox-container input:checked~.checkmark[data-color=primary]{background-color:#3dcd58;background-color:var(--primary,#3dcd58);border:1px solid;border-color:#3dcd58;border-color:var(--primary,#3dcd58)}:host .checkbox-container input:checked~.checkmark[data-color=secondary]{background-color:#219bfd;background-color:var(--secondary,#219bfd);border:1px solid;border-color:#3dcd58;border-color:var(--primary,#3dcd58)}:host .checkbox-container input:checked~.checkmark:after{display:block}:host .checkbox-container .checkmark{position:absolute;top:0;left:0;height:12px;width:12px;background-color:#fff;border:1px solid #cbcbcb}:host .checkbox-container .checkmark:after{content:"";position:absolute;display:none;bottom:3px;left:4px;width:3px;height:7px;border:solid #fff;border-width:0 1px 1px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}'},enumerable:!0,configurable:!0}),e}()}}]);