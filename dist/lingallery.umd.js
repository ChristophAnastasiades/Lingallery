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

/***/ "0086":
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * @author    Jerry Bendy
 * @since     4/12/2017
 */

function touchX(event) {
    return event.touches[0].clientX;
}

function touchY(event) {
    return event.touches[0].clientY;
}

var isPassiveSupported = (function() {
    var supportsPassive = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = true;
            }
        });
        window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassive;
})()


var vueTouchEvents = {
    install: function (Vue, options) {

        // Set default options
        options = Object.assign({}, {
            disableClick: false,
            tapTolerance: 10,
            swipeTolerance: 30,
            longTapTimeInterval: 400,
            touchClass: ''
        }, options || {})


        function touchStartEvent(event) {
            var $this = this.$$touchObj

            $this.supportTouch = true

            if ($this.touchStarted) {
                return
            }

            addTouchClass(this)

            $this.touchStarted = true

            $this.touchMoved = false
            $this.swipeOutBounded = false

            $this.startX = touchX(event)
            $this.startY = touchY(event)

            $this.currentX = 0
            $this.currentY = 0

            $this.touchStartTime = event.timeStamp
        }

        function touchMoveEvent(event) {
            var $this = this.$$touchObj

            $this.currentX = touchX(event)
            $this.currentY = touchY(event)

            if (!$this.touchMoved) {
                var tapTolerance = options.tapTolerance

                $this.touchMoved = Math.abs($this.startX - $this.currentX) > tapTolerance ||
                    Math.abs($this.startY - $this.currentY) > tapTolerance

            } else if (!$this.swipeOutBounded) {
                var swipeOutBounded = options.swipeTolerance

                $this.swipeOutBounded = Math.abs($this.startX - $this.currentX) > swipeOutBounded &&
                    Math.abs($this.startY - $this.currentY) > swipeOutBounded
            }
        }

        function touchCancelEvent() {
            var $this = this.$$touchObj

            removeTouchClass(this)

            $this.touchStarted = $this.touchMoved = false
            $this.startX = $this.startY = 0
        }

        function touchEndEvent(event) {
            var $this = this.$$touchObj

            $this.touchStarted = false

            removeTouchClass(this)

            if (!$this.touchMoved) {
                // detect if this is a longTap event or not
                if ($this.callbacks.longtap && event.timeStamp - $this.touchStartTime > options.longTapTimeInterval) {
                    event.preventDefault()
                    triggerEvent(event, this, 'longtap')

                } else {
                    // emit tap event
                    triggerEvent(event, this, 'tap')
                }

            } else if (!$this.swipeOutBounded) {
                var swipeOutBounded = options.swipeTolerance, direction

                if (Math.abs($this.startX - $this.currentX) < swipeOutBounded) {
                    direction = $this.startY > $this.currentY ? "top" : "bottom"

                } else {
                    direction = $this.startX > $this.currentX ? "left" : "right"
                }

                // Only emit the specified event when it has modifiers
                if ($this.callbacks['swipe.' + direction]) {
                    triggerEvent(event, this, 'swipe.' + direction, direction)

                } else {
                    // Emit a common event when it has no any modifier
                    triggerEvent(event, this, 'swipe', direction)
                }
            }
        }

        function clickEvent(event) {
            var $this = this.$$touchObj

            if (!$this.supportTouch && !options.disableClick) {
                triggerEvent(event, this, 'tap')
            }
        }

        function mouseEnterEvent() {
            addTouchClass(this)
        }

        function mouseLeaveEvent() {
            removeTouchClass(this)
        }

        function triggerEvent(e, $el, eventType, param) {
            var $this = $el.$$touchObj

            // get the callback list
            var callbacks = $this.callbacks[eventType] || []
            if (callbacks.length === 0) {
                return null
            }

            for (var i = 0; i < callbacks.length; i++) {
                var binding = callbacks[i]

                // handle `self` modifier`
                if (binding.modifiers.self && e.target !== e.currentTarget) {
                    continue
                }

                if (typeof binding.value === 'function') {
                    if (param) {
                        binding.value(param, e)
                    } else {
                        binding.value(e)
                    }
                }
            }
        }

        function addTouchClass($el) {
            var className = $el.$$touchClass || options.touchClass
            className && $el.classList.add(className)
        }

        function removeTouchClass($el) {
            var className = $el.$$touchClass || options.touchClass
            className && $el.classList.remove(className)
        }

        Vue.directive('touch', {
            bind: function ($el, binding) {

                $el.$$touchObj = $el.$$touchObj || {
                        // will change to true when `touchstart` event first trigger
                        supportTouch: false,
                        // an object contains all callbacks registered,
                        // key is event name, value is an array
                        callbacks: {},
                        // prevent bind twice, set to true when event bound
                        hasBindTouchEvents: false
                    }


                // register callback
                var eventType = binding.arg || 'tap'
                switch (eventType) {
                    case 'swipe':
                        var _m = binding.modifiers
                        if (_m.left || _m.right || _m.top || _m.bottom) {
                            for (var i in binding.modifiers) {
                                if (['left', 'right', 'top', 'bottom'].indexOf(i) >= 0) {
                                    var _e = 'swipe.' + i
                                    $el.$$touchObj.callbacks[_e] = $el.$$touchObj.callbacks[_e] || []
                                    $el.$$touchObj.callbacks[_e].push(binding)
                                }
                            }
                        } else {
                            $el.$$touchObj.callbacks.swipe = $el.$$touchObj.callbacks.swipe || []
                            $el.$$touchObj.callbacks.swipe.push(binding)
                        }
                        break

                    default:
                        $el.$$touchObj.callbacks[eventType] = $el.$$touchObj.callbacks[eventType] || []
                        $el.$$touchObj.callbacks[eventType].push(binding)
                }

                // prevent bind twice
                if ($el.$$touchObj.hasBindTouchEvents) {
                    return
                }

                var passiveOpt = isPassiveSupported ? { passive: true } : false;
                $el.addEventListener('touchstart', touchStartEvent, passiveOpt)
                $el.addEventListener('touchmove', touchMoveEvent, passiveOpt)
                $el.addEventListener('touchcancel', touchCancelEvent)
                $el.addEventListener('touchend', touchEndEvent)

                if (!options.disableClick) {
                    $el.addEventListener('click', clickEvent)
                    $el.addEventListener('mouseenter', mouseEnterEvent)
                    $el.addEventListener('mouseleave', mouseLeaveEvent)
                }

                // set bind mark to true
                $el.$$touchObj.hasBindTouchEvents = true
            },

            unbind: function ($el) {
                $el.removeEventListener('touchstart', touchStartEvent)
                $el.removeEventListener('touchmove', touchMoveEvent)
                $el.removeEventListener('touchcancel', touchCancelEvent)
                $el.removeEventListener('touchend', touchEndEvent)

                if (!options.disableClick) {
                    $el.removeEventListener('click', clickEvent)
                    $el.removeEventListener('mouseenter', mouseEnterEvent)
                    $el.removeEventListener('mouseleave', mouseLeaveEvent)
                }

                // remove vars
                delete $el.$$touchObj
            }
        })

        Vue.directive('touch-class', {
            bind: function ($el, binding) {
                $el.$$touchClass = binding.value
            },
            unbind: function ($el) {
                delete $el.$$touchClass
            }
        })
    }
}


