/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entrypoint.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.5' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./src/js/Utility.js":
/*!***************************!*\
  !*** ./src/js/Utility.js ***!
  \***************************/
/*! exports provided: formatName, validateString, validateNumRange, isFunction, CalculatePar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatName\", function() { return formatName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateString\", function() { return validateString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateNumRange\", function() { return validateNumRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CalculatePar\", function() { return CalculatePar; });\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/*\r\n    Utility.js\r\n    Just a file with useful utility methods that were generic\r\n    enough to be extracted out of any one component.\r\n    \r\n    There should only be NAMED exports in this file.\r\n*/\n\n/*\r\n    Given a FirstName and LastName, return a formatted string\r\n    Ex:\r\n        formatName(\"Nathan\", \"Lough\") === \"Lough, Nathan\"\r\n*/\nvar formatName = function formatName(fn, ln) {\n  return \"\".concat(ln, \", \").concat(fn);\n};\n/*\r\n    Check if a string is a string and of a minimum length (min)\r\n    Returns true if the string is valid\r\n*/\n\nvar validateString = function validateString(str, min) {\n  return typeof str === \"string\" && str.trim().length >= min;\n};\n/*\r\n    Check if a number can be coerced into a number and if so, is between\r\n    a specified range\r\n*/\n\nvar validateNumRange = function validateNumRange(num) {\n  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;\n\n  try {\n    var numAsNum = Number(num);\n    return typeof numAsNum === \"number\" && numAsNum >= min && numAsNum <= max;\n  } catch (ex) {\n    return false;\n  }\n};\n/*\r\n    Checks if a given argument is a function\r\n    (This is how lodash checks)\r\n*/\n\nvar isFunction = function isFunction(fn) {\n  return !!(fn && fn.constructor && fn.call && fn.apply);\n};\n/*\r\n    Given the player's score and the par for the round,\r\n    return a string representing their \"Total\"\r\n    EX:\r\n        \"-8\"    \"0\"   \"+13\"\r\n*/\n\nvar CalculatePar = function CalculatePar(score, par) {\n  var total = score - par;\n  var sign = '';\n\n  if (total < 0) {\n    sign = '-';\n  } else if (total > 0) {\n    sign = '+';\n  }\n\n  return \"\".concat(sign).concat(Math.abs(total));\n};\n\n//# sourceURL=webpack:///./src/js/Utility.js?");

/***/ }),

/***/ "./src/js/components/App.jsx":
/*!***********************************!*\
  !*** ./src/js/components/App.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Leaderboard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leaderboard.jsx */ \"./src/js/components/Leaderboard.jsx\");\n/* harmony import */ var _BackgroundImage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundImage.jsx */ \"./src/js/components/BackgroundImage.jsx\");\n\n\n\nvar App = function App() {\n  return React.createElement(\"div\", {\n    className: \"app\"\n  }, React.createElement(_BackgroundImage_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    url: \"/images/golf_bg_1.jpg\",\n    faded: true,\n    full: true\n  }), React.createElement(_Leaderboard_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/App.jsx?");

/***/ }),

/***/ "./src/js/components/BackgroundImage.jsx":
/*!***********************************************!*\
  !*** ./src/js/components/BackgroundImage.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {var BackgroundImage = function BackgroundImage(_ref) {\n  var url = _ref.url,\n      _ref$faded = _ref.faded,\n      faded = _ref$faded === void 0 ? false : _ref$faded,\n      _ref$full = _ref.full,\n      full = _ref$full === void 0 ? false : _ref$full;\n  // Which url for the background image\n  var styles = {\n    \"backgroundImage\": \"url('\".concat(url, \"')\")\n  }; // Which css classes should be applied\n\n  var classes = [\"bg-img\"]; // Should the bg image have an opacity\n\n  if (faded) {\n    classes.push(\"bg-img--faded\");\n  } // Should the bg image fill it's parent container\n\n\n  if (full) {\n    classes.push(\"bg-img--full\");\n  }\n\n  return React.createElement(\"div\", {\n    className: classes.join(' '),\n    style: styles\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundImage);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/BackgroundImage.jsx?");

/***/ }),

