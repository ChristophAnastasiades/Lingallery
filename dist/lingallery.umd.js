(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lingallery"] = factory(require("vue"));
	else
		root["lingallery"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".scaling-squares-spinner[data-v-dbacb9de],.scaling-squares-spinner *[data-v-dbacb9de]{-webkit-box-sizing:border-box;box-sizing:border-box}.scaling-squares-spinner[data-v-dbacb9de]{height:65px;width:65px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-animation:scaling-squares-animation-data-v-dbacb9de 1.25s;animation:scaling-squares-animation-data-v-dbacb9de 1.25s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.scaling-squares-spinner .square[data-v-dbacb9de]{height:12.5px;width:12.5px;margin-right:auto;margin-left:auto;border:2px solid #ff1d5e;position:absolute;-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.scaling-squares-spinner .square[data-v-dbacb9de]:first-child{-webkit-animation-name:scaling-squares-spinner-animation-child-1-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-1-data-v-dbacb9de}.scaling-squares-spinner .square[data-v-dbacb9de]:nth-child(2){-webkit-animation-name:scaling-squares-spinner-animation-child-2-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-2-data-v-dbacb9de}.scaling-squares-spinner .square[data-v-dbacb9de]:nth-child(3){-webkit-animation-name:scaling-squares-spinner-animation-child-3-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-3-data-v-dbacb9de}.scaling-squares-spinner .square[data-v-dbacb9de]:nth-child(4){-webkit-animation-name:scaling-squares-spinner-animation-child-4-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-4-data-v-dbacb9de}@-webkit-keyframes scaling-squares-animation-data-v-dbacb9de{50%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes scaling-squares-animation-data-v-dbacb9de{50%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@-webkit-keyframes scaling-squares-spinner-animation-child-1-data-v-dbacb9de{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-1-data-v-dbacb9de{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@-webkit-keyframes scaling-squares-spinner-animation-child-2-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-2-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@-webkit-keyframes scaling-squares-spinner-animation-child-3-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-3-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@-webkit-keyframes scaling-squares-spinner-animation-child-4-data-v-dbacb9de{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-4-data-v-dbacb9de{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "0433":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("61b6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b8464ef6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "04ae":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#largeViewContainer[data-v-4147e7f8]{z-index:999;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.75)}#largeViewContainer.fadeIn[data-v-4147e7f8],#largeViewContainer.fadeOut[data-v-4147e7f8]{-webkit-animation-name:fadeIn-data-v-4147e7f8;animation-name:fadeIn-data-v-4147e7f8;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:.5s;animation-duration:.5s}#largeViewContainer.fadeOut[data-v-4147e7f8]{-webkit-animation-name:fadeOut-data-v-4147e7f8;animation-name:fadeOut-data-v-4147e7f8}#largeViewContainer img[data-v-4147e7f8]{z-index:1000;position:fixed;top:50%;left:50%;max-width:90vw;max-height:90vh;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-shadow:rgba(0,0,0,.2) 0 1px 8px 0,rgba(0,0,0,.14) 0 3px 4px 0,rgba(0,0,0,.12) 0 3px 3px -2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}#largeViewContainer img.fadeIn[data-v-4147e7f8],#largeViewContainer img.fadeOut[data-v-4147e7f8]{-webkit-animation-name:fadeIn-data-v-4147e7f8;animation-name:fadeIn-data-v-4147e7f8;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}#largeViewContainer img.fadeOut[data-v-4147e7f8]{-webkit-animation-name:fadeOut-data-v-4147e7f8;animation-name:fadeOut-data-v-4147e7f8}#largeViewContainer a[data-v-4147e7f8]{position:fixed;top:10px;right:10px;display:block;width:32px;height:32px;opacity:.5;cursor:pointer}#largeViewContainer a[data-v-4147e7f8]:focus,#largeViewContainer a[data-v-4147e7f8]:hover{opacity:1}#largeViewContainer a[data-v-4147e7f8]:after,#largeViewContainer a[data-v-4147e7f8]:before{position:absolute;left:15px;content:\" \";height:33px;width:2px;background-color:#fff}#largeViewContainer a[data-v-4147e7f8]:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}#largeViewContainer a[data-v-4147e7f8]:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}@-webkit-keyframes fadeIn-data-v-4147e7f8{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-4147e7f8{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut-data-v-4147e7f8{0%{opacity:1}to{opacity:0}}@keyframes fadeOut-data-v-4147e7f8{0%{opacity:1}to{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "09fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b075");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0e2a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5dcd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c6869544", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "0fa6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b84d");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1016":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb81");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "10e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9a8");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "16b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d72");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "180c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("385f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ded3c3bc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c50":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a6c9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("06513598", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1c92":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0433");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28db":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fulfilling-square-spinner[data-v-3f451d6f],.fulfilling-square-spinner *[data-v-3f451d6f]{-webkit-box-sizing:border-box;box-sizing:border-box}.fulfilling-square-spinner[data-v-3f451d6f]{height:50px;width:50px;position:relative;border:4px solid #ff1d5e;-webkit-animation:fulfilling-square-spinner-animation-data-v-3f451d6f 4s ease infinite;animation:fulfilling-square-spinner-animation-data-v-3f451d6f 4s ease infinite}.fulfilling-square-spinner .spinner-inner[data-v-3f451d6f]{vertical-align:top;display:inline-block;background-color:#ff1d5e;width:100%;opacity:1;-webkit-animation:fulfilling-square-spinner-inner-animation-data-v-3f451d6f 4s ease-in infinite;animation:fulfilling-square-spinner-inner-animation-data-v-3f451d6f 4s ease-in infinite}@-webkit-keyframes fulfilling-square-spinner-animation-data-v-3f451d6f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fulfilling-square-spinner-animation-data-v-3f451d6f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes fulfilling-square-spinner-inner-animation-data-v-3f451d6f{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}@keyframes fulfilling-square-spinner-inner-animation-data-v-3f451d6f{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2f67":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fingerprint-spinner[data-v-077ae5a6],.fingerprint-spinner *[data-v-077ae5a6]{-webkit-box-sizing:border-box;box-sizing:border-box}.fingerprint-spinner[data-v-077ae5a6]{height:64px;width:64px;padding:2px;overflow:hidden;position:relative}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]{position:absolute;border-radius:50%;border:2px solid transparent;border-top-color:#ff1d5e;-webkit-animation:fingerprint-spinner-animation-data-v-077ae5a6 1.5s cubic-bezier(.68,-.75,.265,1.75) infinite forwards;animation:fingerprint-spinner-animation-data-v-077ae5a6 1.5s cubic-bezier(.68,-.75,.265,1.75) infinite forwards;margin:auto;bottom:0;left:0;right:0;top:0}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:first-child{height:6.66667px;width:6.66667px;-webkit-animation-delay:50ms;animation-delay:50ms}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(2){height:13.33334px;width:13.33334px;-webkit-animation-delay:.1s;animation-delay:.1s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(3){height:20px;width:20px;-webkit-animation-delay:.15s;animation-delay:.15s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(4){height:26.66667px;width:26.66667px;-webkit-animation-delay:.2s;animation-delay:.2s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(5){height:33.33334px;width:33.33334px;-webkit-animation-delay:.25s;animation-delay:.25s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(6){height:40px;width:40px;-webkit-animation-delay:.3s;animation-delay:.3s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(7){height:46.66667px;width:46.66667px;-webkit-animation-delay:.35s;animation-delay:.35s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(8){height:53.33334px;width:53.33334px;-webkit-animation-delay:.4s;animation-delay:.4s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(9){height:60px;width:60px;-webkit-animation-delay:.45s;animation-delay:.45s}@-webkit-keyframes fingerprint-spinner-animation-data-v-077ae5a6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fingerprint-spinner-animation-data-v-077ae5a6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "30df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("180c");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3389":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("828d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("fb54c4cc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bce9");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "35f5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".spring-spinner[data-v-1ae1dc20],.spring-spinner *[data-v-1ae1dc20]{-webkit-box-sizing:border-box;box-sizing:border-box}.spring-spinner[data-v-1ae1dc20]{height:60px;width:60px}.spring-spinner .spring-spinner-part[data-v-1ae1dc20]{overflow:hidden;height:30px;width:60px}.spring-spinner .spring-spinner-part.bottom[data-v-1ae1dc20]{-webkit-transform:rotate(180deg) scaleX(-1);transform:rotate(180deg) scaleX(-1)}.spring-spinner .spring-spinner-rotator[data-v-1ae1dc20]{width:60px;height:60px;border:8.57143px solid transparent;border-right-color:#ff1d5e;border-top-color:#ff1d5e;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:spring-spinner-animation-data-v-1ae1dc20 3s ease-in-out infinite;animation:spring-spinner-animation-data-v-1ae1dc20 3s ease-in-out infinite;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}@-webkit-keyframes spring-spinner-animation-data-v-1ae1dc20{0%{border-width:8.57143px}25%{border-width:2.5718px}50%{-webkit-transform:rotate(115deg);transform:rotate(115deg);border-width:8.57143px}75%{border-width:2.5718px}to{border-width:8.57143px}}@keyframes spring-spinner-animation-data-v-1ae1dc20{0%{border-width:8.57143px}25%{border-width:2.5718px}50%{-webkit-transform:rotate(115deg);transform:rotate(115deg);border-width:8.57143px}75%{border-width:2.5718px}to{border-width:8.57143px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "385f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".semipolar-spinner[data-v-9544fc1a],.semipolar-spinner *[data-v-9544fc1a]{-webkit-box-sizing:border-box;box-sizing:border-box}.semipolar-spinner[data-v-9544fc1a]{height:65px;width:65px;position:relative}.semipolar-spinner .ring[data-v-9544fc1a]{border-radius:50%;position:absolute;border:3.25px solid transparent;border-top-color:#ff1d5e;border-left-color:#ff1d5e;-webkit-animation:semipolar-spinner-animation-data-v-9544fc1a 2s infinite;animation:semipolar-spinner-animation-data-v-9544fc1a 2s infinite}.semipolar-spinner .ring[data-v-9544fc1a]:first-child{height:65px;width:65px;top:0;left:0;-webkit-animation-delay:.8s;animation-delay:.8s;z-index:5}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(2){height:52px;width:52px;top:6.5px;left:6.5px;-webkit-animation-delay:.6s;animation-delay:.6s;z-index:4}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(3){height:39px;width:39px;top:13px;left:13px;-webkit-animation-delay:.4s;animation-delay:.4s;z-index:3}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(4){height:26px;width:26px;top:19.5px;left:19.5px;-webkit-animation-delay:.2s;animation-delay:.2s;z-index:2}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(5){height:13px;width:13px;top:26px;left:26px;-webkit-animation-delay:0ms;animation-delay:0ms;z-index:1}@-webkit-keyframes semipolar-spinner-animation-data-v-9544fc1a{50%{-webkit-transform:rotate(1turn) scale(.7);transform:rotate(1turn) scale(.7)}}@keyframes semipolar-spinner-animation-data-v-9544fc1a{50%{-webkit-transform:rotate(1turn) scale(.7);transform:rotate(1turn) scale(.7)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "389c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cded");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3d8a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b01");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4026":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".looping-rhombuses-spinner[data-v-49d9ad28],.looping-rhombuses-spinner *[data-v-49d9ad28]{-webkit-box-sizing:border-box;box-sizing:border-box}.looping-rhombuses-spinner[data-v-49d9ad28]{width:60px;height:15px;position:relative}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]{height:15px;width:15px;background-color:#ff1d5e;left:60px;position:absolute;margin:0 auto;border-radius:2px;-webkit-transform:translateY(0) rotate(45deg) scale(0);transform:translateY(0) rotate(45deg) scale(0);-webkit-animation:looping-rhombuses-spinner-animation-data-v-49d9ad28 2.5s linear infinite;animation:looping-rhombuses-spinner-animation-data-v-49d9ad28 2.5s linear infinite}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]:first-child{-webkit-animation-delay:-1666.66667ms;animation-delay:-1666.66667ms}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]:nth-child(2){-webkit-animation-delay:-3.33333333s;animation-delay:-3.33333333s}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]:nth-child(3){-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes looping-rhombuses-spinner-animation-data-v-49d9ad28{0%{-webkit-transform:translateX(0) rotate(45deg) scale(0);transform:translateX(0) rotate(45deg) scale(0)}50%{-webkit-transform:translateX(-233%) rotate(45deg) scale(1);transform:translateX(-233%) rotate(45deg) scale(1)}to{-webkit-transform:translateX(-466%) rotate(45deg) scale(0);transform:translateX(-466%) rotate(45deg) scale(0)}}@keyframes looping-rhombuses-spinner-animation-data-v-49d9ad28{0%{-webkit-transform:translateX(0) rotate(45deg) scale(0);transform:translateX(0) rotate(45deg) scale(0)}50%{-webkit-transform:translateX(-233%) rotate(45deg) scale(1);transform:translateX(-233%) rotate(45deg) scale(1)}to{-webkit-transform:translateX(-466%) rotate(45deg) scale(0);transform:translateX(-466%) rotate(45deg) scale(0)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4a75":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("80cb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b1821652", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4e68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9c6");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4ed0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("04ae");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("8bbbf204", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4fb9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8300");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("962ee67c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "54ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/addons/LargeView.vue?vue&type=template&id=4147e7f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:{ fadeIn: _vm.runAnimation, fadeOut: !_vm.runAnimation },attrs:{"id":"largeViewContainer"}},[(Object.prototype.hasOwnProperty.call(_vm.item, 'pictureElement'))?_c('picture',[_vm._l((_vm.item.pictureElement),function(source,index){return _c('source',{key:index,attrs:{"srcset":source.srcset,"media":source.media ? source.media : false,"type":source.type ? source.type : false}})}),_c('img',{attrs:{"src":_vm.item.src,"alt":_vm.item.alt}})],2):_c('img',{attrs:{"src":_vm.currentImage}}),_c('a',{on:{"click":_vm.handleCloseClick}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/addons/LargeView.vue?vue&type=template&id=4147e7f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/addons/LargeView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LargeViewvue_type_script_lang_js_ = ({
  name: 'LargeView',
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    settings: {
      type: Object,
      default: function _default() {
        return {
          maxWidth: 750
        };
      }
    },
    accentColor: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      runAnimation: true,
      isLoading: true
    };
  },
  computed: {
    currentImage: function currentImage() {
      return Object.prototype.hasOwnProperty.call(this.item, 'largeViewSrc') ? this.item.largeViewSrc : this.item.src;
    }
  },
  methods: {
    handleCloseClick: function handleCloseClick() {
      var _this = this;

      this.runAnimation = false;
      window.setTimeout(function () {
        _this.runAnimation = true;

        _this.$emit('close-large-view');
      }, 500);
    }
  }
});
// CONCATENATED MODULE: ./src/components/addons/LargeView.vue?vue&type=script&lang=js&
 /* harmony default export */ var addons_LargeViewvue_type_script_lang_js_ = (LargeViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/addons/LargeView.vue?vue&type=style&index=0&id=4147e7f8&lang=scss&scoped=true&
var LargeViewvue_type_style_index_0_id_4147e7f8_lang_scss_scoped_true_ = __webpack_require__("aced");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/addons/LargeView.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  addons_LargeViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4147e7f8",
  null
  
)