/*
 * Exports
 */
if (true) {
    module.exports = vueTouchEvents

} else {}


/***/ }),

/***/ "01bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_59f49670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e50a");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_59f49670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_59f49670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_59f49670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "05f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "072f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_eeed2fb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("25ed");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_eeed2fb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_eeed2fb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_eeed2fb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "097d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var speciesConstructor = __webpack_require__("ebd6");
var promiseResolve = __webpack_require__("bcaa");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "168b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_446ecce2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7bee");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_446ecce2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_446ecce2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lingallery_vue_vue_type_style_index_0_id_446ecce2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "25ed":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "25f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_0458ce94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47f5");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_0458ce94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_0458ce94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_0458ce94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2679":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_6a541738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f817");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_6a541738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_6a541738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_6a541738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2e77":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3796":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
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

/***/ "46fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "47f5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4af8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_96d5104c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("98c0");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_96d5104c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_96d5104c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_96d5104c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "54f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_7ca7cfc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6372");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_7ca7cfc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_7ca7cfc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_7ca7cfc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d10":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6372":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
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

/***/ "6f30":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "702a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
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

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7bee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_72b5f8a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b214");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_72b5f8a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_72b5f8a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_72b5f8a9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "8770":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_2543d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("46fc");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_2543d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_2543d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_2543d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8d98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8e91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_65918846_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e8f9");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_65918846_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_65918846_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_65918846_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9102":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_b85b25de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de56");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_b85b25de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_b85b25de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_b85b25de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9437":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  function isComputedLazy(item) {
    return item.hasOwnProperty('lazy') && item.lazy;
  }

  function isLazyActive(vm, key) {
    return vm[lazyActivePrefix + key];
  }

  var lazyActivePrefix = 'async_computed$lazy_active$',
      lazyDataPrefix = 'async_computed$lazy_data$';

  function initLazy(data, key) {
    data[lazyActivePrefix + key] = false;
    data[lazyDataPrefix + key] = null;
  }

  function makeLazyComputed(key) {
    return {
      get: function get() {
        this[lazyActivePrefix + key] = true;
        return this[lazyDataPrefix + key];
      },
      set: function set(value) {
        this[lazyDataPrefix + key] = value;
      }
    };
  }

  function silentSetLazy(vm, key, value) {
    vm[lazyDataPrefix + key] = value;
  }
  function silentGetLazy(vm, key) {
    return vm[lazyDataPrefix + key];
  }

  var prefix = '_async_computed$';
  var DidNotUpdate = typeof Symbol === 'function' ? Symbol('did-not-update') : {};

  var AsyncComputed = {
    install: function install(Vue, pluginOptions) {
      pluginOptions = pluginOptions || {};

      Vue.config.optionMergeStrategies.asyncComputed = Vue.config.optionMergeStrategies.computed;

      Vue.mixin({
        beforeCreate: function beforeCreate() {
          var optionData = this.$options.data;

          if (!this.$options.computed) this.$options.computed = {};

          for (var key in this.$options.asyncComputed || {}) {
            this.$options.computed[prefix + key] = getterFn(key, this.$options.asyncComputed[key]);
          }

          this.$options.data = function vueAsyncComputedInjectedDataFn() {
            var data = (typeof optionData === 'function' ? optionData.call(this) : optionData) || {};
            for (var _key in this.$options.asyncComputed || {}) {
              var item = this.$options.asyncComputed[_key];
              if (isComputedLazy(item)) {
                initLazy(data, _key);
                this.$options.computed[_key] = makeLazyComputed(_key);
              } else {
                data[_key] = null;
              }
            }
            return data;
          };
        },
        created: function created() {
          var _this = this;

          for (var key in this.$options.asyncComputed || {}) {
            var item = this.$options.asyncComputed[key],
                value = generateDefault.call(this, item, pluginOptions);
            if (isComputedLazy(item)) {
              silentSetLazy(this, key, value);
            } else {
              this[key] = value;
            }
          }

          var _loop = function _loop(_key2) {
            var promiseId = 0;
            _this.$watch(prefix + _key2, function (newPromise) {
              var thisPromise = ++promiseId;

              if (newPromise === DidNotUpdate) {
                return;
              }

              if (!newPromise || !newPromise.then) {
                newPromise = Promise.resolve(newPromise);
              }

              newPromise.then(function (value) {
                if (thisPromise !== promiseId) return;
                _this[_key2] = value;
              }).catch(function (err) {
                if (thisPromise !== promiseId) return;

                if (pluginOptions.errorHandler === false) return;

                var handler = pluginOptions.errorHandler === undefined ? console.error.bind(console, 'Error evaluating async computed property:') : pluginOptions.errorHandler;

                if (pluginOptions.useRawError) {
                  handler(err);
                } else {
                  handler(err.stack);
                }
              });
            }, { immediate: true });
          };

          for (var _key2 in this.$options.asyncComputed || {}) {
            _loop(_key2);
          }
        }
      });
    }
  };

  function getterFn(key, fn) {
    if (typeof fn === 'function') return fn;

    var getter = fn.get;

    if (fn.hasOwnProperty('watch')) {
      var previousGetter = getter;
      getter = function getter() {
        fn.watch.call(this);
        return previousGetter.call(this);
      };
    }

    if (fn.hasOwnProperty('shouldUpdate')) {
      var _previousGetter = getter;
      getter = function getter() {
        if (fn.shouldUpdate.call(this)) {
          return _previousGetter.call(this);
        }
        return DidNotUpdate;
      };
    }

    if (isComputedLazy(fn)) {
      var nonLazy = getter;
      getter = function lazyGetter() {
        if (isLazyActive(this, key)) {
          return nonLazy.call(this);
        } else {
          return silentGetLazy(this, key);
        }
      };
    }
    return getter;
  }

  function generateDefault(fn, pluginOptions) {
    var defaultValue = null;

    if ('default' in fn) {
      defaultValue = fn.default;
    } else if ('default' in pluginOptions) {
      defaultValue = pluginOptions.default;
    }

    if (typeof defaultValue === 'function') {
      return defaultValue.call(this);
    } else {
      return defaultValue;
    }
  }

  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    // Auto install in dist mode
    window.Vue.use(AsyncComputed);
  }

  return AsyncComputed;
});