/***/ "./src/js/components/FormAddPlayer.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/FormAddPlayer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInputState.js */ \"./src/js/hooks/useInputState.js\");\n/* harmony import */ var _InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputGroup.jsx */ \"./src/js/components/InputGroup.jsx\");\n/* harmony import */ var _ValidationMessage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValidationMessage.jsx */ \"./src/js/components/ValidationMessage.jsx\");\n/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utility.js */ \"./src/js/Utility.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar FormAddPlayer = function FormAddPlayer(_ref) {\n  var onSubmit = _ref.onSubmit;\n\n  // The data fields behind each form field\n  var _useInputState = Object(_hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\"),\n      _useInputState2 = _slicedToArray(_useInputState, 3),\n      first_name = _useInputState2[0],\n      setFN = _useInputState2[1],\n      setFNEvent = _useInputState2[2];\n\n  var _useInputState3 = Object(_hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\"),\n      _useInputState4 = _slicedToArray(_useInputState3, 3),\n      last_name = _useInputState4[0],\n      setLN = _useInputState4[1],\n      setLNEvent = _useInputState4[2];\n\n  var _useInputState5 = Object(_hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(0),\n      _useInputState6 = _slicedToArray(_useInputState5, 3),\n      score = _useInputState6[0],\n      setScore = _useInputState6[1],\n      setScoreEvent = _useInputState6[2];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      submitAttempted = _useState2[0],\n      setSubmitAttempted = _useState2[1]; // Is each form field currently valid?\n\n\n  var first_name_isValid = Object(_Utility_js__WEBPACK_IMPORTED_MODULE_7__[\"validateString\"])(first_name, 2);\n  var last_name_isValid = Object(_Utility_js__WEBPACK_IMPORTED_MODULE_7__[\"validateString\"])(last_name, 2);\n  var score_isValid = Object(_Utility_js__WEBPACK_IMPORTED_MODULE_7__[\"validateNumRange\"])(score, 0, 100); // Which classes should appear on these inputs\n\n  var input_classes = [\"form__input\", \"form__input--rounded\", \"form__input--borderless\"]; // When the user attempts to submit the entire form...\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault(); // Only begin showing error messages, if they've tried to submit at least once\n\n    setSubmitAttempted(true); // ...First, ensure the form fields are all valid\n\n    if (first_name_isValid && last_name_isValid && score_isValid) {\n      if (Object(_Utility_js__WEBPACK_IMPORTED_MODULE_7__[\"isFunction\"])(onSubmit)) {\n        onSubmit({\n          first_name: first_name,\n          last_name: last_name,\n          score: score\n        });\n        setFN(\"\");\n        setLN(\"\");\n        setScore(0);\n        setSubmitAttempted(false);\n      }\n    }\n  };\n\n  return React.createElement(\"form\", {\n    className: \"form form--add-player\"\n  }, React.createElement(\"button\", {\n    className: \"button button--stripey\",\n    type: \"submit\",\n    onClick: handleSubmit\n  }, \"Add Player\"), React.createElement(_InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, React.createElement(\"input\", {\n    className: input_classes.join(' '),\n    type: \"text\",\n    name: \"first_name\",\n    value: first_name,\n    onChange: setFNEvent,\n    placeholder: \"First Name\",\n    required: true\n  }), React.createElement(_ValidationMessage_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    showing: submitAttempted && !first_name_isValid\n  }, \"Invalid First Name (2+ Chars)\")), React.createElement(_InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, React.createElement(\"input\", {\n    className: input_classes.join(' '),\n    type: \"text\",\n    name: \"last_name\",\n    value: last_name,\n    onChange: setLNEvent,\n    placeholder: \"Last Name\",\n    required: true\n  }), React.createElement(_ValidationMessage_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    showing: submitAttempted && !last_name_isValid\n  }, \"Invalid Last Name (2+ Chars)\")), React.createElement(_InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, React.createElement(\"input\", {\n    className: input_classes.join(' '),\n    type: \"number\",\n    name: \"score\",\n    min: \"0\",\n    max: \"100\",\n    value: score,\n    onChange: setScoreEvent,\n    placeholder: \"Score\"\n  }), React.createElement(_ValidationMessage_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    showing: submitAttempted && !score_isValid\n  }, \"Invalid Score [0, 100]\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormAddPlayer);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/FormAddPlayer.jsx?");

/***/ }),

/***/ "./src/js/components/InputGroup.jsx":
/*!******************************************!*\
  !*** ./src/js/components/InputGroup.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {var InputGroup = function InputGroup(props) {\n  return React.createElement(\"div\", {\n    className: \"form__group\"\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputGroup);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/InputGroup.jsx?");

/***/ }),

