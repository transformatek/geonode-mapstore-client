(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[127,7654],{36786:(e,t,r)=>{"use strict";e.exports=r(22822)},13292:(e,t,r)=>{var n=r(45266).coordEach;e.exports=function(e){var t=[1/0,1/0,-1/0,-1/0];return n(e,(function(e){t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}},42780:(e,t,r)=>{"use strict";r.d(t,{g:()=>n}),r(91175);var n=function(){return{type:"ANNOTATIONS:CLOSE"}}},81808:(e,t,r)=>{"use strict";r.d(t,{eD:()=>n,AM:()=>o,ok:()=>a,Gg:()=>i,nT:()=>l,TL:()=>s,KS:()=>c,EB:()=>u,DZ:()=>f,Aw:()=>p,V_:()=>d,H0:()=>m,jW:()=>y,JZ:()=>b,fQ:()=>g,HK:()=>h,YO:()=>v,I6:()=>O,$D:()=>w,SI:()=>P});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",a="MAP_CONFIG_LOADED",i="MAP_CONFIG_LOAD_ERROR",l="MAP_LOAD_INFO",s="MAP_INFO_LOAD_START",c="MAP_INFO_LOADED",u="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",d="MAP:RESET_MAP_SAVE_ERROR";function m(e,t,r){return{type:a,config:e,legacy:!!t,mapId:t,zoomToExtent:r}}function y(e,t){return{type:i,error:e,mapId:t}}function b(e,t,r,n,a){return{type:o,configName:e,mapId:t,config:r,mapInfo:n,overrideConfig:a}}function g(e,t){return{type:c,mapId:t,info:e}}function h(e,t){return{type:u,mapId:e,error:t}}function v(e){return{type:s,mapId:e}}function O(e){return{type:l,mapId:e}}var w=function(e){return{type:f,error:e}},P=function(e){return{type:p,resourceId:e}}},49243:(e,t,r)=>{"use strict";r.d(t,{y:()=>g});var n=r(47037),o=r.n(n),a=r(14293),i=r.n(a),l=r(89255),s=r(88798),c=r(75875),u=r.n(c),f=r(90183);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.attachJSON,c=n.itemId,d=void 0===c?null:c,m=function(t){return l.Observable.defer((function(){return u().get(e,{params:t})}))},b=function(t){return(0,s.pf)(r,e,t)},g=(0,s.pf)(r,e,t)?b:m;return a&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?l.Observable.forkJoin(g(t),g(y(y({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return l.Observable.of({})}))).map((function(e){var t=p(e,2),r=t[0],n=t[1];return y(y({},r),{},{features:n&&n.features&&n.features.filter((function(e){return!!i()(d)||e.id===d})),featuresCrs:n&&n.crs&&(0,f.parseURN)(n.crs)})})):g(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:o()(e)?e:y(y({},e),{},{features:e.features&&e.features.filter((function(e){return!d||e.id===d}))}),features:e.features&&e.features.filter((function(e){return!d||e.id===d})),featuresCrs:e&&e.crs&&(0,f.parseURN)(e.crs)}}))}},21751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{IDENTIFY_POPUP:()=>P,default:()=>E});var n=r(5053),o=r.n(n),a=r(73014),i=r(11196),l=r(49848),s=r(89208),c=r(22222),u=r(7877),f=r(21914),p=r(42872),d=r(1469),m=r.n(d),y=r(52353),b=r.n(y),g=r(79870),h=r(827),v=(0,l.compose)((0,s.connect)((0,c.P1)(u.Qf,(function(e){return{index:e}})),{setIndex:f.oO}),(0,l.defaultProps)({index:0,responses:[]})),O=(0,c.P1)([u.q7,u.o9,u.OK,u.us,u.x0,h.Mc,u.vR],(function(e,t,r,n,o,a,i){return{responses:e,validResponses:t,requests:r,format:n,showEmptyMessageGFI:o,missingResponses:(r||[]).length-(e||[]).length,renderEmpty:a,loaded:i}}));const w=(0,l.compose)((0,s.connect)(O),(0,l.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return o().createElement(o().Fragment,null,m()(r)&&r[t]||r)},header:g.Z}),v,i.Yy,i.mI,(0,a.Z)((function(e){var t=e.loaded;return b()(t)})))(p.Z);var P="identify";const E={identify:w}},7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(27418),o=r.n(n),a=r(45697),i=r.n(a),l=r(5053),s=r.n(l),c=r(85294),u=r.n(c),f=r(72986),p=r.n(f),d=r(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,r,n,a,i=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(a){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function l(){var e;g(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return E(w(e=i.call.apply(i,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(d.Z,{msgId:"loading"}),s().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),E(w(e),"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),E(w(e),"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),E(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),r=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&h(t.prototype,r),l}(s().Component);E(C,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),E(C,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const j=C},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(5053),o=r.n(n);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(5053),o=r.n(n),a=r(30294),i=r(7472),l=r(80717),s=r(49848),c=r(36786),u=r.n(c),f=r(75480),p={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},d={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,s=e.loadingText,c=e.onClose,m=void 0===c?function(){}:c,y=e.title,b=void 0===y?"":y,g=e.clickOutEnabled,h=void 0===g||g,v=e.showClose,O=void 0===v||v,w=e.disabledClose,P=void 0!==w&&w,E=e.showFullscreen,C=void 0!==E&&E,j=e.fullscreenType,N=void 0===j?"full":j,I=e.buttons,S=void 0===I?[]:I,x=e.size,R=void 0===x?"":x,A=e.bodyClassName,M=void 0===A?"":A,k=e.children,F=e.draggable,_=void 0!==F&&F,D=e.fullscreenState,z=e.onFullscreen,T=e.fade,L=void 0!==T&&T,Z=e.fitContent,G=e.modalClassName,q=void 0===G?"":G,B=e.dialogClassName,J=void 0===B?"":B,V=e.enableFooter,H=void 0===V||V,K=p[R]||"",U=C&&"expanded"===D&&d.className[N]||"",W=r?o().createElement("div",{className:"modal-fixed ".concat(q," ")+(_?"ms-draggable":"")},o().createElement(i.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?m:function(){},containerClassName:"ms-resizable-modal",draggable:_,modal:!0,className:"modal-dialog modal-content"+K+U+J+(Z?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),C&&d.className[N]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return z("expanded"===D?"collapsed":"expanded")},glyph:d.glyph[D][N]}),O&&m&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:P}))),o().createElement("div",{role:"body",className:M},k),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(f.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?s:null),o().createElement(l.Z,{buttons:S})))):null;return L?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},W):W}))},9825:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K}),r(17097);var n=r(52353),o=r.n(n),a=r(27418),i=r.n(a),l=r(5053),s=r.n(l),c=r(30294),u=r(89208),f=r(49848),p=r(22222),d=r(1550),m=r(21914),y=r(42872),b=r(11196),g=r(96207),h=r(12587),v=r(57945),O=r(73014),w=r(87320),P=r(22694),E=r(46116),C=r(26125),j=r(31255),N=r(75110),I=r(8316),S=r(827),x=r(7877),R=r(55105),A=r(93152),M=r(37275),k=r(88798),F=r(4361),_=r(77674),D=r(81756);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=(0,p.zB)({enabled:function(e){return e.mapInfo&&e.mapInfo.enabled||e.controls&&e.controls.info&&e.controls.info.enabled||!1},responses:x.q7,validResponses:x.o9,requests:x.OK,format:x.us,map:S.Od,layers:N.l2,point:x.Bz,showModalReverse:function(e){return e.mapInfo&&e.mapInfo.showModalReverse},reverseGeocodeData:function(e){return e.mapInfo&&e.mapInfo.reverseGeocodeData},warning:function(e){return e.mapInfo&&e.mapInfo.warning},currentLocale:I.Pz,dockStyle:function(e){return(0,R.ic)(e,{height:!0})},formatCoord:function(e){return e.mapInfo&&e.mapInfo.formatCoord||M.ZP.getConfigProp("defaultCoordinateFormat")},showCoordinateEditor:function(e){return e.mapInfo&&e.mapInfo.showCoordinateEditor},showEmptyMessageGFI:function(e){return(0,x.x0)(e)},isEditingAllowed:j.nq,isCesium:A.c0,floatingIdentifyEnabled:function(e){return(0,S.Mc)(e)}}),G=(0,f.compose)((0,u.connect)((0,p.P1)(x.Qf,x.vR,(function(e){return e.browser&&e.browser.mobile}),(function(e,t,r){return{index:e,loaded:t,isMobile:r}})),{setIndex:m.oO})),q=(0,f.compose)(G,b.Yy,b.mI,(0,O.Z)((function(e){var t=e.loaded;return o()(t)})))(y.Z),B=(0,f.defaultProps)({formatCoord:"decimal",enabled:!1,draggable:!0,collapsible:!1,format:(0,k.wR)(),requests:[],responses:[],viewerOptions:{},viewer:q,purgeResults:function(){},hideMarker:function(){},clearWarning:function(){},changeMousePointer:function(){},showRevGeocode:function(){},hideRevGeocode:function(){},containerProps:{continuous:!1},enabledCoordEditorButton:!0,showCoordinateEditor:!1,showModalReverse:!1,reverseGeocodeData:{},enableRevGeocode:!0,wrapRevGeocode:!1,style:{},point:{},layer:null,map:{},layers:[],panelClassName:"modal-dialog info-panel modal-content",headerClassName:"modal-header",bodyClassName:"modal-body info-wrap",dock:!0,headerGlyph:"",closeGlyph:"1-close",className:"square-button",currentLocale:"en-US",fullscreen:!1,showTabs:!0,showCoords:!0,showLayerTitle:!0,showMoreInfo:!0,showEdit:!1,position:"right",size:660,getToolButtons:_.Z,getFeatureButtons:F.Z,showFullscreen:!1,validResponses:[],validator:k.Te,zIndex:1050}),J=(0,f.compose)((0,u.connect)(Z,{purgeResults:m.g,closeIdentify:m.Mc,onSubmitClickPoint:m.sv,onToggleShowCoordinateEditor:m.RA,onChangeFormat:m.Zw,changeMousePointer:d.Mo,clearWarning:m.XP,hideMarker:m.aN,showRevGeocode:m.Pg,hideRevGeocode:m.u0,onEnableCenterToMarker:m.PM.bind(null,"enabled"),onEdit:m.am},(function(e,t,r){return T(T(T(T({},r),e),t),{},{enabled:e.enabled&&(e.isCesium||!r.showInMapPopup)&&!e.floatingIdentifyEnabled})})),(0,f.compose)((0,u.connect)((0,p.zB)({highlight:x.hs,currentFeature:x.IA,currentFeatureCrs:x.Kc}),{toggleHighlightFeature:m.MO,zoomToExtent:d.Px}),h.Z),(0,u.connect)((0,p.P1)(A.$v,(function(e){return{mapType:e}})),{},(function(e,t,r){var n=e.mapType,o=r.showHighlightFeatureButton;return T(T({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["showHighlightFeatureButton"])),{},{showHighlightFeatureButton:"openlayers"===n&&o})})),B,G,b.mI,(0,u.connect)((function(){}),{setShowInMapPopup:m.Y$}),g.P_)(v.Z),V=(0,u.connect)((function(e){return{infoFormat:(0,x.us)(e)}}),{onInfoFormatChange:m.ws})(w.Z),H=(0,u.connect)((function(e){return{trigger:(0,S.Mc)(e)?"hover":"click",hoverEnabled:(0,x.qK)(e)}}),{onSetMapTrigger:m.wm})(P.Z);const K={IdentifyPlugin:i()(J,{Toolbar:{name:"info",position:6,tooltip:"info.tooltip",icon:s().createElement(c.Glyphicon,{glyph:"map-marker"}),help:s().createElement(D.Z,{msgId:"helptexts.infoButton"}),action:m.TM,selector:function(e){return{bsStyle:e.mapInfo&&e.mapInfo.enabled?"success":"primary",active:!(!e.mapInfo||!e.mapInfo.enabled)}}},Settings:{tool:[s().createElement(V,{key:"featureinfoformat",label:s().createElement(D.Z,{msgId:"infoFormatLbl"})}),s().createElement(H,{key:"featureinfotrigger"})],position:3}}),reducers:{mapInfo:C.Z},epics:E.ZP}},55105:(e,t,r)=>{"use strict";r.d(t,{Nr:()=>c,ic:()=>u,CF:()=>f}),r(91175);var n=r(827),o=r(52259);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e.maplayout&&e.maplayout.layout||{}},c=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return i(i({},e),{},l({},t,r[t]))}),{})||{}},f=function(e){var t=(0,n.Od)(e),r=c(e);return r&&t&&t.size&&{left:(0,o.parseLayoutValue)(r.left,t.size.width),bottom:(0,o.parseLayoutValue)(r.bottom,t.size.height),right:(0,o.parseLayoutValue)(r.right,t.size.width),top:(0,o.parseLayoutValue)(r.top,t.size.height)}}},69842:(e,t,r)=>{"use strict";r.d(t,{vE:()=>i});var n=r(27361),o=r.n(n),a=r(22222);r(75110),r(8316),r(86638);var i=function(e){return o()(e,"queryform.spatialField")};(0,a.P1)((function(e){return o()(e,"queryform.attributePanelExpanded")}),(function(e){return o()(e,"queryform.spatialPanelExpanded")}),(function(e){return o()(e,"queryform.crossLayerExpanded")}),(function(e,t,r){return{attributePanelExpanded:e,spatialPanelExpanded:t,crossLayerExpanded:r}}))},54625:e=>{e.exports=function(e){if(!e||!e.type)return null;var r=t[e.type];return r?"geometry"===r?{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:e}]}:"feature"===r?{type:"FeatureCollection",features:[e]}:"featurecollection"===r?e:void 0:null};var t={Point:"geometry",MultiPoint:"geometry",LineString:"geometry",MultiLineString:"geometry",Polygon:"geometry",MultiPolygon:"geometry",GeometryCollection:"geometry",Feature:"feature",FeatureCollection:"featurecollection"}},98805:(e,t,r)=>{var n=r(40180),o=r(62689),a=r(83140),i=r(79833);e.exports=function(e){return function(t){t=i(t);var r=o(t)?a(t):void 0,l=r?r[0]:t.charAt(0),s=r?n(r,1).join(""):t.slice(1);return l[e]()+s}}},89179:(e,t,r)=>{var n=r(55639),o=r(40554),a=r(14841),i=r(79833),l=n.isFinite,s=Math.min;e.exports=function(e){var t=Math[e];return function(e,r){if(e=a(e),(r=null==r?0:s(o(r),292))&&l(e)){var n=(i(e)+"e").split("e"),c=t(n[0]+"e"+(+n[1]+r));return+((n=(i(c)+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}},48403:(e,t,r)=>{var n=r(79833),o=r(11700);e.exports=function(e){return o(n(e).toLowerCase())}},7654:(e,t,r)=>{var n=r(81763);e.exports=function(e){return n(e)&&e!=+e}},31351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},59854:(e,t,r)=>{var n=r(89179)("round");e.exports=n},11700:(e,t,r)=>{var n=r(98805)("toUpperCase");e.exports=n},55745:(e,t,r)=>{var n=r(3465),o=n.featureCollection,a=r(98098),i=r(54625);e.exports=function(e,t,r){var l=n.distanceToDegrees(t,r),s=i(e),c=i(o(s.features.map((function(e){return function(e,t){var r=(new a.io.GeoJSONReader).read(e.geometry).buffer(t);return{type:"Feature",geometry:r=(new a.io.GeoJSONWriter).write(r),properties:{}}}(e,l)}))));return c.features.length>1?c:1===c.features.length?c.features[0]:void 0}},65442:(e,t,r)=>{var n=r(98098);e.exports=function(e,t){var r,o;r="Feature"===e.type?e.geometry:e,o="Feature"===t.type?t.geometry:t;var a=new n.io.GeoJSONReader,i=a.read(JSON.stringify(r)),l=a.read(JSON.stringify(o)),s=i.intersection(l);if(!s.isEmpty())return{type:"Feature",properties:{},geometry:(new n.io.GeoJSONWriter).write(s)}}},55877:(e,t,r)=>{var n=r(24261),o=r(71171),a=o;a.v1=n,a.v4=o,e.exports=a},71171:(e,t,r)=>{var n=r(85217),o=r(45327);e.exports=function(e,t,r){var a=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var l=0;l<16;++l)t[a+l]=i[l];return t||o(i)}}}]);