/* harmony default export */ var LargeView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "571f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".radar-spinner[data-v-5710a196],.radar-spinner *[data-v-5710a196]{-webkit-box-sizing:border-box;box-sizing:border-box}.radar-spinner[data-v-5710a196]{height:60px;width:60px;position:relative}.radar-spinner .circle[data-v-5710a196]{position:absolute;height:100%;width:100%;top:0;left:0;-webkit-animation:radar-spinner-animation-data-v-5710a196 2s infinite;animation:radar-spinner-animation-data-v-5710a196 2s infinite}.radar-spinner .circle[data-v-5710a196]:first-child{padding:0;-webkit-animation-delay:.3s;animation-delay:.3s}.radar-spinner .circle[data-v-5710a196]:nth-child(2){padding:5.45455px;-webkit-animation-delay:.3s;animation-delay:.3s}.radar-spinner .circle[data-v-5710a196]:nth-child(3){padding:10.90909px;-webkit-animation-delay:.3s;animation-delay:.3s}.radar-spinner .circle[data-v-5710a196]:nth-child(4){padding:16.36364px;-webkit-animation-delay:0ms;animation-delay:0ms}.radar-spinner .circle-inner[data-v-5710a196],.radar-spinner .circle-inner-container[data-v-5710a196]{height:100%;width:100%;border-radius:50%;border:2.72727px solid transparent}.radar-spinner .circle-inner[data-v-5710a196]{border-left-color:#ff1d5e;border-right-color:#ff1d5e}@-webkit-keyframes radar-spinner-animation-data-v-5710a196{50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes radar-spinner-animation-data-v-5710a196{50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5b6b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b23a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1d8e89f5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5c6c":
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

/***/ "5d60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3389");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5dcd":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".trinity-rings-spinner[data-v-19bbdf0e],.trinity-rings-spinner *[data-v-19bbdf0e]{-webkit-box-sizing:border-box;box-sizing:border-box}.trinity-rings-spinner[data-v-19bbdf0e]{height:66px;width:66px;padding:3px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;overflow:hidden}.trinity-rings-spinner .circle[data-v-19bbdf0e]{position:absolute;display:block;border-radius:50%;border:3px solid #ff1d5e;opacity:1}.trinity-rings-spinner .circle[data-v-19bbdf0e]:first-child{height:60px;width:60px;-webkit-animation:trinity-rings-spinner-circle1-animation-data-v-19bbdf0e 1.5s linear infinite;animation:trinity-rings-spinner-circle1-animation-data-v-19bbdf0e 1.5s linear infinite;border-width:3px}.trinity-rings-spinner .circle[data-v-19bbdf0e]:nth-child(2){height:39px;width:39px;-webkit-animation:trinity-rings-spinner-circle2-animation-data-v-19bbdf0e 1.5s linear infinite;animation:trinity-rings-spinner-circle2-animation-data-v-19bbdf0e 1.5s linear infinite;border-width:2px}.trinity-rings-spinner .circle[data-v-19bbdf0e]:nth-child(3){height:6px;width:6px;-webkit-animation:trinity-rings-spinner-circle3-animation-data-v-19bbdf0e 1.5s linear infinite;animation:trinity-rings-spinner-circle3-animation-data-v-19bbdf0e 1.5s linear infinite;border-width:1px}@-webkit-keyframes trinity-rings-spinner-circle1-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(20deg) rotateY(0deg);transform:rotate(20deg) rotateY(0deg)}to{-webkit-transform:rotate(100deg) rotateY(1turn);transform:rotate(100deg) rotateY(1turn)}}@keyframes trinity-rings-spinner-circle1-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(20deg) rotateY(0deg);transform:rotate(20deg) rotateY(0deg)}to{-webkit-transform:rotate(100deg) rotateY(1turn);transform:rotate(100deg) rotateY(1turn)}}@-webkit-keyframes trinity-rings-spinner-circle2-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(0deg);transform:rotate(100deg) rotateX(0deg)}to{-webkit-transform:rotate(0deg) rotateX(1turn);transform:rotate(0deg) rotateX(1turn)}}@keyframes trinity-rings-spinner-circle2-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(0deg);transform:rotate(100deg) rotateX(0deg)}to{-webkit-transform:rotate(0deg) rotateX(1turn);transform:rotate(0deg) rotateX(1turn)}}@-webkit-keyframes trinity-rings-spinner-circle3-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(-1turn);transform:rotate(100deg) rotateX(-1turn)}to{-webkit-transform:rotate(-1turn) rotateX(1turn);transform:rotate(-1turn) rotateX(1turn)}}@keyframes trinity-rings-spinner-circle3-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(-1turn);transform:rotate(100deg) rotateX(-1turn)}to{-webkit-transform:rotate(-1turn) rotateX(1turn);transform:rotate(-1turn) rotateX(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "61b6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".orbit-spinner[data-v-34a3fdef],.orbit-spinner *[data-v-34a3fdef]{-webkit-box-sizing:border-box;box-sizing:border-box}.orbit-spinner[data-v-34a3fdef]{height:55px;width:55px;border-radius:50%;-webkit-perspective:800px;perspective:800px}.orbit-spinner .orbit[data-v-34a3fdef]{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.orbit-spinner .orbit[data-v-34a3fdef]:first-child{left:0;top:0;-webkit-animation:orbit-spinner-orbit-one-animation-data-v-34a3fdef 1.2s linear infinite;animation:orbit-spinner-orbit-one-animation-data-v-34a3fdef 1.2s linear infinite;border-bottom:3px solid #ff1d5e}.orbit-spinner .orbit[data-v-34a3fdef]:nth-child(2){right:0;top:0;-webkit-animation:orbit-spinner-orbit-two-animation-data-v-34a3fdef 1.2s linear infinite;animation:orbit-spinner-orbit-two-animation-data-v-34a3fdef 1.2s linear infinite;border-right:3px solid #ff1d5e}.orbit-spinner .orbit[data-v-34a3fdef]:nth-child(3){right:0;bottom:0;-webkit-animation:orbit-spinner-orbit-three-animation-data-v-34a3fdef 1.2s linear infinite;animation:orbit-spinner-orbit-three-animation-data-v-34a3fdef 1.2s linear infinite;border-top:3px solid #ff1d5e}@-webkit-keyframes orbit-spinner-orbit-one-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(0deg);transform:rotateX(35deg) rotateY(-45deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(1turn);transform:rotateX(35deg) rotateY(-45deg) rotate(1turn)}}@keyframes orbit-spinner-orbit-one-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(0deg);transform:rotateX(35deg) rotateY(-45deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(1turn);transform:rotateX(35deg) rotateY(-45deg) rotate(1turn)}}@-webkit-keyframes orbit-spinner-orbit-two-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(0deg);transform:rotateX(50deg) rotateY(10deg) rotate(0deg)}to{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(1turn);transform:rotateX(50deg) rotateY(10deg) rotate(1turn)}}@keyframes orbit-spinner-orbit-two-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(0deg);transform:rotateX(50deg) rotateY(10deg) rotate(0deg)}to{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(1turn);transform:rotateX(50deg) rotateY(10deg) rotate(1turn)}}@-webkit-keyframes orbit-spinner-orbit-three-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(0deg);transform:rotateX(35deg) rotateY(55deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(1turn);transform:rotateX(35deg) rotateY(55deg) rotate(1turn)}}@keyframes orbit-spinner-orbit-three-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(0deg);transform:rotateX(35deg) rotateY(55deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(1turn);transform:rotateX(35deg) rotateY(55deg) rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "66d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5b6b");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6b65":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".circles-to-rhombuses-spinner[data-v-7a6e17e5],.circles-to-rhombuses-spinner *[data-v-7a6e17e5]{-webkit-box-sizing:border-box;box-sizing:border-box}.circles-to-rhombuses-spinner[data-v-7a6e17e5]{height:15px;width:95.625px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]{height:15px;width:15px;margin-left:16.875px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:10%;border:3px solid #ff1d5e;overflow:hidden;background:transparent;-webkit-animation:circles-to-rhombuses-animation-data-v-7a6e17e5 1.2s linear infinite;animation:circles-to-rhombuses-animation-data-v-7a6e17e5 1.2s linear infinite}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]:first-child{-webkit-animation-delay:.15s;animation-delay:.15s;margin-left:0}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]:nth-child(3){-webkit-animation-delay:.45s;animation-delay:.45s}@-webkit-keyframes circles-to-rhombuses-animation-data-v-7a6e17e5{0%{border-radius:10%}17.5%{border-radius:10%}50%{border-radius:100%}93.5%{border-radius:10%}to{border-radius:10%}}@keyframes circles-to-rhombuses-animation-data-v-7a6e17e5{0%{border-radius:10%}17.5%{border-radius:10%}50%{border-radius:100%}93.5%{border-radius:10%}to{border-radius:10%}}@-webkit-keyframes circles-to-rhombuses-background-animation-data-v-7a6e17e5{50%{opacity:.4}}@keyframes circles-to-rhombuses-background-animation-data-v-7a6e17e5{50%{opacity:.4}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6bc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c535");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6d72":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("95d3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2221e8ba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "741b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c50");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f2f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".breeding-rhombus-spinner[data-v-8fa7a3fc]{height:65px;width:65px;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.breeding-rhombus-spinner[data-v-8fa7a3fc],.breeding-rhombus-spinner *[data-v-8fa7a3fc]{-webkit-box-sizing:border-box;box-sizing:border-box}.breeding-rhombus-spinner .rhombus[data-v-8fa7a3fc]{height:8.66667px;width:8.66667px;-webkit-animation-duration:2s;animation-duration:2s;top:28.16657px;left:28.16657px;background-color:#ff1d5e;position:absolute;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.breeding-rhombus-spinner .rhombus[data-v-8fa7a3fc]:nth-child(2n+0){margin-right:0}.breeding-rhombus-spinner .rhombus.child-1[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc;-webkit-animation-delay:.1s;animation-delay:.1s}.breeding-rhombus-spinner .rhombus.child-2[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc;-webkit-animation-delay:.2s;animation-delay:.2s}.breeding-rhombus-spinner .rhombus.child-3[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc;-webkit-animation-delay:.3s;animation-delay:.3s}.breeding-rhombus-spinner .rhombus.child-4[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc;-webkit-animation-delay:.4s;animation-delay:.4s}.breeding-rhombus-spinner .rhombus.child-5[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc;-webkit-animation-delay:.5s;animation-delay:.5s}.breeding-rhombus-spinner .rhombus.child-6[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc;-webkit-animation-delay:.6s;animation-delay:.6s}.breeding-rhombus-spinner .rhombus.child-7[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc;-webkit-animation-delay:.7s;animation-delay:.7s}.breeding-rhombus-spinner .rhombus.child-8[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc;-webkit-animation-delay:.8s;animation-delay:.8s}.breeding-rhombus-spinner .rhombus.big[data-v-8fa7a3fc]{height:21.66667px;width:21.66667px;-webkit-animation-duration:2s;animation-duration:2s;top:21.66667px;left:21.66667px;background-color:#ff1d5e;-webkit-animation:breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc 2s infinite;animation:breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc 2s infinite;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,-325%);transform:translate(-325%,-325%)}}@keyframes breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,-325%);transform:translate(-325%,-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc{50%{-webkit-transform:translateY(-325%);transform:translateY(-325%)}}@keyframes breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc{50%{-webkit-transform:translateY(-325%);transform:translateY(-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,-325%);transform:translate(325%,-325%)}}@keyframes breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,-325%);transform:translate(325%,-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%);transform:translate(325%)}}@keyframes breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%);transform:translate(325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,325%);transform:translate(325%,325%)}}@keyframes breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,325%);transform:translate(325%,325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc{50%{-webkit-transform:translateY(325%);transform:translateY(325%)}}@keyframes breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc{50%{-webkit-transform:translateY(325%);transform:translateY(325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,325%);transform:translate(-325%,325%)}}@keyframes breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,325%);transform:translate(-325%,325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%);transform:translate(-325%)}}@keyframes breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%);transform:translate(-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc{50%{-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc{50%{-webkit-transform:scale(.5);transform:scale(.5)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "809c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".intersecting-circles-spinner[data-v-91c71956],.intersecting-circles-spinner *[data-v-91c71956]{-webkit-box-sizing:border-box;box-sizing:border-box}.intersecting-circles-spinner[data-v-91c71956]{height:70px;width:70px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intersecting-circles-spinner .spinnerBlock[data-v-91c71956]{-webkit-animation:intersecting-circles-spinners-animation-data-v-91c71956 1.2s linear infinite;animation:intersecting-circles-spinners-animation-data-v-91c71956 1.2s linear infinite;-webkit-transform-origin:center;transform-origin:center;display:block;height:35px;width:35px}.intersecting-circles-spinner .circle[data-v-91c71956]{display:block;border:2px solid #ff1d5e;border-radius:50%;height:100%;width:100%;position:absolute;left:0;top:0}.intersecting-circles-spinner .circle[data-v-91c71956]:first-child{left:0;top:0}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(2){left:-12.6px;top:7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(3){left:-12.6px;top:-7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(4){left:0;top:-12.6px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(5){left:12.6px;top:-7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(6){left:12.6px;top:7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(7){left:0;top:12.6px}@-webkit-keyframes intersecting-circles-spinners-animation-data-v-91c71956{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes intersecting-circles-spinners-animation-data-v-91c71956{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "80cb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".self-building-square-spinner[data-v-eb840b8e],.self-building-square-spinner *[data-v-eb840b8e]{-webkit-box-sizing:border-box;box-sizing:border-box}.self-building-square-spinner[data-v-eb840b8e]{height:40px;width:40px;top:-6.66667px}.self-building-square-spinner .square[data-v-eb840b8e]{height:10px;width:10px;top:-6.66667px;margin-right:3.33333px;margin-top:3.33333px;background:#ff1d5e;float:left;position:relative;opacity:0;-webkit-animation:self-building-square-spinner-data-v-eb840b8e 6s infinite;animation:self-building-square-spinner-data-v-eb840b8e 6s infinite}.self-building-square-spinner .square[data-v-eb840b8e]:first-child{-webkit-animation-delay:1.8s;animation-delay:1.8s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(2){-webkit-animation-delay:2.1s;animation-delay:2.1s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(3){-webkit-animation-delay:2.4s;animation-delay:2.4s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(4){-webkit-animation-delay:.9s;animation-delay:.9s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(5){-webkit-animation-delay:1.2s;animation-delay:1.2s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(6){-webkit-animation-delay:1.5s;animation-delay:1.5s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(7){-webkit-animation-delay:0ms;animation-delay:0ms}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(8){-webkit-animation-delay:.3s;animation-delay:.3s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(9){-webkit-animation-delay:.6s;animation-delay:.6s}.self-building-square-spinner .clear[data-v-eb840b8e]{clear:both}@-webkit-keyframes self-building-square-spinner-data-v-eb840b8e{0%{opacity:0}5%{opacity:1;top:0}50.9%{opacity:1;top:0}55.9%{opacity:0;top:inherit}}@keyframes self-building-square-spinner-data-v-eb840b8e{0%{opacity:0}5%{opacity:1;top:0}50.9%{opacity:1;top:0}55.9%{opacity:0;top:inherit}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "825b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lingalleryContainer[data-v-a0a9e1ac] .lingallery{max-width:100%}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure{position:relative;margin:0;padding:0;max-width:100%;text-align:center;cursor:pointer}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure img{max-width:100%;max-height:100%;-webkit-transition:opacity .25s ease;transition:opacity .25s ease}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure img.loading{opacity:.25;min-height:200px;-webkit-transition:opcacity .25s ease;transition:opcacity .25s ease}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure a.control{position:absolute;top:0;padding-left:18px;padding-right:18px;height:100%;display:none;font-size:20px;color:#fff;cursor:pointer;text-shadow:0 0 20px rgba(0,0,0,.75)}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure a.control:before{position:relative;top:calc(50% - 12px)}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure a.control.left{left:0}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure a.control.right{right:0}.lingalleryContainer[data-v-a0a9e1ac] .lingallery figure:hover a.control{display:block}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_caption{position:absolute;bottom:0;left:0;padding:4px 0;width:100%;background-color:hsla(0,0%,100%,.75);font-size:1em}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails{overflow-x:auto;width:100%;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails::-webkit-scrollbar{height:6px}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails::-webkit-scrollbar-track{border-radius:10px;background:#eaeaea}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails::-webkit-scrollbar-thumb{border-radius:10px;background:#b4b4b4}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails::-webkit-scrollbar-thumb:window-inactive{background:hsla(0,0%,39.2%,.4)}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails .lingallery_thumbnails_content{margin-top:2px;width:auto;white-space:nowrap}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails .lingallery_thumbnails_content .lingallery_thumbnails_content_elem{display:inline-block;scroll-snap-align:start}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_thumbnails .lingallery_thumbnails_content .lingallery_thumbnails_content_elem img{border:2px solid #fff;cursor:pointer}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_spinner{position:absolute;left:50%;top:calc(50% - 32px)}.lingalleryContainer[data-v-a0a9e1ac] .lingallery .lingallery_spinner>div{z-index:9999;position:relative;left:-50%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "828d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fulfilling-bouncing-circle-spinner[data-v-e5e606d8],.fulfilling-bouncing-circle-spinner *[data-v-e5e606d8]{-webkit-box-sizing:border-box;box-sizing:border-box}.fulfilling-bouncing-circle-spinner[data-v-e5e606d8]{height:60px;width:60px;position:relative;-webkit-animation:fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8 4s ease infinite;animation:fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8 4s ease infinite}.fulfilling-bouncing-circle-spinner .orbit[data-v-e5e606d8]{height:60px;width:60px;position:absolute;top:0;left:0;border-radius:50%;border:1.8px solid #ff1d5e;-webkit-animation:fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8 4s ease infinite;animation:fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8 4s ease infinite}.fulfilling-bouncing-circle-spinner .circle[data-v-e5e606d8]{height:60px;width:60px;color:#ff1d5e;display:block;border-radius:50%;position:relative;border:6px solid #ff1d5e;-webkit-animation:fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8 4s ease infinite;animation:fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8 4s ease infinite;-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}@-webkit-keyframes fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1);transform:scale(1)}62.5%{-webkit-transform:scale(.8);transform:scale(.8)}75%{-webkit-transform:scale(1);transform:scale(1)}87.5%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1);transform:scale(1)}62.5%{-webkit-transform:scale(.8);transform:scale(.8)}75%{-webkit-transform:scale(1);transform:scale(1)}87.5%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1);border-color:transparent;border-top-color:inherit}16.7%{border-color:transparent;border-top-color:initial;border-right-color:initial}33.4%{border-color:transparent;border-top-color:inherit;border-right-color:inherit;border-bottom-color:inherit}50%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1)}62.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}75%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1);opacity:1}87.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}to{border-color:transparent;border-top-color:inherit;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1);border-color:transparent;border-top-color:inherit}16.7%{border-color:transparent;border-top-color:initial;border-right-color:initial}33.4%{border-color:transparent;border-top-color:inherit;border-right-color:inherit;border-bottom-color:inherit}50%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1)}62.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}75%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1);opacity:1}87.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}to{border-color:transparent;border-top-color:inherit;-webkit-transform:scale(1);transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8300":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".swapping-squares-spinner[data-v-8265a670],.swapping-squares-spinner *[data-v-8265a670]{-webkit-box-sizing:border-box;box-sizing:border-box}.swapping-squares-spinner[data-v-8265a670]{height:65px;width:65px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swapping-squares-spinner .square[data-v-8265a670]{height:12.5px;width:12.5px;-webkit-animation-duration:1s;animation-duration:1s;border:2px solid #ff1d5e;margin-right:auto;margin-left:auto;position:absolute;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.swapping-squares-spinner .square[data-v-8265a670]:first-child{-webkit-animation-name:swapping-squares-animation-child-1-data-v-8265a670;animation-name:swapping-squares-animation-child-1-data-v-8265a670;-webkit-animation-delay:.5s;animation-delay:.5s}.swapping-squares-spinner .square[data-v-8265a670]:nth-child(2){-webkit-animation-name:swapping-squares-animation-child-2-data-v-8265a670;animation-name:swapping-squares-animation-child-2-data-v-8265a670;-webkit-animation-delay:0ms;animation-delay:0ms}.swapping-squares-spinner .square[data-v-8265a670]:nth-child(3){-webkit-animation-name:swapping-squares-animation-child-3-data-v-8265a670;animation-name:swapping-squares-animation-child-3-data-v-8265a670;-webkit-animation-delay:.5s;animation-delay:.5s}.swapping-squares-spinner .square[data-v-8265a670]:nth-child(4){-webkit-animation-name:swapping-squares-animation-child-4-data-v-8265a670;animation-name:swapping-squares-animation-child-4-data-v-8265a670;-webkit-animation-delay:0ms;animation-delay:0ms}@-webkit-keyframes swapping-squares-animation-child-1-data-v-8265a670{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@keyframes swapping-squares-animation-child-1-data-v-8265a670{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-2-data-v-8265a670{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@keyframes swapping-squares-animation-child-2-data-v-8265a670{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-3-data-v-8265a670{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@keyframes swapping-squares-animation-child-3-data-v-8265a670{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-4-data-v-8265a670{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}@keyframes swapping-squares-animation-child-4-data-v-8265a670{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "89df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af7");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8af7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("28db");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2a2fed94", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/addons/PictureElement.vue?vue&type=template&id=5a302e93&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',[_vm._l((_vm.items[_vm.currentIndex].pictureElement),function(item,index){return _c('source',{key:index,attrs:{"srcset":item.srcset,"media":item.media ? item.media : false,"type":item.type ? item.type : false}})}),_c('img',{directives:[{name:"swipe",rawName:"v-swipe",value:(_vm.handleImageSwipe),expression:"handleImageSwipe"}],class:{ loading: _vm.isLoading },style:(_vm.mainImageStyle),attrs:{"src":_vm.items[_vm.currentIndex].src,"alt":_vm.items[_vm.currentIndex].alt},on:{"click":_vm.handleLargeImageClick,"load":_vm.handleImageLoaded}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/addons/PictureElement.vue?vue&type=template&id=5a302e93&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__("c8b5");
var hammer_default = /*#__PURE__*/__webpack_require__.n(hammer);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/addons/PictureElement.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PictureElementvue_type_script_lang_js_ = ({
  name: 'PictureElement',
  directives: {
    swipe: {
      bind: function bind(el, binding) {
        if (typeof binding.value === 'function') {
          binding.hammer = new hammer_default.a(el);
          binding.hammer.get('swipe').set({
            direction: hammer_default.a.DIRECTION_HORIZONTAL,
            threshold: 5
          });
          binding.hammer.on('swipe', binding.value);
        }
      },
      unbind: function unbind(el, binding) {
        if (binding.hammer) {
          binding.hammer.destroy();
        }
      }
    }
  },
  props: {
    alt: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mainImageStyle: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleLargeImageClick: function handleLargeImageClick() {
      this.$emit('handle-large-image-click');
    },
    handleImageSwipe: function handleImageSwipe(event) {
      this.$emit('handle-image-swipe', event);
    },
    handleImageLoaded: function handleImageLoaded() {
      this.$emit('handle-image-loaded');
    }
  }
});
// CONCATENATED MODULE: ./src/components/addons/PictureElement.vue?vue&type=script&lang=js&
 /* harmony default export */ var addons_PictureElementvue_type_script_lang_js_ = (PictureElementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/addons/PictureElement.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  addons_PictureElementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5a302e93",
  null
  
)

/* harmony default export */ var PictureElement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "95d3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hollow-dots-spinner[data-v-5a033c16],.hollow-dots-spinner *[data-v-5a033c16]{-webkit-box-sizing:border-box;box-sizing:border-box}.hollow-dots-spinner[data-v-5a033c16]{height:15px;width:90px}.hollow-dots-spinner .dot[data-v-5a033c16]{width:15px;height:15px;margin:0 7.5px;border:3px solid #ff1d5e;border-radius:50%;float:left;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:hollow-dots-spinner-animation-data-v-5a033c16 1s ease 0ms infinite;animation:hollow-dots-spinner-animation-data-v-5a033c16 1s ease 0ms infinite}.hollow-dots-spinner .dot[data-v-5a033c16]:first-child{-webkit-animation-delay:.3s;animation-delay:.3s}.hollow-dots-spinner .dot[data-v-5a033c16]:nth-child(2){-webkit-animation-delay:.6s;animation-delay:.6s}.hollow-dots-spinner .dot[data-v-5a033c16]:nth-child(3){-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes hollow-dots-spinner-animation-data-v-5a033c16{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{opacity:0}}@keyframes hollow-dots-spinner-animation-data-v-5a033c16{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9b01":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("571f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("8ce2999e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a6c9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".atom-spinner[data-v-fb9a33c4],.atom-spinner *[data-v-fb9a33c4]{-webkit-box-sizing:border-box;box-sizing:border-box}.atom-spinner[data-v-fb9a33c4]{height:60px;width:60px;overflow:hidden}.atom-spinner .spinner-inner[data-v-fb9a33c4]{position:relative;display:block;height:100%;width:100%}.atom-spinner .spinner-circle[data-v-fb9a33c4]{display:block;position:absolute;color:#ff1d5e;font-size:14.4px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.atom-spinner .spinner-line[data-v-fb9a33c4]{position:absolute;width:100%;height:100%;border-radius:50%;-webkit-animation-duration:1s;animation-duration:1s;border-left-width:2.4px;border-top-width:2.4px;border-left-color:#ff1d5e;border-left-style:solid;border-top-style:solid;border-top-color:transparent}.atom-spinner .spinner-line[data-v-fb9a33c4]:first-child{-webkit-animation:atom-spinner-animation-1-data-v-fb9a33c4 1s linear infinite;animation:atom-spinner-animation-1-data-v-fb9a33c4 1s linear infinite;-webkit-transform:rotate(120deg) rotateX(66deg) rotate(0deg);transform:rotate(120deg) rotateX(66deg) rotate(0deg)}.atom-spinner .spinner-line[data-v-fb9a33c4]:nth-child(2){-webkit-animation:atom-spinner-animation-2-data-v-fb9a33c4 1s linear infinite;animation:atom-spinner-animation-2-data-v-fb9a33c4 1s linear infinite;-webkit-transform:rotate(240deg) rotateX(66deg) rotate(0deg);transform:rotate(240deg) rotateX(66deg) rotate(0deg)}.atom-spinner .spinner-line[data-v-fb9a33c4]:nth-child(3){-webkit-animation:atom-spinner-animation-3-data-v-fb9a33c4 1s linear infinite;animation:atom-spinner-animation-3-data-v-fb9a33c4 1s linear infinite;-webkit-transform:rotate(1turn) rotateX(66deg) rotate(0deg);transform:rotate(1turn) rotateX(66deg) rotate(0deg)}@-webkit-keyframes atom-spinner-animation-1-data-v-fb9a33c4{to{-webkit-transform:rotate(120deg) rotateX(66deg) rotate(1turn);transform:rotate(120deg) rotateX(66deg) rotate(1turn)}}@keyframes atom-spinner-animation-1-data-v-fb9a33c4{to{-webkit-transform:rotate(120deg) rotateX(66deg) rotate(1turn);transform:rotate(120deg) rotateX(66deg) rotate(1turn)}}@-webkit-keyframes atom-spinner-animation-2-data-v-fb9a33c4{to{-webkit-transform:rotate(240deg) rotateX(66deg) rotate(1turn);transform:rotate(240deg) rotateX(66deg) rotate(1turn)}}@keyframes atom-spinner-animation-2-data-v-fb9a33c4{to{-webkit-transform:rotate(240deg) rotateX(66deg) rotate(1turn);transform:rotate(240deg) rotateX(66deg) rotate(1turn)}}@-webkit-keyframes atom-spinner-animation-3-data-v-fb9a33c4{to{-webkit-transform:rotate(1turn) rotateX(66deg) rotate(1turn);transform:rotate(1turn) rotateX(66deg) rotate(1turn)}}@keyframes atom-spinner-animation-3-data-v-fb9a33c4{to{-webkit-transform:rotate(1turn) rotateX(66deg) rotate(1turn);transform:rotate(1turn) rotateX(66deg) rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "aced":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeView_vue_vue_type_style_index_0_id_4147e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ed0");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeView_vue_vue_type_style_index_0_id_4147e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeView_vue_vue_type_style_index_0_id_4147e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LargeView_vue_vue_type_style_index_0_id_4147e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "b075":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("01f0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b1e67052", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b23a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".half-circle-spinner[data-v-669f3b60],.half-circle-spinner *[data-v-669f3b60]{-webkit-box-sizing:border-box;box-sizing:border-box}.half-circle-spinner[data-v-669f3b60]{width:60px;height:60px;border-radius:100%;position:relative}.half-circle-spinner .circle[data-v-669f3b60]{content:\"\";position:absolute;width:100%;height:100%;border-radius:100%;border:6px solid transparent}.half-circle-spinner .circle.circle-1[data-v-669f3b60]{border-top-color:#ff1d5e;-webkit-animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite;animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite}.half-circle-spinner .circle.circle-2[data-v-669f3b60]{border-bottom-color:#ff1d5e;-webkit-animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite alternate;animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite alternate}@-webkit-keyframes half-circle-spinner-animation-data-v-669f3b60{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes half-circle-spinner-animation-data-v-669f3b60{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "b84d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6b65");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cb0242e4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bce9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("35f5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("56ca5ed8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c535":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e7f9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0eecb302", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8b5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c9a8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2f67");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("08d8560d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c9c6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("809c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("05536156", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "ca9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4fb9");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cded":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d97e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2398e41d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d97e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flower-spinner[data-v-f15101b8],.flower-spinner *[data-v-f15101b8]{-webkit-box-sizing:border-box;box-sizing:border-box}.flower-spinner[data-v-f15101b8]{height:70px;width:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flower-spinner .dots-container[data-v-f15101b8]{height:10px;width:10px}.flower-spinner .small-dot[data-v-f15101b8]{-webkit-animation:flower-spinner-small-dot-animation-data-v-f15101b8 2.5s 0s infinite both;animation:flower-spinner-small-dot-animation-data-v-f15101b8 2.5s 0s infinite both}.flower-spinner .big-dot[data-v-f15101b8],.flower-spinner .small-dot[data-v-f15101b8]{background:#ff1d5e;height:100%;width:100%;border-radius:50%}.flower-spinner .big-dot[data-v-f15101b8]{padding:10%;-webkit-animation:flower-spinner-big-dot-animation-data-v-f15101b8 2.5s 0s infinite both;animation:flower-spinner-big-dot-animation-data-v-f15101b8 2.5s 0s infinite both}@-webkit-keyframes flower-spinner-big-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}25%,75%{-webkit-box-shadow:#ff1d5e 26px 0 0,#ff1d5e -26px 0 0,#ff1d5e 0 26px 0,#ff1d5e 0 -26px 0,#ff1d5e 19px -19px 0,#ff1d5e 19px 19px 0,#ff1d5e -19px -19px 0,#ff1d5e -19px 19px 0;box-shadow:26px 0 0 #ff1d5e,-26px 0 0 #ff1d5e,0 26px 0 #ff1d5e,0 -26px 0 #ff1d5e,19px -19px 0 #ff1d5e,19px 19px 0 #ff1d5e,-19px -19px 0 #ff1d5e,-19px 19px 0 #ff1d5e}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}@keyframes flower-spinner-big-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}25%,75%{-webkit-box-shadow:#ff1d5e 26px 0 0,#ff1d5e -26px 0 0,#ff1d5e 0 26px 0,#ff1d5e 0 -26px 0,#ff1d5e 19px -19px 0,#ff1d5e 19px 19px 0,#ff1d5e -19px -19px 0,#ff1d5e -19px 19px 0;box-shadow:26px 0 0 #ff1d5e,-26px 0 0 #ff1d5e,0 26px 0 #ff1d5e,0 -26px 0 #ff1d5e,19px -19px 0 #ff1d5e,19px 19px 0 #ff1d5e,-19px -19px 0 #ff1d5e,-19px 19px 0 #ff1d5e}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}@-webkit-keyframes flower-spinner-small-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}25%,75%{-webkit-box-shadow:#ff1d5e 14px 0 0,#ff1d5e -14px 0 0,#ff1d5e 0 14px 0,#ff1d5e 0 -14px 0,#ff1d5e 10px -10px 0,#ff1d5e 10px 10px 0,#ff1d5e -10px -10px 0,#ff1d5e -10px 10px 0;box-shadow:14px 0 0 #ff1d5e,-14px 0 0 #ff1d5e,0 14px 0 #ff1d5e,0 -14px 0 #ff1d5e,10px -10px 0 #ff1d5e,10px 10px 0 #ff1d5e,-10px -10px 0 #ff1d5e,-10px 10px 0 #ff1d5e}to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}@keyframes flower-spinner-small-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}25%,75%{-webkit-box-shadow:#ff1d5e 14px 0 0,#ff1d5e -14px 0 0,#ff1d5e 0 14px 0,#ff1d5e 0 -14px 0,#ff1d5e 10px -10px 0,#ff1d5e 10px 10px 0,#ff1d5e -10px -10px 0,#ff1d5e -10px 10px 0;box-shadow:14px 0 0 #ff1d5e,-14px 0 0 #ff1d5e,0 14px 0 #ff1d5e,0 -14px 0 #ff1d5e,10px -10px 0 #ff1d5e,10px 10px 0 #ff1d5e,-10px -10px 0 #ff1d5e,-10px 10px 0 #ff1d5e}to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "de04":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7f2f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f1c4f4c8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e2ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a75");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e2f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de04");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e71a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_a0a9e1ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e8d7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_a0a9e1ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_a0a9e1ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_a0a9e1ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e7f9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pixel-spinner[data-v-c76fc818],.pixel-spinner *[data-v-c76fc818]{-webkit-box-sizing:border-box;box-sizing:border-box}.pixel-spinner[data-v-c76fc818]{height:70px;width:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pixel-spinner .pixel-spinner-inner[data-v-c76fc818]{width:10px;height:10px;background-color:#ff1d5e;color:#ff1d5e;-webkit-box-shadow:15px 15px 0 0,-15px -15px 0 0,15px -15px 0 0,-15px 15px 0 0,0 15px 0 0,15px 0 0 0,-15px 0 0 0,0 -15px 0 0;box-shadow:15px 15px 0 0,-15px -15px 0 0,15px -15px 0 0,-15px 15px 0 0,0 15px 0 0,15px 0 0 0,-15px 0 0 0,0 -15px 0 0;-webkit-animation:pixel-spinner-animation-data-v-c76fc818 2s linear infinite;animation:pixel-spinner-animation-data-v-c76fc818 2s linear infinite}@-webkit-keyframes pixel-spinner-animation-data-v-c76fc818{50%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}75%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes pixel-spinner-animation-data-v-c76fc818{50%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}75%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e8d7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("825b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0b921384", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Lingallery.vue?vue&type=template&id=a0a9e1ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lingalleryContainer"},[_c('div',{staticClass:"lingallery",style:(_vm.lingalleryStyle)},[(_vm.addons.enableLargeView && _vm.showLargeView)?_c('large-view',{attrs:{"id":"largeView","accent-color":_vm.accentColor,"item":_vm.items[_vm.currentIndex]},on:{"close-large-view":function($event){_vm.showLargeView = false}}}):_vm._e(),_c('figure',{style:(_vm.figureStyle),attrs:{"itemprop":"associatedMedia","itemscope":"","itemtype":"http://schema.org/ImageObject"}},[_c('div',{staticClass:"lingallery_spinner"},[(_vm.isLoading)?_c('half-circle-spinner',{attrs:{"animation-duration":1000,"color":_vm.accentColor,"size":60}}):_vm._e()],1),(_vm.addons.enablePictureElement)?_c('picture-element',{ref:"mainImage",attrs:{"alt":_vm.currentAlt,"is-loading":_vm.isLoading,"main-image-style":_vm.mainImageStyle,"items":_vm.items,"current-index":_vm.currentIndex},on:{"handle-large-image-click":_vm.handleLargeImageClick,"handle-image-swipe":_vm.handleImageSwipe,"handle-image-loaded":_vm.handleImageLoaded}}):_c('img',{directives:[{name:"swipe",rawName:"v-swipe",value:(_vm.handleImageSwipe),expression:"handleImageSwipe"}],ref:"mainImage",class:{ loading: _vm.isLoading },style:(_vm.mainImageStyle),attrs:{"alt":_vm.currentAlt,"src":_vm.currentImage},on:{"click":_vm.handleLargeImageClick,"load":_vm.handleImageLoaded}}),(_vm.currentCaption)?_c('div',{staticClass:"lingallery_caption",style:(_vm.captionStyle)},[_vm._v(" "+_vm._s(_vm.currentCaption)+" ")]):_vm._e(),(_vm.showControls && _vm.items.length > 1)?[(!_vm.leftControlClass)?_c('a',{staticClass:"control left",on:{"click":_vm.showPreviousImage}},[_c('span',{staticStyle:{"position":"relative","top":"calc(50% - 12px)"}},[_vm._v("◀")])]):_vm._e(),(!_vm.rightControlClass)?_c('a',{staticClass:"control right",on:{"click":_vm.showNextImage}},[_c('span',{staticStyle:{"position":"relative","top":"calc(50% - 12px)"}},[_vm._v("▶")])]):_vm._e(),(_vm.leftControlClass)?_c('a',{class:'control left ' + _vm.leftControlClass,on:{"click":_vm.showPreviousImage}}):_vm._e(),(_vm.rightControlClass)?_c('a',{class:'control right ' + _vm.rightControlClass,on:{"click":_vm.showNextImage}}):_vm._e()]:_vm._e()],2),(_vm.showThumbnails)?_c('div',{staticClass:"lingallery_thumbnails"},[_c('div',{staticClass:"lingallery_thumbnails_content"},_vm._l((_vm.items),function(item,index){return _c('div',{key:index,staticClass:"lingallery_thumbnails_content_elem"},[_c('img',_vm._g({style:(_vm.thumbnailStyle(index)),attrs:{"alt":Object.prototype.hasOwnProperty.call(item, 'alt') ? item.alt : '',"src":item.thumbnail,"width":"64","height":"64"}},
              _vm.currentIndex !== index
                ? { click: function () { return _vm.handleImageClick(index); } }
                : {}
            ))])}),0)]):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Lingallery.vue?vue&type=template&id=a0a9e1ac&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=template&id=5a033c16&scoped=true&
var HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hollow-dots-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.dotsStyles),function(ds,index){return _c('div',{key:index,staticClass:"dot",style:(ds)})}),0)}
var HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=template&id=5a033c16&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var HollowDotsSpinnervue_type_script_lang_js_ = ({
  name: 'HollowDotsSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    dotSize: {
      type: Number,
      default: 15
    },
    dotsNum: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    horizontalMargin: function horizontalMargin() {
      return this.dotSize / 2;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.dotSize, "px"),
        width: "".concat((this.dotSize + this.horizontalMargin * 2) * this.dotsNum, "px")
      };
    },
    dotStyle: function dotStyle() {
      return {
        animationDuration: "".concat(this.animationDuration, "ms"),
        width: "".concat(this.dotSize, "px"),
        height: "".concat(this.dotSize, "px"),
        margin: "0 ".concat(this.horizontalMargin, "px"),
        borderWidth: "".concat(this.dotSize / 5, "px"),
        borderColor: this.color
      };
    },
    dotsStyles: function dotsStyles() {
      var dotsStyles = [];
      var delayModifier = 0.3;
      var basicDelay = 1000;

      for (var i = 1; i <= this.dotsNum; i++) {
        var style = Object.assign({
          animationDelay: "".concat(basicDelay * i * delayModifier, "ms")
        }, this.dotStyle);
        dotsStyles.push(style);
      }

      return dotsStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_HollowDotsSpinnervue_type_script_lang_js_ = (HollowDotsSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=style&index=0&id=5a033c16&scoped=true&lang=css&
var HollowDotsSpinnervue_type_style_index_0_id_5a033c16_scoped_true_lang_css_ = __webpack_require__("16b3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_HollowDotsSpinnervue_type_script_lang_js_,
  HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_render,
  HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_staticRenderFns,
  false,
  null,
  "5a033c16",
  null
  
)

/* harmony default export */ var HollowDotsSpinner = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=template&id=c76fc818&scoped=true&
var PixelSpinnervue_type_template_id_c76fc818_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pixel-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"pixel-spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var PixelSpinnervue_type_template_id_c76fc818_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=template&id=c76fc818&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/services/utils.js

/* harmony default export */ var utils = ({
  /**
   * Add reyframes to body as style block
   * @param name string
   * @param frames string
   */
  appendKeyframes: function appendKeyframes(name, frames) {
    var sheet = document.createElement('style');

    if (!sheet) {
      return;
    }

    sheet.setAttribute('id', name);
    sheet.innerHTML = "@keyframes ".concat(name, " {").concat(frames, "}");
    document.body.appendChild(sheet);
  },

  /**
   * Remove reyframes from body
   * @param name string
   */
  removeKeyframes: function removeKeyframes(name) {
    var sheet = document.getElementById(name);

    if (!sheet) {
      return;
    }

    var sheetParent = sheet.parentNode;
    sheetParent.removeChild(sheet);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//

/* harmony default export */ var PixelSpinnervue_type_script_lang_js_ = ({
  name: 'PixelSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      animationName: "pixel-spinner-animation-".concat(Date.now())
    };
  },
  computed: {
    pixelSize: function pixelSize() {
      return this.size / 7;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        width: "".concat(this.size, "px"),
        height: "".concat(this.size, "px")
      };
    },
    spinnerInnerStyle: function spinnerInnerStyle() {
      return {
        animationDuration: "".concat(this.animationDuration, "ms"),
        animationName: this.animationName,
        width: "".concat(this.pixelSize, "px"),
        height: "".concat(this.pixelSize, "px"),
        backgroundColor: this.color,
        color: this.color,
        boxShadow: "\n                      ".concat(this.pixelSize * 1.5, "px ").concat(this.pixelSize * 1.5, "px 0 0,\n                      ").concat(this.pixelSize * -1.5, "px ").concat(this.pixelSize * -1.5, "px 0 0,\n                      ").concat(this.pixelSize * 1.5, "px ").concat(this.pixelSize * -1.5, "px 0 0,\n                      ").concat(this.pixelSize * -1.5, "px ").concat(this.pixelSize * 1.5, "px 0 0,\n                      0 ").concat(this.pixelSize * 1.5, "px 0 0,\n                      ").concat(this.pixelSize * 1.5, "px 0 0 0,\n                      ").concat(this.pixelSize * -1.5, "px 0 0 0,\n                      0 ").concat(this.pixelSize * -1.5, "px 0 0\n                    ")
      };
    }
  },
  watch: {
    size: {
      handler: 'updateAnimation',
      immediate: true
    }
  },
  mounted: function mounted() {
    this.updateAnimation();
  },
  beforeDestroy: function beforeDestroy() {
    utils.removeKeyframes(this.animationName);
  },
  methods: {
    updateAnimation: function updateAnimation() {
      utils.removeKeyframes(this.animationName);
      utils.appendKeyframes(this.animationName, this.generateKeyframes());
    },
    generateKeyframes: function generateKeyframes() {
      return "\n      50% {\n        box-shadow:  ".concat(this.pixelSize * 2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * 2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     0 ").concat(this.pixelSize, "px 0 0,\n                     ").concat(this.pixelSize, "px 0 0 0,\n                     ").concat(this.pixelSize * -1, "px 0 0 0,\n                     0 ").concat(this.pixelSize * -1, "px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  ").concat(this.pixelSize * 2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * 2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     0 ").concat(this.pixelSize, "px 0 0,\n                     ").concat(this.pixelSize, "px 0 0 0,\n                     ").concat(this.pixelSize * -1, "px 0 0 0,\n                     0 ").concat(this.pixelSize * -1, "px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_PixelSpinnervue_type_script_lang_js_ = (PixelSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=style&index=0&id=c76fc818&scoped=true&lang=css&
var PixelSpinnervue_type_style_index_0_id_c76fc818_scoped_true_lang_css_ = __webpack_require__("6bc6");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue






/* normalize component */

var PixelSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_PixelSpinnervue_type_script_lang_js_,
  PixelSpinnervue_type_template_id_c76fc818_scoped_true_render,
  PixelSpinnervue_type_template_id_c76fc818_scoped_true_staticRenderFns,
  false,
  null,
  "c76fc818",
  null
  
)

/* harmony default export */ var PixelSpinner = (PixelSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=template&id=f15101b8&scoped=true&
var FlowerSpinnervue_type_template_id_f15101b8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flower-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"dots-container",style:(_vm.dotsContainerStyle)},[_c('div',{staticClass:"big-dot",style:(_vm.biggerDotStyle)},[_c('div',{staticClass:"small-dot",style:(_vm.smallerDotStyle)})])])])}
var FlowerSpinnervue_type_template_id_f15101b8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=template&id=f15101b8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FlowerSpinnervue_type_script_lang_js_ = ({
  name: 'FlowerSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 2500
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      smallDotName: "flower-spinner-small-dot-".concat(Date.now()),
      bigDotName: "flower-spinner-big-dot-".concat(Date.now())
    };
  },
  computed: {
    dotSize: function dotSize() {
      return this.size / 7;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        width: "".concat(this.size, "px"),
        height: "".concat(this.size, "px")
      };
    },
    dotsContainerStyle: function dotsContainerStyle() {
      return {
        width: "".concat(this.dotSize, "px"),
        height: "".concat(this.dotSize, "px")
      };
    },
    smallerDotStyle: function smallerDotStyle() {
      return {
        background: this.color,
        animationDuration: "".concat(this.animationDuration, "ms"),
        animationName: this.smallDotName
      };
    },
    biggerDotStyle: function biggerDotStyle() {
      return {
        background: this.color,
        animationDuration: "".concat(this.animationDuration, "ms"),
        animationName: this.bigDotName
      };
    }
  },
  watch: {
    size: {
      handler: 'updateAnimation',
      immediate: true
    },
    color: {
      handler: 'updateAnimation',
      immediate: true
    }
  },
  beforeDestroy: function beforeDestroy() {
    utils.removeKeyframes(this.smallDotName);
    utils.removeKeyframes(this.bigDotName);
  },
  methods: {
    updateAnimation: function updateAnimation() {
      utils.removeKeyframes(this.smallDotName);
      utils.appendKeyframes(this.smallDotName, this.generateSmallDotKeyframes());
      utils.removeKeyframes(this.bigDotName);
      utils.appendKeyframes(this.bigDotName, this.generateBigDotKeyframes());
    },
    generateSmallDotKeyframes: function generateSmallDotKeyframes() {
      return "0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }\n                25%, 75% {\n                  box-shadow: ").concat(this.dotSize * 1.4, "px 0 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 1.4, "px 0 0 ").concat(this.color, ",\n                              0 ").concat(this.dotSize * 1.4, "px 0 ").concat(this.color, ",\n                              0 -").concat(this.dotSize * 1.4, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize, "px -").concat(this.dotSize, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize, "px ").concat(this.dotSize, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize, "px -").concat(this.dotSize, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize, "px ").concat(this.dotSize, "px 0 ").concat(this.color, ";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }");
    },
    generateBigDotKeyframes: function generateBigDotKeyframes() {
      return "0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: ").concat(this.dotSize * 2.6, "px 0 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 2.6, "px 0 0 ").concat(this.color, ",\n                              0 ").concat(this.dotSize * 2.6, "px 0 ").concat(this.color, ",\n                              0 -").concat(this.dotSize * 2.6, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize * 1.9, "px -").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize * 1.9, "px ").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 1.9, "px -").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 1.9, "px ").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FlowerSpinnervue_type_script_lang_js_ = (FlowerSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=style&index=0&id=f15101b8&scoped=true&lang=css&
var FlowerSpinnervue_type_style_index_0_id_f15101b8_scoped_true_lang_css_ = __webpack_require__("389c");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue






/* normalize component */

var FlowerSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_FlowerSpinnervue_type_script_lang_js_,
  FlowerSpinnervue_type_template_id_f15101b8_scoped_true_render,
  FlowerSpinnervue_type_template_id_f15101b8_scoped_true_staticRenderFns,
  false,
  null,
  "f15101b8",
  null
  
)

/* harmony default export */ var FlowerSpinner = (FlowerSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=template&id=91c71956&scoped=true&
var IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intersecting-circles-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinnerBlock",style:(_vm.spinnerBlockStyle)},_vm._l((_vm.circleStyles),function(cs,index){return _c('span',{key:index,staticClass:"circle",style:(cs)})}),0)])}
var IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=template&id=91c71956&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
/* harmony default export */ var IntersectingCirclesSpinnervue_type_script_lang_js_ = ({
  name: 'IntersectingCirclesSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1200
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    circleSize: function circleSize() {
      return this.size / 2;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        width: "".concat(this.size, "px"),
        height: "".concat(this.size, "px")
      };
    },
    spinnerBlockStyle: function spinnerBlockStyle() {
      return {
        animationDuration: "".concat(this.animationDuration, "ms"),
        width: "".concat(this.circleSize, "px"),
        height: "".concat(this.circleSize, "px")
      };
    },
    circleStyle: function circleStyle() {
      return {
        borderColor: this.color
      };
    },
    circleStyles: function circleStyles() {
      var _this = this;

      var circlesPositions = [{
        top: 0,
        left: 0
      }, {
        left: "".concat(this.circleSize * -0.36, "px"),
        top: "".concat(this.circleSize * 0.2, "px")
      }, {
        left: "".concat(this.circleSize * -0.36, "px"),
        top: "".concat(this.circleSize * -0.2, "px")
      }, {
        left: 0,
        top: "".concat(this.circleSize * -0.36, "px")
      }, {
        left: "".concat(this.circleSize * 0.36, "px"),
        top: "".concat(this.circleSize * -0.2, "px")
      }, {
        left: "".concat(this.circleSize * 0.36, "px"),
        top: "".concat(this.circleSize * 0.2, "px")
      }, {
        left: 0,
        top: "".concat(this.circleSize * 0.36, "px")
      }];
      return circlesPositions.map(function (cp) {
        return Object.assign(cp, _this.circleStyle);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_IntersectingCirclesSpinnervue_type_script_lang_js_ = (IntersectingCirclesSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=style&index=0&id=91c71956&scoped=true&lang=css&
var IntersectingCirclesSpinnervue_type_style_index_0_id_91c71956_scoped_true_lang_css_ = __webpack_require__("4e68");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue






/* normalize component */

var IntersectingCirclesSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_IntersectingCirclesSpinnervue_type_script_lang_js_,
  IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_render,
  IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_staticRenderFns,
  false,
  null,
  "91c71956",
  null
  
)

/* harmony default export */ var IntersectingCirclesSpinner = (IntersectingCirclesSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=template&id=34a3fdef&scoped=true&
var OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"orbit-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"orbit one",style:(_vm.orbitStyle)}),_c('div',{staticClass:"orbit two",style:(_vm.orbitStyle)}),_c('div',{staticClass:"orbit three",style:(_vm.orbitStyle)})])}
var OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=template&id=34a3fdef&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
/* harmony default export */ var OrbitSpinnervue_type_script_lang_js_ = ({
  name: 'OrbitSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    orbitStyle: function orbitStyle() {
      return {
        borderColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_OrbitSpinnervue_type_script_lang_js_ = (OrbitSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=style&index=0&id=34a3fdef&scoped=true&lang=css&
var OrbitSpinnervue_type_style_index_0_id_34a3fdef_scoped_true_lang_css_ = __webpack_require__("1c92");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue






/* normalize component */

var OrbitSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_OrbitSpinnervue_type_script_lang_js_,
  OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_render,
  OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_staticRenderFns,
  false,
  null,
  "34a3fdef",
  null
  
)

/* harmony default export */ var OrbitSpinner = (OrbitSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=template&id=077ae5a6&scoped=true&
var FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fingerprint-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"spinner-ring",style:(rs)})}),0)}
var FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=template&id=077ae5a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var FingerprintSpinnervue_type_script_lang_js_ = ({
  name: 'FingerprintSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      ringsNum: 9,
      containerPadding: 2
    };
  },
  computed: {
    outerRingSize: function outerRingSize() {
      return this.size - this.containerPadding * 2;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        padding: "".concat(this.containerPadding, "px")
      };
    },
    ringStyle: function ringStyle() {
      return {
        borderTopColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    ringsStyles: function ringsStyles() {
      var ringsStyles = [];
      var ringBase = this.outerRingSize / this.ringsNum;
      var ringInc = ringBase;

      for (var i = 1; i <= this.ringsNum; i++) {
        var style = Object.assign({
          animationDelay: "".concat(i * 50, "ms"),
          height: "".concat(ringBase + (i - 1) * ringInc, "px"),
          width: "".concat(ringBase + (i - 1) * ringInc, "px")
        }, this.ringStyle);
        ringsStyles.push(style);
      }

      return ringsStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FingerprintSpinnervue_type_script_lang_js_ = (FingerprintSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=style&index=0&id=077ae5a6&scoped=true&lang=css&
var FingerprintSpinnervue_type_style_index_0_id_077ae5a6_scoped_true_lang_css_ = __webpack_require__("10e6");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue






/* normalize component */

var FingerprintSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_FingerprintSpinnervue_type_script_lang_js_,
  FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_render,
  FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_staticRenderFns,
  false,
  null,
  "077ae5a6",
  null
  
)

/* harmony default export */ var FingerprintSpinner = (FingerprintSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=template&id=19bbdf0e&scoped=true&
var TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trinity-rings-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle1",style:(_vm.ring1Style)}),_c('div',{staticClass:"circle circle2",style:(_vm.ring2Style)}),_c('div',{staticClass:"circle circle3",style:(_vm.ring3Style)})])}
var TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=template&id=19bbdf0e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
/* harmony default export */ var TrinityRingsSpinnervue_type_script_lang_js_ = ({
  name: 'TrinityRingsSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      containerPadding: 3
    };
  },
  computed: {
    outerRingSize: function outerRingSize() {
      return this.size - this.containerPadding * 2;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        padding: "".concat(this.containerPadding, "px")
      };
    },
    ring1Style: function ring1Style() {
      return {
        height: "".concat(this.outerRingSize, "px"),
        width: "".concat(this.outerRingSize, "px"),
        borderColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    ring2Style: function ring2Style() {
      return {
        height: "".concat(this.outerRingSize * 0.65, "px"),
        width: "".concat(this.outerRingSize * 0.65, "px"),
        borderColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    ring3Style: function ring3Style() {
      return {
        height: "".concat(this.outerRingSize * 0.1, "px"),
        width: "".concat(this.outerRingSize * 0.1, "px"),
        borderColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_TrinityRingsSpinnervue_type_script_lang_js_ = (TrinityRingsSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=style&index=0&id=19bbdf0e&scoped=true&lang=css&
var TrinityRingsSpinnervue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css_ = __webpack_require__("fed0");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue






/* normalize component */

var TrinityRingsSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_TrinityRingsSpinnervue_type_script_lang_js_,
  TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_render,
  TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_staticRenderFns,
  false,
  null,
  "19bbdf0e",
  null
  
)

/* harmony default export */ var TrinityRingsSpinner = (TrinityRingsSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=template&id=3f451d6f&scoped=true&
var FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-square-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=template&id=3f451d6f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=script&lang=js&

//
//
//
//
//
//
/* harmony default export */ var FulfillingSquareSpinnervue_type_script_lang_js_ = ({
  name: 'FulfillingSquareSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 4000
    },
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        borderColor: this.color
      };
    },
    spinnerInnerStyle: function spinnerInnerStyle() {
      return {
        backgroundColor: this.color
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FulfillingSquareSpinnervue_type_script_lang_js_ = (FulfillingSquareSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=style&index=0&id=3f451d6f&scoped=true&lang=css&
var FulfillingSquareSpinnervue_type_style_index_0_id_3f451d6f_scoped_true_lang_css_ = __webpack_require__("89df");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue






/* normalize component */

var FulfillingSquareSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_FulfillingSquareSpinnervue_type_script_lang_js_,
  FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_render,
  FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_staticRenderFns,
  false,
  null,
  "3f451d6f",
  null
  
)

/* harmony default export */ var FulfillingSquareSpinner = (FulfillingSquareSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=template&id=7a6e17e5&scoped=true&
var CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"circles-to-rhombuses-spinner",style:(_vm.spinnertStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)})}),0)}
var CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=template&id=7a6e17e5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var CirclesToRhombusesSpinnervue_type_script_lang_js_ = ({
  name: 'CirclesToRhombusesSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1200
    },
    circleSize: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    },
    circlesNum: {
      type: Number,
      default: 3
    }
  },
  computed: {
    circleMarginLeft: function circleMarginLeft() {
      return this.circleSize * 1.125;
    },
    spinnertStyle: function spinnertStyle() {
      return {
        height: "".concat(this.circleSize, "px"),
        width: "".concat((this.circleSize + this.circleMarginLeft) * this.circlesNum, "px")
      };
    },
    circleStyle: function circleStyle() {
      return {
        borderColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms"),
        height: "".concat(this.circleSize, "px"),
        width: "".concat(this.circleSize, "px"),
        marginLeft: "".concat(this.circleMarginLeft, "px")
      };
    },
    circlesStyles: function circlesStyles() {
      var circlesStyles = [];
      var delay = 150;

      for (var i = 1; i <= this.circlesNum; i++) {
        var style = Object.assign({
          animationDelay: "".concat(i * delay, "ms")
        }, this.circleStyle);

        if (i === 1) {
          style.marginLeft = 0;
        }

        circlesStyles.push(style);
      }

      return circlesStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_CirclesToRhombusesSpinnervue_type_script_lang_js_ = (CirclesToRhombusesSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=style&index=0&id=7a6e17e5&scoped=true&lang=css&
var CirclesToRhombusesSpinnervue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css_ = __webpack_require__("0fa6");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue






/* normalize component */

var CirclesToRhombusesSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_CirclesToRhombusesSpinnervue_type_script_lang_js_,
  CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_render,
  CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_staticRenderFns,
  false,
  null,
  "7a6e17e5",
  null
  
)

/* harmony default export */ var CirclesToRhombusesSpinner = (CirclesToRhombusesSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=template&id=9544fc1a&scoped=true&
var SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"semipolar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"ring",style:(rs)})}),0)}
var SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=template&id=9544fc1a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var SemipolarSpinnervue_type_script_lang_js_ = ({
  name: 'SemipolarSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      ringsNum: 5
    };
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    ringStyle: function ringStyle() {
      return {
        animationDuration: "".concat(this.animationDuration, "ms"),
        borderTopColor: this.color,
        borderLeftColor: this.color
      };
    },
    ringsStyles: function ringsStyles() {
      var ringsStyles = [];
      var delayModifier = 0.1;
      var ringWidth = this.size * 0.05;
      var positionIncrement = ringWidth * 2;
      var sizeDecrement = this.size * 0.2;

      for (var i = 0; i < this.ringsNum; i++) {
        var computedSize = "".concat(this.size - sizeDecrement * i, "px");
        var computedPosition = "".concat(positionIncrement * i, "px");
        var style = Object.assign({
          animationDelay: "".concat(this.animationDuration * delayModifier * (this.ringsNum - i - 1), "ms"),
          height: computedSize,
          width: computedSize,
          left: computedPosition,
          top: computedPosition,
          borderWidth: "".concat(ringWidth, "px")
        }, this.ringStyle);
        ringsStyles.push(style);
      }

      return ringsStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SemipolarSpinnervue_type_script_lang_js_ = (SemipolarSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=style&index=0&id=9544fc1a&scoped=true&lang=css&
var SemipolarSpinnervue_type_style_index_0_id_9544fc1a_scoped_true_lang_css_ = __webpack_require__("30df");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue






/* normalize component */

var SemipolarSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_SemipolarSpinnervue_type_script_lang_js_,
  SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_render,
  SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_staticRenderFns,
  false,
  null,
  "9544fc1a",
  null
  
)

/* harmony default export */ var SemipolarSpinner = (SemipolarSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=template&id=8fa7a3fc&scoped=true&
var BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breeding-rhombus-spinner",style:(_vm.spinnerStyle)},[_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{key:index,staticClass:"rhombus",class:("child-" + (index + 1)),style:(rs)})}),_c('div',{staticClass:"rhombus big",style:(_vm.bigRhombusStyle)})],2)}
var BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=template&id=8fa7a3fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
/* harmony default export */ var BreedingRhombusSpinnervue_type_script_lang_js_ = ({
  name: 'BreedingRhombusSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 150
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      animationBaseName: 'breeding-rhombus-spinner-animation-child',
      rhombusesNum: 8
    };
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    rhombusStyle: function rhombusStyle() {
      return {
        height: "".concat(this.size / 7.5, "px"),
        width: "".concat(this.size / 7.5, "px"),
        animationDuration: "".concat(this.animationDuration, "ms"),
        top: "".concat(this.size / 2.3077, "px"),
        left: "".concat(this.size / 2.3077, "px"),
        backgroundColor: this.color
      };
    },
    rhombusesStyles: function rhombusesStyles() {
      var rhombusesStyles = [];
      var delayModifier = this.animationDuration * 0.05;

      for (var i = 1; i <= this.rhombusesNum; i++) {
        rhombusesStyles.push(Object.assign({
          animationDelay: "".concat(delayModifier * (i + 1), "ms")
        }, this.rhombusStyle));
      }

      return rhombusesStyles;
    },
    bigRhombusStyle: function bigRhombusStyle() {
      return {
        height: "".concat(this.size / 3, "px"),
        width: "".concat(this.size / 3, "px"),
        animationDuration: "".concat(this.animationDuration),
        top: "".concat(this.size / 3, "px"),
        left: "".concat(this.size / 3, "px"),
        backgroundColor: this.color
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_BreedingRhombusSpinnervue_type_script_lang_js_ = (BreedingRhombusSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=style&index=0&id=8fa7a3fc&scoped=true&lang=css&
var BreedingRhombusSpinnervue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css_ = __webpack_require__("e2f6");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue






/* normalize component */

var BreedingRhombusSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_BreedingRhombusSpinnervue_type_script_lang_js_,
  BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_render,
  BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_staticRenderFns,
  false,
  null,
  "8fa7a3fc",
  null
  
)

/* harmony default export */ var BreedingRhombusSpinner = (BreedingRhombusSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=template&id=8265a670&scoped=true&
var SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swapping-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}),0)}
var SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=template&id=8265a670&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SwappingSquaresSpinnervue_type_script_lang_js_ = ({
  name: 'SwappingSquaresSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      animationBaseName: 'swapping-squares-animation-child',
      squaresNum: 4
    };
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    squareStyle: function squareStyle() {
      return {
        height: "".concat(this.size * 0.25 / 1.3, "px"),
        width: "".concat(this.size * 0.25 / 1.3, "px"),
        animationDuration: "".concat(this.animationDuration, "ms"),
        borderWidth: "".concat(this.size * 0.04 / 1.3, "px"),
        borderColor: this.color
      };
    },
    squaresStyles: function squaresStyles() {
      var squaresStyles = [];
      var delay = this.animationDuration * 0.5;

      for (var i = 1; i <= this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
          animationDelay: "".concat(i % 2 === 0 ? delay : 0, "ms")
        }, this.squareStyle));
      }

      return squaresStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SwappingSquaresSpinnervue_type_script_lang_js_ = (SwappingSquaresSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=style&index=0&id=8265a670&scoped=true&lang=css&
var SwappingSquaresSpinnervue_type_style_index_0_id_8265a670_scoped_true_lang_css_ = __webpack_require__("ca9a");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue






/* normalize component */

var SwappingSquaresSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_SwappingSquaresSpinnervue_type_script_lang_js_,
  SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_render,
  SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_staticRenderFns,
  false,
  null,
  "8265a670",
  null
  
)

/* harmony default export */ var SwappingSquaresSpinner = (SwappingSquaresSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=template&id=dbacb9de&scoped=true&
var ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scaling-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}),0)}
var ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=template&id=dbacb9de&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ScalingSquaresSpinnervue_type_script_lang_js_ = ({
  name: 'ScalingSquaresSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1250
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      squaresNum: 4
    };
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    squareStyle: function squareStyle() {
      return {
        height: "".concat(this.size * 0.25 / 1.3, "px"),
        width: "".concat(this.size * 0.25 / 1.3, "px"),
        animationDuration: "".concat(this.animationDuration, "ms"),
        borderWidth: "".concat(this.size * 0.04 / 1.3, "px"),
        borderColor: this.color
      };
    },
    squaresStyles: function squaresStyles() {
      var squaresStyles = [];

      for (var i = 1; i <= this.squaresNum; i++) {
        squaresStyles.push(Object.assign({}, this.squareStyle));
      }

      return squaresStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_ScalingSquaresSpinnervue_type_script_lang_js_ = (ScalingSquaresSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=style&index=0&id=dbacb9de&scoped=true&lang=css&
var ScalingSquaresSpinnervue_type_style_index_0_id_dbacb9de_scoped_true_lang_css_ = __webpack_require__("09fe");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue






/* normalize component */

var ScalingSquaresSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_ScalingSquaresSpinnervue_type_script_lang_js_,
  ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_render,
  ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_staticRenderFns,
  false,
  null,
  "dbacb9de",
  null
  
)

/* harmony default export */ var ScalingSquaresSpinner = (ScalingSquaresSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=e5e606d8&scoped=true&
var FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-bouncing-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle",style:(_vm.circleStyle)}),_c('div',{staticClass:"orbit",style:(_vm.orbitStyle)})])}
var FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=e5e606d8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
/* harmony default export */ var FulfillingBouncingCircleSpinnervue_type_script_lang_js_ = ({
  name: 'FulfillingBouncingCircleSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 4000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    orbitStyle: function orbitStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        borderColor: this.color,
        borderWidth: "".concat(this.size * 0.03, "px"),
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    circleStyle: function circleStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        borderColor: this.color,
        color: this.color,
        borderWidth: "".concat(this.size * 0.1, "px"),
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FulfillingBouncingCircleSpinnervue_type_script_lang_js_ = (FulfillingBouncingCircleSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=style&index=0&id=e5e606d8&scoped=true&lang=css&
var FulfillingBouncingCircleSpinnervue_type_style_index_0_id_e5e606d8_scoped_true_lang_css_ = __webpack_require__("5d60");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue






/* normalize component */

var FulfillingBouncingCircleSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_FulfillingBouncingCircleSpinnervue_type_script_lang_js_,
  FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_render,
  FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_staticRenderFns,
  false,
  null,
  "e5e606d8",
  null
  
)

/* harmony default export */ var FulfillingBouncingCircleSpinner = (FulfillingBouncingCircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=template&id=5710a196&scoped=true&
var RadarSpinnervue_type_template_id_5710a196_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)},[_c('div',{staticClass:"circle-inner-container",style:(_vm.circleInnerContainerStyle)},[_c('div',{staticClass:"circle-inner",style:(_vm.circleInnerStyle)})])])}),0)}
var RadarSpinnervue_type_template_id_5710a196_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=template&id=5710a196&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RadarSpinnervue_type_script_lang_js_ = ({
  name: 'RadarSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 110
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      circlesNum: 4
    };
  },
  computed: {
    borderWidth: function borderWidth() {
      return this.size * 5 / 110;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    circleStyle: function circleStyle() {
      return {
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    circleInnerContainerStyle: function circleInnerContainerStyle() {
      return {
        borderWidth: "".concat(this.borderWidth, "px")
      };
    },
    circleInnerStyle: function circleInnerStyle() {
      return {
        borderLeftColor: this.color,
        borderRightColor: this.color,
        borderWidth: "".concat(this.borderWidth, "px")
      };
    },
    circlesStyles: function circlesStyles() {
      var circlesStyles = [];
      var delay = this.animationDuration * 0.15;

      for (var i = 0; i < this.circlesNum; i++) {
        circlesStyles.push(Object.assign({
          padding: "".concat(this.borderWidth * 2 * i, "px"),
          animationDelay: "".concat(i === this.circlesNum - 1 ? 0 : delay, "ms")
        }, this.circleStyle));
      }

      return circlesStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_RadarSpinnervue_type_script_lang_js_ = (RadarSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=style&index=0&id=5710a196&scoped=true&lang=css&
var RadarSpinnervue_type_style_index_0_id_5710a196_scoped_true_lang_css_ = __webpack_require__("3d8a");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue






/* normalize component */

var RadarSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_RadarSpinnervue_type_script_lang_js_,
  RadarSpinnervue_type_template_id_5710a196_scoped_true_render,
  RadarSpinnervue_type_template_id_5710a196_scoped_true_staticRenderFns,
  false,
  null,
  "5710a196",
  null
  
)

/* harmony default export */ var RadarSpinner = (RadarSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=template&id=eb840b8e&scoped=true&
var SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"self-building-square-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:{'clear': index && index % 3 === 0},style:(ss)})}),0)}
var SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=template&id=eb840b8e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SelfBuildingSquareSpinnervue_type_script_lang_js_ = ({
  name: 'SelfBuildingSquareSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 6000
    },
    size: {
      type: Number,
      default: 40
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      squaresNum: 9
    };
  },
  computed: {
    squareSize: function squareSize() {
      return this.size / 4;
    },
    initialTopPosition: function initialTopPosition() {
      return -this.squareSize * 2 / 3;
    },
    spinnerStyle: function spinnerStyle() {
      return {
        top: "".concat(-this.initialTopPosition, "px"),
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    squareStyle: function squareStyle() {
      return {
        height: "".concat(this.squareSize, "px"),
        width: "".concat(this.squareSize, "px"),
        top: "".concat(this.initialTopPosition, "px"),
        marginRight: "".concat(this.squareSize / 3, "px"),
        marginTop: "".concat(this.squareSize / 3, "px"),
        animationDuration: "".concat(this.animationDuration, "ms"),
        background: this.color
      };
    },
    squaresStyles: function squaresStyles() {
      var squaresStyles = [];
      var delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2];
      var delayModifier = this.animationDuration * 0.05;

      for (var i = 0; i < this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
          animationDelay: "".concat(delayModifier * delaysMultipliers[i], "ms")
        }, this.squareStyle));
      }

      return squaresStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SelfBuildingSquareSpinnervue_type_script_lang_js_ = (SelfBuildingSquareSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=style&index=0&id=eb840b8e&scoped=true&lang=css&
var SelfBuildingSquareSpinnervue_type_style_index_0_id_eb840b8e_scoped_true_lang_css_ = __webpack_require__("e2ed");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue






/* normalize component */

var SelfBuildingSquareSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_SelfBuildingSquareSpinnervue_type_script_lang_js_,
  SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_render,
  SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_staticRenderFns,
  false,
  null,
  "eb840b8e",
  null
  
)

/* harmony default export */ var SelfBuildingSquareSpinner = (SelfBuildingSquareSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=template&id=1ae1dc20&scoped=true&
var SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spring-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spring-spinner-part top",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})]),_c('div',{staticClass:"spring-spinner-part bottom",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})])])}
var SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=template&id=1ae1dc20&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SpringSpinnervue_type_script_lang_js_ = ({
  name: 'SpringSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 3000
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      animationName: "spring-spinner-animation-".concat(Date.now())
    };
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    spinnerPartStyle: function spinnerPartStyle() {
      return {
        height: "".concat(this.size / 2, "px"),
        width: "".concat(this.size, "px")
      };
    },
    rotatorStyle: function rotatorStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px"),
        borderRightColor: this.color,
        borderTopColor: this.color,
        borderWidth: "".concat(this.size / 7, "px"),
        animationDuration: "".concat(this.animationDuration, "ms"),
        animationName: this.animationName
      };
    }
  },
  watch: {
    size: {
      handler: 'updateAnimation',
      immediate: true
    },
    color: {
      handler: 'updateAnimation',
      immediate: true
    }
  },
  mounted: function mounted() {
    this.updateAnimation();
  },
  beforeDestroy: function beforeDestroy() {
    utils.removeKeyframes(this.animationName);
  },
  methods: {
    updateAnimation: function updateAnimation() {
      utils.removeKeyframes(this.animationName);
      utils.appendKeyframes(this.animationName, this.generateKeyframes());
    },
    generateKeyframes: function generateKeyframes() {
      return "\n        0% {\n          border-width: ".concat(this.size / 7, "px;\n        }\n        25% {\n          border-width: ").concat(this.size / 23.33, "px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ").concat(this.size / 7, "px;\n        }\n        75% {\n          border-width: ").concat(this.size / 23.33, "px;\n         }\n        100% {\n         border-width: ").concat(this.size / 7, "px;\n        }");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SpringSpinnervue_type_script_lang_js_ = (SpringSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=style&index=0&id=1ae1dc20&scoped=true&lang=css&
var SpringSpinnervue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css_ = __webpack_require__("34c9");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue






/* normalize component */

var SpringSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_SpringSpinnervue_type_script_lang_js_,
  SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_render,
  SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_staticRenderFns,
  false,
  null,
  "1ae1dc20",
  null
  
)

/* harmony default export */ var SpringSpinner = (SpringSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=template&id=49d9ad28&scoped=true&
var LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"looping-rhombuses-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{staticClass:"rhombus",style:(rs),attrs:{"ikey":index}})}),0)}
var LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=template&id=49d9ad28&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoopingRhombusesSpinnervue_type_script_lang_js_ = ({
  name: 'LoopingRhombusesSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 2500
    },
    rhombusSize: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data: function data() {
    return {
      rhombusesNum: 3
    };
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.rhombusSize, "px"),
        width: "".concat(this.rhombusSize * 4, "px")
      };
    },
    rhombusStyle: function rhombusStyle() {
      return {
        height: "".concat(this.rhombusSize, "px"),
        width: "".concat(this.rhombusSize, "px"),
        backgroundColor: this.color,
        animationDuration: "".concat(this.animationDuration, "ms"),
        left: "".concat(this.rhombusSize * 4, "px")
      };
    },
    rhombusesStyles: function rhombusesStyles() {
      var rhombusesStyles = [];
      var delay = -this.animationDuration / 1.5;

      for (var i = 1; i <= this.rhombusesNum; i++) {
        var style = Object.assign({
          animationDelay: "".concat(i * delay, "ms")
        }, this.rhombusStyle);
        rhombusesStyles.push(style);
      }

      return rhombusesStyles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_LoopingRhombusesSpinnervue_type_script_lang_js_ = (LoopingRhombusesSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=style&index=0&id=49d9ad28&scoped=true&lang=css&
var LoopingRhombusesSpinnervue_type_style_index_0_id_49d9ad28_scoped_true_lang_css_ = __webpack_require__("1016");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue






/* normalize component */

var LoopingRhombusesSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_LoopingRhombusesSpinnervue_type_script_lang_js_,
  LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_render,
  LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_staticRenderFns,
  false,
  null,
  "49d9ad28",
  null
  
)

/* harmony default export */ var LoopingRhombusesSpinner = (LoopingRhombusesSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=template&id=669f3b60&scoped=true&
var HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"half-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle-1",style:(_vm.circle1Style)}),_c('div',{staticClass:"circle circle-2",style:(_vm.circle2Style)})])}
var HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=template&id=669f3b60&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
/* harmony default export */ var HalfCircleSpinnervue_type_script_lang_js_ = ({
  name: 'HalfCircleSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    circleStyle: function circleStyle() {
      return {
        borderWidth: "".concat(this.size / 10, "px"),
        animationDuration: "".concat(this.animationDuration, "ms")
      };
    },
    circle1Style: function circle1Style() {
      return Object.assign({
        borderTopColor: this.color
      }, this.circleStyle);
    },
    circle2Style: function circle2Style() {
      return Object.assign({
        borderBottomColor: this.color
      }, this.circleStyle);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_HalfCircleSpinnervue_type_script_lang_js_ = (HalfCircleSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=style&index=0&id=669f3b60&scoped=true&lang=css&
var HalfCircleSpinnervue_type_style_index_0_id_669f3b60_scoped_true_lang_css_ = __webpack_require__("66d3");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue






/* normalize component */

var HalfCircleSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_HalfCircleSpinnervue_type_script_lang_js_,
  HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_render,
  HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_staticRenderFns,
  false,
  null,
  "669f3b60",
  null
  
)

/* harmony default export */ var HalfCircleSpinner = (HalfCircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5560288c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=template&id=fb9a33c4&scoped=true&
var AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"atom-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner"},[_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-circle",style:(_vm.circleStyle)},[_vm._v(" ● ")])])])}
var AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=template&id=fb9a33c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AtomSpinnervue_type_script_lang_js_ = ({
  name: 'AtomSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    spinnerStyle: function spinnerStyle() {
      return {
        height: "".concat(this.size, "px"),
        width: "".concat(this.size, "px")
      };
    },
    circleStyle: function circleStyle() {
      return {
        color: this.color,
        fontSize: "".concat(this.size * 0.24, "px")
      };
    },
    lineStyle: function lineStyle() {
      return {
        animationDuration: "".concat(this.animationDuration, "ms"),
        borderLeftWidth: "".concat(this.size / 25, "px"),
        borderTopWidth: "".concat(this.size / 25, "px"),
        borderLeftColor: this.color
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_AtomSpinnervue_type_script_lang_js_ = (AtomSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=style&index=0&id=fb9a33c4&scoped=true&lang=css&
var AtomSpinnervue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css_ = __webpack_require__("741b");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue






/* normalize component */

var AtomSpinner_component = Object(componentNormalizer["a" /* default */])(
  lib_AtomSpinnervue_type_script_lang_js_,
  AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_render,
  AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_staticRenderFns,
  false,
  null,
  "fb9a33c4",
  null
  
)

/* harmony default export */ var AtomSpinner = (AtomSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/lib.js





















// EXTERNAL MODULE: ./node_modules/hammerjs/hammer.js
var hammer = __webpack_require__("c8b5");
var hammer_default = /*#__PURE__*/__webpack_require__.n(hammer);

// CONCATENATED MODULE: ./src/components/addons/index.js

/* harmony default export */ var addons = ({
  methods: {
    initAddons: function initAddons() {
      if (this.addons.enableLargeView) {
        var LargeView = __webpack_require__("54ac").default;

        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('LargeView', LargeView);
      }

      if (this.addons.enablePictureElement) {
        var PictureElement = __webpack_require__("94a2").default;

        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('PictureElement', PictureElement);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Lingallery.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Lingalleryvue_type_script_lang_js_ = ({
  name: 'Lingallery',
  mixins: [addons],
  directives: {
    swipe: {
      bind: function bind(el, binding) {
        if (typeof binding.value === 'function') {
          binding.hammer = new hammer_default.a(el);
          binding.hammer.get('swipe').set({
            direction: hammer_default.a.DIRECTION_HORIZONTAL,
            threshold: 5
          });
          binding.hammer.on('swipe', binding.value);
        }
      },
      unbind: function unbind(el, binding) {
        if (binding.hammer) {
          binding.hammer.destroy();
        }
      }
    }
  },
  data: function data() {
    return {
      currentImage: null,
      currentImageWidth: 0,
      currentImageHeight: 0,
      currentIndex: 0,
      currentId: null,
      currentCaption: '',
      currentAlt: '',
      windowWidth: 0,
      isLoading: true,
      showLargeView: false
    };
  },
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startImage: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 400
    },
    baseColor: {
      type: String,
      default: '#fff'
    },
    accentColor: {
      type: String,
      default: '#3498db'
    },
    textColor: {
      type: String,
      default: '#000'
    },
    responsive: {
      type: Boolean,
      default: false
    },
    showThumbnails: {
      type: Boolean,
      default: true
    },
    mobileHeight: {
      type: Number,
      default: 0
    },
    mobileHeightBreakpoint: {
      type: Number,
      default: 0
    },
    leftControlClass: {
      type: String,
      default: ''
    },
    rightControlClass: {
      type: String,
      default: ''
    },
    disableImageClick: {
      type: Boolean,
      default: false
    },
    squareModeDesktop: {
      type: Boolean,
      default: false
    },
    showControls: {
      type: Boolean,
      default: true
    },
    addons: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    HalfCircleSpinner: HalfCircleSpinner
  },
  computed: {
    lingalleryStyle: function lingalleryStyle() {
      return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px' : 'width:100%';
    },
    captionStyle: function captionStyle() {
      return 'color:' + this.textColor;
    },
    mainImageStyle: function mainImageStyle() {
      var isLoading = this.$refs.mainImage && !this.addons.enablePictureElement && Object.prototype.hasOwnProperty.call(this.$refs.mainImage, 'classList') && this.$refs.mainImage.classList.contains('loading') ? true : this.$refs.mainImage && this.addons.enablePictureElement ? this.$refs.mainImage.$el.children[this.$refs.mainImage.$el.children.length - 1].classList.contains('loading') : false;
      var mainImageStyle = '';

      if (this.mobileHeight !== 0 && this.windowWidth < this.mobileHeightBreakpoint) {
        mainImageStyle += 'width:100%;height:' + this.mobileHeight + 'px;object-fit:cover;';
      }

      if (isLoading) {
        if (this.mobileHeight !== 0) {
          mainImageStyle += 'min-height:' + this.mobileHeight + 'px;';
        } else mainImageStyle += 'min-height:200px;';
      }

      if (this.squareModeDesktop && this.windowWidth && this.windowWidth > this.width) {
        if (this.currentImageWidth >= this.currentImageHeight) {
          mainImageStyle += 'height:' + this.width + 'px;width: ' + this.width + 'px;';
        } else mainImageStyle += 'width:' + this.height + 'px;height:' + this.height + 'px;';

        mainImageStyle += 'object-fit: cover;';
      }

      return mainImageStyle;
    },
    figureStyle: function figureStyle() {
      if (this.currentImage && this.currentImageWidth && this.currentImageHeight) {
        var heightValue = 'height:auto';

        if (this.currentImageWidth < this.currentImageHeight && this.mobileHeight === 0 && !this.responsive) {
          heightValue = 'height:' + this.height + 'px';
        }

        return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px;height:' + this.height + 'px' : 'width:100%;' + heightValue;
      } else return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px;height:' + this.height + 'px' : 'width:100%;height:auto';
    }
  },
  methods: {
    initLingallery: function initLingallery() {
      this.currentImage = this.items[this.startImage].src;
      this.currentCaption = this.items[this.startImage].caption;
      this.currentId = this.items[this.startImage].id;
      this.currentIndex = this.startImage;
      this.windowWidth = window.innerWidth;
      this.sendId();
    },
    handleImageLoaded: function handleImageLoaded() {
      this.isLoading = false;
      this.updateCurrentImageSizes();
    },
    updateCurrentImageSizes: function updateCurrentImageSizes() {
      var img = this.$refs.mainImage && Object.prototype.hasOwnProperty.call(this.$refs.mainImage, 'src') ? this.$refs.mainImage : this.$refs.mainImage.$el ? this.$refs.mainImage.$el.getElementsByTagName('img')[0] : null;

      if (img) {
        this.currentImageWidth = img.naturalWidth;
        this.currentImageHeight = img.naturalHeight;
      }
    },
    handleImageSwipe: function handleImageSwipe(event) {
      if (event.direction === 4) {
        this.showPreviousImage();
      } else if (event.direction === 2) {
        this.showNextImage();
      }
    },
    handleImageClick: function handleImageClick(index) {
      this.currentIndex = index;
      this.pickImage(index);
    },
    handleLargeImageClick: function handleLargeImageClick() {
      if (this.addons.enableLargeView) {
        this.showLargeView = true;
      } else if (!this.disableImageClick && this.items.length > 1) {
        this.showNextImage();
      }
    },
    handleLoader: function handleLoader(isLoading) {
      this.isLoading = isLoading;
    },
    pickImage: function pickImage(index) {
      // Show Loader
      this.handleLoader(true);
      this.currentImage = this.items[index].src;
      this.currentCaption = Object.prototype.hasOwnProperty.call(this.items[index], 'caption') ? this.items[index].caption : '';
      this.currentAlt = Object.prototype.hasOwnProperty.call(this.items[index], 'alt') ? this.items[index].alt : '';
      this.currentId = Object.prototype.hasOwnProperty.call(this.items[index], 'id') ? this.items[index].id : null;
      this.sendId();
    },
    thumbnailStyle: function thumbnailStyle(index) {
      var color = this.currentIndex === index ? this.accentColor : this.baseColor;
      return 'border-color:' + color;
    },
    sendId: function sendId() {// This throws an uncomprehensible error so I commented it out for now
      // this.$emit('update:iid', this.currentId)
    },
    showNextImage: function showNextImage() {
      // Show Loader
      this.handleLoader(true);

      if (this.items.length > this.currentIndex + 1) {
        this.currentIndex = this.currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }

      this.pickImage(this.currentIndex);
    },
    showPreviousImage: function showPreviousImage() {
      // Show Loader
      this.handleLoader(true);

      if (this.currentIndex !== 0) {
        this.currentIndex = this.currentIndex - 1;
      } else {
        this.currentIndex = this.items.length - 1;
      }

      this.pickImage(this.currentIndex);
    }
  },
  created: function created() {
    this.initAddons();
  },
  mounted: function mounted() {
    this.initLingallery();
  },
  watch: {
    items: function items() {
      this.currentImage = this.items[this.startImage].src;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Lingallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Lingalleryvue_type_script_lang_js_ = (Lingalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Lingallery.vue?vue&type=style&index=0&id=a0a9e1ac&lang=scss&scoped=true&
var Lingalleryvue_type_style_index_0_id_a0a9e1ac_lang_scss_scoped_true_ = __webpack_require__("e71a");

// CONCATENATED MODULE: ./src/components/Lingallery.vue






/* normalize component */

var Lingallery_component = Object(componentNormalizer["a" /* default */])(
  components_Lingalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a0a9e1ac",
  null
  
)

/* harmony default export */ var Lingallery = (Lingallery_component.exports);
// CONCATENATED MODULE: ./src/components/index.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("lingallery", Lingallery);
/* harmony default export */ var components = (Lingallery);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fb81":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4026");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("09f9dd02", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fed0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e2a");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});
//# sourceMappingURL=lingallery.umd.js.map