/***/ "./src/js/components/Leaderboard.jsx":
/*!*******************************************!*\
  !*** ./src/js/components/Leaderboard.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LeaderboardSidebar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeaderboardSidebar.jsx */ \"./src/js/components/LeaderboardSidebar.jsx\");\n/* harmony import */ var _LeaderboardContent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeaderboardContent.jsx */ \"./src/js/components/LeaderboardContent.jsx\");\n/* harmony import */ var _data_players_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/players.json */ \"./src/js/data/players.json\");\nvar _data_players_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/players.json */ \"./src/js/data/players.json\", 1);\n/* harmony import */ var _hooks_usePlayersState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/usePlayersState.js */ \"./src/js/hooks/usePlayersState.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_parContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/parContext.js */ \"./src/js/context/parContext.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar LeaderBoard = function LeaderBoard() {\n  var _usePlayersState = Object(_hooks_usePlayersState_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_data_players_json__WEBPACK_IMPORTED_MODULE_5__),\n      _usePlayersState2 = _slicedToArray(_usePlayersState, 5),\n      players = _usePlayersState2[0],\n      addPlayer = _usePlayersState2[1],\n      deletePlayer = _usePlayersState2[2],\n      editPlayer = _usePlayersState2[3],\n      sort = _usePlayersState2[4]; // Do an initial sort of the players list\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useEffect\"])(function () {\n    sort();\n  }, []); // PGA - Obviously I didn't need to use context for this\n  // I just wanted to demonstrate that I could for this interview setting\n\n  return React.createElement(\"div\", {\n    className: \"leaderboard\"\n  }, React.createElement(_LeaderboardSidebar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    addPlayer: addPlayer\n  }), React.createElement(_context_parContext_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Provider, {\n    value: 70\n  }, React.createElement(_LeaderboardContent_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    players: players,\n    addPlayer: addPlayer,\n    editPlayer: editPlayer,\n    deletePlayer: deletePlayer\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeaderBoard);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/Leaderboard.jsx?");

/***/ }),

/***/ "./src/js/components/LeaderboardContent.jsx":
/*!**************************************************!*\
  !*** ./src/js/components/LeaderboardContent.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _PlayerList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerList.jsx */ \"./src/js/components/PlayerList.jsx\");\n/* harmony import */ var _PlayerListColumns_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerListColumns.jsx */ \"./src/js/components/PlayerListColumns.jsx\");\n\n\n/*\r\n\r\n*/\n\nvar LeaderBoardContent = function LeaderBoardContent(props) {\n  return React.createElement(\"div\", {\n    className: \"leaderboard-content\"\n  }, React.createElement(_PlayerListColumns_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    titles: [\"Score\", \"Total\", \"Name\", \"\"]\n  }), React.createElement(_PlayerList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    players: props.players,\n    editPlayer: props.editPlayer,\n    deletePlayer: props.deletePlayer\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeaderBoardContent);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/LeaderboardContent.jsx?");

/***/ }),

/***/ "./src/js/components/LeaderboardSidebar.jsx":
/*!**************************************************!*\
  !*** ./src/js/components/LeaderboardSidebar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _FormAddPlayer_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormAddPlayer.jsx */ \"./src/js/components/FormAddPlayer.jsx\");\n\n\nvar LeaderBoardSidebar = function LeaderBoardSidebar(props) {\n  return React.createElement(\"div\", {\n    className: \"leaderboard-sidebar\"\n  }, React.createElement(\"h1\", {\n    className: \"leaderboard__title\"\n  }, React.createElement(\"span\", null, \"PGA\"), React.createElement(\"br\", null), \"Leaderboard\"), React.createElement(\"img\", {\n    className: \"leaderboard__logo\",\n    src: \"/images/pga_logo.gif\"\n  }), React.createElement(_FormAddPlayer_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    onSubmit: props.addPlayer\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeaderBoardSidebar);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/LeaderboardSidebar.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerList.jsx":
