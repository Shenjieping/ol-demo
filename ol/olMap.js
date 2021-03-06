(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(2)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(8);
var defined = __webpack_require__(6);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _featureanimation = __webpack_require__(16);

var _featureanimation2 = _interopRequireDefault(_featureanimation);

var _increaseanimation = __webpack_require__(17);

var _increaseanimation2 = _interopRequireDefault(_increaseanimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Map = ol.Map;

//???????????????
Map.prototype.getExtent = function () {
    var amap = this;
    var view = amap.getView();
    var size = amap.getSize();
    var extent = view.calculateExtent(size);
    return extent;
};

Map.prototype.getLayersById = function (id) {
    var currentLayer;
    var layers = this.getLayers().getArray();
    for (var i = layers.length - 1; i >= 0; i--) {
        if (layers[i].get("id") === id) {
            currentLayer = layers[i];
            return currentLayer;
        }
    }

    return currentLayer;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//??????????????????????????????????????????????????????????????????bug
ol.Overlay.prototype.panIntoView_ = function () {
    var map = this.getMap();

    if (map === undefined || !map.getTargetElement()) {
        return;
    }

    var mapRect = this.getRect_(map.getTargetElement(), map.getSize());
    var element = this.getElement();
    var overlayRect = this.getRect_(element, [ol.dom.outerWidth(element), ol.dom.outerHeight(element)]);

    var margin = this.autoPanMargin_;
    if (!ol.extent.containsExtent(mapRect, overlayRect)) {
        // ????????????????????????????????????????????????????????????????????????????????????
        var offsetLeft = overlayRect[0] - mapRect[0];
        var offsetRight = mapRect[2] - overlayRect[2];
        var offsetTop = overlayRect[1] - mapRect[1];
        var offsetBottom = mapRect[3] - overlayRect[3];

        var delta = [0, 0];
        if (offsetLeft < 0) {
            delta[0] = offsetLeft - margin;
        } else if (offsetRight < 0) {
            delta[0] = Math.abs(offsetRight) + margin;
        }
        if (offsetTop < 0) {
            delta[1] = offsetTop - margin;
        } else if (offsetBottom < 0) {
            delta[1] = Math.abs(offsetBottom) + margin + 100;
        }

        if (delta[0] !== 0 || delta[1] !== 0) {
            var center = map.getView().getCenter();
            var centerPx = map.getPixelFromCoordinate(center);
            var newCenterPx = [centerPx[0] + delta[0], centerPx[1] + delta[1]];

            map.getView().animate({
                center: map.getCoordinateFromPixel(newCenterPx),
                duration: this.autoPanAnimation_.duration,
                easing: this.autoPanAnimation_.easing
            });
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _esriCache = __webpack_require__(19);

var _esriCache2 = _interopRequireDefault(_esriCache);

var _ishowMapTiled = __webpack_require__(20);

var _ishowMapTiled2 = _interopRequireDefault(_ishowMapTiled);

var _olSourceImageArcgisRest = __webpack_require__(21);

var _olSourceImageArcgisRest2 = _interopRequireDefault(_olSourceImageArcgisRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var utils = {};

//?????????????????????
utils.getResolutionForScale = function (scale, units) {
	var resolution;
	//??????cgcs2000???wgs84???????????????,units?????????????????????1?????????111194.872221777???
	if (units == "degrees" || !units) {
		//??????????????????
		resolution = scale * 0.0254000508 / 96 / 111194.872221777;
	} else if (units == "m") {
		//????????????????????????????????????????????????
		//???????????????
		resolution = scale * 0.0254 / 96;
	}
	return resolution;
};

/**
 * 
 * @param {*} dest 
 */
utils.extend = function (dest) {
	var i, j, len, src;
	//TODO:arguments???es6??????????????????????????????????????????http://www.infoq.com/cn/articles/es6-in-depth-rest-parameters-and-defaults/
	for (j = 1, len = arguments.length; j < len; j++) {
		src = arguments[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
};

/**
 * APIMethod: meterToDegree
 * ??????????????????????????????????????????????????????
 *
 * Parameters:
 * meter - {Number} ???????????????????????????
 * lonlat - {<Geo.LonLat>} ????????????
 */
utils.meterToDegree = function (meter, lonlat) {
	var a = 0.00000899; //??????????????????1??????=0.000008993220293???
	var templat = lonlat.lat;
	return meter * (a / Math.cos(OpenLayers.Util.rad(templat)));
};

//TODO:??????????????????cgcs2000?????????,???????????????????????????
utils.BD09tocgcs2000 = function (lonlat) {
	return [lonlat[0] - 0.01185, lonlat[1] - 0.003391];
};

utils.getResolutionForScale = function (scale, units) {
	var resolution;
	//??????cgcs2000???wgs84???????????????,units?????????????????????1?????????111194.872221777???
	if (units == "degrees" || !units) {
		//??????????????????
		resolution = scale * 0.0254000508 / 96 / 111194.872221777;
	} else if (units == "m") {
		//????????????????????????????????????????????????
		//???????????????
		resolution = scale * 0.0254 / 96;
	}
	return resolution;
};

//??????????????????
utils.poi_mars = {
	PI: 3.14159265358979324,
	delta: function delta(lat, lon) {
		// Krasovsky 1940
		//
		// a = 6378245.0, 1/f = 298.3
		// b = a * (1 - f)
		// ee = (a^2 - b^2) / a^2;
		var a = 6378245.0; //  a: ??????????????????????????????????????????????????????????????????
		var ee = 0.00669342162296594323; //  ee: ?????????????????????
		var dLat = this.transformLat(lon - 105.0, lat - 35.0);
		var dLon = this.transformLon(lon - 105.0, lat - 35.0);
		var radLat = lat / 180.0 * this.PI;
		var magic = Math.sin(radLat);
		magic = 1 - ee * magic * magic;
		var sqrtMagic = Math.sqrt(magic);
		dLat = dLat * 180.0 / (a * (1 - ee) / (magic * sqrtMagic) * this.PI);
		dLon = dLon * 180.0 / (a / sqrtMagic * Math.cos(radLat) * this.PI);
		return { 'lat': dLat, 'lon': dLon };
	},
	// gps2gcj
	gps2gcj: function gps2gcj(wgsLon, wgsLat) {
		if (this.outOfChina(wgsLat, wgsLon)) return { 'lat': wgsLat, 'lon': wgsLon };
		var dta = this.delta(wgsLat, wgsLon);
		var lat = wgsLat + dta.lat;
		var lon = wgsLon + dta.lon;
		return { 'lat': lat, 'lon': lon };
	},
	gcj2gps: function gcj2gps(gcjLon, gcjLat) {
		if (this.outOfChina(gcjLat, gcjLon)) return { 'lat': gcjLat, 'lon': gcjLon };
		var dta = this.delta(gcjLat, gcjLon);
		var lat = gcjLat * 2 - (gcjLat + dta.lat);
		var lon = gcjLon * 2 - (gcjLon + dta.lon);
		return { 'lat': lat, 'lon': lon };
	},
	outOfChina: function outOfChina(lat, lon) {
		if (lon < 72.004 || lon > 137.8347) return true;
		if (lat < 0.8293 || lat > 55.8271) return true;
		return false;
	},
	transformLat: function transformLat(x, y) {
		var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
		ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
		ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;
		ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;
		return ret;
	},
	transformLon: function transformLon(x, y) {
		var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
		ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
		ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;
		ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;
		return ret;
	},
	bd09togcj: function bd09togcj(bd_lon, bd_lat) {
		var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
		var x = bd_lon - 0.0065;
		var y = bd_lat - 0.006;
		var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
		var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
		var gg_lng = z * Math.cos(theta);
		var gg_lat = z * Math.sin(theta);
		return { 'lat': gg_lat, 'lon': gg_lng };
	},
	gcjtobd09: function gcjtobd09(lng, lat) {
		var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
		var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_pi);
		var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_pi);
		var bd_lng = z * Math.cos(theta) + 0.0065;
		var bd_lat = z * Math.sin(theta) + 0.006;
		return { 'lat': bd_lat, 'lon': bd_lng };
	}
};

exports.default = { utils: utils };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * create by gaoyi
 * create time:2017-8-22
 */
/** 
 * ??????????????????
*	@fire animationstart|animationend
*	@param {Object} options
*		- duration {number} ??????????????????
*		- revers {bool} ?????????????????????
*		- fade {ol.easing} ????????????
*/
ol.featureAnimation = function (options) {
	options = options || {};

	this.duration_ = typeof options.duration == 'number' ? options.duration >= 0 ? options.duration : 0 : 1000;
	this.fade_ = typeof options.fade == 'function' ? options.fade : null;
	this.repeat_ = Number(options.repeat);

	var easing = typeof options.easing == 'function' ? options.easing : ol.easing.linear;
	if (options.revers) this.easing_ = function (t) {
		return 1 - easing(t);
	};else this.easing_ = easing;

	this.hiddenStyle = options.hiddenStyle;

	ol.Object.call(this);
};

if(ol.inherits==undefined){
            ol.inherits = function(childCtor, parentCtor) {
                childCtor.prototype = Object.create(parentCtor.prototype);
                childCtor.prototype.constructor = childCtor;
            };
}
ol.inherits(ol.featureAnimation, ol.Object);

/** ????????????
*	@param {olx.animateFeatureEvent} ??????????????????
*	@param {ol.geom} ??????????????????
*	@param {ol.geom} ??????????????????
*/
ol.featureAnimation.prototype.drawGeom_ = function (e, geom, shadow) {
	if (this.fade_) {
		e.context.globalAlpha = this.fade_(1 - e.elapsed);
	}
	var style = e.style;
	for (var i = 0; i < style.length; i++) {
		var imgs = style[i].getImage();
		var sc = 0;
		// OL < v4.3 : setImageStyle doesn't check retina
		if (imgs && !ol.Map.prototype.getFeaturesAtPixel) {
			sc = imgs.getScale();
			imgs.setScale(e.frameState.pixelRatio * sc);
		}
		e.vectorContext.setStyle(style[i]);
		if (style[i].getZIndex() < 0) e.vectorContext.drawGeometry(shadow || geom);else e.vectorContext.drawGeometry(geom);
		if (sc && imgs) imgs.setScale(sc);
	}
};

/** 
 * ??????false????????????
* @param {ol.featureAnimation.event} e
* @return {bool} 
* @api 
*/
ol.featureAnimation.prototype.animate = function (e) {
	return false;
};

/** ?????????????????????
*	@fires animationend
*	@param {ol.Feature} feature ???????????????
*	@param {ol.featureAnimation|Array<ol.featureAnimation>} ??????????????????
*/
ol.Map.prototype.animateFeature =

/** ?????????????????????????????????
*	@fires animationend
*	@param {ol.Feature} feature ????????????
*	@param {ol.featureAnimation|Array<ol.featureAnimation>} ??????????????????
*	@return {animationControler} 
*		- start {function} ??????????????????
*		- stop {function} ????????????
*		- isPlaying {function} ??????????????????????????????
*/
ol.layer.Vector.prototype.animateFeature = function (feature, fanim) {
	var self = this;
	var listenerKey;

	// 
	var style = feature.getStyle();
	var flashStyle = style || (this.getStyleFunction ? this.getStyleFunction()(feature) : null);
	if (!flashStyle) flashStyle = [];
	if (!(flashStyle instanceof Array)) flashStyle = [flashStyle];

	// ?????????????????????setStyle,????????????postcompose?????????
	feature.setStyle(fanim.hiddenStyle || []);

	// ????????????????????????
	var event = { // ???????????????????????????
		vectorContext: null,
		frameState: null, //?
		start: 0,
		time: 0,
		elapsed: 0,
		extent: false,
		feature: feature,
		geom: feature.getGeometry(),
		typeGeom: feature.getGeometry().getType(),
		bbox: feature.getGeometry().getExtent(),
		coord: ol.extent.getCenter(feature.getGeometry().getExtent()),
		style: flashStyle
	};

	if (!(fanim instanceof Array)) fanim = [fanim];
	// ?????????????????????????????????
	for (var i = fanim.length - 1; i >= 0; i--) {
		if (fanim[i].duration_ === 0) fanim.splice(i, 1);
	}

	var nb = 0,
	    step = 0;

	function animate(e) {
		event.vectorContext = e.vectorContext;
		event.frameState = e.frameState;
		if (!event.extent) {
			event.extent = e.frameState.extent;
			event.start = e.frameState.time;
			event.context = e.context;
		}
		event.time = e.frameState.time - event.start;
		//event.elapsed = ?????????????????????/???????????????
		event.elapsed = event.time / fanim[step].duration_;
		if (event.elapsed > 1) event.elapsed = 1;

		// ??????????????????
		if (!fanim[step].animate(event)) {
			nb++;
			// ????????????
			if (nb < fanim[step].repeat_) {
				event.extent = false;
			} else if (step < fanim.length - 1) {
				fanim[step].dispatchEvent({ type: 'animationend', feature: feature });
				step++;
				nb = 0;
				event.extent = false;
			}
			// ????????????
			else {
					stop();
				}
		}

		// ????????????????????????????????????postcompose???????????????????????????????????????????????????????????????????????????????????????????????????????????????
		e.frameState.animate = true;
	}

	// ????????????
	function stop(options) {
		//??????postcompose???????????????
		ol.Observable.unByKey(listenerKey);
		listenerKey = null;
		feature.setStyle(style);
		// Send event ??????????????????????????????
		var event = { type: 'animationend', feature: feature };
		if (options) {
			for (var i in options) {
				if (options.hasOwnProperty(i)) {
					event[i] = options[i];
				}
			}
		}
		//????????????????????????
		fanim[step].dispatchEvent(event);
		self.dispatchEvent(event);
	}

	//????????????
	function start(options) {
		if (fanim.length && !listenerKey) {
			//?????????????????????????????????animate?????????????????????
			listenerKey = self.on('postcompose', animate, self);
			//map or layer?
			if (self.renderSync) {
				self.renderSync();
			} else {
				self.changed();
			}
			// Send event ????????????????????????
			var event = { type: 'animationstart', feature: feature };
			if (options) {
				for (var i in options) {
					if (options.hasOwnProperty(i)) {
						event[i] = options[i];
					}
				}
			}
			//????????????????????????
			fanim[step].dispatchEvent(event);
			self.dispatchEvent(event);
		}
	}
	start();

	// ?????????????????????
	return {
		start: start,
		stop: stop,
		//??????listenerKey???????????????????????????
		isPlaying: function isPlaying() {
			return !!listenerKey;
		}
	};
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * create by gaoyi	
 * create time: 2017-8-23
 * ??????featureAnimation,????????????????????????????????????
 */
ol.featureAnimation.Increase = function (options) {
  options = options || {};
  this.speed_ = options.speed || 0;
  ol.featureAnimation.call(this, options);
  this.side_ = options.side || 'top';
  //??????????????????
  this._lineStringAdd = new ol.geom.LineString([]);
};
ol.inherits(ol.featureAnimation.Increase, ol.featureAnimation);

/**
 * ??????????????????
* @param {ol.featureAnimationEvent} e
*/
ol.featureAnimation.Increase.prototype.animate = function (e) {

  var length = e.geom.getLength();
  var coordinates = e.geom.getCoordinates();
  this._drawAnimFrame(e.time, this.duration_, length, coordinates, e);

  return e.time <= this.duration_;
};

//TODO:??????ol3???????????????????????????????????????api,????????????????????????geom?????????
ol.geom.Point.getLength = function (point1, point2) {
  var x0 = point1[0];
  var y0 = point1[1];
  var x1 = point2[0];
  var y1 = point2[1];
  var distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
  return distance;
};

/**
 * ???????????????
 * @param {Number} t   ??????????????????????????????
 * @param {Number} duration  ????????????????????????
 * @param {Number} length ????????????
 * @return {array} coordinates ???????????????
 * @api
 */
ol.featureAnimation.Increase.prototype._drawAnimFrame = function (t, duration, length, coordinates, e) {
  if (t === 0) {
    this._lineStringAdd.setCoordinates([]);
    return;
  }
  //????????????/??????????????????*?????????=targetLength?????????t???????????????????????????
  var targetLength = t / duration * length;
  if (!this._animIdx) {
    this._animIdx = 0;
    this._animLenSoFar = 0;
  }
  var segLen = 0;
  var i = void 0,
      l = void 0;
  for (i = this._animIdx, l = coordinates.length; i < l - 1; i++) {
    //????????????????????????
    segLen = ol.geom.Point.getLength(coordinates[i], coordinates[i + 1]); //e.geom.getLength()(coordinates[i], coordinates[i + 1]);
    if (this._animLenSoFar + segLen > targetLength) {
      break;
    }
    this._animLenSoFar += segLen;
  }
  this._animIdx = i;
  if (this._animIdx >= l - 1) {
    this._lineStringAdd.setCoordinates(coordinates);
    var flashGeom = e.geom.clone();
    this.drawGeom_(e, this._lineStringAdd.clone(), this._lineStringAdd.clone());
    return;
  }
  var idx = this._animIdx;
  var p1 = coordinates[idx],
      p2 = coordinates[idx + 1],

  //????????????????????? - 
  span = targetLength - this._animLenSoFar,
      r = span / segLen;
  //???????????????????????????????????????????????????
  var x = p1[0] + (p2[0] - p1[0]) * r,
      //p1.x + (p2.x - p1.x) * r,
  y = p1[1] + (p2[1] - p1[1]) * r,
      //p1.y + (p2.y - p1.y) * r,
  targetCoord = [x, y];
  var animCoords = coordinates.slice(0, this._animIdx + 1);
  animCoords.push(targetCoord);

  this._lineStringAdd.setCoordinates(animCoords);
  var flashGeom = e.geom.clone();
  this.drawGeom_(e, this._lineStringAdd.clone(), this._lineStringAdd.clone());
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

exports.noConflict = noConflict;

var _map = __webpack_require__(12);

var _map2 = _interopRequireDefault(_map);

var _overlay = __webpack_require__(13);

var _overlay2 = _interopRequireDefault(_overlay);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(14);

var _index4 = _interopRequireDefault(_index3);

var _utils = __webpack_require__(15);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ld = {
    version: "1.0.0"
    //...utils
};
(0, _assign2.default)(ld, _utils2.default);
// ??????L???ol???
ld = ol = ld.utils.extend(ol, ld);
//TODO: L???????????????????????????????????????????????????????????????API???????????????????????????????????????ld
window.ld = window.L = ld;

var oldld = window.ol;
function noConflict() {
    window.ld = oldld;
    return this;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ol.tilegrid.extentFromProjection = function (projection) {
    projection = ol.proj.get(projection);
    var extent = projection.getExtent();
    if (!extent) {
        var half = 180 * ol.proj.METERS_PER_UNIT[ol.proj.Units.DEGREES] / projection.getMetersPerUnit();
        extent = ol.extent.createOrUpdate(-half, -half, half, half);
    }
    return extent;
};
if (!ol.obj) {
    ol.obj = {};
}
ol.tilegrid.createESRICache = function (opt_options) {
    var options = /** @type {olx.tilegrid.TileGridOptions} */{};
    ol.obj.assign(options, opt_options !== undefined ? opt_options : /** @type {olx.tilegrid.XYZOptions} */{});
    if (options.extent === undefined) {
        options.extent = ol.proj.get('EPSG:3857').getExtent();
    }
    options.resolutions = options.resolutions;
    /*ol.tilegrid.resolutionsFromExtent(
     options.extent, options.maxZoom, options.tileSize)*/
    ;

    return new ol.tilegrid.TileGrid(options);
};

ol.source.ESRICache = function (opt_options) {
    var options = opt_options || {};
    var projection = options.projection !== undefined ? options.projection : 'EPSG:3857';

    var tileGrid = options.tileGrid !== undefined ? options.tileGrid : ol.tilegrid.createESRICache({
        origin: options.origin,
        extent: ol.tilegrid.extentFromProjection(projection),
        resolutions: options.resolutions,
        tileSize: options.tileSize
    });
    /* var crossOrigin = options.crossOrigin !== undefined ?
     options.crossOrigin : 'anonymous';*/
    ol.source.XYZ.call(this, {
        attributions: options.attributions,
        cacheSize: options.cacheSize,
        crossOrigin: options.crossOrigin,
        logo: options.logo,
        opaque: options.opaque,
        projection: projection,
        reprojectionErrorThreshold: options.reprojectionErrorThreshold,
        tileGrid: tileGrid,
        tileLoadFunction: options.tileLoadFunction,
        tilePixelRatio: options.tilePixelRatio,
        tileUrlFunction: options.tileUrlFunction,
        url: options.url,
        urls: options.urls,
        wrapX: options.wrapX !== undefined ? options.wrapX : true
    });
};

ol.obj.assign = typeof _assign2.default === 'function' ? _assign2.default : function (target, var_sources) {
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    for (var i = 1, ii = arguments.length; i < ii; ++i) {
        var source = arguments[i];
        if (source !== undefined && source !== null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    output[key] = source[key];
                }
            }
        }
    }
    return output;
};

ol.inherits(ol.source.ESRICache, ol.source.XYZ);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * create by gaoyi
 * create time:2017-7-15
 * ???????????????arcgis ??????????????????
 */
ol.source.IShowMapTiled = function (opt_options) {

    var options = opt_options || {};

    var attributions;
    if (options.attributions !== undefined) {
        attributions = options.attributions;
    } else {
        attributions = [ol.source.IShowMapTiled.ATTRIBUTION];
    }
    var projection = opt_options.projection || ol.proj.get('EPSG:3857');
    var crossOrigin = options.crossOrigin !== undefined ? options.crossOrigin : 'anonymous';

    var url = options.url !== undefined ? options.url : 'http://tile5.ishowchina.com/v3/tile/{z}/{x}/{y}.png';

    ol.source.XYZ.call(this, {
        //attributions: attributions,
        cacheSize: options.cacheSize,
        crossOrigin: crossOrigin,
        projection: projection,
        opaque: options.opaque !== undefined ? options.opaque : true,
        maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
        reprojectionErrorThreshold: options.reprojectionErrorThreshold,
        tileLoadFunction: options.tileLoadFunction,
        url: url,
        wrapX: options.wrapX
    });
};
ol.inherits(ol.source.IShowMapTiled, ol.source.XYZ);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * create by zxj
 * ol.source.ImageArcGISRest??????Arcgis MapServer???ImageServer?????????????????????????????????????????????MapServer?????????ImageServer???????????????
 * ??????????????????????????????--->??????---->????????????---->???????????? ??????????????????MapServer????????????????????????????????????????????? ?????????ol.source.ImageArcGISRest API???
 * ????????????????????????????????????????????????????????????????????????MapServer?????????ImageServer????????????????????????????????????????????????
 *      ??????????????????????????????????????????????????????getRequestUrl_???
 *      ???????????????????????????????????????MapServer????????????????????????????????????ImageServer????????????????????????????????????????????????
 *      ??????????????????openlayers v4.6.5??????
 * @param {ol.Extent} extent Extent.
 * @param {ol.Size} size Size.
 * @param {number} pixelRatio Pixel ratio.
 * @param {ol.proj.Projection} projection Projection.
 * @param {Object} params Params.
 * @return {string} Request URL.
 * @private
 */
ol.source.ImageArcGISRest.prototype.getRequestUrl_ = function (extent, size, pixelRatio, projection, params) {
    // ArcGIS Server only wants the numeric portion of the projection ID.
    var srid = projection.getCode().split(':').pop();

    params['SIZE'] = size[0] + ',' + size[1];
    params['BBOX'] = extent.join(',');
    params['BBOXSR'] = srid;
    params['IMAGESR'] = srid;
    params['DPI'] = Math.round(90 * pixelRatio);

    var url = this.url_;

    var modifiedUrl;

    /**
     * todo ???????????????
     * ?????????
      var modifiedUrl = url
     .replace(/MapServer\/?$/, 'MapServer/export')
     .replace(/ImageServer\/?$/, 'ImageServer/exportImage');
     */
    if (url.indexOf("/proxy/server/") < 0 && url.indexOf("/proxy/layer/") < 0) {
        modifiedUrl = url.replace(/MapServer\/?$/, 'MapServer/export').replace(/ImageServer\/?$/, 'ImageServer/exportImage');
    } else {
        modifiedUrl = url + "/export";
    }
    /**
     * ============================================================================
     */

    if (modifiedUrl == url) {
        ol.asserts.assert(false, 50); // `options.featureTypes` should be an Array
    }
    return ol.uri.appendParams(modifiedUrl, params);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(44);
var toAbsoluteIndex = __webpack_require__(43);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(31);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(35);
var createDesc = __webpack_require__(40);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(2)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(38);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(39);
var toObject = __webpack_require__(45);
var IObject = __webpack_require__(8);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(2)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(32);
var toPrimitive = __webpack_require__(46);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(25)(false);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(37);
var enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42)('keys');
var uid = __webpack_require__(47);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(33) ? 'pure' : 'global',
  copyright: '?? 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(9);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(9);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(30);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(34) });


/***/ })
/******/ ]);
});
//# sourceMappingURL=olMap.js.map