/***/ }),

/***/ "9691":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "96cf":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "98c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "98ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_91571d3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3796");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_91571d3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_91571d3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_91571d3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9dc8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_44939cec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8d98");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_44939cec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_44939cec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_44939cec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9ec8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_10ac9285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2e77");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_10ac9285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_10ac9285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_10ac9285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "b214":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc66":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_f115833a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("05f1");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_f115833a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_f115833a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_f115833a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
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

/***/ "c4ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_7b1ad6b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f30");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_7b1ad6b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_7b1ad6b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_7b1ad6b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c660":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "caa2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_7c827517_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9691");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_7c827517_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_7c827517_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_7c827517_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

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

/***/ "d205":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "de56":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e279":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_43f67b6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("702a");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_43f67b6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_43f67b6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_43f67b6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e50a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e8f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f084":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_31ad46aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5d10");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_31ad46aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_31ad46aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_31ad46aa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_0f568b7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d205");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_0f568b7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_0f568b7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_0f568b7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f817":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Lingallery.vue?vue&type=template&id=446ecce2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lingallery",style:(_vm.lingalleryStyle)},[_c('figure',{style:(_vm.figureStyle),attrs:{"itemprop":"associatedMedia","itemscope":"","itemtype":"http://schema.org/ImageObject"}},[_c('div',{staticClass:"lingallery_spinner"},[(_vm.isLoading)?_c('half-circle-spinner',{attrs:{"animation-duration":1000,"size":60,"color":_vm.accentColor}}):_vm._e()],1),_c('img',{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:(_vm.showPreviousImage),expression:"showPreviousImage",arg:"swipe",modifiers:{"left":true}},{name:"touch",rawName:"v-touch:swipe.right",value:(_vm.showNextImage),expression:"showNextImage",arg:"swipe",modifiers:{"right":true}}],ref:"mainImage",class:{ loading: _vm.isLoading },style:(_vm.mainImageStyle),attrs:{"src":_vm.currentImage},on:{"click":_vm.showNextImage}}),(_vm.currentCaption)?_c('div',{staticClass:"lingallery_caption",style:(_vm.captionStyle)},[_vm._v("\n            "+_vm._s(_vm.currentCaption)+"\n        ")]):_vm._e(),(!_vm.leftControlClass)?_c('a',{staticClass:"control left",on:{"click":_vm.showPreviousImage}},[_vm._v("◀")]):_vm._e(),(!_vm.rightControlClass)?_c('a',{staticClass:"control right",on:{"click":_vm.showNextImage}},[_vm._v("▶")]):_vm._e(),(_vm.leftControlClass)?_c('a',{class:'control left ' + _vm.leftControlClass,on:{"click":_vm.showPreviousImage}}):_vm._e(),(_vm.rightControlClass)?_c('a',{class:'control right ' + _vm.rightControlClass,on:{"click":_vm.showNextImage}}):_vm._e()]),(_vm.showThumbnails)?_c('div',{staticClass:"lingallery_thumbnails"},[_c('div',{staticClass:"lingallery_thumbnails_content"},_vm._l((_vm.items),function(item,index){return _c('div',{key:index,staticClass:"lingallery_thumbnails_content_elem"},[_c('img',_vm._g({style:(_vm.thumbnailStyle(index)),attrs:{"src":item.thumbnail,"height":"64"}},_vm.currentIndex !== index ? { click: function () { return _vm.handleImageClick(index); } } : {}))])}))]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Lingallery.vue?vue&type=template&id=446ecce2&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _next(value) {
        step("next", value);
      }

      function _throw(err) {
        step("throw", err);
      }

      _next();
    });
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=template&id=6a541738&scoped=true&
var HollowDotsSpinnervue_type_template_id_6a541738_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hollow-dots-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.dotsStyles),function(ds,index){return _c('div',{key:index,staticClass:"dot",style:(ds)})}))}
var HollowDotsSpinnervue_type_template_id_6a541738_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=template&id=6a541738&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=style&index=0&id=6a541738&scoped=true&lang=css&
var HollowDotsSpinnervue_type_style_index_0_id_6a541738_scoped_true_lang_css_ = __webpack_require__("2679");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue






/* normalize component */

var component = normalizeComponent(
  lib_HollowDotsSpinnervue_type_script_lang_js_,
  HollowDotsSpinnervue_type_template_id_6a541738_scoped_true_render,
  HollowDotsSpinnervue_type_template_id_6a541738_scoped_true_staticRenderFns,
  false,
  null,
  "6a541738",
  null
  
)