/*!******************************************!*\
  !*** ./src/js/components/PlayerList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _PlayerListColumns_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerListColumns.jsx */ \"./src/js/components/PlayerListColumns.jsx\");\n/* harmony import */ var _PlayerListEmpty_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerListEmpty.jsx */ \"./src/js/components/PlayerListEmpty.jsx\");\n/* harmony import */ var _PlayerRow_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerRow.jsx */ \"./src/js/components/PlayerRow.jsx\");\n\n\n\n/*\r\n\r\n*/\n\nvar PlayerList = function PlayerList(_ref) {\n  var players = _ref.players,\n      editPlayer = _ref.editPlayer,\n      deletePlayer = _ref.deletePlayer;\n  // If there are no players to show, then fallback to this Empty message\n  var rows = React.createElement(_PlayerListEmpty_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, \"No Players to show. Add some!\"); // Create a \"Tabular\" row for each player\n\n  if (players.length > 0) {\n    rows = players.map(function (p) {\n      return React.createElement(_PlayerRow_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        key: p.id,\n        player: p,\n        editPlayer: editPlayer,\n        deletePlayer: deletePlayer\n      });\n    });\n  }\n\n  return React.createElement(\"div\", {\n    className: \"player-list\"\n  }, rows);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerList);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerList.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerListCell.jsx":
