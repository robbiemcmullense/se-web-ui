(window.webpackJsonpweb_ui_dash=window.webpackJsonpweb_ui_dash||[]).push([[10],{78:function(e,t,i){"use strict";i.r(t),i.d(t,"SeChip",function(){return r}),i.d(t,"SeDivider",function(){return s}),i.d(t,"SeList",function(){return a}),i.d(t,"SeListItem",function(){return l}),i.d(t,"SeLoading",function(){return c}),i.d(t,"SeSidemenu",function(){return d}),i.d(t,"SeWidget",function(){return f});var n=i(93),o=i(2),r=function(){function e(){this.color="standard",this.canClose=!0}return e.prototype.closeChip=function(){this.didClose.emit(this.value)},e.prototype.hostData=function(){return{class:this.color}},e.prototype.render=function(){var e=this;return[Object(o.b)("div",{class:"value"},this.value),this.canClose&&Object(o.b)("div",{class:"close se-icon",onClick:function(){return e.closeChip()}},"action_delete_cross")]},Object.defineProperty(e,"is",{get:function(){return"se-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{canClose:{type:Boolean,attr:"can-close"},color:{type:String,attr:"color"},el:{elementRef:!0},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"didClose",method:"didClose",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-chip-h{display:-ms-inline-flexbox;display:inline-flex;margin:8px;height:22px;padding-left:11px;padding-right:11px;font-size:14px;line-height:14px;text-align:left;outline:none;border:none;border-radius:16px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.sc-se-chip-h   .se-icon.sc-se-chip{cursor:pointer;font-size:24px;margin-left:10px;margin-right:-10px;font-family:se-icon}.sc-se-chip-h   .se-icon[data-hide].sc-se-chip{display:none}.selected.sc-se-chip-h{color:#fff;color:var(--selected-contrast,#fff);background-color:#626469;background-color:var(--selected,#626469)}.standard.sc-se-chip-h{color:#0f0f0f;color:var(--standard-contrast,#0f0f0f);background-color:#ededed;background-color:var(--standard,#ededed)}.standard.sc-se-chip-h:hover{color:#0f0f0f;color:var(--hover-standard-contrast,#0f0f0f);background-color:#e6e6e6;background-color:var(--hover-standard,#e6e6e6)}.alternative.sc-se-chip-h{color:#0f0f0f;color:var(--alternative-contrast,#0f0f0f);background-color:#fff;background-color:var(--alternative,#fff)}.alternative.sc-se-chip-h:hover{color:#0f0f0f;color:var(--hover-alternative-contrast,#0f0f0f);background-color:#e6e6e6;background-color:var(--hover-alternative,#e6e6e6)}.primary.sc-se-chip-h{color:#fff;color:var(--primary-contrast,#fff);background-color:#3dcd58;background-color:var(--primary,#3dcd58)}.primary.sc-se-chip-h:hover{color:#fff;color:var(--hover-primary-contrast,#fff);background-color:#32ad3c;background-color:var(--hover-primary,#32ad3c)}.secondary.sc-se-chip-h{color:#fff;color:var(--secondary-contrast,#fff);background-color:#219bfd;background-color:var(--secondary,#219bfd)}.secondary.sc-se-chip-h:hover{color:#fff;color:var(--hover-secondary-contrast,#fff);background-color:#0087cd;background-color:var(--hover-secondary,#0087cd)}"},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){this.option="horizontal",this.color="standard"}return e.prototype.hostData=function(){return{class:[this.option,this.color].join(" ")}},e.prototype.render=function(){return""},Object.defineProperty(e,"is",{get:function(){return"se-divider"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},option:{type:String,attr:"option"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-divider-h{display:block;margin:0;border-color:#e6e6e6}.horizontal.sc-se-divider-h{border-top-width:1px;border-top-style:solid}.inset.sc-se-divider-h, .vertical.sc-se-divider-h{border-right-width:1px;border-right-style:solid}.standard.sc-se-divider-h{border-color:#ededed;border-color:var(--standard,#ededed)}.alternative.sc-se-divider-h{border-color:#fff;border-color:var(--alternative,#fff)}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){this.option="classic"}return e.prototype.PropDidChange=function(){var e=this;Array.from(this.el.querySelectorAll("se-list-item, se-list-group")).forEach(function(t){t.option=e.option})},e.prototype.componentWillLoad=function(){this.PropDidChange()},e.prototype.render=function(){return Object(o.b)("slot",null)},Object.defineProperty(e,"is",{get:function(){return"se-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},option:{type:String,attr:"option",watchCallbacks:["PropDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-list-h{width:100%;height:100%;z-index:0;position:relative;overflow:auto;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.indentation=0,this.option="classic"}return e.prototype.SelectedDidChange=function(){this.didSelectedChange.emit()},e.prototype.hostData=function(){return{class:[this.selected&&"selected",this.option].join(" ")}},e.prototype.componentDidLoad=function(){this.padding=20*this.indentation,"treeview"===this.option&&(this.padding+=24)},e.prototype.render=function(){return Object(o.b)("button",{style:{paddingLeft:this.padding+"px"}},"nav"===this.option&&this.selected&&Object(o.b)("div",{class:"selectedBar"}),!!this.icon&&Object(o.b)("div",{class:"nav-icon"},Object(o.b)("span",{class:["se-icon",this.iconColor].join(" ")},this.icon)),Object(o.b)("div",{class:"nav-content"},Object(o.b)("div",null,this.item),Object(o.b)("small",null," ",this.description)),"nav"===this.option&&Object(o.b)("span",{class:"se-icon medium"},"arrow2_right"),"classic"===this.option&&Object(o.b)("slot",null))},Object.defineProperty(e,"is",{get:function(){return"se-list-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{description:{type:String,attr:"description"},el:{elementRef:!0},icon:{type:String,attr:"icon"},iconColor:{type:String,attr:"icon-color"},indentation:{type:Number,attr:"indentation"},item:{type:String,attr:"item"},option:{type:String,attr:"option"},padding:{state:!0},selected:{type:Boolean,attr:"selected",watchCallbacks:["SelectedDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"didSelectedChange",method:"didSelectedChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-list-item-h{z-index:0;margin:0;font-weight:lighter;font-size:20px;display:-ms-flexbox;display:-webkit-flex;display:flex}.se-icon.sc-se-list-item{margin:0;display:inline-block;font-family:se-icon;font-size:24px;font-display:block}.se-icon.primary.sc-se-list-item{color:#3dcd58;color:var(--primary,#3dcd58)}.se-icon.secondary.sc-se-list-item{color:#219bfd;color:var(--secondary,#219bfd)}.se-icon.medium.sc-se-list-item{font-size:36px;line-height:30px}button.sc-se-list-item{border:none;margin:0;padding:0;overflow:visible;position:relative;outline:none;background:transparent;width:100%;color:inherit;cursor:pointer;font:inherit;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;text-align:left;text-align:start;border-bottom:1px solid #e6e6e6}button.sc-se-list-item:focus, button.sc-se-list-item:hover{background-color:#ededed}.selectedBar.sc-se-list-item{position:absolute;top:0;bottom:0;width:5px;background-color:#3dcd58;background-color:var(--primary,#3dcd58)}.nav-icon.sc-se-list-item{margin-right:-12px;margin-left:8px}.nav-content.sc-se-list-item{min-width:0;padding-left:18px;margin:0;font-weight:300;line-height:1.4!important;font-size:14px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start center;-ms-flex-align:start center;-webkit-align-items:start center;-moz-align-items:start center;align-items:start center}.nav-content.sc-se-list-item   .bold.sc-se-list-item, .nav-content.sc-se-list-item   strong.sc-se-list-item{font-weight:500}.nav-content.sc-se-list-item   small.sc-se-list-item{line-height:1.2!important;font-size:12px}.nav-content.sc-se-list-item   div.sc-se-list-item, .nav-content.sc-se-list-item   small.sc-se-list-item{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:8px}.classic.sc-se-list-item-h   button.sc-se-list-item{height:47px;max-width:100%}.classic.selected.sc-se-list-item-h{color:#fff;color:var(--selected-contrast,#fff);background-color:#626469;background-color:var(--selected,#626469)}.classic.selected.sc-se-list-item-h   button.sc-se-list-item:focus, .classic.selected.sc-se-list-item-h   button.sc-se-list-item:hover{background-color:#434343}.nav.sc-se-list-item-h   button.sc-se-list-item{height:47px;max-width:100%}.nav.selected.sc-se-list-item-h{color:#3dcd58;color:var(--primary,#3dcd58)}.treeview.sc-se-list-item-h   button.sc-se-list-item{height:32px}.treeview.sc-se-list-item-h   .nav-content.sc-se-list-item{padding-left:0}.treeview.selected.sc-se-list-item-h{color:#fff;color:var(--selected-contrast,#fff);background-color:#626469;background-color:var(--selected,#626469)}.treeview.selected.sc-se-list-item-h   button.sc-se-list-item:focus, .treeview.selected.sc-se-list-item-h   button.sc-se-list-item:hover{background-color:#434343}.dropdown.sc-se-list-item-h   button.sc-se-list-item{min-height:40px;max-width:100%;border-bottom:none}.dropdown.sc-se-list-item-h   .nav-content.sc-se-list-item{padding-left:10px}"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){}return e.prototype.hostData=function(){return{class:this.loading&&"show"}},e.prototype.render=function(){return[Object(o.b)("div",{class:"loading-wrapper"},Object(o.b)("div",{class:"se-loading"},Object(o.b)("div",{class:"se-icon"},"spinner"))),Object(o.b)("div",{class:"loading-background"})]},Object.defineProperty(e,"is",{get:function(){return"se-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{loading:{type:Boolean,attr:"loading"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-loading-h{display:none;overflow:hidden;z-index:100}.show.sc-se-loading-h{display:block}.loading-wrapper.sc-se-loading{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;background-color:hsla(0,0%,100%,.6)}.se-loading.sc-se-loading{position:relative;line-height:128px;-webkit-box-shadow:1px 1px 4px 0 rgba(0,0,0,.3);box-shadow:1px 1px 4px 0 rgba(0,0,0,.3);background-color:#fff;background-color:var(--alternative,#fff);color:#3dcd58;color:var(--primary,#3dcd58);display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.loading-background.sc-se-loading, .se-loading.sc-se-loading{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.loading-background.sc-se-loading{position:absolute;top:0;bottom:0;left:0;right:0;z-index:120}.se-icon.sc-se-loading{position:relative;font-family:se-icon;font-size:128px;-webkit-animation:clockwiseSpin 1.5s linear infinite;animation:clockwiseSpin 1.5s linear infinite}@-webkit-keyframes clockwiseSpin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes clockwiseSpin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){this.open=!1,this.items=[]}return e.prototype.toggle=function(){var e=this;this.open=!this.open,this.open?(this.el.classList.add("show-menu"),this.addAnimation(null)):this.removeAnimation(function(){e.el.classList.remove("show-menu")})},e.prototype.componentWillLoad=function(){return n.a(this,void 0,void 0,function(){return n.b(this,function(e){return this.items=Array.from(this.el.querySelectorAll("se-sidemenu-item")),[2]})})},e.prototype.componentDidLoad=function(){this.initSelect()},e.prototype.componentDidUnload=function(){this.items.length=0,this.selectedItem=void 0},e.prototype.initSelect=function(){return n.a(this,void 0,void 0,function(){return n.b(this,function(e){return this.selectedItem||this.setActive(this.items[0]),[2]})})},e.prototype.setActive=function(e){this.items.forEach(function(e){e.active=!1}),e.active=!0,this.selectedItem=e},e.prototype.addAnimation=function(e){var t=this;this.menuInnerEl.classList.add("show-menu"),this.backdropEl.classList.add("show-menu"),setTimeout(function(){t.menuInnerEl.classList.remove("show-menu"),t.backdropEl.classList.remove("show-menu"),e&&e()},500)},e.prototype.removeAnimation=function(e){var t=this;this.menuInnerEl.classList.add("hide-menu"),this.backdropEl.classList.add("hide-menu"),setTimeout(function(){t.menuInnerEl.classList.remove("hide-menu"),t.backdropEl.classList.remove("hide-menu"),e&&e()},500)},e.prototype.renderList=function(){var e=this;return this.items.map(function(t){return[Object(o.b)("se-list-item",{onClick:function(){return e.setActive(t)},selected:t.active,item:t.item})]})},e.prototype.render=function(){var e=this;return[Object(o.b)("div",{class:"menu-background animated",onClick:function(){return e.toggle()},ref:function(t){return e.backdropEl=t}}),Object(o.b)("div",{class:"actual-menu animated full-content d-flex-column flex",ref:function(t){return e.menuInnerEl=t}},Object(o.b)("div",{class:"d-flex-center"},Object(o.b)("div",{class:"d-flex-center flex"},Object(o.b)("span",{class:"menu-sidenav",onClick:function(){return e.toggle()}},Object(o.b)("se-icon",{size:"large",color:"primary"},"test_results_nok")),Object(o.b)("h3",{class:"header-title"},"Menu")),Object(o.b)("se-chip",{color:"primary","can-close":"false",value:"https://schneider-electric.com"})),Object(o.b)("se-divider",null),Object(o.b)("div",{class:"d-flex flex"},Object(o.b)("div",{class:"listNavItems"},Object(o.b)("se-list",{option:"nav"},this.renderList()),Object(o.b)("se-icon-lifeison",{color:"standard"})),Object(o.b)("se-divider",{option:"vertical"}),Object(o.b)("se-widget",{option:"fill"},Object(o.b)("slot",null))))]},Object.defineProperty(e,"is",{get:function(){return"se-sidemenu"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},items:{state:!0},open:{state:!0},selectedItem:{state:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes slideCollapseDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideCollapseDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0);visibility:visible}to{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideCollapseUp{0%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideCollapseUp{0%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(0);transform:scaleY(0)}}.sc-se-sidemenu-h{display:none;height:100%;width:100%;z-index:20;background-color:transparent!important}.full-content.sc-se-sidemenu, .sc-se-sidemenu-h{position:absolute;top:0;left:0}.full-content.sc-se-sidemenu{bottom:0;right:0}.actual-menu.sc-se-sidemenu{position:absolute;top:0;left:0;width:80%;height:100%;-webkit-box-shadow:1px 1px 4px 0 rgba(0,0,0,.3);box-shadow:1px 1px 4px 0 rgba(0,0,0,.3);background-color:#fff;background-color:var(--alternative,#fff);color:#0f0f0f;color:var(--alternative-contrast,#0f0f0f);z-index:30}.actual-menu.show-menu.sc-se-sidemenu{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}.actual-menu.hide-menu.sc-se-sidemenu{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}.animated.sc-se-sidemenu{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.menu-background.sc-se-sidemenu{position:absolute;background-color:hsla(0,0%,100%,.6);top:0;left:0;width:100%;min-height:100%;z-index:5}.menu-background.show-menu.sc-se-sidemenu{-webkit-animation-name:fadeIn;animation-name:fadeIn}.menu-background.hide-menu.sc-se-sidemenu{-webkit-animation-name:fadeOut;animation-name:fadeOut}.menu-button.sc-se-sidemenu{width:100%;margin:0;padding:10px}.image-logo.sc-se-sidemenu{height:45px;margin:0 auto}.menu-sidenav.sc-se-sidemenu{cursor:pointer;margin-right:-17px}.flex.sc-se-sidemenu{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1}.d-flex.sc-se-sidemenu{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left}.d-flex.sc-se-sidemenu, .d-flex-center.sc-se-sidemenu{width:100%;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.d-flex-center.sc-se-sidemenu{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.d-flex-column.sc-se-sidemenu{-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left}.d-flex-column.sc-se-sidemenu, .listNavItems.sc-se-sidemenu{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.listNavItems.sc-se-sidemenu{width:250px;height:100%;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.header-title.sc-se-sidemenu{color:#333;padding-left:18px;font-size:30px;line-height:20px;font-weight:lighter;margin:0}.show-menu.sc-se-sidemenu-h{display:block}"},enumerable:!0,configurable:!0}),e}(),f=function(){function e(){this.display="flex",this.color="alternative",this.enlarged=!1,this.loading=!1}return e.prototype.widthDidChange=function(){this.updateSize()},e.prototype.heightDidChange=function(){this.updateSize()},e.prototype.componentDidLoad=function(){this.updateSize(),this.updateItemMode()},e.prototype.updateItemMode=function(){var e=this;"card"===this.option&&Array.from(this.el.querySelectorAll("se-widget-header, se-widget-footer")).forEach(function(t){t.option=e.option})},e.prototype.updateSize=function(){this.width&&(this.el.style.width=this.width),this.height&&(this.el.style.height=this.height)},e.prototype.hostData=function(){return{class:[this.option,this.color,this.display,this.enlarged&&"grid"===this.display?"grid-large":""].join(" ")}},e.prototype.render=function(){return Object(o.b)("div",{class:"widget-body"},this.loading?Object(o.b)("se-loading",{loading:this.loading}):"",Object(o.b)("slot",null))},Object.defineProperty(e,"is",{get:function(){return"se-widget"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},display:{type:String,attr:"display"},el:{elementRef:!0},enlarged:{type:Boolean,attr:"enlarged",mutable:!0},height:{type:String,attr:"height",watchCallbacks:["heightDidChange"]},loading:{type:Boolean,attr:"loading",mutable:!0},option:{type:String,attr:"option"},width:{type:String,attr:"width",watchCallbacks:["widthDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-widget-h{z-index:0;position:relative;display:-ms-flexbox;display:-webkit-flex;display:flex}.sc-se-widget-h   .widget-body.sc-se-widget{overflow:auto;margin:8px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column}.flex.sc-se-widget-h, .sc-se-widget-h   .widget-body.sc-se-widget{-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column}.flex.sc-se-widget-h{width:100%;height:100%;flex-direction:column}.block.sc-se-widget-h{width:auto;height:auto}.grid.sc-se-widget-h{width:100%;height:100%}.grid-large.sc-se-widget-h{grid-column:span 2;grid-row:span 2}.card.sc-se-widget-h   .widget-body.sc-se-widget{-webkit-box-shadow:1px 1px 6px 0 rgba(0,0,0,.3);box-shadow:1px 1px 6px 0 rgba(0,0,0,.3);border-radius:4px;margin:16px}.alternative.sc-se-widget-h   .widget-body.sc-se-widget{background-color:#fff;background-color:var(--alternative,#fff)}.standard.sc-se-widget-h   .widget-body.sc-se-widget{background-color:#ededed;background-color:var(--standard,#ededed)}.fill.sc-se-widget-h   .widget-body.sc-se-widget{margin:0}"},enumerable:!0,configurable:!0}),e}()},93:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o});function n(e,t,i,n){return new(i||(i=Promise))(function(o,r){function s(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new i(function(t){t(e.value)}).then(s,a)}l((n=n.apply(e,t||[])).next())})}function o(e,t){var i,n,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(o=2&r[0]?n.return:r[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;switch(n=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],n=0}finally{i=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}}}]);