component.options.__file = "HollowDotsSpinner.vue"
/* harmony default export */ var HollowDotsSpinner = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=template&id=eeed2fb8&scoped=true&
var PixelSpinnervue_type_template_id_eeed2fb8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pixel-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"pixel-spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var PixelSpinnervue_type_template_id_eeed2fb8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=template&id=eeed2fb8&scoped=true&

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/services/utils.js
/* harmony default export */ var utils = ({
  appendKeyframes: function (name, frames) {
    var idx = document.styleSheets[0].cssRules.length
    document.styleSheets[0].insertRule('@keyframes ' + name + ' { ' + frames + ' }', idx)
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
      animationBaseName: 'pixel-spinner-animation',
      currentAnimationName: ''
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
        animationName: this.currentAnimationName,
        width: "".concat(this.pixelSize, "px"),
        height: "".concat(this.pixelSize, "px"),
        backgroundColor: this.color,
        color: this.color,
        boxShadow: "\n                      ".concat(this.pixelSize * 1.5, "px ").concat(this.pixelSize * 1.5, "px 0 0,\n                      ").concat(this.pixelSize * -1.5, "px ").concat(this.pixelSize * -1.5, "px 0 0,\n                      ").concat(this.pixelSize * 1.5, "px ").concat(this.pixelSize * -1.5, "px 0 0,\n                      ").concat(this.pixelSize * -1.5, "px ").concat(this.pixelSize * 1.5, "px 0 0,\n                      0 ").concat(this.pixelSize * 1.5, "px 0 0,\n                      ").concat(this.pixelSize * 1.5, "px 0 0 0,\n                      ").concat(this.pixelSize * -1.5, "px 0 0 0,\n                      0 ").concat(this.pixelSize * -1.5, "px 0 0\n                    ")
      };
    }
  },
  watch: {
    '$props': {
      handler: function handler() {
        this.updateAnimation();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.updateAnimation();
  },
  methods: {
    updateAnimation: function updateAnimation() {
      this.updateAnimationName();
      utils.appendKeyframes(this.currentAnimationName, this.generateKeyframes());
    },
    updateAnimationName: function updateAnimationName() {
      this.currentAnimationName = "".concat(this.animationBaseName, "-").concat(Date.now());
    },
    generateKeyframes: function generateKeyframes() {
      return "\n      50% {\n        box-shadow:  ".concat(this.pixelSize * 2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * 2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     0 ").concat(this.pixelSize, "px 0 0,\n                     ").concat(this.pixelSize, "px 0 0 0,\n                     ").concat(this.pixelSize * -1, "px 0 0 0,\n                     0 ").concat(this.pixelSize * -1, "px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  ").concat(this.pixelSize * 2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * 2, "px ").concat(this.pixelSize * -2, "px 0 0,\n                     ").concat(this.pixelSize * -2, "px ").concat(this.pixelSize * 2, "px 0 0,\n                     0 ").concat(this.pixelSize, "px 0 0,\n                     ").concat(this.pixelSize, "px 0 0 0,\n                     ").concat(this.pixelSize * -1, "px 0 0 0,\n                     0 ").concat(this.pixelSize * -1, "px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_PixelSpinnervue_type_script_lang_js_ = (PixelSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=style&index=0&id=eeed2fb8&scoped=true&lang=css&
var PixelSpinnervue_type_style_index_0_id_eeed2fb8_scoped_true_lang_css_ = __webpack_require__("072f");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/PixelSpinner.vue






/* normalize component */

var PixelSpinner_component = normalizeComponent(
  lib_PixelSpinnervue_type_script_lang_js_,
  PixelSpinnervue_type_template_id_eeed2fb8_scoped_true_render,
  PixelSpinnervue_type_template_id_eeed2fb8_scoped_true_staticRenderFns,
  false,
  null,
  "eeed2fb8",
  null
  
)

PixelSpinner_component.options.__file = "PixelSpinner.vue"
/* harmony default export */ var PixelSpinner = (PixelSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=template&id=7b1ad6b5&scoped=true&
var FlowerSpinnervue_type_template_id_7b1ad6b5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flower-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"dots-container",style:(_vm.dotsContainerStyle)},[_c('div',{staticClass:"bigger-dot",style:(_vm.biggerDotStyle)},[_c('div',{staticClass:"smaller-dot",style:(_vm.smallerDotStyle)})])])])}
var FlowerSpinnervue_type_template_id_7b1ad6b5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=template&id=7b1ad6b5&scoped=true&

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
      smallerDotAnimationBaseName: 'flower-spinner-smaller-dot-animation',
      biggerDotAnimationBaseName: 'flower-spinner-bigger-dot-animation',
      currentSmallerDotAnimationBaseName: '',
      currentBiggerDotAnimationBaseName: ''
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
        animationName: this.currentSmallerDotAnimationBaseName
      };
    },
    biggerDotStyle: function biggerDotStyle() {
      return {
        background: this.color,
        animationDuration: "".concat(this.animationDuration, "ms"),
        animationName: this.currentBiggerDotAnimationBaseName
      };
    }
  },
  watch: {
    '$props': {
      handler: function handler() {
        this.updateAnimation();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.updateAnimation();
  },
  methods: {
    updateAnimation: function updateAnimation() {
      this.updateAnimationName();
      utils.appendKeyframes(this.currentSmallerDotAnimationBaseName, this.generateSmallerDotKeyframes());
      utils.appendKeyframes(this.currentBiggerDotAnimationBaseName, this.generateBiggerDotKeyframes());
    },
    updateAnimationName: function updateAnimationName() {
      this.currentSmallerDotAnimationBaseName = "".concat(this.smallerDotAnimationBaseName, "-").concat(Date.now());
      this.currentBiggerDotAnimationBaseName = "".concat(this.biggerDotAnimationBaseName, "-").concat(Date.now());
    },
    generateSmallerDotKeyframes: function generateSmallerDotKeyframes() {
      return "0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }\n                25%, 75% {\n                  box-shadow: ").concat(this.dotSize * 1.4, "px 0 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 1.4, "px 0 0 ").concat(this.color, ",\n                              0 ").concat(this.dotSize * 1.4, "px 0 ").concat(this.color, ",\n                              0 -").concat(this.dotSize * 1.4, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize, "px -").concat(this.dotSize, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize, "px ").concat(this.dotSize, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize, "px -").concat(this.dotSize, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize, "px ").concat(this.dotSize, "px 0 ").concat(this.color, ";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }");
    },
    generateBiggerDotKeyframes: function generateBiggerDotKeyframes() {
      return "0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: ").concat(this.dotSize * 2.6, "px 0 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 2.6, "px 0 0 ").concat(this.color, ",\n                              0 ").concat(this.dotSize * 2.6, "px 0 ").concat(this.color, ",\n                              0 -").concat(this.dotSize * 2.6, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize * 1.9, "px -").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ",\n                              ").concat(this.dotSize * 1.9, "px ").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 1.9, "px -").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ",\n                              -").concat(this.dotSize * 1.9, "px ").concat(this.dotSize * 1.9, "px 0 ").concat(this.color, ";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ",\n                              0 0 0 ").concat(this.color, ";\n                }");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FlowerSpinnervue_type_script_lang_js_ = (FlowerSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=style&index=0&id=7b1ad6b5&scoped=true&lang=css&
var FlowerSpinnervue_type_style_index_0_id_7b1ad6b5_scoped_true_lang_css_ = __webpack_require__("c4ea");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue






/* normalize component */

var FlowerSpinner_component = normalizeComponent(
  lib_FlowerSpinnervue_type_script_lang_js_,
  FlowerSpinnervue_type_template_id_7b1ad6b5_scoped_true_render,
  FlowerSpinnervue_type_template_id_7b1ad6b5_scoped_true_staticRenderFns,
  false,
  null,
  "7b1ad6b5",
  null
  
)

FlowerSpinner_component.options.__file = "FlowerSpinner.vue"
/* harmony default export */ var FlowerSpinner = (FlowerSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=template&id=72b5f8a9&scoped=true&
var IntersectingCirclesSpinnervue_type_template_id_72b5f8a9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intersecting-circles-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinnerBlock",style:(_vm.spinnerBlockStyle)},_vm._l((_vm.circleStyles),function(cs,index){return _c('span',{key:index,staticClass:"circle",style:(cs)})}))])}
var IntersectingCirclesSpinnervue_type_template_id_72b5f8a9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=template&id=72b5f8a9&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=style&index=0&id=72b5f8a9&scoped=true&lang=css&
var IntersectingCirclesSpinnervue_type_style_index_0_id_72b5f8a9_scoped_true_lang_css_ = __webpack_require__("7e26");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue






/* normalize component */

var IntersectingCirclesSpinner_component = normalizeComponent(
  lib_IntersectingCirclesSpinnervue_type_script_lang_js_,
  IntersectingCirclesSpinnervue_type_template_id_72b5f8a9_scoped_true_render,
  IntersectingCirclesSpinnervue_type_template_id_72b5f8a9_scoped_true_staticRenderFns,
  false,
  null,
  "72b5f8a9",
  null
  
)

IntersectingCirclesSpinner_component.options.__file = "IntersectingCirclesSpinner.vue"
/* harmony default export */ var IntersectingCirclesSpinner = (IntersectingCirclesSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=template&id=325a6afe&scoped=true&
var OrbitSpinnervue_type_template_id_325a6afe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"orbit-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"orbit one",style:(_vm.orbitStyle)}),_c('div',{staticClass:"orbit two",style:(_vm.orbitStyle)}),_c('div',{staticClass:"orbit three",style:(_vm.orbitStyle)})])}
var OrbitSpinnervue_type_template_id_325a6afe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=template&id=325a6afe&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=style&index=0&id=325a6afe&scoped=true&lang=css&
var OrbitSpinnervue_type_style_index_0_id_325a6afe_scoped_true_lang_css_ = __webpack_require__("fe73");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue






/* normalize component */

var OrbitSpinner_component = normalizeComponent(
  lib_OrbitSpinnervue_type_script_lang_js_,
  OrbitSpinnervue_type_template_id_325a6afe_scoped_true_render,
  OrbitSpinnervue_type_template_id_325a6afe_scoped_true_staticRenderFns,
  false,
  null,
  "325a6afe",
  null
  
)

OrbitSpinner_component.options.__file = "OrbitSpinner.vue"
/* harmony default export */ var OrbitSpinner = (OrbitSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=template&id=f115833a&scoped=true&
var FingerprintSpinnervue_type_template_id_f115833a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fingerprint-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"spinner-ring",style:(rs)})}))}
var FingerprintSpinnervue_type_template_id_f115833a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=template&id=f115833a&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=style&index=0&id=f115833a&scoped=true&lang=css&
var FingerprintSpinnervue_type_style_index_0_id_f115833a_scoped_true_lang_css_ = __webpack_require__("bc66");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue






/* normalize component */

var FingerprintSpinner_component = normalizeComponent(
  lib_FingerprintSpinnervue_type_script_lang_js_,
  FingerprintSpinnervue_type_template_id_f115833a_scoped_true_render,
  FingerprintSpinnervue_type_template_id_f115833a_scoped_true_staticRenderFns,
  false,
  null,
  "f115833a",
  null
  
)

FingerprintSpinner_component.options.__file = "FingerprintSpinner.vue"
/* harmony default export */ var FingerprintSpinner = (FingerprintSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=template&id=65918846&scoped=true&
var TrinityRingsSpinnervue_type_template_id_65918846_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trinity-rings-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle1",style:(_vm.ring1Style)}),_c('div',{staticClass:"circle circle2",style:(_vm.ring2Style)}),_c('div',{staticClass:"circle circle3",style:(_vm.ring3Style)})])}
var TrinityRingsSpinnervue_type_template_id_65918846_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=template&id=65918846&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=style&index=0&id=65918846&scoped=true&lang=css&
var TrinityRingsSpinnervue_type_style_index_0_id_65918846_scoped_true_lang_css_ = __webpack_require__("8e91");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue






/* normalize component */

var TrinityRingsSpinner_component = normalizeComponent(
  lib_TrinityRingsSpinnervue_type_script_lang_js_,
  TrinityRingsSpinnervue_type_template_id_65918846_scoped_true_render,
  TrinityRingsSpinnervue_type_template_id_65918846_scoped_true_staticRenderFns,
  false,
  null,
  "65918846",
  null
  
)

TrinityRingsSpinner_component.options.__file = "TrinityRingsSpinner.vue"
/* harmony default export */ var TrinityRingsSpinner = (TrinityRingsSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=template&id=96d5104c&scoped=true&
var FulfillingSquareSpinnervue_type_template_id_96d5104c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-square-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var FulfillingSquareSpinnervue_type_template_id_96d5104c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=template&id=96d5104c&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=style&index=0&id=96d5104c&scoped=true&lang=css&
var FulfillingSquareSpinnervue_type_style_index_0_id_96d5104c_scoped_true_lang_css_ = __webpack_require__("4af8");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue






/* normalize component */

var FulfillingSquareSpinner_component = normalizeComponent(
  lib_FulfillingSquareSpinnervue_type_script_lang_js_,
  FulfillingSquareSpinnervue_type_template_id_96d5104c_scoped_true_render,
  FulfillingSquareSpinnervue_type_template_id_96d5104c_scoped_true_staticRenderFns,
  false,
  null,
  "96d5104c",
  null
  
)

FulfillingSquareSpinner_component.options.__file = "FulfillingSquareSpinner.vue"
/* harmony default export */ var FulfillingSquareSpinner = (FulfillingSquareSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=template&id=91571d3e&scoped=true&
var CirclesToRhombusesSpinnervue_type_template_id_91571d3e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"circles-to-rhombuses-spinner",style:(_vm.spinnertStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)})}))}
var CirclesToRhombusesSpinnervue_type_template_id_91571d3e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=template&id=91571d3e&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=style&index=0&id=91571d3e&scoped=true&lang=css&
var CirclesToRhombusesSpinnervue_type_style_index_0_id_91571d3e_scoped_true_lang_css_ = __webpack_require__("98ea");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue






