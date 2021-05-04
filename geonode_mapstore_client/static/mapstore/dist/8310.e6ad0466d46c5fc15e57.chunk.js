(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8310],{91753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var o=r(45697),n=r.n(o),a=r(5053),i=r.n(a),s=r(10928),c=r.n(s),p=r(14293),u=r.n(p),l=r(56307),f=r.n(l),d=(r(21787),r(52259)),y=function(e){return[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()]};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}f().Draw.Polygon.prototype._calculateFinishDistance=function(e){if(this._markers.length>0){var t=this._map.latLngToContainerPoint(this._markers[0].getLatLng()),r=this._map.latLngToContainerPoint(this._markers[this._markers.length-1].getLatLng()),o=new(f().Marker)(e,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),n=this._map.latLngToContainerPoint(o.getLatLng());return Math.min(t.distanceTo(n),r.distanceTo(n))}return 1/0};var j=r(27418),L=r(90183),E=L.reproject,M=L.reprojectBbox,D=L.calculateCircleCoordinates,x=L.reprojectGeoJson,T=r(80379).pointToLayer,k=Math.PI/180,G=function(e,t,r){if("EPSG:4326"===r)return{center:t,srs:r,radius:e};var o=e/40075017*360/Math.cos(k*t[1]),n=E(t,"EPSG:4326",r);if(o){var a=E([t[0]+o,t[1]],"EPSG:4326",r);return{center:n,srs:r,radius:Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2))}}return{center:n,srs:r,radius:e}},A=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EPSG:4326";if("EPSG:4326"===r||void 0===e)return{center:t,projection:r,radius:e};var o=E({x:t.lng,y:t.lat},r,"EPSG:4326");if(void 0===e)return{center:o,projection:r,radius:e};var n=E([t.lng+e,t.lat],r,"EPSG:4326"),a=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),i=a*Math.cos(k*o.y)*40075017/360;return{center:o,projection:"EPSG:4326",radius:i}},I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,r,o,n,a=(o=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(n){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function i(){var e;v(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return C(O(e=a.call.apply(a,[this].concat(r))),"onDrawStart",(function(){e.drawing=!0})),C(O(e),"onDrawCreated",(function(t){e.drawing=!1;var r,o=t.layer,n=o.toGeoJSON();"marker"===t.layerType?r=f().latLngBounds(n.geometry.coordinates,n.geometry.coordinates):(o._map||(o._map=e.props.map,o._renderer=e.props.map.getRenderer(o),o._project()),r=o.getBounds());var a=y(r),i=r.getCenter();i=[i.lng,i.lat];var s=n.geometry.coordinates,c="EPSG:4326",p=n.geometry.type,u=o.getRadius?o.getRadius():0;if("circle"===t.layerType){n.projection="EPSG:4326",a=M(a,"EPSG:4326",c="EPSG:3857");var l=G(o._mRadius,i,c);i=l.center,u=l.radius,s=D(i,u,100),n.radius=o.getRadius?o.getRadius():0,i=[i.x,i.y],p="Polygon"}e.drawLayer.addData(n);var d={type:p,extent:a,center:i,coordinates:s,radius:u,projection:c};e.props.options&&e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner);var g=e.convertFeaturesToGeoJson(t.layer,e.props);e.props.onEndDrawing(d,e.props.drawOwner),e.props.onGeometryChanged([g],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"")})),C(O(e),"onUpdateGeom",(function(t,r){var o=e.convertFeaturesToGeoJson(t,r);r.onGeometryChanged([o],r.drawOwner)})),C(O(e),"addLayer",(function(t){e.clean();var r=f().geoJson(null,{pointToLayer:function(e,t){var r=A(e.radius,t,e.projection),o=r.center,n=r.radius;return f().circle(o,n||5)},style:function(e){return t.style&&t.style[e.geometry.type]||{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}}});e.props.map.addLayer(r),t.features&&t.features.length>0&&r.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod)),e.drawLayer=r})),C(O(e),"addGeojsonLayer",(function(t){var r=t.features,o=t.projection,n=t.style;e.clean();var a=f().geoJson(r,{style:function(e){return e.style||n},pointToLayer:function(e,t){var r=E({x:t.lng,y:t.lat},o,"EPSG:4326");return T(f().latLng(r.y,r.x),e,n)}});e.drawLayer=a.addTo(e.props.map)})),C(O(e),"replaceFeatures",(function(t){e.drawLayer?(e.drawLayer.clearLayers(),"Circle"===e.props.drawMethod?(e.drawLayer.options.pointToLayer=function(e,t){var r=A(e.radius,t,e.projection),o=r.center,n=r.radius;return f().circle(o,n||5)},e.drawLayer.options.style={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}):e.drawLayer.options.pointToLayer=function(e,r){var o=E({x:r.lng,y:r.lat},t.options&&t.options.featureProjection||"EPSG:4326","EPSG:4326");return T(f().latLng(o.y,o.x),e,t.style)},e.drawLayer.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod))):e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style})})),C(O(e),"endDrawing",(function(t){e.replaceFeatures(t);var r=c()(t.features);"Circle"!==e.props.drawMethod||!r||u()(r.center)||u()(r.radius)?r&&e.props.onEndDrawing(r,e.props.drawOwner):e.props.onEndDrawing(m(m({},r),{},{coordinates:D(r.center,r.radius,100)}),e.props.drawOwner)})),C(O(e),"addDrawInteraction",(function(t){e.removeAllInteractions(),"Point"===t.drawMethod||"MultiPoint"===t.drawMethod?e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}):e.addLayer(t),e.props.map.on("draw:created",e.onDrawCreated,O(e)),e.props.map.on("draw:drawstart",e.onDrawStart,O(e)),"LineString"===t.drawMethod||"Bearing"===t.drawMethod||"MultiLineString"===t.drawMethod?e.drawControl=new(f().Draw.Polyline)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},showLength:!1,repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Polygon"===t.drawMethod||"MultiPolygon"===t.drawMethod?e.drawControl=new(f().Draw.Polygon)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5],guidelineDistance:5},allowIntersection:!1,showLength:!1,showArea:!1,repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"BBOX"===t.drawMethod?e.drawControl=new(f().Draw.Rectangle)(e.props.map,{draw:!1,shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Circle"===t.drawMethod?e.drawControl=new(f().Draw.Circle)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},showRadius:!1,repeatMode:!0}):"Point"!==t.drawMethod&&"MultiPoint"!==t.drawMethod||(e.drawControl=new(f().Draw.Marker)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},repeatMode:!0})),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable(),e.drawControl.enable()})),C(O(e),"addDrawOrEditInteractions",(function(t){var r=[];t.features.map((function(e){var t;e&&e.geometry&&e.geometry.type&&!(0,d.isSimpleGeomType)(e.geometry.type)&&("GeometryCollection"===e.geometry.type?(t=e.geometry.geometries.map((function(t){return t.coordinates.map((function(r,o){return{type:"Feature",properties:m({},e.properties),id:t.type+o,geometry:{coordinates:r,type:(0,d.getSimpleGeomType)(t.type)}}}))})),r.push({type:"FeatureCollection",features:t})):(t=e.geometry.coordinates.map((function(t,r){return{type:"Feature",properties:m({},e.properties),id:e.geometry.type+r,geometry:{coordinates:t,type:(0,d.getSimpleGeomType)(e.geometry.type)}}})),r.push({type:"FeatureCollection",features:t})))}));var o=j({},t,{features:r.length>0?r:[{}]});e.drawLayer?(e.drawLayer.clearLayers(),e.drawLayer.addData(e.convertFeaturesPolygonToPoint(o.features,o.drawMethod))):e.addGeojsonLayer({features:t.features&&t.options.featureProjection&&"EPSG:4326"!==t.options.featureProjection?t.features.map((function(e){return x(e,t.options.featureProjection,"EPSG:4326")})):t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}),t.options.editEnabled&&e.addEditInteraction(o),t.options.drawEnabled&&e.addDrawInteraction(o)})),C(O(e),"addEditInteraction",(function(t){e.clean(),e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:j({},t.style,{poly:{icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}})});var r=e.drawLayer.getLayers();setTimeout((function(){r.forEach((function(r){r.getLayers&&r.getLayers()&&r.getLayers().length?r.getLayers().forEach((function(r){r.on("edit",(function(r){return e.onUpdateGeom(r.target,t)})),r.on("moveend",(function(r){return e.onUpdateGeom(r.target,t)})),r.editing&&r.editing.enable()})):(r.on("edit",(function(r){return e.onUpdateGeom(r.target,t)})),r.on("moveend",(function(r){return e.onUpdateGeom(r.target,t)})),r.editing&&r.editing.enable())}))}),0),e.editControl=new(f().Control.Draw)({edit:{featureGroup:e.drawLayer,poly:{allowIntersection:!1},edit:!0},draw:{polygon:{allowIntersection:!1,showArea:!0}}}),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable()})),C(O(e),"removeAllInteractions",(function(){e.removeEditInteraction(),e.removeDrawInteraction()})),C(O(e),"removeDrawInteraction",(function(){null!==e.drawControl&&void 0!==e.drawControl&&(e.props.options&&e.props.options.stopAfterDrawing&&(e.drawControl.setOptions({repeatMode:!1}),e.props.onDrawStopped()),e.drawControl.disable(),e.drawControl=null,e.props.map.off("draw:created",e.onDrawCreated,O(e)),e.props.map.off("draw:drawstart",e.onDrawStart,O(e)),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable())})),C(O(e),"removeEditInteraction",(function(){e.drawLayer&&(e.drawLayer.getLayers().forEach((function(e){e.getLayers&&e.getLayers()&&e.getLayers().length?e.getLayers().forEach((function(e){e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable()})):(e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable())})),e.editControl=null),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable()})),C(O(e),"cleanAndStop",(function(){e.removeAllInteractions(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),C(O(e),"clean",(function(){e.removeEditInteraction(),e.removeDrawInteraction(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),C(O(e),"convertFeaturesPolygonToPoint",(function(e,t){return"Circle"===t?e.map((function(e){var t=void 0!==e.center&&void 0!==e.radius?A(e.radius,{lat:e.center.y,lng:e.center.x},e.projection):e,r=t.center,o=t.projection,n=t.radius;return m(m({},e),{},{coordinates:r?[r.x,r.y]:e.coordinates,center:r||e.center,projection:o||e.projection,radius:void 0!==n?n:e.radius,type:"Point"})})):e})),C(O(e),"convertFeaturesToGeoJson",(function(t,r){var o;if((0,d.isSimpleGeomType)(r.drawMethod))o=t.toGeoJSON().geometry;else{if("GeometryCollection"===r.drawMethod)return{type:"GeometryCollection",geometries:e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()})).map((function(e){return"FeatureCollection"===e.type?{type:"Multi"+e.features[0].geometry.type,coordinates:e.features.map((function(e){return e.geometry.coordinates}))}:{type:e.geometry.type,coordinates:e.geometry.coordinates}}))};var n=e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()}));o={type:r.drawMethod,coordinates:n.reduce((function(e,t){return e.concat([t.geometry.coordinates])}),[])}}return j({},t.toGeoJSON(),{geometry:o})})),e}return t=i,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=!(!this.props.messages&&!this.context.messages)&&this.context.messages.drawLocal;if(t&&(f().drawLocal=t),this.props.drawStatus!==e.drawStatus||"replace"===e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style});break;case"start":this.addDrawInteraction(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeAllInteractions();break;case"replace":this.replaceFeatures(e);break;case"clean":this.cleanAndStop();break;case"endDrawing":this.endDrawing(e);break;default:return}}},{key:"render",value:function(){return null}}])&&w(t.prototype,r),i}(i().Component);C(I,"displayName","DrawSupport"),C(I,"propTypes",{map:n().object,drawOwner:n().string,drawStatus:n().string,drawMethod:n().string,options:n().object,features:n().array,onChangeDrawingStatus:n().func,onGeometryChanged:n().func,onDrawStopped:n().func,onEndDrawing:n().func,messages:n().object,style:n().object}),C(I,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onEndDrawing:function(){},style:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1,editing:{fill:1}}});const _=I},67465:(e,t,r)=>{"use strict";r.d(t,{Z:()=>L});var o=r(5053),n=r.n(o),a=r(64386),i=r.n(a),s=r(45697),c=r.n(s),p=r(56307),u=r.n(p),l=r(47037),f=r.n(l),d=r(25064),y=r(21751);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e,t){var r=new MutationObserver((function(){e.update()}));e.once("remove",(function(){r&&r.disconnect(),r=null})),r.observe(t,{attributes:!0,childList:!0,subtree:!0})},L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,e);var t,r,o,a,s=(o=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(a){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function c(){var e;v(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return C(O(e=s.call.apply(s,[this].concat(r))),"updatePopup",(function(){(e._popups||[]).map((function(e){return e.popup.update()}))})),C(O(e),"popupClose",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.target,o=(r=void 0===r?{}:r).options,n=(o=void 0===o?{}:o).id;n&&e.props.onPopupClose(n)})),C(O(e),"preparePopups",(function(){var t=e.props,r=t.popups,o=void 0===r?[]:r,n=t.map,a=e.props.map.getSize();return(e._popups||[]).forEach((function(t){var r=t.popup;r.off("remove",e.popupClose),r&&e.props.map.removeLayer(r)})),e._popups=o.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=.9*a.x,o=.9*a.y,i=t.id,s=t.position.coordinates,c=t.component,p=t.content,l=t.className,f=t.maxWidth,y=void 0===f?r:f,g=t.maxHeight,h=void 0===g?o:g,v=t.autoPan,w=void 0===v||v,b=t.offset,P=void 0===b?[0,7]:b,O=y>r?r:y,S=h>o?o:h,C=d.fH(i,l);C.setAttribute("style","max-width: ".concat(O,"px; max-height: ").concat(S,"px")),d.R3(C,p);var L=u().popup({id:i,autoClose:!1,closeOnClick:!1,autoPan:w,autoPanPadding:u().point(70,70),maxWidth:O,maxHeight:S,className:"ms-leaflet-popup",offset:P}).setContent(C);return L.once("remove",e.popupClose),c&&j(L,C),L.setLatLng(s),n.addLayer(L),m({popup:L},t)})),e._popups})),C(O(e),"stopPropagationOnMouseMove",(function(e){e.stopPropagation()})),C(O(e),"fireMouseOutEvent",(function(){e.props.map.fireEvent("mouseout")})),e}return t=c,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&(this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"componentDidMount",value:function(){this.props.map&&this.props.map.on("resize",this.updatePopup)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){var e=this;(this._popups||[]).forEach((function(t){var r,o,n=t.popup;n.off("remove",e.popupClose),n&&(null===(r=e.props.map)||void 0===r||null===(o=r.removeLayer)||void 0===o||o.call(r,n))})),this.props.map&&(this.props.map.off("resize",this.updatePopup),this.props.map.getContainer().removeEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().removeEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"renderPopups",value:function(){return this.preparePopups().filter((function(e){return!!e.component})).map((function(e){var t=e.popup,r=e.props,o=void 0===r?{}:r,a=e.component,s=e.id,c=t.getContent(),p=f()(a)&&y.default[a]||a,u=n().isValidElement(p)&&p||n().createElement(p,o);return c?i().createPortal(u,c,s):null}))}},{key:"render",value:function(){return n().createElement("div",null,this.renderPopups())}}])&&w(t.prototype,r),c}(n().Component);C(L,"propTypes",{map:c().object,popups:c().arrayOf(c().object),onPopupClose:c().func}),C(L,"defaultProps",{popups:[],onPopupClose:function(){}})},21751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{IDENTIFY_POPUP:()=>O,default:()=>S});var o=r(5053),n=r.n(o),a=r(73014),i=r(11196),s=r(49848),c=r(89208),p=r(22222),u=r(7877),l=r(21914),f=r(42872),d=r(1469),y=r.n(d),g=r(52353),h=r.n(g),m=r(79870),v=r(827),w=(0,s.compose)((0,c.connect)((0,p.P1)(u.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,s.defaultProps)({index:0,responses:[]})),b=(0,p.P1)([u.q7,u.o9,u.OK,u.us,u.x0,v.Mc,u.vR],(function(e,t,r,o,n,a,i){return{responses:e,validResponses:t,requests:r,format:o,showEmptyMessageGFI:n,missingResponses:(r||[]).length-(e||[]).length,renderEmpty:a,loaded:i}}));const P=(0,s.compose)((0,c.connect)(b),(0,s.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return n().createElement(n().Fragment,null,y()(r)&&r[t]||r)},header:m.Z}),w,i.Yy,i.mI,(0,a.Z)((function(e){var t=e.loaded;return h()(t)})))(f.Z);var O="identify";const S={identify:P}},43143:(e,t,r)=>{"use strict";r.d(t,{qH:()=>c,qj:()=>p,qq:()=>u});var o,n=r(17621),a=r.n(n),i=r(14841),s=r.n(i),c=function(e,t,r,n){var a=e;isNaN(parseFloat(e))&&(a=o.hexToHsv(e)[0]);var i=.5/(r-1),s=t/(r-1),c=[];1===r&&(i=.5,s=t/2);for(var p=0;p<r;p++){var u=a+p*s-t/2,l=i*p+.3,f=l;n&&(u=n.h||u,l=n.s||l,f=n.v||f),c.push(o.hsvToHex(u,l,f,p))}return c},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return a()(e).toHexString()},u=function(e,t,r){var o=a()(e);return e&&o.setAlpha(s()(void 0!==t?t:o.getAlpha())).toRgbString()||r};o={decToHex:function(e){var t="0123456789ABCDEF",r=parseInt(e,10);return r=isNaN(r)?0:r,t.charAt(((r=r>255||r<0?0:r)-r%16)/16)+t.charAt(r%16)},rgbToHex:function(e,t,r){return e instanceof Array?o.rgbToHex(e[0],e[1],e[2]):"#"+o.decToHex(e)+o.decToHex(t)+o.decToHex(r)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,t,r){if(e instanceof Array)return o.rgbToHsv(e[0],e[1],e[2]);var n,a,i,s,c,p=e/255,u=t/255,l=r/255;switch(n=Math.min(Math.min(p,u),l),i=(a=Math.max(Math.max(p,u),l))-n,a){case n:s=0;break;case p:s=60*(u-l)/i,u<l&&(s+=360);break;case u:s=60*(l-p)/i+120;break;case l:s=60*(p-u)/i+240}return c=0===a?0:1-n/a,[Math.round(s),c,a]},distributedColorsHEX:function(e){for(var t=360/(e-1),r=[],n=function e(t,r,n){var a=e(t,r,n);return o.rgbToHex(a)},a=0;a<e;a++)r.push(n(t*a,.57,.63));return r},sameToneRangeColors:c,hsvToRgb:function(e,t,r){if(e instanceof Array)return o.hsvToRgb(e[0],e[1],e[2]);var n,a,i,s=Math.floor(e/60%6),c=e/60-s,p=r*(1-t),u=r*(1-c*t),l=r*(1-(1-c)*t);switch(s){case 0:n=r,a=l,i=p;break;case 1:n=u,a=r,i=p;break;case 2:n=p,a=r,i=l;break;case 3:n=p,a=u,i=r;break;case 4:n=l,a=p,i=r;break;case 5:n=r,a=p,i=u}return[o.realToDec(n),o.realToDec(a),o.realToDec(i)]},hsvToHex:function(e,t,r){var n=o.hsvToRgb(e,t,r);return o.rgbToHex(n)},hexToHsv:function(e){var t=e;if(t.length>0){"#"===t[0]&&(t=e.substring(1));var r=o.hexToRgb(t);return o.rgbToHsv(r)}return null},hexToRgb:function(e){var t,r,o,n=e;return"#"===n.charAt(0)&&(n=e.substring(1)),t=n.charAt(0)+n.charAt(1),r=n.charAt(2)+n.charAt(3),o=n.charAt(4)+n.charAt(5),[parseInt(t,16),parseInt(r,16),parseInt(o,16)]},colorToHexStr:p,colorToRgbaStr:u}},66287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{isAttrPresent:()=>m,isStrokeStyle:()=>v,isFillStyle:()=>w,isTextStyle:()=>b,isCircleStyle:()=>P,isMarkerStyle:()=>O,isSymbolStyle:()=>S,getStylerTitle:()=>C,geometryFunctions:()=>j,getGeometryFunction:()=>L,registerGeometryFunctions:()=>E,addOpacityToColor:()=>M,hashCode:()=>D,registerStyle:()=>T,setSymbolsStyles:()=>k,fetchStyle:()=>G,getSymbolsStyles:()=>A,hashAndStringify:()=>I,domNodeToString:()=>_,createSvgUrl:()=>R,createStylesAsync:()=>F,getStyleParser:()=>N});var o=r(14293),n=r.n(o),a=r(61868),i=r(43143),s=r(9669),c=r.n(s),p=r(42757),u=r.n(p),l=r(50436),f=r.n(l);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h={sld:new(u()),css:new(f())},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.filter((function(t){return!n()(e[t])})).length>0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["color","opacity","dashArray","dashOffset","lineCap","lineJoin","weight"];return m(e,t)},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["fillColor","fillOpacity"];return m(e,t)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["label","font","fontFamily","fontSize","fontStyle","fontWeight","textAlign","textRotationDeg"];return m(e,t)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["radius"];return m(e,t)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["iconGlyph","iconShape","iconUrl"];return m(e,t)},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["symbolUrl"];return m(e,t)},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O(e)?"Marker":S(e)?"Symbol":b(e)?"Text":P(e)||"Circle Style"===e.title?"Circle":w(e)?"Polygon":v(e)?"Polyline":""},j={centerPoint:{type:"Point",func:function(){}},lineToArc:{type:"LineString",func:function(){}},startPoint:{type:"Point",func:function(){}},endPoint:{type:"Point",func:function(){}}},L=function(e,t){return j[e]&&j[e][t]},E=function(e,t,r){if(!(e&&t&&r))throw new Error("specify all the params: functionName, func, type");j[e]={func:t,type:r}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFCC33",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return(0,a.t8)("a",t,e)},D=function(e){var t,r=0;if(0===e.length)return r;for(t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return r},x={},T=function(e,t){if(!e||!t)throw new Error("specify all the params: sha, style");x[e]=t},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x=e},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style";return x[e]&&x[e][t]},A=function(){return x},I=function(e){if(e)return D(JSON.stringify(e));throw new Error("hashAndStringify: specify mandatory params: style")},_=function(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return S(e)&&e.symbolUrl?c().get(t,{"Content-Type":"image/svg+xml;charset=utf-8"}).then((function(t){var r=window.URL||window.webkitURL||window,o=(new DOMParser).parseFromString(t.data,"image/svg+xml").firstElementChild;o.setAttribute("fill",e.fillColor||"#FFCC33"),o.setAttribute("fill-opacity",n()(e.fillOpacity)?.2:e.fillOpacity),o.setAttribute("stroke",(0,i.qq)(e.color||"#FFCC33",n()(e.opacity)?1:e.opacity)),o.setAttribute("stroke-opacity",n()(e.opacity)?1:e.opacity),o.setAttribute("stroke-width",e.weight||1),o.setAttribute("width",e.size||32),o.setAttribute("height",e.size||32),o.setAttribute("stroke-dasharray",e.dashArray||"none");var a=new Blob([_(o)],{type:"image/svg+xml;charset=utf-8"}),s=r.createObjectURL(a),c=document.createElement("canvas");c.width=e.size,c.height=e.size;var p=c.getContext("2d"),u=new Image;u.src=s;var l="",f=I(e);return u.onload=function(){try{p.drawImage(u,c.width/2-u.width/2,c.height/2-u.height/2),l=c.toDataURL("image/png"),c=null,T(f,{style:y(y({},e),{},{symbolUrlCustomized:s}),base64:l})}catch(e){return}},T(f,{style:y(y({},e),{},{symbolUrlCustomized:s}),svg:o,base64:l}),s})).catch((function(){return r(70898)})):new Promise((function(e){e(null)}))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return S(e)&&!G(I(e))?R(e,e.symbolUrl||e.symbolUrlCustomized).then((function(t){return t?y(y({},e),{},{symbolUrlCustomized:t}):G(I(e))})).catch((function(){return y(y({},e),{},{symbolUrlCustomized:r(70898)})})):new Promise((function(t){t(S(e)?G(I(e)):e)}))}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sld";return h[e]}},70898:(e,t,r)=>{e.exports=r.p+"symbolMissing.svg"},31351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},23493:(e,t,r)=>{var o=r(23279),n=r(13218);e.exports=function(e,t,r){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return n(r)&&(a="leading"in r?!!r.leading:a,i="trailing"in r?!!r.trailing:i),o(e,t,{leading:a,maxWait:t,trailing:i})}},55877:(e,t,r)=>{var o=r(24261),n=r(71171),a=n;a.v1=o,a.v4=n,e.exports=a},71171:(e,t,r)=>{var o=r(85217),n=r(45327);e.exports=function(e,t,r){var a=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var s=0;s<16;++s)t[a+s]=i[s];return t||n(i)}}}]);