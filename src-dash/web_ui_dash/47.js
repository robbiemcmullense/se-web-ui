(window.webpackJsonpweb_ui_dash=window.webpackJsonpweb_ui_dash||[]).push([[47],{57:function(e,o,t){"use strict";t.r(o),t.d(o,"SeApp",function(){return r});var n=t(2),r=function(){function e(){}return e.prototype.render=function(){return Object(n.b)("div",{class:"se-app-body"},Object(n.b)("slot",null))},Object.defineProperty(e,"is",{get:function(){return"se-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return':root{--standard:#ededed;--alternative:#fff;--primary:#3dcd58;--secondary:#219bfd;--standard-contrast:#0f0f0f;--alternative-contrast:#0f0f0f;--primary-contrast:#fff;--secondary-contrast:#fff;--critical-contrast:#fff;--hover-standard:#e6e6e6;--hover-alternative:#e6e6e6;--hover-primary:#32ad3c;--hover-secondary:#0087cd;--hover-standard-contrast:#0f0f0f;--hover-alternative-contrast:#0f0f0f;--hover-primary-contrast:#fff;--hover-secondary-contrast:#fff;--hover-critical-contrast:#fff;--selected:#626469;--selected-contrast:#fff;--focus:#333;--focus-contrast:#fff}:host{width:100%}.se-app-body{overflow:hidden;margin:0!important;padding:0;font-weight:300;line-height:1.4!important;font-size:14px;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#ededed;background-color:var(--standard,#ededed)}.se-app-body .bold,.se-app-body strong{font-weight:500}.se-app-body small{line-height:1.2!important;font-size:12px}.color-primary{color:#3dcd58;color:var(--primary,#3dcd58)}.bg-primary{background-color:#3dcd58;background-color:var(--primary,#3dcd58)}.color-secondary{color:#219bfd;color:var(--secondary,#219bfd)}.bg-secondary{background-color:#219bfd;background-color:var(--secondary,#219bfd)}.color-standard{color:#ededed;color:var(--standard,#ededed)}.bg-standard{background-color:#ededed;background-color:var(--standard,#ededed)}.color-alternative{color:#fff;color:var(--alternative,#fff)}.bg-alternative{background-color:#fff;background-color:var(--alternative,#fff)}.color-standard-contrast{color:#0f0f0f;color:var(--standard-contrast,#0f0f0f)}.bg-standard-contrast{background-color:#0f0f0f;background-color:var(--standard-contrast,#0f0f0f)}.color-alternative-contrast{color:#0f0f0f;color:var(--alternative-contrast,#0f0f0f)}.bg-alternative-contrast{background-color:#0f0f0f;background-color:var(--alternative-contrast,#0f0f0f)}.color-primary-contrast{color:#fff;color:var(--primary-contrast,#fff)}.bg-primary-contrast{background-color:#fff;background-color:var(--primary-contrast,#fff)}.color-secondary-contrast{color:#fff;color:var(--secondary-contrast,#fff)}.bg-secondary-contrast{background-color:#fff;background-color:var(--secondary-contrast,#fff)}.color-critical-contrast{color:#fff;color:var(--critical-contrast,#fff)}.bg-critical-contrast{background-color:#fff;background-color:var(--critical-contrast,#fff)}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none}html{line-height:1.5;font-weight:400;color:rgba(0,0,0,.87)}@media only screen and (min-width:0){html{font-size:14px}}@media only screen and (min-width:992px){html{font-size:14.5px}}@media only screen and (min-width:1200px){html{font-size:15px}}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:18px}h1,h2{font-weight:300;line-height:1.4!important;margin:13.33333px 0 10.66667px}h2{font-size:16px}h3{font-weight:300;font-weight:500;text-transform:uppercase}h3,h4{line-height:1.4!important;margin:11.66667px 0 9.33333px;font-size:14px}h4{font-weight:300}h5,h6{margin:11.66667px 0 9.33333px}h5,h6,p{font-weight:300;line-height:1.4!important;font-size:14px}p .bold,p strong{font-weight:500}p small{line-height:1.2!important;font-size:12px}em{font-style:italic}.bold,strong{font-weight:500}small{font-size:75%}.light{font-weight:300}.thin{font-weight:200}@media only screen and (min-width:360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width:390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width:420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width:450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width:480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width:510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width:540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width:570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width:600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width:630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width:660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width:690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width:720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width:750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width:780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width:810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width:840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width:870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width:900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width:930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width:960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width:360px){.flow-text{font-size:1.2rem}}'},enumerable:!0,configurable:!0}),e}()}}]);