(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7375],{57579:(e,r,t)=>{"use strict";t.d(r,{VR:()=>n,oU:()=>o,A4:()=>c}),t(24261);var n="floating",o=/^widgets\["?([^"\]]*)"?\]\.?(.*)$/,c=function(e){return{type:"WIDGETS:NEW",widget:e}}},93451:(e,r,t)=>{"use strict";t.d(r,{Z:()=>j});var n=t(86638),o=t(45697),c=t.n(o),u=t(84596),a=t.n(u),i=t(1469),l=t.n(i),f=t(14293),s=t.n(f),b=t(47037),g=t.n(b),p=t(49848);function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){y(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var m=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(l()(r))return r.map((function(o){var c=(0,n.S$)(e,o[t]||g()(o)&&o||"");return v(v({},o),{},y({},t,s()(c)?r:c))}));var o=(0,n.S$)(e,r);return s()(o)?r:o},S=function(e,r,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return v(v({},n),{},y({},o,e[o]&&m(r,e[o],t)))}};const j=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,p.compose)((0,p.getContext)({messages:c().object}),(0,p.mapProps)((function(t){var n=t.messages,o=d(t,["messages"]);return v(v({},o),a()(e).reduce(S(o,n,r),{}))})))}},31935:(e,r,t)=>{"use strict";t.d(r,{YL:()=>a,B0:()=>i,Mz:()=>l,TC:()=>f,qS:()=>s,Pe:()=>b,TP:()=>g});var n=t(22222),o=t(75110),c=t(93152),u=t(24262),a=function(e){return e.backgroundSelector&&e.backgroundSelector.source},i=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},f=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},s=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},b=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},g=(0,n.P1)(o.l2,c.$v,(function(e,r){return e.filter((function(e){return e&&"background"===e.group})).map((function(e){return(0,u.kf)(e,r)}))||[]}))},88113:(e,r,t)=>{"use strict";t.d(r,{b6:()=>b,_S:()=>g,R7:()=>p,bA:()=>d,Cb:()=>O,$t:()=>v,kS:()=>y,y:()=>m,l2:()=>S,HN:()=>j,CK:()=>k});var n=t(22222),o=t(27361),c=t.n(o),u=t(78718),a=t.n(u),i=t(827);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t(76712);var b=function(e){return c()(e,"catalog.services")},g=((0,n.P1)((function(e){return c()(e,"catalog.default.staticServices")}),b,(function(e,r){return f(f({},r),a()(e,"default_map_backgrounds"))})),function(e){return c()(e,"catalog.newService")}),p=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"]'))},d=function(e){return c()(e,"catalog.searchOptions")},O=function(e){return c()(e,"catalog.selectedService")},v=function(e){return"metadataexplorer"===c()(e,"controls.toolbar.active")||c()(e,"controls.metadataexplorer.enabled")},y=function(e){return(c()(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},m=function(e){return c()(e,"catalog.pageSize",4)},S=function(e){return c()(e,"catalog.delayAutoSearch",1e3)},j=(0,n.zB)({projection:i.uy}),k=function(e){return c()(e,"catalog.newService.formatUrlUsed","")}}}]);