(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,n){e.exports=n(352)},342:function(e,t,n){},344:function(e,t,n){var r={"./0agfyg87.entry.js":[373,9],"./0agfyg87.sc.entry.js":[374,10],"./1ijhovma.entry.js":[375,11],"./1ijhovma.sc.entry.js":[376,12],"./1q0ec3tf.entry.js":[377,13],"./1q0ec3tf.sc.entry.js":[378,14],"./6xde9w1c.entry.js":[379,15],"./6xde9w1c.sc.entry.js":[380,16],"./8b37sznt.entry.js":[381,17],"./8b37sznt.sc.entry.js":[382,18],"./b3aziyyk.entry.js":[383,19],"./b3aziyyk.sc.entry.js":[384,20],"./bo0bd49o.entry.js":[385,21],"./bo0bd49o.sc.entry.js":[386,22],"./det39qzt.entry.js":[387,23],"./det39qzt.sc.entry.js":[388,24],"./ee9apcis.entry.js":[389,25],"./ee9apcis.sc.entry.js":[390,26],"./hnzjgzhw.entry.js":[391,27],"./hnzjgzhw.sc.entry.js":[392,28],"./nv7p3tni.entry.js":[393,29],"./nv7p3tni.sc.entry.js":[394,30],"./oaip8mcc.entry.js":[395,31],"./oaip8mcc.sc.entry.js":[396,32],"./r6wajjts.entry.js":[397,33],"./r6wajjts.sc.entry.js":[398,34],"./rbiowlge.entry.js":[399,35],"./rbiowlge.sc.entry.js":[400,36],"./rwr2upao.entry.js":[401,37],"./rwr2upao.sc.entry.js":[402,38],"./wy6tvfbd.entry.js":[403,39],"./wy6tvfbd.sc.entry.js":[404,40],"./xecwwfdd.entry.js":[405,41],"./xecwwfdd.sc.entry.js":[406,42]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=344,e.exports=o},352:function(e,t,n){"use strict";n.r(t);var r=n(36),o=n.n(r),a=n(178),s=n.n(a),i=n(24),c=n(22),u=n(29),d=n(16),l=n(28),y=n(182),p=n(412),m=n(411),j=n(413),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("span",{className:"se-app-body"},o.a.createElement("se-header",{"app-title":"Template Editor",domain:"none",project:"Version 1.0.0"}),o.a.createElement("se-navbar",null),this.props.children)}}]),t}(r.Component),b=n(179),h=n.n(b),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){console.log("onChange"),n.setState({code:e}),n.props.handleCode(e)},n.resize=function(){console.log("resize called"),n.editor&&n.editor.layout()},n.editorDidMount=function(e){n.editor=e,n.editor.focus(),n.props.handleCode(n.state.code),setTimeout(function(){n.editor.getAction("editor.action.formatDocument").run()},200)},n.state={code:' <se-widget mode="fill">\n          <se-widget-header>Filter</se-widget-header>\n          <se-widget-content>\n            <se-button mode="flat">Flat</se-button>\n            <se-button mode="flat" color="primary">FlatGreen</se-button>\n            <se-button id="raisedBtn" mode="raised">Raised</se-button>\n            <se-button id="raisedBtn2" mode="raised" color="primary">RaisedGreen</se-button>\n            <se-button id="textBtn1" mode="text">Text</se-button>\n            <se-button id="textBtn2" mode="text" color="primary">Primary</se-button>\n          </se-widget-content>\n          <se-widget-footer>\n            <div slot="end">\n              <se-button id="raisedBtn2" mode="raised" color="primary">RaisedGreen</se-button>\n            </div>\n          </se-widget-footer>\n        </se-widget>'},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.code;return o.a.createElement("se-container",{mode:"fill",position:"absolute"},o.a.createElement(h.a,{language:"html",theme:"vs-dark",value:e,options:{selectOnLineNumbers:!0},onChange:this.onChange,editorDidMount:this.editorDidMount}))}}]),t}(r.Component),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={code:""},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){e.code!==this.props.code&&this.setState({code:this.props.code})}},{key:"rawMarkup",value:function(){var e=this.state.code;return{__html:"<se-app>".concat(e,"</se-app>")}}},{key:"render",value:function(){return o.a.createElement("se-container",{mode:"fill",position:"absolute"},o.a.createElement("se-app",{dangerouslySetInnerHTML:this.rawMarkup()}))}}]),t}(r.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={code:""},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"resizedLayout",value:function(){this.myEditor&&this.myEditor.resize()}},{key:"componentDidMount",value:function(){var e=this;this.splitLayout.addEventListener("iron-resize",function(t){return e.resizedLayout(t)}),setTimeout(function(){e.resizedLayout()},500)}},{key:"componentWillUnmount",value:function(){var e=this;this.splitLayout.removeEventListener("iron-resize",function(t){return e.resizedLayout(t)})}},{key:"updateDisplay",value:function(e){console.log("CODE TO DISPLAY",e),this.setState({code:e})}},{key:"render",value:function(){var e=this,t=this.state.code;return o.a.createElement("se-container",{mode:"fill"},o.a.createElement("vaadin-split-layout",{ref:function(t){return e.splitLayout=t}},o.a.createElement("se-container",{mode:"fill"},o.a.createElement(v,{handleCode:function(t){return e.updateDisplay(t)},ref:function(t){return e.myEditor=t}})),o.a.createElement("se-container",{mode:"fill"},o.a.createElement(w,{code:t}))))}}]),t}(r.Component),E=function(e){var t=e.component,n=e.layout,r=Object(y.a)(e,["component","layout"]);return o.a.createElement(p.a,Object.assign({},r,{render:function(e){return o.a.createElement(n,null,o.a.createElement(t,e))}}))},g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("se-app",null,o.a.createElement(m.a,null,o.a.createElement(j.a,null,o.a.createElement(E,{exact:!0,path:"/",layout:f,component:O}))))}}]),t}(r.Component),k=(n(342),n(345),n(181));Object(k.a)(window),s.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[183,45,43]]]);
//# sourceMappingURL=main.f5613c65.chunk.js.map