/* normalize component */

var CirclesToRhombusesSpinner_component = normalizeComponent(
  lib_CirclesToRhombusesSpinnervue_type_script_lang_js_,
  CirclesToRhombusesSpinnervue_type_template_id_91571d3e_scoped_true_render,
  CirclesToRhombusesSpinnervue_type_template_id_91571d3e_scoped_true_staticRenderFns,
  false,
  null,
  "91571d3e",
  null
  
)

CirclesToRhombusesSpinner_component.options.__file = "CirclesToRhombusesSpinner.vue"
/* harmony default export */ var CirclesToRhombusesSpinner = (CirclesToRhombusesSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=template&id=0f568b7c&scoped=true&
var SemipolarSpinnervue_type_template_id_0f568b7c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"semipolar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"ring",style:(rs)})}))}
var SemipolarSpinnervue_type_template_id_0f568b7c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=template&id=0f568b7c&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=style&index=0&id=0f568b7c&scoped=true&lang=css&
var SemipolarSpinnervue_type_style_index_0_id_0f568b7c_scoped_true_lang_css_ = __webpack_require__("f530");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue






/* normalize component */

var SemipolarSpinner_component = normalizeComponent(
  lib_SemipolarSpinnervue_type_script_lang_js_,
  SemipolarSpinnervue_type_template_id_0f568b7c_scoped_true_render,
  SemipolarSpinnervue_type_template_id_0f568b7c_scoped_true_staticRenderFns,
  false,
  null,
  "0f568b7c",
  null
  
)

SemipolarSpinner_component.options.__file = "SemipolarSpinner.vue"
/* harmony default export */ var SemipolarSpinner = (SemipolarSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=template&id=7c827517&scoped=true&
var BreedingRhombusSpinnervue_type_template_id_7c827517_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breeding-rhombus-spinner",style:(_vm.spinnerStyle)},[_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{key:index,staticClass:"rhombus",class:("child-" + (index + 1)),style:(rs)})}),_c('div',{staticClass:"rhombus big",style:(_vm.bigRhombusStyle)})],2)}
var BreedingRhombusSpinnervue_type_template_id_7c827517_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=template&id=7c827517&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=style&index=0&id=7c827517&scoped=true&lang=css&
var BreedingRhombusSpinnervue_type_style_index_0_id_7c827517_scoped_true_lang_css_ = __webpack_require__("caa2");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue






/* normalize component */

var BreedingRhombusSpinner_component = normalizeComponent(
  lib_BreedingRhombusSpinnervue_type_script_lang_js_,
  BreedingRhombusSpinnervue_type_template_id_7c827517_scoped_true_render,
  BreedingRhombusSpinnervue_type_template_id_7c827517_scoped_true_staticRenderFns,
  false,
  null,
  "7c827517",
  null
  
)

BreedingRhombusSpinner_component.options.__file = "BreedingRhombusSpinner.vue"
/* harmony default export */ var BreedingRhombusSpinner = (BreedingRhombusSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=template&id=b85b25de&scoped=true&
var SwappingSquaresSpinnervue_type_template_id_b85b25de_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swapping-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}))}
var SwappingSquaresSpinnervue_type_template_id_b85b25de_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=template&id=b85b25de&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=style&index=0&id=b85b25de&scoped=true&lang=css&
var SwappingSquaresSpinnervue_type_style_index_0_id_b85b25de_scoped_true_lang_css_ = __webpack_require__("9102");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue






/* normalize component */

var SwappingSquaresSpinner_component = normalizeComponent(
  lib_SwappingSquaresSpinnervue_type_script_lang_js_,
  SwappingSquaresSpinnervue_type_template_id_b85b25de_scoped_true_render,
  SwappingSquaresSpinnervue_type_template_id_b85b25de_scoped_true_staticRenderFns,
  false,
  null,
  "b85b25de",
  null
  
)

SwappingSquaresSpinner_component.options.__file = "SwappingSquaresSpinner.vue"
/* harmony default export */ var SwappingSquaresSpinner = (SwappingSquaresSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=template&id=43f67b6f&scoped=true&
var ScalingSquaresSpinnervue_type_template_id_43f67b6f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scaling-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}))}
var ScalingSquaresSpinnervue_type_template_id_43f67b6f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=template&id=43f67b6f&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=style&index=0&id=43f67b6f&scoped=true&lang=css&
var ScalingSquaresSpinnervue_type_style_index_0_id_43f67b6f_scoped_true_lang_css_ = __webpack_require__("e279");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue






/* normalize component */

var ScalingSquaresSpinner_component = normalizeComponent(
  lib_ScalingSquaresSpinnervue_type_script_lang_js_,
  ScalingSquaresSpinnervue_type_template_id_43f67b6f_scoped_true_render,
  ScalingSquaresSpinnervue_type_template_id_43f67b6f_scoped_true_staticRenderFns,
  false,
  null,
  "43f67b6f",
  null
  
)

ScalingSquaresSpinner_component.options.__file = "ScalingSquaresSpinner.vue"
/* harmony default export */ var ScalingSquaresSpinner = (ScalingSquaresSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=44939cec&scoped=true&
var FulfillingBouncingCircleSpinnervue_type_template_id_44939cec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-bouncing-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle",style:(_vm.circleStyle)}),_c('div',{staticClass:"orbit",style:(_vm.orbitStyle)})])}
var FulfillingBouncingCircleSpinnervue_type_template_id_44939cec_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=44939cec&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=style&index=0&id=44939cec&scoped=true&lang=css&
var FulfillingBouncingCircleSpinnervue_type_style_index_0_id_44939cec_scoped_true_lang_css_ = __webpack_require__("9dc8");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue






/* normalize component */

var FulfillingBouncingCircleSpinner_component = normalizeComponent(
  lib_FulfillingBouncingCircleSpinnervue_type_script_lang_js_,
  FulfillingBouncingCircleSpinnervue_type_template_id_44939cec_scoped_true_render,
  FulfillingBouncingCircleSpinnervue_type_template_id_44939cec_scoped_true_staticRenderFns,
  false,
  null,
  "44939cec",
  null
  
)

FulfillingBouncingCircleSpinner_component.options.__file = "FulfillingBouncingCircleSpinner.vue"
/* harmony default export */ var FulfillingBouncingCircleSpinner = (FulfillingBouncingCircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=template&id=7ca7cfc9&scoped=true&
var RadarSpinnervue_type_template_id_7ca7cfc9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)},[_c('div',{staticClass:"circle-inner-container",style:(_vm.circleInnerContainerStyle)},[_c('div',{staticClass:"circle-inner",style:(_vm.circleInnerStyle)})])])}))}
var RadarSpinnervue_type_template_id_7ca7cfc9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=template&id=7ca7cfc9&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=style&index=0&id=7ca7cfc9&scoped=true&lang=css&
var RadarSpinnervue_type_style_index_0_id_7ca7cfc9_scoped_true_lang_css_ = __webpack_require__("54f3");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/RadarSpinner.vue