/*!**********************************************!*\
  !*** ./src/js/components/PlayerListCell.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/*\r\n\r\n*/\nvar PlayerListCell = function PlayerListCell(props) {\n  return React.createElement(\"div\", {\n    className: \"player-row__cell\"\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerListCell);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerListCell.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerListColumns.jsx":
/*!*************************************************!*\
  !*** ./src/js/components/PlayerListColumns.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerListCell.jsx */ \"./src/js/components/PlayerListCell.jsx\");\n\n/*\r\n\r\n*/\n\nvar PlayerListColumns = function PlayerListColumns(_ref) {\n  var _ref$titles = _ref.titles,\n      titles = _ref$titles === void 0 ? [] : _ref$titles;\n  return React.createElement(\"div\", {\n    className: \"player-row player-row--head\"\n  }, titles.map(function (el, idx) {\n    return React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: idx\n    }, el);\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerListColumns);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerListColumns.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerListEmpty.jsx":
/*!***********************************************!*\
  !*** ./src/js/components/PlayerListEmpty.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/*\r\n\r\n*/\nvar PlayerListEmpty = function PlayerListEmpty(props) {\n  return React.createElement(\"div\", {\n    className: \"player-row player-row--empty\"\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerListEmpty);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerListEmpty.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerRow.jsx":
/*!*****************************************!*\
  !*** ./src/js/components/PlayerRow.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PlayerRowPres_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerRowPres.jsx */ \"./src/js/components/PlayerRowPres.jsx\");\n/* harmony import */ var _PlayerRowEdit_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerRowEdit.jsx */ \"./src/js/components/PlayerRowEdit.jsx\");\n/* harmony import */ var _hooks_useToggleState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useToggleState.js */ \"./src/js/hooks/useToggleState.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n/*\r\n\r\n*/\n\nvar PlayerRow = function PlayerRow(_ref) {\n  var player = _ref.player,\n      editPlayer = _ref.editPlayer,\n      deletePlayer = _ref.deletePlayer;\n\n  // Indicates whether or not this row is in an \"editing\" state\n  // An \"editing\" state is one in which the cells have inputs, rather\n  // than presentational elements\n  var _useToggleState = Object(_hooks_useToggleState_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(false),\n      _useToggleState2 = _slicedToArray(_useToggleState, 2),\n      isEditing = _useToggleState2[0],\n      toggleEditing = _useToggleState2[1];\n\n  var body = null;\n\n  if (isEditing) {\n    body = React.createElement(_PlayerRowEdit_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      player: player,\n      toggleEditing: toggleEditing,\n      editPlayer: editPlayer\n    });\n  } else {\n    body = React.createElement(_PlayerRowPres_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      player: player,\n      toggleEditing: toggleEditing,\n      deletePlayer: deletePlayer\n    });\n  }\n\n  return body;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerRow);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerRow.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerRowEdit.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/PlayerRowEdit.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerListCell.jsx */ \"./src/js/components/PlayerListCell.jsx\");\n/* harmony import */ var _hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInputState.js */ \"./src/js/hooks/useInputState.js\");\n/* harmony import */ var _InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputGroup.jsx */ \"./src/js/components/InputGroup.jsx\");\n/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utility.js */ \"./src/js/Utility.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar PlayerRowEdit = function PlayerRowEdit(_ref) {\n  var player = _ref.player,\n      toggleEditing = _ref.toggleEditing,\n      editPlayer = _ref.editPlayer;\n\n  // The data fields behind each form field\n  var _useInputState = Object(_hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(player.first_name),\n      _useInputState2 = _slicedToArray(_useInputState, 3),\n      first_name = _useInputState2[0],\n      setFN = _useInputState2[1],\n      setFNEvent = _useInputState2[2];\n\n  var _useInputState3 = Object(_hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(player.last_name),\n      _useInputState4 = _slicedToArray(_useInputState3, 3),\n      last_name = _useInputState4[0],\n      setLN = _useInputState4[1],\n      setLNEvent = _useInputState4[2];\n\n  var _useInputState5 = Object(_hooks_useInputState_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(player.score),\n      _useInputState6 = _slicedToArray(_useInputState5, 3),\n      score = _useInputState6[0],\n      setScore = _useInputState6[1],\n      setScoreEvent = _useInputState6[2]; // Is each form field currently valid?\n\n\n  var first_name_isValid = Object(_Utility_js__WEBPACK_IMPORTED_MODULE_6__[\"validateString\"])(first_name, 2);\n  var last_name_isValid = Object(_Utility_js__WEBPACK_IMPORTED_MODULE_6__[\"validateString\"])(last_name, 2);\n  var score_isValid = Object(_Utility_js__WEBPACK_IMPORTED_MODULE_6__[\"validateNumRange\"])(score, 0, 100); //\n\n  var first_name_classes = first_name_isValid ? [\"form__input\"] : [\"form__input\", \"form__input--invalid\"];\n  var last_name_classes = last_name_isValid ? [\"form__input\"] : [\"form__input\", \"form__input--invalid\"];\n  var score_classes = score_isValid ? [\"form__input\"] : [\"form__input\", \"form__input--invalid\"]; // When the user attempts to save the changes...\n\n  var attemptToSave = function attemptToSave() {\n    if (first_name_isValid && last_name_isValid && score_isValid) {\n      editPlayer({\n        first_name: first_name,\n        last_name: last_name,\n        score: score,\n        id: player.id\n      });\n      toggleEditing();\n    }\n  };\n\n  return React.createElement(\"div\", {\n    className: \"player-row player-row--body player-row--editing\"\n  }, React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, React.createElement(_InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, React.createElement(\"label\", {\n    htmlFor: \"row__score\"\n  }, \"Score\"), React.createElement(\"input\", {\n    id: \"row__score\",\n    className: score_classes.join(' '),\n    type: \"number\",\n    name: \"score\",\n    min: \"0\",\n    max: \"100\",\n    value: score,\n    onChange: setScoreEvent,\n    placeholder: \"Score\"\n  }))), React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, React.createElement(\"div\", {\n    className: \"form__groups--flex\"\n  }, React.createElement(_InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, React.createElement(\"label\", {\n    htmlFor: \"row__first_name\"\n  }, \"First Name\"), React.createElement(\"input\", {\n    id: \"row__first_name\",\n    className: first_name_classes.join(' '),\n    type: \"text\",\n    value: first_name,\n    onChange: setFNEvent,\n    placeholder: \"First Name\",\n    required: true\n  })), React.createElement(_InputGroup_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, React.createElement(\"label\", {\n    htmlFor: \"row__last_name\"\n  }, \"Last Name\"), React.createElement(\"input\", {\n    id: \"row__last_name\",\n    className: last_name_classes.join(' '),\n    type: \"text\",\n    value: last_name,\n    onChange: setLNEvent,\n    placeholder: \"Last Name\",\n    required: true\n  })))), React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, React.createElement(\"i\", {\n    className: \"fa fa-check-circle pointer txt-green anim-bounce-up\",\n    onClick: attemptToSave\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerRowEdit);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerRowEdit.jsx?");

/***/ }),

/***/ "./src/js/components/PlayerRowPres.jsx":
/*!*********************************************!*\
  !*** ./src/js/components/PlayerRowPres.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerListCell.jsx */ \"./src/js/components/PlayerListCell.jsx\");\n/* harmony import */ var _ScoreCircle_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreCircle.jsx */ \"./src/js/components/ScoreCircle.jsx\");\n/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility.js */ \"./src/js/Utility.js\");\n/* harmony import */ var _context_parContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/parContext.js */ \"./src/js/context/parContext.js\");\n\n\n\n\n\nvar PlayerRowPres = function PlayerRowPres(_ref) {\n  var player = _ref.player,\n      toggleEditing = _ref.toggleEditing,\n      deletePlayer = _ref.deletePlayer,\n      context = _ref.context;\n\n  // Invoked when the user clicks the 'Delete' icon for a given 'Player'\n  var handleDelete = function handleDelete() {\n    return deletePlayer(player.id);\n  };\n\n  return React.createElement(\"div\", {\n    className: \"player-row player-row--body\"\n  }, React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, React.createElement(_ScoreCircle_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    score: player.score\n  })), React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, React.createElement(_context_parContext_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Consumer, null, function (par) {\n    return Object(_Utility_js__WEBPACK_IMPORTED_MODULE_2__[\"CalculatePar\"])(player.score, par);\n  })), React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, Object(_Utility_js__WEBPACK_IMPORTED_MODULE_2__[\"formatName\"])(player.first_name, player.last_name)), React.createElement(_PlayerListCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, React.createElement(\"i\", {\n    className: \"fa fa-edit pointer txt-orange anim-bounce-up\",\n    onClick: toggleEditing\n  }), React.createElement(\"i\", {\n    className: \"fa fa-trash pointer txt-red anim-bounce-down\",\n    onClick: handleDelete\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerRowPres);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/PlayerRowPres.jsx?");

