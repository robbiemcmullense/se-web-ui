(window.webpackJsonpweb_ui_dash=window.webpackJsonpweb_ui_dash||[]).push([[38],{48:function(e,t,i){"use strict";i.r(t),i.d(t,"SeContainer",function(){return n});var o=i(2),n=function(){function e(){this.option="fill",this.position="relative",this.direction="row",this.display="flex",this.columnSize="350px",this.rowSize="300px",this.color="alternative"}return e.prototype.optionDidChange=function(){var e=this;"widget"===this.option&&(this.color="standard"),"card"===this.option&&(this.color="alternative",Array.from(this.el.querySelectorAll("se-container > se-widget")).forEach(function(t){t.option=e.option}))},e.prototype.displayDidChange=function(){var e=this;Array.from(this.el.querySelectorAll("se-container > se-widget")).forEach(function(t){t.display=e.display})},e.prototype.columnSizeDidChange=function(){"grid"===this.display&&(this.el.style.gridTemplateColumns="repeat(auto-fit, minmax("+this.columnSize+", 1fr))")},e.prototype.rowSizeDidChange=function(){"grid"===this.display&&(this.el.style.gridAutoRows=this.rowSize)},e.prototype.componentWillLoad=function(){this.optionDidChange(),this.displayDidChange(),this.columnSizeDidChange(),this.rowSizeDidChange()},e.prototype.hostData=function(){return{class:[this.option+"-content",this.position,this.color,this.direction,this.display].join(" ")}},e.prototype.render=function(){return"centered"===this.option?Object(o.b)("div",{class:"wrapper-center"},Object(o.b)("slot",null)):Object(o.b)("slot",null)},Object.defineProperty(e,"is",{get:function(){return"se-container"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color",mutable:!0},columnSize:{type:String,attr:"column-size",watchCallbacks:["columnSizeDidChange"]},direction:{type:String,attr:"direction"},display:{type:String,attr:"display",watchCallbacks:["displayDidChange"]},el:{elementRef:!0},option:{type:String,attr:"option",watchCallbacks:["optionDidChange"]},position:{type:String,attr:"position"},rowSize:{type:String,attr:"row-size",watchCallbacks:["rowSizeDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-se-container-h{overflow:auto}.column.sc-se-container-h{-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.column.sc-se-container-h, .row.sc-se-container-h{-webkit-box-direction:normal}.row.sc-se-container-h{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.sc-se-container-h{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:-ms-flexbox;display:-webkit-flex;display:flex}.block.sc-se-container-h{display:block!important}.grid.sc-se-container-h{display:grid;width:100%;width:-webkit-fill-available}.absolute.sc-se-container-h{position:absolute;top:0;bottom:0;left:0;right:0}.relative.sc-se-container-h{position:relative}.widget-content.sc-se-container-h{padding:4px}.fill-content.sc-se-container-h{padding:0;height:100%}.card-content.sc-se-container-h{padding:8px}.centered-content.sc-se-container-h{display:block}.centered-content.sc-se-container-h   .wrapper-center.sc-se-container{padding-right:16px;padding-left:16px;margin-right:auto;margin-left:auto}.standard.sc-se-container-h{color:#0f0f0f;color:var(--standard-contrast,#0f0f0f);background-color:#ededed;background-color:var(--standard,#ededed)}.alternative.sc-se-container-h{color:#0f0f0f;color:var(--alternative-contrast,#0f0f0f);background-color:#fff;background-color:var(--alternative,#fff)}@media (min-width:1100px){.wrapper-center.sc-se-container{max-width:1070px}}"},enumerable:!0,configurable:!0}),e}()}}]);