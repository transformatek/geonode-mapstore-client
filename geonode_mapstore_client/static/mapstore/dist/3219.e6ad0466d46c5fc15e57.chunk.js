(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3219],{17579:(e,t,r)=>{var i=r(19690),n=r(13842);i.registerType("bing",(function(e){var t=e.apiKey;return new n.BingMapsImageryProvider({url:"//dev.virtualearth.net",key:t,mapStyle:n.BingMapsStyle[e.name.toUpperCase()]})}))},30206:(e,t,r)=>{var i=r(19690),n=r(13842),a=r(27418),o=function(){var e=[n.Math.toRadians(.05),n.Math.toRadians(.1),n.Math.toRadians(.2),n.Math.toRadians(.5),n.Math.toRadians(1),n.Math.toRadians(2),n.Math.toRadians(5),n.Math.toRadians(10)];function t(e,t){var r=e||{};this._tilingScheme=r.tilingScheme||new n.GeographicTilingScheme,this._color=r.color&&new n.Color(r.color[0],r.color[1],r.color[2],r.color[3])||new n.Color(1,1,1,.4),this._tileWidth=r.tileWidth||256,this._tileHeight=r.tileHeight||256,this._ready=!0,this._sexagesimal=r.sexagesimal||!1,this._numLines=r.numLines||50,this._scene=t,this._labels=new n.LabelCollection,t.primitives.add(this._labels),this._polylines=new n.PolylineCollection,t.primitives.add(this._polylines),this._ellipsoid=t.globe.ellipsoid;var i=document.createElement("canvas");i.width=256,i.height=256,this._canvas=i}var r=function(){try{return"x"in Object.defineProperty({},"x",{})}catch(e){return!1}}(),i=Object.defineProperties;function a(e){return e<.01?3:e<.1?2:e<1?1:0}return r&&i||(i=function(e){return e}),i(t.prototype,{url:{get:function(){}},proxy:{get:function(){}},tileWidth:{get:function(){return this._tileWidth}},tileHeight:{get:function(){return this._tileHeight}},maximumLevel:{get:function(){return 18}},minimumLevel:{get:function(){return 0}},tilingScheme:{get:function(){return this._tilingScheme}},rectangle:{get:function(){return this._tilingScheme.rectangle}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){return this._errorEvent}},ready:{get:function(){return this._ready}},credit:{get:function(){return this._credit}},hasAlphaChannel:{get:function(){return!0}}}),t.prototype.makeLabel=function(e,t,r,i){this._labels.add({position:this._ellipsoid.cartographicToCartesian(new n.Cartographic(e,t,10)),text:r,font:"normal",fillColor:this._color,outlineColor:this._color,style:n.LabelStyle.FILL,pixelOffset:new n.Cartesian2(5,i?5:-5),eyeOffset:n.Cartesian3.ZERO,horizontalOrigin:n.HorizontalOrigin.LEFT,verticalOrigin:i?n.VerticalOrigin.BOTTOM:n.VerticalOrigin.TOP,scale:1})},t.prototype._drawGrid=function(t){if(!this._currentExtent||!this._currentExtent.equals(t)){this._currentExtent=t,this._polylines.removeAll(),this._labels.removeAll();for(var r=0,i=0,o=0;o<e.length&&r<(t.north-t.south)/10;o++)r=e[o];for(var l=0;l<e.length&&i<(t.east-t.west)/10;l++)i=e[l];var s=(t.west<0?Math.ceil(t.west/i):Math.floor(t.west/i))*i,u=(t.south<0?Math.ceil(t.south/r):Math.floor(t.south/r))*r,h=(t.east<0?Math.ceil(t.east/r):Math.floor(t.east/r))*r,c=(t.north<0?Math.ceil(t.north/i):Math.floor(t.north/i))*i;s=Math.max(s-2*i,-Math.PI),h=Math.min(h+2*i,Math.PI),u=Math.max(u-2*r,-Math.PI/2),c=Math.min(c+2*i,Math.PI/2);for(var f=this._ellipsoid,d=n.Math.toRadians(1),g=u+Math.floor((c-u)/r/2)*r,p=s;p<h;p+=i){for(var m=[],y=u;y<c;y+=d)m.push(new n.Cartographic(p,y));m.push(new n.Cartographic(p,c)),this._polylines.add({positions:f.cartographicArrayToCartesianArray(m),width:.75,material:new n.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});var v=n.Math.toDegrees(p);this.makeLabel(p,g,this._sexagesimal?this._decToSex(v):v.toFixed(a(i)),!1)}for(var w=s+Math.floor((h-s)/i/2)*i,S=u;S<c;S+=r){for(var x=[],M=s;M<h;M+=d)x.push(new n.Cartographic(M,S));x.push(new n.Cartographic(h,S)),this._polylines.add({positions:f.cartographicArrayToCartesianArray(x),width:1,material:new n.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});var b=n.Math.toDegrees(S);this.makeLabel(w,S,this._sexagesimal?this._decToSex(b):b.toFixed(a(r)),!0)}}},t.prototype.requestImage=function(){return this._show&&this._drawGrid(this._getExtentView()),this._canvas},t.prototype.setVisible=function(e){this._show=e,e?(this._currentExtent=null,this._drawGrid(this._getExtentView())):(this._polylines.removeAll(),this._labels.removeAll())},t.prototype.isVisible=function(){return this._show},t.prototype._decToSex=function(t){var r=Math.floor(t),i=(60*(Math.abs(t)-r)).toFixed(2);return"60.00"===i&&(r+=1,e="0.00"),[r,":",i].join("")},t.prototype._getExtentView=function(){for(var e=this._scene.camera,t=this._scene.canvas,r=[e.pickEllipsoid(new n.Cartesian2(0,0),this._ellipsoid),e.pickEllipsoid(new n.Cartesian2(t.width,0),this._ellipsoid),e.pickEllipsoid(new n.Cartesian2(0,t.height),this._ellipsoid),e.pickEllipsoid(new n.Cartesian2(t.width,t.height),this._ellipsoid)],i=0;i<4;i++)if(void 0===r[i])return n.Rectangle.MAX_VALUE;return n.Rectangle.fromCartographicArray(this._ellipsoid.cartesianArrayToCartographicArray(r))},t.prototype.destroy=function(){this._show=!1,this._polylines&&this._scene.primitives.remove(this._polylines),this._labels&&this._scene.primitives.remove(this._labels)},t}();i.registerType("graticule",{create:function(e,t){var r=t.scene,i=new o(a({tileWidth:512,tileHeight:512,numLines:10},e||{}),r);return e.visibility&&i.setVisible(!0),i}})},27780:(e,t,r)=>{var i=r(19690),n=r(13842);i.registerType("osm",(function(){return n.createOpenStreetMapImageryProvider({url:"//a.tile.openstreetmap.org/"})}))},3588:(e,t,r)=>{var i=r(19690),n=r(13842),a=r(98143),o=function(){function e(e){this._scene=e.scene;var t=document.createElement("div");t.className="infoWindow",this._div=t;var r=document.createElement("div");r.className="frame",this._div.appendChild(r);var i=document.createElement("div");i.className="content",r.appendChild(i),e.container.appendChild(t),this._content=i,this.setVisible(!0)}return e.prototype.setVisible=function(e){this._visible=e,this._div.style.display=e?"block":"none"},e.prototype.setContent=function(e){if("string"==typeof e)this._content.innerHTML=e;else{for(;this._content.firstChild;)this._content.removeChild(this._content.firstChild);this._content.appendChild(e)}},e.prototype.setPosition=function(e,t){this._position=this._scene.globe.ellipsoid.cartographicToCartesian(n.Cartographic.fromDegrees(t,e,0))},e.prototype.showAt=function(e,t,r){this.setPosition(e,t),this.setContent(r),this.setVisible(!0)},e.prototype.hide=function(){this.setVisible(!1)},e.prototype.computeVisible=function(){var e=6378137,t=6378137,r=6356752.314245179,i=this._scene.camera.position,n=i.x/e,a=i.y/t,o=i.z/r,l=n*n+a*a+o*o-1,s=this._position,u=s.x/e-n,h=s.y/t-a,c=s.z/r-o,f=-(u*n+h*a+c*o);f>l&&f*f/(u*u+h*h+c*c)>l?this.setVisible(!1):this.setVisible(!0)},e.prototype.update=function(){if(this.computeVisible(),this._visible&&this._position){var e=n.SceneTransforms.wgs84ToWindowCoordinates(this._scene,this._position);if(e){var t=Math.floor(e.x)-this._div.clientWidth/2+"px",r=Math.floor(e.y)-this._div.clientHeight+"px";this._div.tabIndex=5,this._div.style.left=t,this._div.style.top=r}}},e.prototype.destroy=function(){this._div.parentNode.removeChild(this._div)},e}(),l=function e(t){if(0!==t.length)for(var r=0;r<t.length;r++){var i=t.item(r);i.removeAttribute("data-reactid"),e(i.children||[])}};i.registerType("overlay",{create:function(e,t){var r=function(e,t){var r=e.cloneNode(!0);r.id=t.id+"-overlay",r.className=(t.className||e.className)+"-overlay",r.removeAttribute("data-reactid"),l(r.children||[]);var i=t.closeClass||"close";if(t.onClose&&1===r.getElementsByClassName(i).length){var n=r.getElementsByClassName(i)[0];a.add(n,"click",(function(e){t.onClose(e.target.getAttribute("data-overlayid"))}))}return r}(document.getElementById(e.id),e),i=new o(t);i.showAt(e.position.y,e.position.x,r),i.setVisible(!0);var n=t.scene.primitives.add(i);return{detached:!0,info:n,remove:function(){t.scene.primitives.remove(n)}}}})},33219:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>le});var i=r(19690),n=r.n(i),a=r(13842),o=r.n(a),l=r(45992),s=r(37275),u=r(23502);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function c(e){this.proxy=e}function f(){}c.prototype.getURL=function(e){var t=function(e){var t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}(e),r=t.url,i=t.queryString;return 0===r.indexOf("//")&&(r=location.protocol+r),(0,u.b)()+encodeURIComponent(r+i)},f.prototype.getURL=function(e){return e},n().registerType("tileprovider",(function(e){var t,r,i,n=(r=l.Z.getLayerConfig(e.provider,e),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var i,n,a=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(i=r.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return a}}(r,i)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],d=n[1],g=s.ZP.getProxyUrl({});g&&(t=d.noCors||(0,u.$)(a));var p,m,y=d.credits,v=y?new(o().Credit)(y.text,y.imageUrl,y.link):d.attribution;return new(o().UrlTemplateImageryProvider)({url:(p=a,m=d,p.replace(/(?!(\{?[zyxs]?\}))\{*([\w_]+)*\}/g,(function(){var e=arguments[0],t=arguments[1]?arguments[1]:arguments[2],r=m[t];if(void 0===r)throw new Error("No value provided for variable "+e);return"function"==typeof r&&(r=r(m)),r}))),enablePickFeatures:!1,subdomains:d.subdomains,maximumLevel:d.maxZoom,minimumLevel:d.minZoom,credit:v,proxy:t?new c(g):new f})}));var d=r(27418),g=r.n(d),p=r(1469),m=r.n(p),y=r(18446),v=r.n(y),w=r(72354),S=r.n(w),x=r(24262),M=r(43378),b=r(33044),T=r(33358);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){var t={};t.CRS=[{name:"CRS:84",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.GeographicTilingScheme,supportedCRS:"urn:ogc:def:crs:OGC:2:84"},{name:"EPSG:4326",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!0,tilingScheme:e.GeographicTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::4326"},{name:"EPSG:3857",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"},{name:"OSGEO:41001",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"}],t.FormatImage=[],t.FormatArray=[{format:"image/bil",postProcessArray:function(e,t,r,i,n,a){var o,l=new DataView(e),s=new ArrayBuffer(t.height*t.width*2),u=new DataView(s);if(s.byteLength===e.byteLength){for(var h,c=0;c<s.byteLength;c+=2)(h=l.getInt16(c,a)-n)>i&&h<r?u.setInt16(c,h,!0):u.setInt16(c,0,!0);o=new Int16Array(s)}return o}}],t.WMSParser={},t.TMSParser={},t.WMTSParser={},t.parser=function(r){var i;switch((r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT)).service){case"TMS":i=t.TMSParser.generate(r);break;case"WMTS":i=t.WMTSParser.generate(r);break;default:i=t.WMSParser.generate(r)}return i},t.WMSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url)){var n=r.url,a=n.lastIndexOf("?");a>-1&&(n=n.substring(0,a));var o=n+"?SERVICE=WMS&REQUEST=GetCapabilities&tiled=true";e.defined(r.proxy)&&(o=r.proxy.getURL(o)),i=e.when(e.loadXML(o),(function(e){return t.WMSParser.getMetaDatafromXML(e,r)}))}else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.WMSParser.getMetaDatafromXML(r.xml,r)}return i},t.WMSParser.getMetaDatafromXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");if(!e.defined(i.layerName))throw new e.DeveloperError("description.layerName is required.");var n={},a=i.layerName,o=void e.defaultValue(i.maxLevel,11);n.heightMapWidth=e.defaultValue(i.heightMapWidth,65),n.heightMapHeight=e.defaultValue(i.heightMapHeight,n.heightMapWidth);var l={width:65,height:65},s=void 0;n.littleEndian=i.littleEndian,n.formatImage=i.formatImage,n.formatArray=i.formatArray,n.tilingScheme=void 0;var u=void 0,h=void 0;n.ready=!1,n.levelZeroMaximumGeometricError=void 0,n.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof n.waterMask&&(n.waterMask=!1),n.offset=e.defaultValue(i.offset,0),n.highest=e.defaultValue(i.highest,12e3),n.lowest=e.defaultValue(i.lowest,-500);var c=i.styleName;n.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName);var f=r.querySelector("[version]");null!==f&&(o=f.getAttribute("version"),h=/^1\.[3-9]\./.test(o));var d=r.querySelector("Request>GetMap OnlineResource").getAttribute("xlink:href"),g=d.indexOf("?");g>-1&&(d=d.substring(0,g));var p=r.querySelectorAll("Request>GetMap>Format");if(!e.defined(n.formatImage))for(var m=0;m<p.length&&!e.defined(n.formatArray);m++)(y=t.FormatArray.filter((function(e){return e.format===p[m].textContent}))).length>0&&(n.formatArray=y[0]);for(e.defined(n.formatArray)&&"string"==typeof n.formatArray.format&&"function"==typeof n.formatArray.postProcessArray?n.formatArray.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}:n.formatArray=void 0,m=0;m<p.length&&!e.defined(n.formatImage);m++){var y;(y=t.FormatImage.filter((function(e){return e.format===p[m].textContent}))).length>0&&(n.formatImage=y[0])}e.defined(n.formatImage)&&"string"==typeof n.formatImage.format?n.formatImage.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:2,stride:4,elementMultiplier:256,isBigEndian:!0}:n.formatImage=void 0;for(var v,w=r.querySelectorAll("Layer[queryable='1'],Layer[queryable='true']"),S=0;S<w.length&&!e.defined(v);S++)if(w[S].querySelector("Name").textContent===a){var x=(v=w[S]).getAttribute("fixedHeight"),M=v.getAttribute("fixedWidth");e.defined(x)&&(x=parseInt(x),n.heightMapHeight=x>0&&x<n.heightMapHeight?x:n.heightMapHeight,l.height=x>0?x:l.height),e.defined(M)&&(M=parseInt(M),n.heightMapWidth=M>0&&M<n.heightMapWidth?M:n.heightMapWidth,l.width=M>0?M:l.width)}if(e.defined(v)&&e.defined(o)){for(var b=!1,T=0;T<t.CRS.length&&!b;T++){var C,A,I,O,P=t.CRS[T],_=P.name,E=v.querySelector("BoundingBox[SRS='"+_+"'],BoundingBox[CRS='"+_+"']");if(null!==E)s=_,u=P.firstAxeIsLatitude,n.tilingScheme=new P.tilingScheme({ellipsoid:P.ellipsoid}),u&&h?(C=parseFloat(E.getAttribute("miny")),A=parseFloat(E.getAttribute("maxy")),I=parseFloat(E.getAttribute("minx")),O=parseFloat(E.getAttribute("maxx"))):(C=parseFloat(E.getAttribute("minx")),A=parseFloat(E.getAttribute("maxx")),I=parseFloat(E.getAttribute("miny")),O=parseFloat(E.getAttribute("maxy"))),new e.Rectangle(C,I,A,O),n.getTileDataAvailable=function(e,t,r){return!0},b=!0}if(e.defined(c)){for(var L=v.querySelectorAll("Style>Name"),R=!1,D=0;D<L.length&&!R;D++)c===L[D].textContent&&(R=!0);R||(c=void 0)}for(var W=r.querySelectorAll("VendorSpecificCapabilities>TileSet"),q=!1,H=0;H<W.length&&!q;H++){var V=null!==W[H].querySelector("BoundingBox[SRS='"+s+"'],BoundingBox[CRS='"+s+"']");W[H].querySelector("Layers").textContent===a&&V&&(l.width=parseInt(W[H].querySelector("Width").textContent),l.height=parseInt(W[H].querySelector("Height").textContent),q=!0)}n.ready=b&&(e.defined(n.formatImage)||e.defined(n.formatArray))&&e.defined(o)}if(n.ready){var k=d+"?SERVICE=WMS&REQUEST=GetMap&layers="+a+"&version="+o+"&bbox=";if(k+=h&&u?"{south},{west},{north},{east}":"{west},{south},{east},{north}",k+="&crs="+s+"&srs="+s,n.formatImage){var j=k+"&format="+n.formatImage.format+"&width="+l.width+"&height="+l.height;e.defined(c)&&(j+="&styles="+c+"&style="+c),n.URLtemplateImage=function(){return j},n.imageSize=l}if(n.formatArray){var U=k+"&format="+n.formatArray.format+"&width="+n.heightMapWidth+"&height="+n.heightMapHeight;n.URLtemplateArray=function(){return U}}}return n.proxy=i.proxy,n},t.TMSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url))i=e.loadXML(r.url).then((function(e){return t.TMSParser.parseXML(e,r)}));else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.TMSParser.parseXML(r.xml,r)}return i},t.TMSParser.parseXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var n;if(null!=r.querySelector("TileMapService")){if(!e.defined(i.layerName))throw new e.DeveloperError("layerName is required.");var a=[].slice.apply(r.querySelectorAll("TileMap[title='"+i.layerName+"']")).map((function(r){var n=r.getAttribute("href");return e.when(e.loadXML(n),(function(e){return t.TMSParser.getMetaDatafromXML(e,i)}))}));n=e.when.all(a).then((function(t){for(var r,i=0;i<t.length&&!e.defined(r);i++)e.defined(t[i])&&(r=t[i]);return r})).then((function(e){return e}))}else n=t.TMSParser.getMetaDatafromXML(r,i);return n},t.TMSParser.getMetaDatafromXML=function(r,i){var n={ready:!1};n.heightMapWidth=e.defaultValue(i.heightMapWidth,65),n.heightMapHeight=e.defaultValue(i.heightMapHeight,n.heightMapWidth);var a=e.defaultValue(i.maxLevel,11);i.proxy,n.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName),n.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof n.waterMask&&(n.waterMask=!1),n.offset=e.defaultValue(i.offset,0),n.highest=e.defaultValue(i.highest,12e3),n.lowest=e.defaultValue(i.lowest,-500);var o=r.querySelector("SRS").textContent,l=t.CRS.filter((function(e){return e.name===o}));l.length>0&&(n.tilingScheme=new l[0].tilingScheme({ellipsoid:l[0].ellipsoid}));var s=r.querySelector("TileFormat"),u=t.FormatImage.filter((function(e){return e.extension==s.getAttribute("extension")}));u.length>0&&(n.formatImage=u[0],n.imageSize={},n.imageSize.width=parseInt(s.getAttribute("width")),n.imageSize.height=parseInt(s.getAttribute("height")));var h=[].slice.call(r.querySelectorAll("TileSets>TileSet")),c=[];if(e.defined(n.formatImage)&&((c=h.map((function(e){return{url:e.getAttribute("href")+"/{x}/{tmsY}."+n.formatImage.extension,level:parseInt(e.getAttribute("order"))}}))).sort((function(e,t){return e.level-t.level})),c.length>0&&(n.tileSets=c)),e.defined(n.tileSets)&&e.defined(n.formatImage)&&e.defined(n.tilingScheme)){n.URLtemplateImage=function(e,t,r){var i="";return r<c.length&&(i=c[r].url),i};var f=r.querySelector("BoundingBox"),d=parseFloat(f.getAttribute("miny")),g=parseFloat(f.getAttribute("maxy")),p=parseFloat(f.getAttribute("minx")),m=parseFloat(f.getAttribute("maxx")),y=new e.Rectangle(p,d,m,g);n.getTileDataAvailable=function(t,r,i){var o,l,s,u,h,f,d=n.tilingScheme.tileXYToNativeRectangle(t,r,i),g=(o=y,l=d,s=Math.max(o.west,l.west),u=Math.min(o.east,l.east),h=Math.max(o.south,l.south),f=Math.min(o.north,l.north),u<=s||h>=f?void 0:new e.Rectangle(s,h,u,f));return e.defined(g)&&i<a&&i<c.length},n.ready=!0}else n=void 0;return n.proxy=i.proxy,n},t.WMTSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url)){var n=r.url,a=n.lastIndexOf("?");a>-1&&(n=n.substring(0,a));var o=n+"?REQUEST=GetCapabilities";e.defined(r.proxy)&&(o=r.proxy.getURL(o)),i=e.loadXML(o).then((function(e){return t.WMTSParser.getMetaDatafromXML(e,r)}))}else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.WMTSParser.getMetaDatafromXML(r.xml,r)}return i},t.WMTSParser.getMetaDatafromXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var n={},a=i.layerName;n.ready=!1,n.heightMapWidth=e.defaultValue(i.heightMapWidth,65),n.heightMapHeight=e.defaultValue(i.heightMapHeight,n.heightMapWidth);var o,l=e.defaultValue(i.maxLevel,12),s=(i.proxy,i.styleName);n.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName),n.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof n.waterMask&&(n.waterMask=!1),n.offset=e.defaultValue(i.offset,0),n.highest=e.defaultValue(i.highest,12e3),n.lowest=e.defaultValue(i.lowest,-500);for(var u,h,c,f=[],d=[].slice.call(r.querySelectorAll('Operation[name="GetTile"] HTTP Get')).map((function(e){var t,r=e.querySelector("Value").textContent;return"KVP"===r&&(t={node:e,type:"KVP"}),"RESTful"===r&&(t={node:e,type:"RESTful"}),t})).filter((function(t){return e.defined(t)})),g=0;g<d.length;g++){var p=d[g];"RESTful"!==p.type||e.defined(h)||(h=p.node.getAttribute("xlink:href")),"KVP"!==p.type||e.defined(u)||(u=p.node.getAttribute("xlink:href"))}var m,y=r.querySelectorAll("Contents>Layer>Identifier");for(g=0;g<y.length&&!e.defined(m);g++)a===y[g].textContent&&(m=y[g].parentNode);if(e.defined(m)){var v,w,S=m.querySelectorAll("Style");for(g=0;g<S.length;g++){var x=S[g].querySelector("Identifier").textContent;null!=S[g].getAttribute("isDefault")&&(v=x),x===s&&(w=x)}e.defined(s)&&s==w||(s=e.defaultValue(v,""));for(var M=[].slice.call(m.querySelectorAll("Format")),b=0;b<t.FormatImage.length&&!e.defined(c);b++)M.filter((function(e){return e.textContent===t.FormatImage[b].format})).length>0&&(c=t.FormatImage[b]);f=m.querySelectorAll("TileMatrixSetLink")}for(var T=[].slice.call(r.querySelectorAll("TileMatrixSet>Identifier")),C=0;C<f.length&&!n.ready;C++){var A,I,O=f[C],P=O.querySelector("TileMatrixSet").textContent;for(g=0;g<T.length&&!e.defined(A);g++)T[g].textContent===P&&(A=T[g].parentNode);for(var _=A.querySelector("SupportedCRS").textContent,E=0;E<t.CRS.length&&!e.defined(I);E++)t.CRS[E].SupportedCRS===_&&(I=t.CRS[E]);if(e.defined(I)){var L,R=[].slice.call(A.querySelectorAll("TileMatrix"));(L=R.map((function(e){var t=e.querySelector("Identifier").textContent,r=parseInt(e.querySelector("MatrixWidth").textContent),i=parseInt(e.querySelector("MatrixHeight").textContent),n=parseInt(e.querySelector("TileWidth").textContent),a=parseInt(e.querySelector("TileHeight").textContent);return{id:t,maxWidth:r,maxHeight:i,scaleDenominator:parseFloat(e.querySelector("ScaleDenominator").textContent),complete:!1,tileWidth:n,tileHeight:a}}))).sort((function(e,t){return t.scaleDenominator-e.scaleDenominator})),listTileMatrixLimits=O.querySelectorAll("TileMatrixSetLimits>TileMatrixLimits");for(var D=0;D<L.length;D++)for(var W=L[D],q=0;q<listTileMatrixLimits.length;q++){var H=listTileMatrixLimits[q];W.id===H.querySelector("TileMatrix").textContent&&(W.minTileRow=parseInt(H.querySelector("MinTileRow").textContent),W.maxTileRow=parseInt(H.querySelector("MaxTileRow").textContent),W.minTileCol=parseInt(H.querySelector("MinTileCol").textContent),W.maxTileCol=parseInt(H.querySelector("MaxTileCol").textContent),W.complete=!0,L[D]=W)}if(L.length>0){n.tilingScheme=new I.tilingScheme({ellipsoid:I.ellipsoid,numberOfLevelZeroTilesX:L[0].maxWidth,numberOfLevelZeroTilesY:L[0].maxHeight});var V=m.querySelector("ResourceURL[format='"+c.format+"']");if(null!=V?o=V.getAttribute("template").replace("{TileRow}","{y}").replace("{TileCol}","{x}").replace("{Style}",s).replace("{TileMatrixSet}",P).replace("{layer}",a).replace("{infoFormatExtension}",c.extension):e.defined(u)&&(o=u+"service=WMTS&request=GetTile&version=1.0.0&layer="+a+"&style=&"+s+"format="+c.format+"&TileMatrixSet="+P+"&TileMatrix={TileMatrix}&TileRow={y}&TileCol={x}"),e.defined(o)){n.getTileDataAvailable=function(e,t,r){var i=!1;if(r<l&&r<L.length){var n=L[r];i=n.complete?t<=n.maxTileRow&&t>=n.minTileRow&&e<=n.maxTileCol&&e>=n.minTileCol:e<n.maxWidth&&t<n.maxHeight}return i},n.URLtemplateImage=function(e,t,r){var i="";if(n.getTileDataAvailable(e,t,r)){var a=L[r];i=o.replace("{TileMatrix}",a.id)}return i};var k={width:L[0].tileWidth,height:L[0].tileHeight};0==L.filter((function(e){return e.tileWidth!=k.width||e.tileHeight!=k.height})).length&&(n.imageSize=k),n.ready=!0}}}}return n.proxy=i.proxy,n};var r=function(a){if(!e.defined(a))throw new e.DeveloperError("description is required.");var o,l,s=new e.Event,u=a.credit;"string"==typeof u&&(u=new e.Credit(u)),this.ready=!1,e.defineProperties(this,{errorEvent:{get:function(){return s}},credit:{get:function(){return u}},hasVertexNormals:{get:function(){return!1}}}),o=t.parser(a),l=this,e.when(o,(function(t){e.defined(t)&&t.ready&&(t.levelZeroMaximumGeometricError=e.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(t.tilingScheme.ellipsoid,t.heightMapWidth,t.tilingScheme.getNumberOfXTilesAtLevel(0)),e.defined(t.URLtemplateImage)&&(t.getHeightmapTerrainDataImage=function(a,o,s){var u;if(!isNaN(a+o+s)){var h=i(t.URLtemplateImage(a,o,s),a,o,s,l),c={highest:t.highest,lowest:t.lowest,offset:t.offset},f=t.proxy||{getURL:function(e){return e}},d=n(a,o,s,l),g=e.throttleRequestByServer(f.getURL(h),e.loadImage);e.defined(g)&&(u=e.when(g,(function(e){return r.imageToHeightmapTerrainData(e,c,{width:t.heightMapWidth,height:t.heightMapHeight},t.waterMask,d,t.hasStyledImage)})).otherwise((function(){return new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:d,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return u}),e.defined(t.URLtemplateArray)&&(t.getHeightmapTerrainDataArray=function(a,o,s){var u;if(!isNaN(a+o+s)){var h=i(t.URLtemplateArray(a,o,s),a,o,s,l),c={highest:t.highest,lowest:t.lowest,offset:t.offset},f=n(a,o,s,l),d=t.proxy||{getURL:function(e){return e}},g=e.throttleRequestByServer(d.getURL(h),e.loadArrayBuffer);e.defined(g)&&(u=e.when(g,(function(e){return r.arrayToHeightmapTerrainData(e,c,{width:t.heightMapWidth,height:t.heightMapHeight},t.formatArray,t.waterMask,t.littleEndian,f)})).otherwise((function(){return e.defined(t.getHeightmapTerrainDataImage)?t.getHeightmapTerrainDataImage(a,o,s):new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:f,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return u}),l.getLevelMaximumGeometricError=function(e){return t.levelZeroMaximumGeometricError/(1<<e)},l.requestTileGeometry=function(r,i,n){var a;return e.defined(t.getHeightmapTerrainDataArray)?a=t.getHeightmapTerrainDataArray(r,i,n):e.defined(t.getHeightmapTerrainDataImage)&&(a=t.getHeightmapTerrainDataImage(r,i,n)),a},e.defineProperties(l,{tilingScheme:{get:function(){return t.tilingScheme}},ready:{get:function(){return t.ready}},hasWaterMask:{get:function(){return t.waterMask}},heightMapHeight:{get:function(){return t.heightMapHeight}},heightMapWidth:{get:function(){return t.heightMapWidth}},getTileDataAvailable:{get:function(){return t.getTileDataAvailable}}}))}))};function i(e,t,r,i,n){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=(a.getURL,n.tilingScheme.tileXYToNativeRectangle(t,r,i)),l=(o.east-o.west)/(n.heightMapWidth-1),s=(o.north-o.south)/(n.heightMapHeight-1);o.west-=.5*l,o.east+=.5*l,o.south-=.5*s,o.north+=.5*s;var u=n.tilingScheme.getNumberOfYTilesAtLevel(i),h=u-r-1;return e.replace("{south}",o.south).replace("{north}",o.north).replace("{west}",o.west).replace("{east}",o.east).replace("{x}",t).replace("{y}",r).replace("{tmsY}",h)}function n(e,t,r,i){var n=0,a=r+1;return n|=i.getTileDataAvailable(2*e,2*t,a)?1:0,n|=i.getTileDataAvailable(2*e+1,2*t,a)?2:0,(n|=i.getTileDataAvailable(2*e,2*t+1,a)?4:0)|(i.getTileDataAvailable(2*e+1,2*t+1,a)?8:0)}return r.arrayToHeightmapTerrainData=function(t,r,i,n,a,o,l){"number"==typeof i&&(i={width:i,height:i});var s=n.postProcessArray(t,i,r.highest,r.lowest,r.offset,o);if(!e.defined(s))throw new e.DeveloperError("no good size");var u={buffer:s,width:i.width,height:i.height,childTileMask:l,structure:n.terrainDataStructure};if(a){for(var h=new Uint8Array(s.length),c=0;c<s.length;c++)s[c]<=0&&(h[c]=255);u.waterMask=h}return new e.HeightmapTerrainData(u)},r.imageToHeightmapTerrainData=function(t,r,i,n,a,o){"number"==typeof i&&(i={width:i,height:i});for(var l=e.getImagePixels(t,i.width,i.height),s=new Uint8Array(l.length/4),u=new Int16Array(l.length/4),h=0,c=0,f=0;f<l.length;f+=4){var d=l[f],g=l[f+1],p=l[f+2]>128,m=(d<<8|g)-r.offset-32768;m>r.lowest&&m<r.highest&&(p||o)?(u[f/4]=m,c+=m,h++):u[f/4]=0==h?0:c/h}var y={buffer:u,width:i.width,height:i.height,childTileMask:a,structure:{heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}};if(n){for(s=new Uint8Array(heightBuffer.length),f=0;f<heightBuffer.length;f++)heightBuffer[f]<=0&&(s[f]=255);y.waterMask=s}return new e.HeightmapTerrainData(y)},r}(o());function P(e){var t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}function _(e){this.proxy=e}function E(){}function L(e){return Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}_.prototype.getURL=function(e){var t=P(e),r=t.url,i=t.queryString;return(0,u.b)()+encodeURIComponent(r+i)},E.prototype.getURL=function(e){var t=P(e);return t.url+t.queryString};var R=function e(t){var r;return t.useForElevation?new O(function(e){var t,r=e.url,i=s.ZP.getProxyUrl({});return i&&(t=e.noCors||(0,u.$)(r)),g()({url:r,proxy:t?new _(i):new E,littleEndian:e.littleendian||!1,layerName:e.name})}(t)):((r=t.singleTile?new(o().SingleTileImageryProvider)(function(e){var t=void 0!==e.opacity?e.opacity:1,r=(0,M.v)(e),i=g()({styles:e.style||"",format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:t,tiled:void 0===e.tiled||e.tiled,layers:e.name,width:e.size||2e3,height:e.size||2e3,bbox:"-180.0,-90,180.0,90",srs:"EPSG:4326"},r||{},(0,x.QW)(e));return{url:(m()(e.url)?e.url[Math.round(Math.random()*(e.url.length-1))]:e.url)+"?service=WMS&version=1.1.0&request=GetMap&"+L((0,b.addAuthenticationToSLD)(i,e))}}(t)):new(o().WebMapServiceImageryProvider)(function(e){var t,r=void 0!==e.opacity?e.opacity:1,i=(0,M.v)(e),n=s.ZP.getProxyUrl({});n&&(t=(0,u.$)(e.url)&&n);var a=e.credits,l=a?new(o().Credit)(a.text||a.title,a.imageUrl,a.link):e.attribution;return g()({url:"{s}",credit:l,subdomains:(0,x.D$)(m()(e.url)?e.url:[e.url]),proxy:t&&new _(t)||new E,layers:e.name,enablePickFeatures:!1,parameters:g()({styles:e.style||"",format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:r,tiled:void 0===e.tiled||e.tiled,width:e.tileSize||256,height:e.tileSize||256},g()({},e._v_?{_v_:e._v_}:{},i||{},(0,x.QW)(e)))})}(t))).updateParams=function(r){var i=g()({},t,{params:g()({},t.params||{},r)});return e(i)},r)};n().registerType("wms",{create:R,update:function(e,t,r){var i=t&&t.params,n=r&&r.params,a=A(A({},i),n);return Object.keys(A(A(A({},t),r),a)).filter((function(e){return S().PARAM_OPTIONS.indexOf(e.toLowerCase())>=0})).filter((function(e){var a=void 0===r[e]?n&&n[e]:r[e],o=void 0===t[e]?i&&i[e]:t[e];return!v()(a,o)})).length>0||t.securityToken!==r.securityToken||!v()(t.layerFilter,r.layerFilter)||t.tileSize!==r.tileSize?R(t):null}});var D=r(7294),W=r(13218),q=r.n(W),H=r(12571),V=r.n(H),k=r(27361),j=r.n(k),U=r(91175),N=r.n(U),G=r(8575);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){var t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}function Z(e){this.proxy=e}function Y(){}Z.prototype.getURL=function(e){var t=z(e),r=t.url,i=t.queryString;return(0,u.b)()+encodeURIComponent(r+i)},Y.prototype.getURL=function(e){var t=z(e);return t.url+t.queryString};var $=function(e){return e.indexOf("EPSG:4326")>=0?new(o().GeographicTilingScheme):e.indexOf("EPSG:3857")>=0?new(o().WebMercatorTilingScheme):null},Q=function(e,t){var r,i,n=D.C2(e.tileMatrixSet,t,e.allowedSRS,e.matrixIds);return{tileMatrixSet:n,matrixIds:(r=e.matrixIds&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(q()(e)&&e[t]||m()(e)&&e||[]).map((function(e){return e.identifier}))}(e.matrixIds,n)||function(e){for(var t=new Array(30),r=0;r<30;++r)t[r]=e.tileMatrixPrefix+r;return t}(e)).length>i?V()(r,0,i):r.length<i?r.concat(new Array(i-r.length)):r}};var J=function e(t){var r,i=function(e){var t="EPSG:4326",r=Q(e,t),i=r.tileMatrixSet,n=r.matrixIds;if(0===n.length){var a=Q(e,t="EPSG:3857");i=a.tileMatrixSet,n=a.matrixIds}var o,l=s.ZP.getProxyUrl({});l&&(o=(0,u.$)(e.url)&&l);var h,c=(h=e.matrixIds&&e.matrixIds[i],function(e,t,r){return h&&h[r]&&!h[r].ranges||e<=parseInt(j()(h[r],"ranges.cols.max"),10)&&e>=parseInt(j()(h[r],"ranges.cols.min"),10)&&t<=parseInt(j()(h[r],"ranges.rows.max"),10)&&t>=parseInt(j()(h[r],"ranges.rows.min"),10)}),f=G.format({query:B({},(0,x.QW)(e))});return g()({url:N()((0,x.D$)(m()(e.url)?e.url:[e.url],f)),format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",isValid:c,layer:e.name,style:e.style||"",tileMatrixLabels:n,tilingScheme:$(t,e.matrixIds[i]),proxy:o&&new Z(o)||new Y,enablePickFeatures:!1,tileWidth:e.tileWidth||e.tileSize||256,tileHeight:e.tileHeight||e.tileSize||256,tileMatrixSetID:i,maximumLevel:30,parameters:B({},(0,x.QW)(e))})}(t),n=(r=new(o().WebMapTileServiceImageryProvider)(i)).requestImage;return r.requestImage=function(e,t,a){return i.isValid(e,t,a)?n.bind(r)(e,t,a):new Promise((function(){}))},r.updateParams=function(r){var i=g()({},t,{params:g()({},t.params||{},r)});return e(i)},r};n().registerType("wmts",{create:J,update:function(e,t,r){return t.securityToken!==r.securityToken||r.format!==t.format?J(t):null}}),n().registerType("marker",{create:function(e,t){var r=g()({},{point:{pixelSize:5,color:o().Color.RED,outlineColor:o().Color.WHITE,outlineWidth:2}},e.style),i=t.entities.add(g()({position:o().Cartesian3.fromDegrees(e.point.lng,e.point.lat)},r));return{detached:!0,point:i,remove:function(){t.entities.remove(i)}}},update:function(e,t,r,i){return v()(t.point,r.point)?null:(e.remove(),this.create(t,i))}});var K=r(17579),ee=r.n(K),te=r(30206),re=r.n(te),ie=r(27780),ne=r.n(ie),ae=r(3588),oe=r.n(ae);const le={BingLayer:ee(),OSMLayer:ne(),GraticuleLayer:re(),OverlayLayer:oe()}},13842:e=>{e.exports=window.Cesium},23502:(e,t,r)=>{"use strict";r.d(t,{$:()=>s,b:()=>u});var i=r(37275),n=r(1469),a=r.n(n),o=r(13218),l=r.n(o),s=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a()(t))return t.reduce((function(t,r){return e(r)&&t}),!0);var n=!1,o=!(0===t.indexOf("http")),s=!o&&t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(s){var u=window.location;o=s[1]===u.protocol&&s[3]===u.hostname;var h=s[4],c=u.port;(80!==h&&""!==h||"80"!==c&&""!==c)&&(o=o&&h===c)}if(!o){var f=i.ZP.getProxyUrl(r);if(f){var d=[];l()(f)&&(d=f.useCORS||[],f=f.url);var g=d.reduce((function(e,r){return e||0===t.indexOf(r)}),!1);g||(n=!0)}}return n},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.ZP.getProxyUrl(e);return t&&l()(t)&&(t=t.url),t}},45992:(e,t,r)=>{"use strict";r.d(t,{h:()=>h,Z:()=>c});var i=r(35937),n=r.n(i),a=r(36882),o=r(37275);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e,t){var r,i,l,u,h=a.Z;if("custom"===e)r=t;else if(l=(u=e.split("."))[0],i=u[1],!(r=h[l]))throw new Error("No such provider ("+l+")");var c={url:r.url,options:r.options||{}};if(i&&"variants"in r){if(!(i in r.variants))throw new Error("No such variant of "+(l||r.url)+" ("+i+")");var f,d=r.variants[i];f="string"==typeof d?{variant:d}:d.options,c={url:d.url||c.url,options:s(s({},c.options||{}),f)}}else"function"==typeof c.url&&(c.url=c.url(u.splice(1,u.length-1).join(".")));var g="file:"===window.location.protocol||c.options.forceHTTP;0===c.url.indexOf("//")&&g&&(c.url="http:"+c.url),c.options.retina&&(t.detectRetina&&o.ZP.getBrowserProperties().retina?t.detectRetina=!1:c.options.retina=""),c.options.attribution&&(c.options.attribution=function e(t){return-1===t.indexOf("{attribution.")?t:t.replace(/\{attribution.(\w*)\}/,(function(t,r){return e(h[r].options.attribution)}))}(c.options.attribution));var p=s(s({},c.options),n()(t,(function(e){return void 0!==e})));return[c.url,p]};const c={getLayerConfig:h}},33358:(e,t,r)=>{"use strict";r.d(t,{z:()=>n});var i=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],n=function(e){return-1!==i.indexOf(e)}},72354:e=>{e.exports={PARAM_OPTIONS:["layers","styles","style","format","transparent","version","tiled","opacity","zindex","srs","singletile","_v_","filterobj"]}}}]);