/***/ }),

/***/ "./src/js/components/ScoreCircle.jsx":
/*!*******************************************!*\
  !*** ./src/js/components/ScoreCircle.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {var getScoreColor = function getScoreColor(score) {\n  var colors = ['green', 'yellow', 'orange', 'red'];\n\n  if (score < 60) {\n    return colors[0];\n  } else if (score < 70) {\n    return colors[1];\n  } else if (score < 80) {\n    return colors[2];\n  }\n\n  return colors[3];\n};\n\nvar ScoreCircle = function ScoreCircle(_ref) {\n  var _ref$score = _ref.score,\n      score = _ref$score === void 0 ? 0 : _ref$score;\n  var classes = ['score-circle', \"score-circle--\".concat(getScoreColor(score))];\n  return React.createElement(\"div\", {\n    className: classes.join(' ')\n  }, score);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreCircle);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/ScoreCircle.jsx?");

/***/ }),

/***/ "./src/js/components/ValidationMessage.jsx":
/*!*************************************************!*\
  !*** ./src/js/components/ValidationMessage.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {var ValidationMessage = function ValidationMessage(props) {\n  return props.showing ? React.createElement(\"span\", {\n    className: \"form__validationmsg\"\n  }, props.children) : null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValidationMessage);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/components/ValidationMessage.jsx?");

/***/ }),

/***/ "./src/js/context/parContext.js":
/*!**************************************!*\
  !*** ./src/js/context/parContext.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/*\r\n    This Context will provide the application's current par\r\n    value to any Consumer.\r\n*/\n// Default the par value to 70\nvar ParContext = React.createContext(70);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParContext);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/context/parContext.js?");

/***/ }),

/***/ "./src/js/data/players.json":
/*!**********************************!*\
  !*** ./src/js/data/players.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

eval("module.exports = [{\"id\":\"aaaabbbbcccc\",\"first_name\":\"Buster\",\"last_name\":\"Keaton\",\"score\":96},{\"id\":\"bbbbccccdddd\",\"first_name\":\"John\",\"last_name\":\"Hancock\",\"score\":87},{\"id\":\"ccccddddeeee\",\"first_name\":\"Sean\",\"last_name\":\"Plott\",\"score\":56},{\"id\":\"ddddeeeeffff\",\"first_name\":\"Happy\",\"last_name\":\"Gilmore\",\"score\":66},{\"id\":\"eeeeffffgggg\",\"first_name\":\"Shooter\",\"last_name\":\"McGavin\",\"score\":66},{\"id\":\"abcdefg123\",\"first_name\":\"Chubbs\",\"last_name\":\"Peterson\",\"score\":74},{\"id\":\"abcdefg456\",\"first_name\":\"Mr.\",\"last_name\":\"Larson\",\"score\":57},{\"id\":\"ffffgggghhhh\",\"first_name\":\"Don\",\"last_name\":\"Quixote\",\"score\":58}];\n\n//# sourceURL=webpack:///./src/js/data/players.json?");

/***/ }),

