(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7528],{53001:(e,t,r)=>{"use strict";r.d(t,{xT:()=>n,H_:()=>o,Wv:()=>c,gC:()=>a,dG:()=>u,oQ:()=>i,Q2:()=>l,R3:()=>s,Zr:()=>f,Op:()=>p,l$:()=>d,uL:()=>g,zg:()=>m,M3:()=>O,st:()=>A,US:()=>E,$c:()=>v,pW:()=>R,$D:()=>y,ke:()=>C,vw:()=>T,r5:()=>S,X1:()=>w,V3:()=>h,p2:()=>L});var n="BACKGROUND_SELECTOR:ADD_BACKGROUND",o="BACKGROUND_SELECTOR:REMOVE_BACKGROUND",c="BACKGROUND_SELECTOR:SET_CURRENT_BACKGROUND_LAYER",a="BACKGROUND_SELECTOR:BACKGROUND_ADDED",u="BACKGROUND_SELECTOR:BACKGROUND_EDITED",i="BACKGROUND_SELECTOR:ADD_BACKGROUND_PROPERTIES",l="BACKGROUND_SELECTOR:SET_BACKGROUND_MODAL_PARAMS",s="BACKGROUND_SELECTOR:UPDATE_BACKGROUND_THUMBNAIL",f="BACKGROUND_SELECTOR:BACKGROUNDS_CLEAR",p="BACKGROUND_SELECTOR:CREATE_BACKGROUNDS_LIST",d="BACKGROUND_SELECTOR:CLEAR_MODAL_PARAMETERS",g="BACKGROUND_SELECTOR:CONFIRM_DELETE_BACKGROUND_MODAL",m="BACKGROUND_SELECTOR:ALLOW_BACKGROUNDS_DELETION";function O(e){return{type:p,backgrounds:e}}function A(e){return{type:n,source:e}}function E(e){return{type:i,modalParams:e}}function v(e){return{type:l,modalParams:e}}function R(e){return{type:a,layerId:e}}function y(e){return{type:u,layerId:e}}function C(e){return{type:c,layerId:e}}function T(e){return{type:m,allow:e}}function S(e,t){return{type:s,thumbnailData:e,id:t}}function w(e){return{type:o,backgroundId:e}}function h(){return{type:d}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:g,show:e,layerTitle:t,layerId:r}}},31273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>R,V3:()=>y,HR:()=>C,xi:()=>T,ur:()=>S,vK:()=>w,nm:()=>h,QF:()=>L,zZ:()=>G,uN:()=>b,Bz:()=>_,im:()=>P,CO:()=>D,$X:()=>x,Mt:()=>N,Oq:()=>I,YO:()=>k,PR:()=>B,wI:()=>U,bv:()=>M,mh:()=>K,$Y:()=>j,eA:()=>F,UT:()=>H,cS:()=>V,l3:()=>q,Kz:()=>W,vg:()=>Q,xM:()=>X,do:()=>Z,lb:()=>Y,tt:()=>$,nX:()=>z,BG:()=>J,Rc:()=>ee,K4:()=>te,Dw:()=>re,dL:()=>ne,In:()=>oe,r1:()=>ce,XW:()=>ae,L8:()=>ue,i3:()=>ie,XM:()=>le,X7:()=>se,M3:()=>fe,N3:()=>pe,SU:()=>de,wo:()=>ge,ye:()=>me,m:()=>Oe,wl:()=>Ae,A4:()=>ve,vG:()=>Re,ky:()=>ye,Wf:()=>Ce,Ts:()=>Te,IT:()=>Se,XS:()=>we,tx:()=>he,We:()=>Le,nx:()=>Ge,E9:()=>be});var n=r(59551),o=r(67007),c=r(3475),a=r(32354),u=r(80416),i=r(1550),l=r(24262),s=r(63202),f=r(13311),p=r.n(f),d=r(88113),g=r(75110),m=r(97395);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={csw:n.Z,wms:o.ZP,wmts:c.Z,backgrounds:a.Z},R="CATALOG:ADD_LAYERS_FROM_CATALOGS",y="CATALOG:TEXT_SEARCH",C="CATALOG:RECORD_LIST_LOADED",T="CATALOG:RESET_CATALOG",S="CATALOG:CATALOG_CLOSE",w="CATALOG:RECORD_LIST_LOAD_ERROR",h="CATALOG:CHANGE_CATALOG_FORMAT",L="CATALOG:ADD_LAYER_ERROR",G="CATALOG:CHANGE_SELECTED_SERVICE",b="CATALOG:CHANGE_CATALOG_MODE",_="CATALOG:CHANGE_METADATA_TEMPLATE",P="CATALOG:CHANGE_TITLE",D="CATALOG:CHANGE_TEXT",x="CATALOG:CHANGE_TYPE",N="CATALOG:CHANGE_SERVICE_PROPERTY",I="CATALOG:CHANGE_SERVICE_FORMAT",k="CATALOG:FOCUS_SERVICES_LIST",B="CATALOG:CHANGE_URL",U="CATALOG:ADD_CATALOG_SERVICE",M="CATALOG:DELETE_CATALOG_SERVICE",K="CATALOG:ADD_SERVICE",j="CATALOG:DELETE_SERVICE",F="CATALOG:SAVING_SERVICE",H="CATALOG:GET_METADATA_RECORD_BY_ID",V="CATALOG:SET_LOADING",q="CATALOG:TOGGLE_TEMPLATE",W="CATALOG:TOGGLE_THUMBNAIL",Q="CATALOG:TOGGLE_ADVANCED_SETTINGS",X="CATALOG:FORMAT_OPTIONS_FETCH",Z="CATALOG:FORMAT_OPTIONS_LOADING",Y="CATALOG:SET_FORMAT_OPTIONS";function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,c=e.text,a=e.options,u=void 0===a?{}:a;return{type:y,format:t,url:r,startPosition:n,maxRecords:o,text:c,options:u}}function z(e,t){return{type:C,searchOptions:e,result:t}}function J(e){return{type:h,format:e}}function ee(e){return{type:F,status:e}}function te(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:V,loading:e}}function re(e){return{type:G,service:e}}function ne(e){return{type:k,status:e}}function oe(e,t){return{type:b,mode:e,isNew:t}}function ce(e){return{type:P,title:e}}function ae(e){return{type:D,text:e}}function ue(e,t){return{type:N,property:e,value:t}}function ie(e){return{type:I,format:e}}function le(e){return{type:x,newType:e}}function se(e){return{type:B,url:e}}function fe(){return{type:K}}function pe(e){return{type:U,service:e}}function de(e){return{type:M,service:e}}function ge(){return{type:j}}function me(){return{type:T}}function Oe(e){return{type:w,error:e}}function Ae(){return{type:S}}function Ee(e,t){return{type:"CATALOG:DESCRIBE_ERROR",layer:e,error:t}}var ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.zoomToLayer,n=void 0!==r&&r;return function(t,r){var o=r(),c=(0,g.l2)(o),a=(0,l.R8)(e,c||[]);return t((0,u.A4)(A(A({},e),{},{id:a}))),n&&e.bbox&&t((0,i.Px)(e.bbox.bounds,e.bbox.crs)),"wms"===e.type?v.wms.describeLayers((0,l.Hi)(e),e.name).then((function(r){if(r){var n=p()(r,(function(t){return t.name===e.name}));if(n&&"WFS"===n.owsType){var c=s.jQ(s.$F(n.owsURL),(0,d.kS)(o));t((0,u.He)(a,{search:{url:c,type:"wfs"}}))}}})).catch((function(r){return t(Ee(e,r))})):null}};function Re(e){return{type:L,error:e}}function ye(e){return{type:H,metadataOptions:e}}var Ce=function(e){return{type:_,metadataTemplate:e}},Te=function(){return{type:Q}},Se=function(){return{type:q}},we=function(){return{type:W}},he=function(e){return{type:X,url:e}},Le=function(e){return{type:Z,loading:e}},Ge=function(e,t){return{type:Y,formats:e,url:t}};function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,m.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}},59551:(e,t,r)=>{"use strict";r.d(t,{Z:()=>A});var n=r(72500),o=r.n(n),c=r(91175),a=r.n(c),u=r(10928),i=r.n(u),l=r(27418),s=r.n(l),f=r(75875),p=r.n(f),d=r(63202),g=r(86267),m=function(e){var t=o().parse(e,!0);return o().format(s()({},t,{search:null},{query:s()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},O={parseUrl:m,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(9942),r.e(6372)]).then(function(){t(p().get(e).then((function(e){if(e){var t=r(66372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},c=0;c<n.length;c++){var a=n[c],u=a.name.localPart,i={};i="references"===u&&a.value?{value:a.value.content&&(0,d.$F)(a.value.content[0])||a.value.content||a.value,scheme:a.value.scheme}:a.value.content&&a.value.content[0]||a.value.content||a.value,o[u]&&Array.isArray(o[u])?o[u].push(i):o[u]?o[u]=[o[u],i]:o[u]=i}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o){return new Promise((function(c){Promise.all([r.e(9942),r.e(1269)]).then(function(){var u=r(66372),l=u.CSW,s=u.marshaller,f=u.unmarshaller,O=s.marshalString({name:"csw:GetRecords",value:l.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(O=function(e,t,r){return r?'<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"\n    xmlns:ogc="http://www.opengis.net/ogc"\n    xmlns:gml="http://www.opengis.net/gml"\n    xmlns:dc="http://purl.org/dc/elements/1.1/"\n    xmlns:dct="http://purl.org/dc/terms/"\n    xmlns:gmd="http://www.isotc211.org/2005/gmd"\n    xmlns:gco="http://www.isotc211.org/2005/gco"\n    xmlns:gmi="http://www.isotc211.org/2005/gmi"\n    xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="'.concat(e,'" maxRecords="').concat(t,'">\n    <csw:Query typeNames="csw:Record">\n        <csw:ElementSetName>full</csw:ElementSetName>\n        <csw:Constraint version="1.1.0">\n            <ogc:Filter>\n            <ogc:And>\n                <ogc:PropertyIsLike wildCard="%" singleChar="_" escapeChar="\\">\n                    <ogc:PropertyName>csw:AnyText</ogc:PropertyName>\n                    <ogc:Literal>%').concat(r,"%</ogc:Literal>\n                </ogc:PropertyIsLike>\n                <ogc:Or>\n                <ogc:PropertyIsEqualTo>\n                    <ogc:PropertyName>dc:type</ogc:PropertyName>\n                    <ogc:Literal>dataset</ogc:Literal>\n                </ogc:PropertyIsEqualTo>\n                <ogc:PropertyIsEqualTo>\n                    <ogc:PropertyName>dc:type</ogc:PropertyName>\n                    <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n                </ogc:PropertyIsEqualTo>\n               </ogc:Or>\n            </ogc:And>\n            </ogc:Filter>\n        </csw:Constraint>\n    </csw:Query>\n</csw:GetRecords>"):'<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"\n        xmlns:ogc="http://www.opengis.net/ogc"\n        xmlns:gml="http://www.opengis.net/gml"\n        xmlns:dc="http://purl.org/dc/elements/1.1/"\n        xmlns:dct="http://purl.org/dc/terms/"\n        xmlns:gmd="http://www.isotc211.org/2005/gmd"\n        xmlns:gco="http://www.isotc211.org/2005/gco"\n        xmlns:gmi="http://www.isotc211.org/2005/gmi"\n        xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="'.concat(e,'" maxRecords="').concat(t,'">\n        <csw:Query typeNames="csw:Record">\n            <csw:ElementSetName>full</csw:ElementSetName>\n            <csw:Constraint version="1.1.0">\n        <ogc:Filter>\n            <ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n           </ogc:Or>\n        </ogc:Filter>\n            </csw:Constraint>\n        </csw:Query>\n    </csw:GetRecords>')}(t,n,o)),c(p().post(m(e),O,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=f.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r=t.value,n=r.searchResults.abstractRecord||r.searchResults.any,o={numberOfRecordsMatched:r.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:r.searchResults.numberOfRecordsReturned,nextRecord:r.searchResults.nextRecord},c=[];if(n)for(var u=0;u<n.length;u++){var l=n[u].value,s={dateStamp:l.dateStamp&&l.dateStamp.date,fileIdentifier:l.fileIdentifier&&l.fileIdentifier.characterString&&l.fileIdentifier.characterString.value,identificationInfo:l.abstractMDIdentification&&l.abstractMDIdentification.value};if(l.boundingBox){var p,m=void 0;if((p=Array.isArray(l.boundingBox)?a()(l.boundingBox):l.boundingBox)&&p.value){var O,A,E,v,R=null!==(O=null===(A=p.value)||void 0===A?void 0:A.crs)&&void 0!==O?O:"",y=null===(E=R.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===E?void 0:E[0],C=(0,g.makeNumericEPSG)(null===(v=R.match(/EPSG:[0-9]+/))||void 0===v?void 0:v[0]),T=p.value.lowerCorner,S=p.value.upperCorner,w=C||(0,g.extractCrsFromURN)(y)||i()(R.split(":"));"EPSG:4326"===(w?"EPSG:"===w.slice(0,5)?(0,g.makeNumericEPSG)(w):(0,g.makeNumericEPSG)("EPSG:".concat(w)):"EPSG:4326")&&"CRS84"!==w&&"OGC:CRS84"!==w&&(T=[T[1],T[0]],S=[S[1],S[0]]),m=(0,g.makeBboxFromOWS)(T,S)}s.boundingBox={extent:m,crs:"EPSG:4326"}}var h=l.dcElement;if(h){for(var L={references:[]},G=0;G<h.length;G++){var b=h[G],_=b.name.localPart,P={};P="references"===_&&b.value?{value:b.value.content&&(0,d.$F)(b.value.content[0])||b.value.content||b.value,scheme:b.value.scheme}:b.value.content&&b.value.content[0]||b.value.content||b.value,L[_]&&Array.isArray(L[_])?L[_].push(P):L[_]?L[_]=[L[_],P]:L[_]=P}s.dc=L}c.push(s)}return o.records=c,o}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n){return new Promise((function(o){o(O.getRecords(e,t,r,n))}))},workspaceSearch:function(e,t,n,o,c){return new Promise((function(a){Promise.all([r.e(9942),r.e(1269)]).then(function(){var u=r(84454).Filter,i=c||"%",l=o&&"%"+o+"%"||"%",s=u.propertyIsLike("identifier",i+":"+l),f=u.filter(s);a(O.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const A=O},3475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(75875),o=r.n(n),c=r(63202),a=r(72500),u=r.n(a),i=r(27418),l=r.n(i),s=r(5055),f=r.n(s),p=r(84596),d=r.n(p),g=r(86267),m=r(7294),O={},A=function(e){var t=u().parse(e,!0);return u().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},E=function(e,t,r,n,o){for(var c=e.Capabilities.Contents,a=(0,m.G6)(e),u=(0,m.s5)(e),i=c.TileMatrixSet&&d()(c.TileMatrixSet)||[],s=[],f=i.length,p=0;p<f;p++)s.push((0,g.getEPSGCode)(i[p]["ows:SupportedCRS"]));var O=c.Layer,A=d()(O).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:A.length,numberOfRecordsReturned:Math.min(r,A.length),nextRecord:t+Math.min(r,A.length)+1,records:A.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:i,queryable:!!(0,m.b4)(a,"GetFeatureInfo","KVP"),requestEncoding:u,style:(0,m.EN)(e),format:(0,m.JY)(e),GetTileURL:(0,m.b4)(a,"GetTile",u),capabilitiesURL:o})}))}},v={parseUrl:A,getRecords:function(e,t,r,n){var a=O[e];return a&&(new Date).getTime()<a.timestamp+1e3*((0,c.u8)("cacheExpire")||60)?new Promise((function(o){o(E(a.data,t,r,n,e))})):o().get(A(e)).then((function(o){var c;return f().parseString(o.data,{explicitArray:!1},(function(e,t){c=t})),O[e]={timestamp:(new Date).getTime(),data:c},E(c,t,r,n,e)}))},getCapabilities:function(e){var t=O[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,c.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):o().get(A(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),O[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return v.getRecords(e,t,r,n)},reset:function(){Object.keys(O).forEach((function(e){delete O[e]}))}};const R=v},32354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(27361),o=r.n(n),c=r(63202),a=function(e,t,r,n){var a=o()(c.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),u=a.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:a.length,numberOfRecordsReturned:u.length,records:u,service:{Name:"Background Provider"}})}))};const u={getRecords:a,reset:function(){},textSearch:function(e,t,r,n){return a(0,t,r,n)}}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>u,B0:()=>i,Mz:()=>l,TC:()=>s,qS:()=>f,Pe:()=>p,TP:()=>d});var n=r(22222),o=r(75110),c=r(93152),a=r(24262),u=function(e){return e.backgroundSelector&&e.backgroundSelector.source},i=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},f=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},p=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},d=(0,n.P1)(o.l2,c.$v,(function(e,t){return e.filter((function(e){return e&&"background"===e.group})).map((function(e){return(0,a.kf)(e,t)}))||[]}))},88113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>f,PG:()=>p,_x:()=>d,Mm:()=>g,dP:()=>m,SX:()=>O,ZL:()=>A,_S:()=>E,iH:()=>v,R7:()=>R,Q7:()=>y,n7:()=>C,bA:()=>T,hm:()=>S,E2:()=>w,Cb:()=>h,eK:()=>L,Im:()=>G,e8:()=>b,$t:()=>_,kS:()=>P,y:()=>D,l2:()=>x,HN:()=>N,BM:()=>I,am:()=>k,LV:()=>B,CK:()=>U});var n=r(22222),o=r(27361),c=r.n(o),a=r(827),u=r(76712);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return c()(e,"catalog.services")},p=(0,n.P1)((function(e){return c()(e,"catalog.default.staticServices")}),f,(function(e,t){var r=null==e?void 0:e.default_map_backgrounds;return r?(r.readOnly=!0,l(l({},t),{},{default_map_backgrounds:r})):t})),d=function(e){return c()(e,"catalog.default.tileSizes",[256,512])},g=function(e){return c()(e,"controls.metadataexplorer.group")},m=function(e){return c()(e,"catalog.saving")},O=function(e){return c()(e,"catalog.result")},A=function(e){return c()(e,"catalog.openCatalogServiceList")},E=function(e){return c()(e,"catalog.newService")},v=function(e){return c()(e,"catalog.newService.type","csw")},R=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"]'))},y=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"].type'),function(e){return c()(e,'catalog.default.staticServices["'.concat(c()(e,"catalog.selectedService"),'"].type'),"csw")}(e))},C=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"].layerOptions'),{})},T=function(e){return c()(e,"catalog.searchOptions")},S=function(e){return c()(e,"catalog.loadingError")},w=function(e){return c()(e,"catalog.loading",!1)},h=function(e){return c()(e,"catalog.selectedService")},L=function(e){return c()(e,"catalog.mode","view")},G=function(e){return c()(e,"catalog.layerError")},b=function(e){return c()(e,"catalog.searchOptions.text","")},_=function(e){return"metadataexplorer"===c()(e,"controls.toolbar.active")||c()(e,"controls.metadataexplorer.enabled")},P=function(e){return(c()(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},D=function(e){return c()(e,"catalog.pageSize",4)},x=function(e){return c()(e,"catalog.delayAutoSearch",1e3)},N=(0,n.zB)({projection:a.uy}),I=function(e){return c()(e,"catalog.formatsLoading",!1)},k=function(e){return c()(e,"catalog.newService.supportedFormats.imageFormats",u.QQ)},B=function(e){return c()(e,"catalog.newService.supportedFormats.infoFormats",(0,u.B8)())},U=function(e){return c()(e,"catalog.newService.formatUrlUsed","")}}}]);