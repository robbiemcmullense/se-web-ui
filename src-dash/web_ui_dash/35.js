(window.webpackJsonpweb_ui_dash=window.webpackJsonpweb_ui_dash||[]).push([[35],{45:function(t,e,o){"use strict";o.r(e),o.d(e,"SeRadioOnOff",function(){return r});var n=o(2),r=function(){function t(){this.option="default",this.color="standard",this.textOn="ON",this.textOff="OFF",this.disabled=!1}return t.prototype.toggleActive=function(){this.disabled||(this.selected=!this.selected,this.didChange.emit({selected:this.selected}))},t.prototype.componentDidLoad=function(){this.value&&(this.selected=this.value)},t.prototype.hostData=function(){return{class:[this.option,this.color,this.disabled?"disabled":""].join(" ")}},t.prototype.render=function(){var t=this;return[Object(n.b)("button",{class:["active",this.selected?" selected":""].join(" "),onClick:function(){return t.toggleActive()}},this.textOn),Object(n.b)("button",{class:["inactive",this.selected?"":" selected"].join(" "),onClick:function(){return t.toggleActive()}},this.textOff)]},Object.defineProperty(t,"is",{get:function(){return"se-radio-on-off"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},option:{type:String,attr:"option"},selected:{state:!0},textOff:{type:String,attr:"text-off"},textOn:{type:String,attr:"text-on"},value:{type:Boolean,attr:"value",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"didChange",method:"didChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host button{padding:4px 14px;border:none;outline:none;height:24px;font-size:11px;line-height:13px;font-weight:300;cursor:pointer}:host button.active{border-top-left-radius:2px;border-bottom-left-radius:2px;margin-right:0}:host button.active.selected{color:#fff;background-color:#3dcd58}:host button.inactive{border-top-right-radius:2px;border-bottom-right-radius:2px;margin-left:0}:host button.inactive.selected{color:#ededed;background-color:#dc0a0a}:host(.header) button{height:16px;padding:2px 14px}:host(.disabled){opacity:.26}:host(.disabled) button{cursor:default}:host(.disabled) button.inactive.selected{background-color:#333}:host(.standard) button{background-color:#ededed;background-color:var(--standard,#ededed);color:#0f0f0f;color:var(--standard-contrast,#0f0f0f)}:host(.alternative) button{background-color:#fff;background-color:var(--alternative,#fff);color:#0f0f0f;color:var(--alternative-contrast,#0f0f0f)}"},enumerable:!0,configurable:!0}),t}()}}]);