/* normalize component */

var RadarSpinner_component = normalizeComponent(
  lib_RadarSpinnervue_type_script_lang_js_,
  RadarSpinnervue_type_template_id_7ca7cfc9_scoped_true_render,
  RadarSpinnervue_type_template_id_7ca7cfc9_scoped_true_staticRenderFns,
  false,
  null,
  "7ca7cfc9",
  null
  
)

RadarSpinner_component.options.__file = "RadarSpinner.vue"
/* harmony default export */ var RadarSpinner = (RadarSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=template&id=2543d096&scoped=true&
var SelfBuildingSquareSpinnervue_type_template_id_2543d096_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"self-building-square-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:{'clear': index && index % 3 === 0},style:(ss)})}))}
var SelfBuildingSquareSpinnervue_type_template_id_2543d096_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=template&id=2543d096&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=style&index=0&id=2543d096&scoped=true&lang=css&
var SelfBuildingSquareSpinnervue_type_style_index_0_id_2543d096_scoped_true_lang_css_ = __webpack_require__("8770");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue






/* normalize component */

var SelfBuildingSquareSpinner_component = normalizeComponent(
  lib_SelfBuildingSquareSpinnervue_type_script_lang_js_,
  SelfBuildingSquareSpinnervue_type_template_id_2543d096_scoped_true_render,
  SelfBuildingSquareSpinnervue_type_template_id_2543d096_scoped_true_staticRenderFns,
  false,
  null,
  "2543d096",
  null
  
)

SelfBuildingSquareSpinner_component.options.__file = "SelfBuildingSquareSpinner.vue"
/* harmony default export */ var SelfBuildingSquareSpinner = (SelfBuildingSquareSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=template&id=10ac9285&scoped=true&
var SpringSpinnervue_type_template_id_10ac9285_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spring-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spring-spinner-part top",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})]),_c('div',{staticClass:"spring-spinner-part bottom",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})])])}
var SpringSpinnervue_type_template_id_10ac9285_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=template&id=10ac9285&scoped=true&

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
      animationBaseName: 'spring-spinner-animation',
      currentAnimationName: ''
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
        animationName: this.currentAnimationName
      };
    }
  },
  watch: {
    '$props': {
      handler: function handler() {
        this.updateAnimation();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.updateAnimation();
  },
  methods: {
    updateAnimation: function updateAnimation() {
      this.updateAnimationName();
      utils.appendKeyframes(this.currentAnimationName, this.generateKeyframes());
    },
    updateAnimationName: function updateAnimationName() {
      this.currentAnimationName = "".concat(this.animationBaseName, "-").concat(Date.now());
    },
    generateKeyframes: function generateKeyframes() {
      return "\n        0% {\n          border-width: ".concat(this.size / 7, "px;\n        }\n        25% {\n          border-width: ").concat(this.size / 23.33, "px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ").concat(this.size / 7, "px;\n        }\n        75% {\n          border-width: ").concat(this.size / 23.33, "px;\n         }\n        100% {\n         border-width: ").concat(this.size / 7, "px;\n        }");
    }
  }
});
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SpringSpinnervue_type_script_lang_js_ = (SpringSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=style&index=0&id=10ac9285&scoped=true&lang=css&
var SpringSpinnervue_type_style_index_0_id_10ac9285_scoped_true_lang_css_ = __webpack_require__("9ec8");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/SpringSpinner.vue






/* normalize component */

var SpringSpinner_component = normalizeComponent(
  lib_SpringSpinnervue_type_script_lang_js_,
  SpringSpinnervue_type_template_id_10ac9285_scoped_true_render,
  SpringSpinnervue_type_template_id_10ac9285_scoped_true_staticRenderFns,
  false,
  null,
  "10ac9285",
  null
  
)

SpringSpinner_component.options.__file = "SpringSpinner.vue"
/* harmony default export */ var SpringSpinner = (SpringSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=template&id=0458ce94&scoped=true&
var LoopingRhombusesSpinnervue_type_template_id_0458ce94_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"looping-rhombuses-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{staticClass:"rhombus",style:(rs),attrs:{"ikey":index}})}))}
var LoopingRhombusesSpinnervue_type_template_id_0458ce94_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=template&id=0458ce94&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=style&index=0&id=0458ce94&scoped=true&lang=css&
var LoopingRhombusesSpinnervue_type_style_index_0_id_0458ce94_scoped_true_lang_css_ = __webpack_require__("25f1");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue






/* normalize component */

var LoopingRhombusesSpinner_component = normalizeComponent(
  lib_LoopingRhombusesSpinnervue_type_script_lang_js_,
  LoopingRhombusesSpinnervue_type_template_id_0458ce94_scoped_true_render,
  LoopingRhombusesSpinnervue_type_template_id_0458ce94_scoped_true_staticRenderFns,
  false,
  null,
  "0458ce94",
  null
  
)

LoopingRhombusesSpinner_component.options.__file = "LoopingRhombusesSpinner.vue"
/* harmony default export */ var LoopingRhombusesSpinner = (LoopingRhombusesSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=template&id=31ad46aa&scoped=true&
var HalfCircleSpinnervue_type_template_id_31ad46aa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"half-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle-1",style:(_vm.circle1Style)}),_c('div',{staticClass:"circle circle-2",style:(_vm.circle2Style)})])}
var HalfCircleSpinnervue_type_template_id_31ad46aa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=template&id=31ad46aa&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=style&index=0&id=31ad46aa&scoped=true&lang=css&
var HalfCircleSpinnervue_type_style_index_0_id_31ad46aa_scoped_true_lang_css_ = __webpack_require__("f084");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue






/* normalize component */

var HalfCircleSpinner_component = normalizeComponent(
  lib_HalfCircleSpinnervue_type_script_lang_js_,
  HalfCircleSpinnervue_type_template_id_31ad46aa_scoped_true_render,
  HalfCircleSpinnervue_type_template_id_31ad46aa_scoped_true_staticRenderFns,
  false,
  null,
  "31ad46aa",
  null
  
)

