(window.webpackJsonpweb_ui_dash=window.webpackJsonpweb_ui_dash||[]).push([[58],{68:function(e,s,n){"use strict";n.r(s),n.d(s,"SeSnackbar",function(){return o});var t=n(2),o=function(){function e(){this.type="information",this.icon="information_circle",this.canClose=!0,this.closeText="dismiss",this.open=!1}return e.prototype.openDidChange=function(){this.open?this.el.classList.add("show"):this.el.classList.remove("show")},e.prototype.closeSnackbar=function(){this.open=!1,this.didClose.emit()},e.prototype.hostData=function(){return{class:this.type}},e.prototype.render=function(){var e=this;return[Object(t.b)("div",{class:"snackbar"},this.icon?Object(t.b)("span",{class:"se-icon"},this.icon):"",Object(t.b)("span",{class:"message"},this.message),this.canClose?Object(t.b)("span",{class:"close",onClick:function(){return e.closeSnackbar()}},this.closeText):"")]},Object.defineProperty(e,"is",{get:function(){return"se-snackbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{canClose:{type:Boolean,attr:"can-close"},closeText:{type:String,attr:"close-text"},el:{elementRef:!0},icon:{type:String,attr:"icon"},message:{type:String,attr:"message"},open:{type:Boolean,attr:"open",mutable:!0,watchCallbacks:["openDidChange"]},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"didClose",method:"didClose",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-snackbar-h{position:fixed;bottom:20px;display:none;-ms-flex-item-align:center;align-self:center}.show.sc-se-snackbar-h{display:block;-webkit-animation:slideUp .2s linear;animation:slideUp .2s linear}@-webkit-keyframes slideUp{0%{bottom:0}to{bottom:20px}}@keyframes slideUp{0%{bottom:0}to{bottom:20px}}.information.sc-se-snackbar-h{background-color:#333;background-color:var(--focus,#333)}.success.sc-se-snackbar-h{background-color:#3dcd58;background-color:var(--primary,#3dcd58)}.warning.sc-se-snackbar-h{background-color:#e47f00}.error.sc-se-snackbar-h{background-color:#dc0a0a}.snackbar.sc-se-snackbar{height:28px;line-height:24px;margin-left:7px;margin-top:4px;display:-ms-flexbox;display:-webkit-flex;display:flex;color:#fff;color:var(--primary-contrast,#fff)}.se-icon.sc-se-snackbar{font-size:20px;font-family:se-icon;padding-right:5px}.message.sc-se-snackbar{font-size:12px}.close.sc-se-snackbar, .message.sc-se-snackbar{padding-right:34px}.close.sc-se-snackbar{cursor:pointer}"},enumerable:!0,configurable:!0}),e}()}}]);