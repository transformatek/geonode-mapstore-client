(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8986],{32420:(e,t,r)=>{"use strict";r.d(t,{DH:()=>d,dN:()=>f,Bm:()=>m,FU:()=>v,v$:()=>y});var o=r(75875),n=r.n(o),a=r(8575),i=r(27418),l=r.n(i);function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e,t){return n().get(e+"?service=WFS&version=1.1.0&request=GetFeature",{params:l()({outputFormat:"application/json"},t)}).then((function(e){return"object"!==u(e.data)?JSON.parse(e.data):e.data}))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.version,o=void 0===r?"1.1.0":r,n=a.parse(e,!0);return a.format(l()({},n,{query:l()({service:"WFS",version:o,request:"GetCapabilities"},n.query)}))},m=function(e,t,r){return n().get(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.version,n=void 0===o?"1.1.0":o,i=s(r,["version"]),u=a.parse(e,!0);return a.format(l()({},u,{query:l()(p({service:"WFS",typeName:t,version:n,request:"GetFeature"},i),u.query)}))}(e,t,r))},v=function(e){return n().get(f(e))},y=function(e,t){return n().get(function(e,t){var r=a.parse(e,!0);return a.format(p(p({},r),{},{search:void 0,query:p(p({},r.query),{},{service:"WFS",version:"1.1.0",typeName:t,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(e,t)).then((function(e){return e.data}))}},47805:(e,t,r)=>{"use strict";r.d(t,{toCQLFilter:()=>X,isFilterValid:()=>H});var o=r(65692),n=r(78889),a=r(99321),i=r(89291),l=r(89737),s=r(2245),u=r.n(s),c=r(90183),p=r(27361),g=r.n(p),d=r(14293),f=r.n(d),m=r(52353),v=r.n(m),y=r(1469),F=r.n(y),h=r(13311),b=r.n(h),w=r(30998),O=r.n(w),S=r(47037),L=r.n(S),C=r(85564),T=r.n(C);function G(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x,q=function(e){return e&&e.replace?e.replace(/\'/g,"''"):e},I=function(e,t){return!f()(e)&&"isNull"!==t||!v()(e)&&"isNull"===t},P=function(e){return'"'+e+'"'},k=function(e){return e?"1.0"===e?"1.0.0":"1.1"===e?"1.1.0":e:"2.0"},A={ogc:{startTag:"<ogc:PropertyName>",endTag:"</ogc:PropertyName>"},fes:{startTag:"<fes:ValueReference>",endTag:"</fes:ValueReference>"}},E=function(e,t,r,o){var n;if("><"===t){if(r.startDate&&r.endDate){var i=r.startDate.toISOString?r.startDate.toISOString():r.startDate,l=r.endDate.toISOString?r.endDate.toISOString():r.endDate;n=a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":LowerBoundary><"+o+":Literal>"+i+"</"+o+":Literal></"+o+":LowerBoundary><"+o+":UpperBoundary><"+o+":Literal>"+l+"</"+o+":Literal></"+o+":UpperBoundary>")}}else if(r.startDate){var s=r.startDate.toISOString?r.startDate.toISOString():r.startDate;n=a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+s+"</"+o+":Literal>")}return n},Q=function(e,t,r,o){var n;return I(r,t)&&(n="isNull"===t?a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag):"="===t?a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+r+"</"+o+":Literal>"):a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>*"+r+"*</"+o+":Literal>")),n},V=function(e,t,r,o){var n="";return I(r,t)&&"="===t&&""!==r&&(n=a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+r+"</"+o+":Literal>")),n},W=function(e,t,r,o){var n;if("><"===t)f()(r)||null===r.lowBound||void 0===r.lowBound||null!==r.upBound&&void 0!==r.upBound?f()(r)||null===r.upBound||void 0===r.upBound||null!==r.lowBound&&void 0!==r.lowBound?f()(r)||null===r.upBound||void 0===r.upBound||null===r.lowBound||void 0===r.lowBound||(n=a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":LowerBoundary><"+o+":Literal>"+r.lowBound+"</"+o+":Literal></"+o+":LowerBoundary><"+o+":UpperBoundary><"+o+":Literal>"+r.upBound+"</"+o+":Literal></"+o+":UpperBoundary>")):n=a.ogcComparisonOperators["<="](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+r.upBound+"</"+o+":Literal>"):n=a.ogcComparisonOperators[">="](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+r.lowBound+"</"+o+":Literal>");else{var i=f()(r)||null===r.lowBound||void 0===r.lowBound?r:r.lowBound;f()(i)||(n=a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+i+"</"+o+":Literal>"))}return n},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.typeName,r=e.geometryName,o=e.cqlFilter,n=void 0===o?"INCLUDE":o;return"queryCollection('".concat(t,"', '").concat(r,"','").concat(q(n),"')")},U=function(e){return"collectGeometries(".concat(e,")")},M=function(e,t,r){var o,s,c,p,g,d,f,m=[];if(e.filterFields&&e.filterFields.length>0)""!==(o=e.groupFields&&e.groupFields.length>0?x.processOGCFilterGroup(e.groupFields[0],e,r):x.processOGCFilterFields(null,e,r))&&m.push(o);else if(e.simpleFilterFields&&e.simpleFilterFields.length>0){var v=a.ogcLogicalOperators.AND(r,e.simpleFilterFields.map((function(e){return function(e,t){var r="";switch(e.type){case"date":r=E(e.attribute,e.operator,e.values,t);break;case"number":r=W(e.attribute,e.operator,e.values,t);break;case"string":r=Q(e.attribute,e.operator,e.values,t);break;case"boolean":r=V(e.attribute,e.operator,e.values,t);break;case"list":e.values&&e.values.length>0&&(r=e.values.reduce((function(r,o){var n=null===o||"null"===o?"isNull":"=";return r+Q(e.attribute,n,o,t)}),""),r=a.ogcLogicalOperators.OR(t,r))}return r}(e,r)})).join(""));m.push(v)}if(F()(e.spatialField)?(p=b()(e.spatialField,(function(e){return"BBOX"===e.operation})))||(c=e.spatialField):e.spatialField&&("BBOX"===e.spatialField.operation?p=e.spatialField:c=[e.spatialField]),p){if(F()(p.geometry&&p.geometry.extent[0])){var y=p.geometry.extent.reduce((function(e,o){var n=Object.assign({},p);return p.geometry.extent=o,e+x.processOGCSpatialFilter(t,n,r)}),"");s=a.ogcLogicalOperators.OR(r,y)}m.push(s)}else if(c&&(c=c.filter((function(e){return e&&e.geometry&&e.operation}))).length>0){var h=c.map((function(e){return x.processOGCSpatialFilter(t,e,r)})).join("");s=c.length>1?a.ogcLogicalOperators[e.spatialFieldOperator||"AND"](r,h):h,m.push(s)}if(e.crossLayerFilter&&e.crossLayerFilter.operation){var w=N(N({},e.crossLayerFilter),{},{attribute:e.crossLayerFilter.attribute});Array.isArray()?w.forEach((function(e){return m.push(x.processOGCCrossLayerFilter(e,r))})):m.push(x.processOGCCrossLayerFilter(w,r))}return e.options&&e.options.cqlFilter&&m.push((g=e.options.cqlFilter,d={filterNS:r,wfsVersion:t,gmlVersion:(0,n.wfsToGmlVersion)(t)},f=u()(d),(0,l.Z)(f)((0,i.read)(g)))),m},X=function(e){var t;try{t=e instanceof Object?e:JSON.parse(e)}catch(e){return e}var r,o,n=[];if(t.filterFields&&t.filterFields.length>0)(r=x.processCQLFilterGroup(t.groupFields[0],t))&&n.push(r);else if(t.simpleFilterFields&&t.simpleFilterFields.length>0){var a=t.simpleFilterFields.reduce((function(e,t){var r=e,o=x.processCQLSimpleFilterField(t);return!1!==o&&(r=e.length>0?e+" AND ("+o+")":"("+o+")"),r}),"");a=a.length>0?a:"INCLUDE",n.push(a)}if(t.spatialField&&(o=x.processCQLSpatialFilter(t))&&n.push(o),t.crossLayerFilter){var i=t.crossLayerFilter,l=i.operation,s=i.attribute,u=i.collectGeometries&&i.collectGeometries.queryCollection;if(l&&s&&u){var c=u.typeName,p=u.geometryName,g=x.getCrossLayerCqlFilter(i),d=U(R({typeName:c,geometryName:p,cqlFilter:g}));n.push("".concat(l,"(").concat(s,",").concat(d,")"))}}return n.length?"("+(n.length>1?n.join(") AND ("):n[0])+")":null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.filterFields&&e.filterFields.length>0||e.simpleFilterFields&&e.simpleFilterFields.length>0||e.spatialField&&e.spatialField.geometry&&e.spatialField.operation||F()(e.spatialField)&&O()(e.spatialField,(function(e){return e.operation&&e.geometry}))>-1||e.crossLayerFilter&&e.crossLayerFilter.collectGeometries&&e.crossLayerFilter.collectGeometries.queryCollection&&e.crossLayerFilter.collectGeometries.queryCollection.geometryName&&e.crossLayerFilter.collectGeometries.queryCollection.typeName};x={processOGCFilterGroup:function(e,t,r){var o=x.processOGCFilterFields(e,t,r),n=x.findSubGroups(e,t.groupFields);return n.length>0&&n.forEach((function(e){o+=x.processOGCFilterGroup(e,t,r)})),""!==o?a.ogcLogicalOperators[e.logic](r,o):""},processOGCFilterFields:function(e,t,r){var o=e?t.filterFields.filter((function(t){return t.groupId===e.id&&I(t.value,t.operator)})):t.filterFields.filter((function(e){return I(e.value,e.operator)}));return o.length?o.reduce((function(e,t){var o;switch(t.type){case"date":case"date-time":case"time":o=E(t.attribute,t.operator,t.value,r);break;case"number":o=W(t.attribute,t.operator,t.value,r);break;case"string":o=Q(t.attribute,t.operator,t.value,r);break;case"boolean":o=V(t.attribute,t.operator,t.value,r);break;case"list":o=function(e,t,r,o){var n;return f()(r)||(n=a.ogcComparisonOperators[t](o,A[o].startTag+e+A[o].endTag+"<"+o+":Literal>"+r+"</"+o+":Literal>")),n}(t.attribute,t.operator,t.value,r)}return"isNull"===t.operator&&(o=Q(t.attribute,t.operator,t.operator,r)),o&&e.push(o),e}),[]).join(""):""},processOGCCrossLayerFilter:function(e,t){var r=t||"ogc",o=A[r].startTag+e.attribute+A[r].endTag;if(e.collectGeometries){var n=x.getCrossLayerCqlFilter(e);o+='<ogc:Function name="collectGeometries"><ogc:Function name="queryCollection">'+"<ogc:Literal>".concat(e.collectGeometries.queryCollection.typeName,"</ogc:Literal>")+"<ogc:Literal>".concat(e.collectGeometries.queryCollection.geometryName,"</ogc:Literal>")+"<ogc:Literal><![CDATA[".concat(n,"]]></ogc:Literal>")+"</ogc:Function></ogc:Function>"}return"DWITHIN"===e.operation&&(o+="<"+r+':Distance units="m">'+(e.distance||0)+"</"+r+":Distance>"),a.ogcSpatialOperators[e.operation](r,o)},getGetFeatureBase:function(e,t,r,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=k(e),i="<wfs:GetFeature ";switch(i+=o?'outputFormat="'+o+'" ':"",i+=t&&(t.startIndex||0===t.startIndex)?'startIndex="'+t.startIndex+'" ':"",i+=n.viewParams?' viewParams="'.concat(n.viewParams,'" '):"",a){case"1.0.0":i+=t&&t.maxFeatures?'maxFeatures="'+t.maxFeatures+'" ':"",i=r?i+' resultType="hits"':i,i+='service="WFS" version="'+a+'" outputFormat="GML2" xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '+(n.noSchemaLocation?"":'xsi:schemaLocation="http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/WFS-basic.xsd"')+">";break;case"1.1.0":i+=t&&t.maxFeatures?'maxFeatures="'+t.maxFeatures+'" ':"",i=r?i+' resultType="hits"':i,i+='service="WFS" version="'+a+'" xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '+(n.noSchemaLocation?"":'xsi:schemaLocation="http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"')+">";break;default:i+=t&&t.maxFeatures?'count="'+t.maxFeatures+'" ':"",i=r&&!t?i+' resultType="hits"':i,i+='service="WFS" version="'+a+'" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '+(n.noSchemaLocation?"":'xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd"')+">"}return i},toOGCFilterParts:M,findSubGroups:function(e,t){return t.filter((function(t){return t.groupId===e.id}))},toCQLFilter:X,getCrossLayerCqlFilter:function(e){return g()(e,"collectGeometries.queryCollection.cqlFilter")||(g()(e,"collectGeometries.queryCollection.filterFields")||[]).length>0&&(g()(e,"collectGeometries.queryCollection.groupFields")||[]).length>0&&x.toCQLFilter(e.collectGeometries.queryCollection)||"INCLUDE"},processCQLFilterGroup:function(e,t){var r="NOR"===e.logic?N(N({},e),{},{logic:"AND",negateAll:!0}):e,o=x.processCQLFilterFields(r,t),n=x.findSubGroups(r,t.groupFields);if(n.length>0){var a=n.map((function(e){return(r.negateAll?"NOT (":"(")+x.processCQLFilterGroup(e,t)+")"})).join(" "+r.logic+" ");return o?[o,a].join(" "+r.logic+" "):a}return o},processCQLSimpleFilterField:function(e){var t=!1;switch(e.type){case"date":t=x.cqlDateField(e.attribute,e.operator,e.values);break;case"number":t=x.cqlNumberField(e.attribute,e.operator,e.values);break;case"string":t=x.cqlStringField(e.attribute,e.operator,e.values);break;case"boolean":t=x.cqlBooleanField(e.attribute,e.operator,e.values);break;case"list":if(e.values.length!==e.optionsValues.length){var r=!1,o=e.values.reduce((function(e,t){return null===t||"null"===t?r=!0:e.push("'"+t+"'"),e}),[]);t=o.length>0?e.attribute+" IN("+o.join(",")+")":t,r&&(t=t?t+" OR isNull("+e.attribute+")=true":"isNull("+e.attribute+")=true")}}return!!(t&&t.length>0)&&t},processCQLSpatialFilter:function(e){var t=(F()(e.spatialField)?e.spatialField:[e.spatialField]).filter((function(e){return e&&e.geometry&&e.operation})),r="";return t.forEach((function(o,n){if(r+=o.operation+'("'+o.attribute+'",',o.collectGeometries&&o.collectGeometries.queryCollection)r+=U(R(o.collectGeometries.queryCollection));else{var a=o.geometry.projection||"";a=2===a.split(":").length?"SRID="+a.split(":")[1]+";":"",r+=a+x.getCQLGeometryElement(o.geometry.coordinates,o.geometry.type)}r+=")",n<t.length-1&&(r+=" ".concat(e.spatialFieldOperator||"AND"," "))})),r},processCQLFilterFields:function(e,t){var r=t.filterFields.filter((function(t){return t.groupId===e.id})),o=[];return r&&(r.forEach((function(t){var r;switch(t.type){case"date":case"time":case"date-time":r=x.cqlDateField(t.attribute,t.operator,t.value);break;case"number":r=x.cqlNumberField(t.attribute,t.operator,t.value);break;case"string":r=x.cqlStringField(t.attribute,t.operator,t.value);break;case"boolean":r=x.cqlBooleanField(t.attribute,t.operator,t.value);break;case"list":r=x.cqlListField(t.attribute,t.operator,t.value)}r&&o.push(e.negateAll?"NOT ("+r+")":r)})),o=o.join(" "+e.logic+" ")),o},getCQLGeometryElement:function(e,t){var r=t+"(";switch(t){case"Point":r+=e.join(" ");break;case"MultiPoint":e.forEach((function(t,o){r+=t.join(" "),r+=o<e.length-1?", ":""}));break;case"Polygon":e.forEach((function(t,n){r+="(";var a=(0,o.closePolygon)(t).map((function(e){return e[0]+" "+e[1]}));r+=a.join(", "),r+=")",r+=n<e.length-1?", ":""}));break;case"MultiPolygon":e.forEach((function(t,n){r+="(",t.forEach((function(e,n){r+="(";var a=(0,o.closePolygon)(e).map((function(e){return e[0]+" "+e[1]}));r+=a.join(", "),r+=")",r+=n<t.length-1?", ":""})),r+=")",r+=n<e.length-1?", ":""}))}return r+=")"},cqlStringField:function(e,t,r){var o,n=P(e);return f()(r)||(o="isNull"===t?"isNull("+n+")=true":"="===t?n+t+"'"+q(r)+"'":"ilike"===t?"strToLowerCase("+n+") LIKE '%"+q(r).toLowerCase()+"%'":n+" LIKE '%"+q(r)+"%'"),o},cqlDateField:function(e,t,r){var o;return"><"===t?r.startDate&&r.endDate&&(o="("+e+">='"+(r.startDate.toISOString?r.startDate.toISOString():r.startDate)+"' AND "+e+"<='"+(r.endDate.toISOString?r.endDate.toISOString():r.endDate)+"')"):r.startDate&&(o=e+t+"'"+(r.startDate.toISOString?r.startDate.toISOString():r.startDate)+"'"),o},cqlNumberField:function(e,t,r){var o,n=P(e);if("><"===t)f()(r)||null===r.lowBound||void 0===r.lowBound||null!==r.upBound&&void 0!==r.upBound?f()(r)||null===r.upBound||void 0===r.upBound||null!==r.lowBound&&void 0!==r.lowBound?f()(r)||null===r.upBound||void 0===r.upBound||null===r.lowBound||void 0===r.lowBound||(o="("+n+">='"+r.lowBound+"' AND "+n+"<='"+r.upBound+"')"):o="("+n+"<='"+r.upBound+"')":o="("+n+">='"+r.lowBound+"')";else{var a=f()(r)||null===r.lowBound||void 0===r.lowBound?r:r.lowBound;f()(a)||(o=n+" "+t+" '"+a+"'")}return o},cqlBooleanField:function(e,t,r){var o="";return f()(r)||""===r||"="===t&&(o='"'+e+'"'+t+"'"+r+"'"),o},cqlListField:function(e,t,r){return x.cqlStringField(e,t,r)},toOGCFilter:function(e,t,r){var o,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"EPSG:4326";try{o=t instanceof Object?t:JSON.parse(t)}catch(e){return e}var u=k(r||"2.0"),c="2.0"===u?"fes":"ogc",p=x.getGetFeatureBase(u,o.pagination,a,i,t&&t.options),g=x.toOGCFilterParts(o,u,c),d="";return g.length>0&&(d="<"+c+":Filter>",1===g.length?d+=g[0]:(d+="<"+c+":And>",g.forEach((function(e){d+=e})),d+="</"+c+":And>"),d+="</"+c+":Filter>"),p+="<wfs:Query ".concat("2.0"===u?"typeNames":"typeName",'="').concat(e,'" ').concat("native"!==s&&'srsName="'.concat(s,'"')||"",">"),p+=d,l&&(p+=l.map((function(e){return A[c].startTag+e+A[c].endTag})).join("")),n&&n.sortBy&&n.sortOrder&&(p+="<"+c+":SortBy><"+c+":SortProperty>"+A[c].startTag+n.sortBy+A[c].endTag+"<"+c+":SortOrder>"+n.sortOrder+"</"+c+":SortOrder></"+c+":SortProperty></"+c+":SortBy>"),p+"</wfs:Query></wfs:GetFeature>"},reprojectFilterInNativeCrs:function(e,t){var r,o=e.spatialField.geometry.projection,n=e.spatialField.geometry.center,a=e.spatialField.geometry.radius,i=(0,c.reprojectGeoJson)(e.spatialField.geometry,e.spatialField.geometry.projection||"EPSG:3857",t).coordinates,l=n&&[(r=(0,c.reproject)(n,o,t)).x,r.y],s=a&&(0,c.reproject)([a,0],o,t).x;return N(N({},e),{},{spatialField:N(N({},e.spatialField),{},{geometry:N(N({},e.spatialField.geometry),{},{center:l,radius:s,coordinates:i,projection:t})})})},processOGCSpatialFilter:function(e,t,r){if(t.collectGeometries)return x.processOGCCrossLayerFilter(t);var i=A[r].startTag+t.attribute+A[r].endTag;switch(t.operation){case"INTERSECTS":case"DWITHIN":case"WITHIN":case"CONTAINS":i+=(0,o.processOGCGeometry)((0,n.wfsToGmlVersion)(e),t.geometry),"DWITHIN"===t.operation&&(i+="<"+r+':Distance units="m">'+(t.geometry.distance||0)+"</"+r+":Distance>");break;case"BBOX":var l=t.geometry.extent[0]+" "+t.geometry.extent[1],s=t.geometry.extent[2]+" "+t.geometry.extent[3];i+='<gml:Envelope srsName="'+t.geometry.projection+'"><gml:lowerCorner>'+l+"</gml:lowerCorner><gml:upperCorner>"+s+"</gml:upperCorner></gml:Envelope>"}return a.ogcSpatialOperators[t.operation](r,i)},mergeFiltersToOGC:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.nsPlaceholder,r=void 0===t?"ogc":t,o=e.ogcVersion,a=void 0===o?"2.0":o,s=e.addXmlnsToRoot,c=void 0!==s&&s,p=e.xmlnsToAdd,g=void 0===p?[]:p,d=u()({filterNS:r,wfsVersion:a,gmlVersion:(0,n.wfsToGmlVersion)(a)}),f=(0,l.Z)(d),m=arguments.length,v=new Array(m>1?m-1:0),y=1;y<m;y++)v[y-1]=arguments[y];var F=d.filter(d.and.apply(d,G(T()(v.filter((function(e){return!!e&&(L()(e)||H(e)&&!e.disabled)})).map((function(e){return L()(e)?[f((0,i.read)(e))]:M(e,a,r)}))))));if(c){var h=F.indexOf(">");return"".concat(F.slice(0,h)).concat(g.length>0?" ".concat(g.join(" ")):"").concat(F.slice(h))}return F}}},59286:(e,t,r)=>{"use strict";r.r(t),r.d(t,{validateStringAttribute:()=>g,getCleanTemplate:()=>d,parseCustomTemplate:()=>f,generateTemplateString:()=>m,parseTemplate:()=>v,default:()=>y});var o,n=r(47037),a=r.n(n),i=r(18721),l=r.n(i),s=r(92742),u=r.n(s),c=r(41106),p=r.n(c),g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=a()(t)&&u()(t.substring(r,t.length-o))||"";return l()(e,n)},d=function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){return""},l=a()(e)&&e.match(r),s=l&&l.map((function(e){var r=e.replace(/(<([^>]+)>)/gi,"");return{previous:e,next:g(t,r,o,n)?r:i(e)}}))||null;return s&&s.reduce((function(e,t){return e.replace(t.previous,t.next)}),e)||e||""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return"".concat(u()(e.substring(2,e.length-1))," Not Available")};return p()(d(e||"",t,/\$\{.*?\}/g,2,1,r))(t)},m=(o={},function(e,t){var r=o[e];return r&&!t||(r=function(r){var o=e.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g,(function(e,o){return(t||function(e){return e})(o.trim().split(".").reduce((function(e,t){return e&&e[t]}),r))}));return a()(o)&&o||""},t||(o[e]=r)),r}),v=function(e,t){r.e(181).then(function(){var o=r(90181),n="function"==typeof e?e():e;try{var a=o.transform(n,{presets:["es2015","react","stage-0"]}).code;t(a)}catch(e){t(null,e)}}.bind(null,r)).catch(r.oe)};const y={generateTemplateString:m,parseTemplate:v,validateStringAttribute:g,getCleanTemplate:d,parseCustomTemplate:f}}}]);