HalfCircleSpinner_component.options.__file = "HalfCircleSpinner.vue"
/* harmony default export */ var HalfCircleSpinner = (HalfCircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2867f158-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=template&id=59f49670&scoped=true&
var AtomSpinnervue_type_template_id_59f49670_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"atom-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner"},[_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-circle",style:(_vm.circleStyle)},[_vm._v("\n      ●\n    ")])])])}
var AtomSpinnervue_type_template_id_59f49670_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=template&id=59f49670&scoped=true&

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
      default: 'red'
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
// EXTERNAL MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=style&index=0&id=59f49670&scoped=true&lang=css&
var AtomSpinnervue_type_style_index_0_id_59f49670_scoped_true_lang_css_ = __webpack_require__("01bf");

// CONCATENATED MODULE: ./node_modules/epic-spinners/src/components/lib/AtomSpinner.vue






/* normalize component */

var AtomSpinner_component = normalizeComponent(
  lib_AtomSpinnervue_type_script_lang_js_,
  AtomSpinnervue_type_template_id_59f49670_scoped_true_render,
  AtomSpinnervue_type_template_id_59f49670_scoped_true_staticRenderFns,
  false,
  null,
  "59f49670",
  null
  
)

AtomSpinner_component.options.__file = "AtomSpinner.vue"
/* harmony default export */ var AtomSpinner = (AtomSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/epic-spinners/src/lib.js























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

/* harmony default export */ var Lingalleryvue_type_script_lang_js_ = ({
  name: 'Lingallery',
  data: function data() {
    return {
      currentImage: null,
      currentIndex: 0,
      currentCaption: '',
      windowWidth: 0,
      isLoading: true
    };
  },
  props: {
    items: {
      default: [{
        src: 'https://picsum.photos/600/400/?image=0',
        thumbnail: 'https://picsum.photos/64/64/?image=0',
        caption: ''
      }]
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
      var mainImageStyle = '';

      if (this.mobileHeight !== 0 && this.windowWidth < this.mobileHeightBreakpoint) {
        mainImageStyle += 'width:100%;height:' + this.mobileHeight + 'px;object-fit:cover;';
      }

      if (this.$refs.mainImage && this.$refs.mainImage.classList.contains('loading')) {
        if (this.mobileHeight !== 0) {
          mainImageStyle += 'min-height:' + this.mobileHeight + 'px;';
        } else mainImageStyle += 'min-height:200px;';
      }

      return mainImageStyle;
    }
  },
  asyncComputed: {
    figureStyle: function figureStyle() {
      var _this = this;

      if (this.currentImage) {
        return this.getImageSize(this.currentImage).then(function (result) {
          var heightValue = 'height:auto'; // Hide Loader

          _this.handleLoader(false);

          if (result.widthValue < result.heightValue && _this.mobileHeight === 0) {
            heightValue = 'height:' + _this.height + 'px';
          }

          return _this.windowWidth > _this.width && !_this.responsive ? 'width:' + _this.width + 'px;height:' + _this.height + 'px' : 'width:100%;' + heightValue;
        }).catch(function (err) {
          return console.log(err);
        });
      } else return this.windowWidth > this.width && !this.responsive ? 'width:' + this.width + 'px;height:' + this.height + 'px' : 'width:100%;height:auto';
    }
  },
  methods: {
    handleImageClick: function handleImageClick(index) {
      if (!this.disableImageClick) {
        this.currentIndex = index;
        this.pickImage(index);
      }
    },
    getImageSize: function () {
      var _getImageSize = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(src) {
        var image;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getImage(src);

              case 2:
                image = _context.sent;
                return _context.abrupt("return", {
                  widthValue: image.naturalWidth,
                  heightValue: image.naturalHeight
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getImageSize(_x) {
        return _getImageSize.apply(this, arguments);
      };
    }(),
    getImage: function () {
      var _getImage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(src) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var img = new Image();

                  img.onload = function () {
                    return resolve(img);
                  };

                  img.onerror = reject;
                  img.src = src;
                }).catch(function () {
                  console.log('error');
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getImage(_x2) {
        return _getImage.apply(this, arguments);
      };
    }(),
    handleLoader: function handleLoader(isLoading) {
      this.isLoading = isLoading;
    },
    pickImage: function pickImage(index) {
      // Show Loader
      this.handleLoader(true);
      this.currentImage = this.items[index].src;
      this.currentCaption = this.items[index].caption;
    },
    thumbnailStyle: function thumbnailStyle(index) {
      var color = this.currentIndex === index ? this.accentColor : this.baseColor;
      return 'border-color:' + color;
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
  mounted: function mounted() {
    this.currentImage = this.items[this.startImage].src;
    this.currentCaption = this.items[this.startImage].caption;
    this.currentIndex = this.startImage;
    this.windowWidth = window.innerWidth;
  }
});
// CONCATENATED MODULE: ./src/components/Lingallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Lingalleryvue_type_script_lang_js_ = (Lingalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Lingallery.vue?vue&type=style&index=0&id=446ecce2&scoped=true&lang=css&
var Lingalleryvue_type_style_index_0_id_446ecce2_scoped_true_lang_css_ = __webpack_require__("168b");

// CONCATENATED MODULE: ./src/components/Lingallery.vue






/* normalize component */

var Lingallery_component = normalizeComponent(
  components_Lingalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "446ecce2",
  null
  
)

Lingallery_component.options.__file = "Lingallery.vue"
/* harmony default export */ var Lingallery = (Lingallery_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-async-computed/dist/vue-async-computed.js
var vue_async_computed = __webpack_require__("9437");
var vue_async_computed_default = /*#__PURE__*/__webpack_require__.n(vue_async_computed);

// EXTERNAL MODULE: ./node_modules/vue2-touch-events/index.js
var vue2_touch_events = __webpack_require__("0086");
var vue2_touch_events_default = /*#__PURE__*/__webpack_require__.n(vue2_touch_events);

// CONCATENATED MODULE: ./src/components/index.js







external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_async_computed_default.a);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue2_touch_events_default.a);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component('Lingallery', 'Lingallery');
/* harmony default export */ var components = (Lingallery);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "fe73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_325a6afe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c660");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_325a6afe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_325a6afe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_325a6afe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
});
//# sourceMappingURL=lingallery.umd.js.map