/***/ "./src/js/entrypoint.js":
/*!******************************!*\
  !*** ./src/js/entrypoint.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./src/js/components/App.jsx\");\n\n\n\n/*\r\n    The webpack entrypoint to the entire React Application\r\n*/\n\ntry {\n  // Bootstrap the App component\n  // (This POC demo application only has one)\n  ReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('reactroot'));\n} catch (err) {\n  console.log(\"Entrypoint: Catch Error:\", err);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/js/entrypoint.js?");

/***/ }),

/***/ "./src/js/hooks/useInputState.js":
/*!***************************************!*\
  !*** ./src/js/hooks/useInputState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/*\r\n    State Manager for \r\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initialValue) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialValue),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1]; // Intended to be used directly within an onChange handler\n\n\n  var setValueByEvent = function setValueByEvent(e) {\n    setValue(e.target.value);\n  };\n\n  return [value, setValue, setValueByEvent];\n});\n\n//# sourceURL=webpack:///./src/js/hooks/useInputState.js?");

/***/ }),

/***/ "./src/js/hooks/usePlayersState.js":
/*!*****************************************!*\
  !*** ./src/js/hooks/usePlayersState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // This will be used to generate uuid strings (keys)\n\nvar uuidv1 = __webpack_require__(/*! uuid/v1 */ \"./node_modules/uuid/v1.js\");\n/*\r\n    State Manager for managing a list of \"Players\" (Player Objects)\r\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initialValue) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__[\"useState\"])(initialValue),\n      _useState2 = _slicedToArray(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1]; // Update an existing player\n\n\n  var editItem = function editItem(obj) {\n    // Shallow copy the player\n    var updatedPlayer = _objectSpread({}, obj); // Filter out existing player - and make a new array in the process\n\n\n    var newPlayers = values.filter(function (el) {\n      return el.id !== obj.id;\n    });\n    newPlayers.push(updatedPlayer);\n    var sorted = newPlayers.sort(comparator);\n    setValues(sorted);\n  }; // Add new player - Generate unique .id\n\n\n  var addItem = function addItem(obj) {\n    var newPlayer = _objectSpread({}, obj, {\n      id: uuidv1()\n    });\n\n    var newPlayers = [].concat(_toConsumableArray(values), [newPlayer]);\n    var sorted = newPlayers.sort(comparator);\n    setValues(sorted);\n  }; // Delete existing player - Find/Delete by .id\n\n\n  var deleteItemById = function deleteItemById(id) {\n    setValues(values.filter(function (el) {\n      return el.id !== id;\n    }));\n  }; // Sorts player objects\n  // Sorts players from lowest score to highest (ascending order)\n  // If two players have the same score, then they are sorted by their\n  // last name, also in Ascending (a first, z last) (case-insensitive)\n\n\n  var comparator = function comparator(a, b) {\n    // If scores matches, check last_names\n    if (a.score == b.score) {\n      // Case Insensitive\n      var a_ln = a.last_name.toLowerCase();\n      var b_ln = b.last_name.toLowerCase();\n\n      if (a_ln === b_ln) {\n        return 0;\n      }\n\n      return a_ln < b_ln ? -1 : 1;\n    } // Compare scores\n\n\n    return a.score - b.score;\n  };\n\n  var sort = function sort() {\n    var sorted = values.sort(comparator);\n    setValues(_toConsumableArray(sorted));\n  };\n  /*\r\n      The Public Interface:\r\n      [0] = The list of players\r\n      [1] = A function to add a new player\r\n      [2] = A function to delete a player\r\n      [3] = A function to edit/update an existing player\r\n      [4] = A function to force the sorting of the players list\r\n  */\n\n\n  return [values, addItem, deleteItemById, editItem, sort];\n});\n\n//# sourceURL=webpack:///./src/js/hooks/usePlayersState.js?");

/***/ }),

/***/ "./src/js/hooks/useToggleState.js":
/*!****************************************!*\
  !*** ./src/js/hooks/useToggleState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/*\r\n    State Manager for toggling things on and off\r\n    (Should only hold booleans)\r\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (initialValue) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(!!initialValue),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1]; // Doesn't need input, because it simply toggles\n\n\n  var toggle = function toggle() {\n    setValue(!value);\n  };\n\n  return [value, toggle];\n});\n\n//# sourceURL=webpack:///./src/js/hooks/useToggleState.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

/******/ });