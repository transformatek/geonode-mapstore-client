(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4126],{85148:(n,t,e)=>{"use strict";e.d(t,{Qw:()=>m,m$:()=>g,AF:()=>b,WT:()=>p,ns:()=>y,RP:()=>w,aK:()=>k,oP:()=>D});var r=e(75110),s=e(22222),i=e(27361),a=e.n(i),o=e(13311),u=e.n(o);function j(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){f(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var m=function(n,t){return function(e){return a()(e,"dimension.data[".concat(t,"][").concat(n,"]"))}},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return u()(n.dimensions||[],{name:t})},v=function(n,t){return function(e){return m(n.id,t)(e)||h(n,t)}},g=function(n){return(0,r.l2)(n).reduce((function(t,e){var r=v(e,"time")(n);return r?d(d({},t),{},f({},e.id,r)):t}),{})},b=function(n){return(0,r.l2)(n).filter((function(t){var e=a()(n,"timeline.settings.showHiddenLayers"),r=h(t,"time");return(e||t.visibility)&&r}))},p=function(n){var t=a()(n,"dimension.currentTime");return t&&t.split("/")[0]},y=function(n){return a()(n,"dimension.offsetTime")},w=function(n){return!!y(n)},k=((0,s.P1)(g,(function(n){return Object.keys(n).reduce((function(t,e){return[].concat(j(t),j(n[e]&&n[e].values||[]))}),[]).sort()||[]})),function(n){return function(t){return j(a()(v(n,"time")(t),"values",[])).sort()}}),D=function(n,t){var e=m(t,"time")(n),r=e&&e.domain&&e.domain.split("--");if(r&&2===r.length)return r&&{start:r[0],end:r[1]};var s=e&&e.domain&&e.domain.split(",");return s&&s.length>0?{start:s[0],end:s[s.length-1]}:null}},55237:(n,t,e)=>{"use strict";e.d(t,{tr:()=>g,jb:()=>b,Xu:()=>p,un:()=>w,Qn:()=>k,_q:()=>D,og:()=>O,uH:()=>z});var r=e(47037),s=e.n(r),i=e(47960),a=e.n(i),o=e(27361),u=e.n(o),j=e(84596),c=e.n(j),l=e(30381),d=e.n(l),f=(e(86638),/PT?[\d\.]+[YMWDHMS]/),m=function(n){return n?s()(n)?new Date(n).getTime():(a()(n)&&n.getTime(),n):null},h=function(n,t){var e=m(t),r=1/0,s=-1;return n.forEach((function(n,t){var i=m(n),a=Math.abs(i-e);a<r&&(r=a,s=t)})),s},v=function(n){var t=n.start,e=n.end,r=n.duration,s=d().duration(r).asMilliseconds();return(new Date(e).getTime()-new Date(t).getTime())/s},g=function(n){for(var t=n.start,e=n.end,r=n.duration,s=d().duration(r).asMilliseconds(),i=[],a=new Date(t),o=new Date(e);a<=o;)i.push(new Date(a).toISOString()),a.setTime(a.getTime()+s);return i},b=function(n){var t=n.start,e=n.end,r=n.duration;return g({start:t,end:e,duration:r}).map((function(n){return{start:new Date(n),end:new Date(new Date(n).getTime()+d().duration(r).asMilliseconds())}}))},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.start,e=n.end,r=n.duration,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.start,a=s.end;if(!i||!a)return{count:v({start:t,end:e,duration:r}),start:t,end:e};var o=d().duration(r).asMilliseconds(),u=new Date(t).getTime(),j=new Date(e).getTime(),c=new Date(i).getTime(),l=new Date(a).getTime(),f=Math.ceil((c-u)/o),m=Math.floor((l-u)/o),h=Math.floor((j-u)/o);if(f>=0&&m<=h){var g=m-f;return{start:new Date(u+Math.max(0,f)*o),end:new Date(u+Math.min(h,m)*o),count:g}}return{count:v({start:t,end:e,duration:r}),start:t,end:e}},y=function(n){return n.match(f)[0]},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.start,e=n.end,r=arguments.length>1?arguments[1]:void 0,s=new Date(t),i=new Date(e),a=Math.floor(i.getTime()-s.getTime())/r,o=d().duration(a).toISOString(),u=y(o);return{range:{start:t,end:e},resolution:u}},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return n[h(n,t)]},D=function(n){return n&&n.indexOf&&n.indexOf("--")>0},O=function(n,t){var e=d()(n).diff(t);return{start:e>=0?t:n,end:e>=0?n:t}},z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.Domains,e=void 0===t?{}:t,r=arguments.length>1?arguments[1]:void 0,s=c()(e.DimensionDomain||[]).concat(),i=e["@version"]||e.version,a=u()(e,"SpaceDomain.BoundingBox");return a&&s.push({Identifier:"space",Domain:a}),s.map((function(n){var t=n.Identifier,e=n.Domain;return{source:{type:"multidim-extension",version:i,url:r},name:t,domain:e}}))}},46700:(n,t,e)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-nz":76319,"./en-nz.js":76319,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-tw":74152,"./zh-tw.js":74152};function s(n){var t=i(n);return e(t)}function i(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}s.keys=function(){return Object.keys(r)},s.resolve=i,n.exports=s,s.id=46700}}]);