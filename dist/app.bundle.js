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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aftc-modules/aftc-modules.js":
/*!***************************************************!*\
  !*** ./node_modules/aftc-modules/aftc-modules.js ***!
  \***************************************************/
/*! exports provided: AnimationFrameStack, ArgsToObject, GetBrowser, GetBrowserX, GetBrowserY, IsInViewport, ArrayClear, ArrayContains, arrayEmpty, ArrayGetMax, ArrayGetMin, ArrayMax, ArrayMin, ArrayRemoveIndex, ArrayRemoveItem, ArrayShuffle, ArrayShuffle2, IsInArray, IsStringInArray, BoolToString, BoolToYesNo, DegToRad, HexToRgb, NumToHex, RadToDeg, RGBToHex, RGBToHex2, StringToBool, GetCookie, SetCookie, GetDaysBetween, GetMySQLDateTimeString, GetUKDate, GetUkDateFromDbDateTime, GetUkDateTimeFromDbDateTime, GetUSDate, appendTo, AttachDebug, DebugTo, log, logTo, GetIEVersion, GetOS, IsAndroid, IsChrome, IsEdge, IsFireFox, IsIE, IsIOS, IsMobile, IsOpera, IsSafari, GetElementPosition, IsDOM, IsElement, IsElement2, GetElementOffsetTop, HasClass, SetHTML, EventManager, onReady, WordLimiter, XHR, GetRandomBoolean, GetRandomFloat, GetRandomInt, GetRandomThatsNot, GetWeightedRandom, InertiaTo, IsEven, IsOdd, NormaliseRange, ParseArrayToFloat, ParseArrayToInt, RoundTo, FPSMonitor, GetGUID, GetUID, IsAlphaNumeric, IsArray, IsBool, IsBoolean, IsNumber, IsNumeric, CutStringTo, EscapeHTML, GetAnchor, GetCleanJSONString, GetFileExtension, GetFileExtension2, GetLastPartOfUrl, GetRandomString, GetStringBetween, getStringsBetween2, GetWordCount, InString, IsInString, LTrimBy, RemoveFileFromPath, RTrimBy, TrimStringBy, UcFirst, IsEmail */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameStack", function() { return AnimationFrameStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgsToObject", function() { return ArgsToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBrowser", function() { return GetBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBrowserX", function() { return GetBrowserX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBrowserY", function() { return GetBrowserY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInViewport", function() { return IsInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayClear", function() { return ArrayClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayContains", function() { return ArrayContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEmpty", function() { return arrayEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayGetMax", function() { return ArrayGetMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayGetMin", function() { return ArrayGetMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayMax", function() { return ArrayMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayMin", function() { return ArrayMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayRemoveIndex", function() { return ArrayRemoveIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayRemoveItem", function() { return ArrayRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayShuffle", function() { return ArrayShuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayShuffle2", function() { return ArrayShuffle2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInArray", function() { return IsInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringInArray", function() { return IsStringInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolToString", function() { return BoolToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolToYesNo", function() { return BoolToYesNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegToRad", function() { return DegToRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexToRgb", function() { return HexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumToHex", function() { return NumToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadToDeg", function() { return RadToDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHex", function() { return RGBToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHex2", function() { return RGBToHex2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToBool", function() { return StringToBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCookie", function() { return GetCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCookie", function() { return SetCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDaysBetween", function() { return GetDaysBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMySQLDateTimeString", function() { return GetMySQLDateTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUKDate", function() { return GetUKDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUkDateFromDbDateTime", function() { return GetUkDateFromDbDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUkDateTimeFromDbDateTime", function() { return GetUkDateTimeFromDbDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUSDate", function() { return GetUSDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachDebug", function() { return AttachDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugTo", function() { return DebugTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logTo", function() { return logTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetIEVersion", function() { return GetIEVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOS", function() { return GetOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAndroid", function() { return IsAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsChrome", function() { return IsChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEdge", function() { return IsEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFireFox", function() { return IsFireFox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIE", function() { return IsIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIOS", function() { return IsIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsMobile", function() { return IsMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsOpera", function() { return IsOpera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSafari", function() { return IsSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetElementPosition", function() { return GetElementPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDOM", function() { return IsDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsElement", function() { return IsElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsElement2", function() { return IsElement2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetElementOffsetTop", function() { return GetElementOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasClass", function() { return HasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetHTML", function() { return SetHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return EventManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReady", function() { return onReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordLimiter", function() { return WordLimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR", function() { return XHR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomBoolean", function() { return GetRandomBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomFloat", function() { return GetRandomFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomInt", function() { return GetRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomThatsNot", function() { return GetRandomThatsNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWeightedRandom", function() { return GetWeightedRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InertiaTo", function() { return InertiaTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEven", function() { return IsEven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsOdd", function() { return IsOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormaliseRange", function() { return NormaliseRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseArrayToFloat", function() { return ParseArrayToFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseArrayToInt", function() { return ParseArrayToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundTo", function() { return RoundTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPSMonitor", function() { return FPSMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGUID", function() { return GetGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUID", function() { return GetUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsAlphaNumeric", function() { return IsAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArray", function() { return IsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBool", function() { return IsBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBoolean", function() { return IsBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumber", function() { return IsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumeric", function() { return IsNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutStringTo", function() { return CutStringTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHTML", function() { return EscapeHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAnchor", function() { return GetAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCleanJSONString", function() { return GetCleanJSONString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileExtension", function() { return GetFileExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileExtension2", function() { return GetFileExtension2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLastPartOfUrl", function() { return GetLastPartOfUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomString", function() { return GetRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStringBetween", function() { return GetStringBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringsBetween2", function() { return getStringsBetween2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWordCount", function() { return GetWordCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InString", function() { return InString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInString", function() { return IsInString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTrimBy", function() { return LTrimBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFileFromPath", function() { return RemoveFileFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTrimBy", function() { return RTrimBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimStringBy", function() { return TrimStringBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcFirst", function() { return UcFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEmail", function() { return IsEmail; });
// aftc-modules v1.2.2
// Author: Darcey@aftc.io
function AnimationFrameStack() {
    var me = this;

    this.init = function(){
        if (!window){
            console.error("AnimationFrameStack(): ERROR - Unable to access window!");
        } else {
            if (!window.aftcAnimStack){
                window.aftcAnimStack = {
                    firstRun: true,
                    enabled: true,
                    stack: [],
                    uid: Math.floor(Math.random()*99999)
                }
            }
        }

        if (window.aftcAnimStack.firstRun){
            window.aftcAnimStack.firstRun = false;
            this.processFnStack();
        }
    }

    this.start = function(){
        window.aftcAnimStack.enabled = true;
        this.processFnStack();
    }

    this.stop = function(){
        window.aftcAnimStack.enabled = false;
    }

    this.dispose = function(){
        if (window.aftcAnimStack){
            window.aftcAnimStack.enabled = false;
            window.aftcAnimStack.stack = [];
            delete window.aftcAnimStack.stack;
        }
    }

    this.processFnStack = function(){
        if (!window.aftcAnimStack.enabled){ return; }

        for(let i=0; i < window.aftcAnimStack.stack.length; i++){
            window.aftcAnimStack.stack[i].fn();
        }

        window.requestAnimationFrame(me.processFnStack);
    }

    this.add = function(uid,fn){
        window.aftcAnimStack.stack.push({
            uid: uid,
            fn: fn
        });
    }

    this.remove = function(uid){
        for(let i=0; i < window.aftcAnimStack.stack.length; i++){
            if (window.aftcAnimStack.stack[i].uid === uid){
                // window.aftcAnimStack.stack = arrayRemoveItem(window.aftcAnimStack.stack,fn);
                window.aftcAnimStack.stack.splice(i,1);
            }
        }
    }

    this.init();
}

/**
 * @function: AnimationFrameStack()
 * @desc: Gives easy access to a single requestAnimationFrame loop which you can add functions to process in each loop, note the function stack is stored on global window scope
 * @method add: add a function to the stack to be executed on animationFrameLoop
 * @method remove: remove a function from the stack
 * @method start: start the requestAnimationFrame loop
 * @method stop: stop the requestAnimationFrame loop
 * @method dispose: dispose of all functions in the function stack
 * @link:
 */
function ArgsToObject(fArgs, obj, strict) {
    if (fArgs[0] && typeof (fArgs[0]) === "object") {
        let args = fArgs[0];

        if (strict === undefined) {
            strict = true;
        }
        if (args && typeof (args) === "object") {
            for (let key in args) {
                if (strict) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = args[key];
                    } else {
                        console.warn("argsToObject(): Argument [" + key + "] is not supported.");
                    }
                } else {
                    obj[key] = args[key];
                }
            }
        }

    }
};

/**
 * @function: argsToObject(fArgs, obj, strict)
 * @desc: Quick and easy args to object
 * @param args object: arguments (from the function structure, typically code will always be 'arguments'
 * @param obj object: object to parse into
 * @param strict boolean: console.warn any args that have been supplied that don't exist in args
 * @return: null
 * @alias: argsTo
 * @link: https://codepen.io/AllForTheCode/pen/PaqbKN
 */
function GetBrowser () {
    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE';
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return 'Opera';
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0];
}
function GetBrowserX(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    // let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return x;
}


function GetBrowserY(){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    // let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    return y;
}

function IsInViewport(el){
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );


    // let bounding = ele.getBoundingClientRect();
    // return (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}

function ArrayClear(arr) {
    while (arr.length > 0) { arr.pop(); }
}

function ArrayContains(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
function arrayEmpty(arr) {
    while (arr.length > 0) { arr.pop(); }
}
function ArrayGetMax(arr) {
    return Math.max.apply(Math, arr);
}


function ArrayGetMin(arr) {
    return Math.min.apply(Math, arr);
}
function ArrayMax(arr) {
    return Math.max.apply(Math, arr);
}
function ArrayMin(arr) {
    return Math.min.apply(Math, arr);
}
function ArrayRemoveIndex(arr,index){
    arr.splice(index,1);
}

function ArrayRemoveItem(arr, value) {
    return arr.filter(function(item){
        return item != value;
    });
}
function ArrayShuffle(arr) {
    let currentIndex = arr.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}

function ArrayShuffle2(a) {
    let x, t, r = new Uint32Array(1);
    for (let i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
function IsInArray(needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
function IsStringInArray(needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

function BoolToString (bool) {

    if (!bool || bool === undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "true";
    } else {
        return "false";
    }
}
function BoolToYesNo (b) {

    if (!b || b === undefined || typeof (b) != "boolean") {
        console.log("BoolToYesNo(str): Error - input is not a boolean!");
        return "error";
    }

    if (b) {
        return "yes";
    } else {
        return "no";
    }
}
function DegToRad(input) { return input * (Math.PI / 180); }
function HexToRgb (hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function NumToHex (num) {
    return num.toString(16);
}
function RadToDeg(input) { return input * (180 / Math.PI); }
function RGBToHex (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}

function RGBToHex2 (r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}
function StringToBool (str) {

    if (!str || str === undefined || typeof (str) != "string") {
        console.log("StringToBool(str): Error - input string is not valid!");
        return false;
    }

    switch (str.toLowerCase()) {
        case "y":
            return true;
            break;
        case "yes":
            return true;
            break;
        case "1":
            return true;
            break;
        case "true":
            return true;
            break;
        default:
            return false;
            break;
    }
}


function GetCookie(name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
function SetCookie(name, value) {
	//document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 GMT";
	//.cookie(name, value, {expires:365,path:'/cookies'});
	var expires = new Date();
	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}
function GetDaysBetween (startDateTime, endDateTime) {
    let msPerDay = 8.64e7;
    // Copy dates so don't mess them up
    let sd = new Date(startDateTime);
    let ed = new Date(endDateTime);
    // Set to noon - avoid DST errors
    sd.setHours(12, 0, 0);
    ed.setHours(12, 0, 0);
    // Round to remove daylight saving errors
    return Math.round((ed - sd) / msPerDay);
}

function GetMySQLDateTimeString() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (month.toString().length === 1) {
        month = '0' + month;
    }
    if (day.toString().length === 1) {
        day = '0' + day;
    }
    if (hour.toString().length === 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length === 1) {
        minute = '0' + minute;
    }
    if (second.toString().length === 1) {
        second = '0' + second;
    }
    let str = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return str;
}

function GetUKDate(dte){
    let output = dte.getDay() + "-" + (dte.getMonth()+1) + "-" + dte.getFullYear();
    return output;
}
function GetUkDateFromDbDateTime (input) {
    // "2016-04-08 21:11:59" to UK date
    if (input === "" || input === null) {
        return "no input";
    }
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    return UKDate;
}
function GetUkDateTimeFromDbDateTime  (input) {
    // "2016-04-08 21:11:59" to UK date time
    let DateTime = input.split(" ");
    let DateParts = DateTime[0].split("-");
    let TimeParts = DateTime[1].split(":");
    let UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
    let Time = TimeParts[0] + ":" + TimeParts[1];
    return (UKDate + " " + Time);
}
function GetUSDate(dte){
    let output = dte.getFullYear() + "-" + (dte.getMonth()+1) + "-" + (dte.getDay()+1)
    return output;
}
function appendTo(elementOrId,msg,endOfLine="<br>"){
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("AppendTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        ele.innerHTML = ele.innerHTML + msg + endOfLine;

    } else {
        console.error("AppendTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}


function AttachDebug(no,ele) {
    // return id's not the div create elements as these are type of object and not html element
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.position = "absolute";
    debugContainer.style.right = "5px";
    debugContainer.style.top = "5px";
    debugContainer.style.textAlgin = "right";


    window.aftcDebug = [];

    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random()*9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.style.minWidth = "50px";
        // div.style.height = "20px";
        div.style.marginBottom = "3px";
        div.style.border = "1px dashed #999999";
        div.style.padding = "1px 2px 2px 4px";
        div.style.background = "RGBA(255,255,255,0.92)";
        div.style.color = "#000000";
        div.classList.add("debug-row");
        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });

        window.aftcDebug.push(div);
        ids.push(id);
    }
    if (ele){
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }

    console.warn("AttachDebug(): Attached!");
    console.warn("AttachDebug(): Use DebugTo(index,string) to write directly to debug elements.");
    return ids;
}
function DebugTo(index,str){
    if (window.aftcDebug[index]){
        window.aftcDebug[index].innerHTML = str;
    }
}
function log(arg) {
    console.log(arg);
}

function logTo(elementOrId,msg,append=false,endOfLine=""){
    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        elementOrId = elementOrId.replace("#","");
        ele = document.getElementById(elementOrId);
        if (!ele){
            console.error("LogTo(): Unable to find ID '" + elementOrId + "' on the DOM!");
            return false;
        }
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        if (append === true){
            ele.innerHTML = ele.innerHTML + msg + endOfLine;
        } else {
            ele.innerHTML = msg + endOfLine;
        }

    } else {
        console.error("LogTo(): Unable to log to element or id provided!");
        console.error(elementOrId);
        return false;
    }
}


function GetIEVersion () {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}
function GetOS(testAgent) {
    let userAgent;

    if (!testAgent){
        userAgent = navigator.userAgent || navigator.vendor || window.opera;
    } else {
        userAgent = testAgent;
    }

    userAgent = userAgent.toLowerCase();




    // Windows Phone must come first because its UA also contains "Android"!
    if (/windows phone/i.test(userAgent)) {
        return {
            os:"windows phone",
            userAgent:userAgent
        }
    }

    // Samsung Browser detection S8
    if (/samsungbrowser/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }



    if (/android/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }

    if (/ipad|iphone|ipod/i.test(userAgent)) {
        return {
            os:"ios",
            userAgent:userAgent
        }
    }



    // Windows Phone must come first because its UA also contains "Android"
    if (/win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent)) {
        return {
            os:"windows",
            userAgent:userAgent
        }
    }


    if (/os x/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/macintosh|osx/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/openbsd/i.test(userAgent)) {
        return {
            os:"open bsd",
            userAgent:userAgent
        }
    }


    if (/sunos/i.test(userAgent)) {
        return {
            os:"sunos",
            userAgent:userAgent
        }
    }






    if (/crkey/i.test(userAgent)) {
        return {
            os:"chromecast",
            userAgent:userAgent
        }
    }

    if (/appletv/i.test(userAgent)) {
        return {
            os:"apple tv",
            userAgent:userAgent
        }
    }

    if (/wiiu/i.test(userAgent)) {
        return {
            os:"nintendo wiiu",
            userAgent:userAgent
        }
    }

    if (/nintendo 3ds/i.test(userAgent)) {
        return {
            os:"nintendo 3ds",
            userAgent:userAgent
        }
    }

    if (/playstation/i.test(userAgent)) {
        return {
            os:"playstation",
            userAgent:userAgent
        }
    }

    if (/kindle/i.test(userAgent)) {
        return {
            os:"amazon kindle",
            userAgent:userAgent
        }
    }

    if (/ cros /i.test(userAgent)) {
        return {
            os:"chrome os",
            userAgent:userAgent
        }
    }



    if (/ubuntu/i.test(userAgent)) {
        return {
            os:"ubuntu",
            userAgent:userAgent
        }
    }


    if (/googlebot/i.test(userAgent)) {
        return {
            os:"google bot",
            userAgent:userAgent
        }
    }

    if (/bingbot/i.test(userAgent)) {
        return {
            os:"bing bot",
            userAgent:userAgent
        }
    }

    if (/yahoo! slurp/i.test(userAgent)) {
        return {
            os:"yahoo bot",
            userAgent:userAgent
        }
    }



    return {
        os: false,
        userAgent:userAgent
    };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


function IsAndroid(){
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return false;
    } else {
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        return isAndroid;
    }
}

function IsChrome() {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
        // is Google Chrome on IOS
        return true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        // is Google Chrome
        return true;
    } else {
        // not Google Chrome
        return false;
    }
}
function IsEdge () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;
    if (/Edge\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}
function IsFireFox () {
    // let is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // return is_firefox;
    return (typeof InstallTrigger !== 'undefined');
}
function IsIE () {
    // let is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
    // return is_ie;
    // params.isIE = navigator.userAgent.match(/MSIE|Trident/);
    // params.isIE = document.documentMode; // IS9 and above
    return /*@cc_on!@*/ false || !!document.documentMode; // Internet Explorer 6-11
}

function IsIOS() {
    let iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()){ return true; }
        }
    }

    return false;
}

function IsMobile(){
    // Windows Phone must come first because its UA also contains "Android"!
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return true;
    } else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
}
/**
 * @function: isMobile()
 * @desc: Detects if the device you are using is a mobile or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/KRbLdm
 */
function IsOpera() {
    // let isChromium = window.chrome;
    // let isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
    // let isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    return isOpera;
}
function IsSafari() {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}
function GetElementPosition(el) {
    let position = {
        top: el.offsetTop,
        left: el.offsetLeft
    };

    if (el.offsetParent) {
        let parentPosition = {
            top: el.offsetParent.offsetTop,
            left: el.offsetParent.offsetLeft
        };

        position.top += parentPosition.top;
        position.left += parentPosition.left;
    }
    return position;
}


function IsDOM(obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }

        // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};
function IsElement(o) {
    let answer = (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );

    if (answer != true) {
        return false;
    } else {
        return true;
    }
}
function IsElement2(element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}

function GetElementOffsetTop(elementId) {
    let element = getElementById(elementId);
    let curtop = 0;
    if (element.hasOwnProperty("offsetParent")){
        do {
            curtop += element.offsetTop;
        } while (element = element.offsetParent);
        return parseFloat([curtop]);
    } else {
        return false;
    }
}
function HasClass(elementOrId, c) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(c);
    } else {
        return getElementById(elementOrId).classList.contains(c);
    }
}
function SetHTML(elementOrId, str) {
    let ele;
    if (typeof (elementOrId) === "string") {
        ele = getElementById(elementOrId);
    } else {
        ele = elementOrId;
    }

    if (ele) {
        ele.innerHTML = str;
    } else {
        return "SetHTML(elementOrId, str): Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    }
}
class EventManager {

}

/** jso {
 * "Function": "EventManager.js",
 * "Description": "A centralised event stack where you can hook your functions / class's into for centralised quick and easy event application event handling.",
 * "Methods": [
 *      {
 *          "name": "list",
 *          "description": "Lists which events have been created and available for dispatch in the EventManager.",
  *          "returns": "console.log",
 *      },
 *      {
 *          "name": "add",
 *          "description": "Adds or creates a new event within the event manager and attached a callback function / listener object to be called on dispatch of this event.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to add.",
 *              },
 *              {
 *                  "name": "callbackFunction",
  *                  "required": "true",
 *                  "description": "The listener object / function which gets called when the event is triggered.",
 *              },
 *          ],
 *      },
 *      {
 *          "name": "dispatch",
 *          "description": "Dispatches / Triggers an event by name from the EventManager.",
 *          "parameters": [
 *              {
 *                  "name": "eventName",
 *                  "required": "true",
 *                  "description": "The name of the event to dispatch.",
 *              }
 *          ],
 *      },
 *  ]
 * }
 */
function onReady(fn) {
    // IE9+
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        setTimeout(fn, 10);
    } else {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function(){
                window.setTimeout(fn, 10);
            });
        }

    }
}

function WordLimiter(str, maxWords) {
    let wordCount = str.split(/\S+/).length - 1;
    let re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
    let output = "";
    if (wordCount >= maxWords) {
        output = str.match(re);
    } else {
        output = str;
    }
    return { output: output, remaining: (maxWords - wordCount) };
}

class XHR {

    constructor() {
        //https://javascript.info/xmlhttprequest

        // var defs
        this.args = {
            url: false,
            method: false,
            data: false,
            dataType: false, // aka requestType this is either form or json xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            responseType: false, // for clientside processing response data type
            timeout: 0,
            onComplete: false,
            onError: false, // only triggers if the request couldn't be made at all
            onProgress: false,
            onCancel: false,
            username: false,
            password: false
        };

        this.url = false;
        this.urlParams = "";
        this.xhr = false;

        // Process arguments
        if (arguments[0] && typeof (arguments[0]) === "object") {
            for (let key in arguments[0]) {
                if (this.args.hasOwnProperty(key)) {
                    this.args[key] = arguments[0][key];
                }
            }
        }
        // console.log(this.args);

        // Validate
        let valid = true;

        if (this.args.url === false) {
            let msg = `XHR(): Usage error: Option "url" has not been set!
Please enter a valid url to make a request to!`;
            console.error(msg);
            valid = false;
            return false;
        }

        if (this.args.method === false) {
            let msg = `XHR(): Usage error: Option "method" has not been set!
Valid options are:
    POST,
    GET`;
            console.error(msg);
            valid = false;
            return false;
        }


        if (this.args.data !== false && (
            this.args.dataType.toLowerCase() !== "json" &&
            this.args.dataType.toLowerCase() !== "form" &&
            this.args.dataType.toLowerCase() !== "text"
        )) {
            let msg = `XHR(): Usage error: Invalid "dataType" has been set!
Valid options are:
    JSON        - send json string
    FORM        - send form object
    TEXT        - send url string
`;
            console.error(msg);
            valid = false;
            return false;
        }


        if (this.args.responseType === false) {
            let msg =
                `XHR(): Usage warning: Option "responseType" not set!
Valid options are:
    json \t\t\t JSON (parsed automatically)
    document \t\t XML Document (XPath etc),
    text \t\t\t string,
    arraybuffer \t ArrayBuffer for binary data,
    blob \t\t\t Blob for binary data,
`;
            console.error(msg);
            valid = false;
            return false;
        }

        if (
            this.args.responseType.toLowerCase() != "text" &&
            this.args.responseType.toLowerCase() != "document" &&
            this.args.responseType.toLowerCase() != "json" &&
            this.args.responseType.toLowerCase() != "arraybuffer" &&
            this.args.responseType.toLowerCase() != "blob"
        ) {
            let msg =
                `XHR(): Usage error: Not a valid "responseType" specified "${this.args.responseType}"
Valid options are:
    json \t\t\t JSON (parsed automatically)
    document \t\t XML Document (XPath etc),
    text \t\t\t string,
    arraybuffer \t ArrayBuffer for binary data,
    blob \t\t\t Blob for binary data,
`;
            console.error(msg);
            valid = false;
            return false;
        }


        if (this.args.onComplete === false) {
            let msg = `XHR(): Usage error: Option "onComplete" has not been set!
Your making a request but are not doing anything with the response? Make sure to supply an onComplete callback function.`;
            console.error(msg);
            valid = false;
            return false;
        }



        if (valid) {
            this.makeRequest();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    makeRequest() {
        this.xhr = new XMLHttpRequest();

        this.xhr.timeout = this.args.timeout;


        // GET
        // Append data variables to url string, only handle json, form and string

        // POST||PUT||DELETE||PATCH
        // If json send json object
        // If form send form object
        // If text send string

        if (this.args.method.toLowerCase() == "get") {
            // GET
            if (this.args.dataType !== false) {
                switch (this.args.dataType.toLowerCase()) {
                    case "text":
                        this.url = this.args.url + "?" + this.args.data;
                        break;
                    case "form":
                        this.url = this.args.url + "?";
                        for (var key of this.args.data.keys()) {
                            let v = this.args.data.get(key);
                            // console.log(v);
                            this.url = this.url + encodeURI(key) + "=" + encodeURI(v) + "&";
                        }
                        break;
                    case "json":
                        this.url = this.args.url + "?";
                        for (let key in this.args.data) {
                            // console.log(key);
                            // console.log(this.args.data[key]);
                            let v = this.args.data[key];
                            // log(key);
                            this.url = this.url + encodeURI(key) + "=" + encodeURI(v) + "&";
                        }
                        break;
                }
                // console.log("this.url = " + this.url);
            } else {
                this.url = this.args.url
            }
        } else {
            // POST || PUT || PATCH || DELETE
            this.url = this.args.url
        }





        // open
        if (this.args.username !== false && this.args.password !== false) {
            this.xhr.open(this.args.method, this.url, this.args.username, this.args.password);
        } else {
            this.xhr.open(this.args.method, this.url);
        }

        // responseType
        this.xhr.responseType = this.args.responseType;




        // Set requestHeader type aka dataType and send
        if (this.args.dataType !== false && typeof(this.args.dataType) == "string") {
            switch (this.args.dataType.toLowerCase()) {
                case "json":
                    this.xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    this.xhr.send(JSON.stringify(this.args.data));
                    break;
                case "form":
                    // for (var key of this.args.data.keys()) {
                    //     let v = this.args.data.get(key);
                    //     console.log(key + " = " + v);
                    // }
                    this.xhr.send(this.args.data);
                    break;
                case "text":
                    this.xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    this.xhr.send(this.args.data);
                    break;
                default:
                    this.xhr.send();
                    break;
            }
        } else {
            this.xhr.send();
        }


        // Send
        // if (this.args.data !== false && this.args.dataType !== false){
        //     log("sending data");
        //     this.xhr.send(this.args.data);
        // } else {
        //     this.xhr.send();
        // }



        // Event Listeners
        this.xhr.addEventListener("progress", (e) => this.progressHandler(e), true);
        this.xhr.addEventListener("load", (e) => this.onLoadHandler(e), true);
        this.xhr.addEventListener("error", (e) => this.errorHandler(e), true);
        this.xhr.addEventListener("abort", (e) => this.errorHandler(e), true);
        this.xhr.addEventListener("timeout", (e) => this.errorHandler(e), true);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    errorHandler(e) {
        // console.log("XHR.errorHandler()");
        this.removeEventListeners();
        if (this.args.onError) {
            this.args.onError(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    progressHandler(e) {
        // console.log("XHR.progressHandler()");
        // if (e.lengthComputable) {
        //     console.log(`Received ${e.loaded} of ${e.total} bytes`);
        // } else {
        //     console.log(`Received ${e.loaded} bytes`); // no Content-Length
        // }
        // console.log(`Received ${event.loaded} of ${event.total}`);
        if (this.args.onProgress) {
            this.args.onProgress(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    onLoadHandler(e) {
        // console.log("XHR.onLoadHandler()");
        // console.log(`Done, got ${this.xhr.response.length} bytes`);
        // console.log(this.xhr.response);
        this.removeEventListeners();

        if (this.args.onComplete) {
            this.args.onComplete(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    getResponseHeader(name) {
        if (this.xhr) {
            return this.xhr.getResponseHeader(name);
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    getAllResponseHeaders() {
        if (this.xhr) {
            return this.xhr.getAllResponseHeaders();
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    getResponse() {
        if (this.xhr) {
            return this.xhr.response;
        } else {
            return null;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    removeEventListeners() {
        this.xhr.removeEventListener("progress", (e) => this.progressHandler(e));
        this.xhr.removeEventListener("load", (e) => this.onLoadHandler(e));
        this.xhr.removeEventListener("error", (e) => this.errorHandler(e));
        this.xhr.removeEventListener("abort", (e) => this.errorHandler(e));
        this.xhr.removeEventListener("timeout", (e) => this.errorHandler(e));
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}
function GetRandomBoolean(){
    return Math.random() >= 0.5;
}
function GetRandomFloat(min, max) {
    // let r = from + (Math.random()* (to*2));
    return (Math.random() * (max - min) + min);
};

function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function GetRandomThatsNot(min,max,not){
    let r = not; let lim = 100; let runs = 0;
    while (r===not && runs < lim){
        runs++;
        r = getRandomInt(min,max);
    }
    if (runs>=lim){
        return false;
    } else {
        return r;
    }
}
/**
 * @function: getRandomThatsNot(min,max,not)
 * @desc: returns a random int betwen your specified min and max values but never the not value
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/yEBZNq
 */
function GetWeightedRandom(odds, iterations) {
    if (!odds) {
        odds = [
            0.68, // 0
            0.69, // 1
            0.698, // 2
            0.6909, // 3
            0.68, // 4
            0.58, // 5
            0.57, // 6
            0.56, // 7
            0.4, // 8
            0.3, // 9
        ];
    }
    let weights = [];
    let r = 0;
    let iMax = 0;
    let wMax = 0;

    for (let i in odds) {
        if (!weights[i]) {
            weights[i] = 0;
        }

        for (let x = 0; x < iterations; x++) {
            r = Math.random();
            //log(r.toFixed(3) + "   " + odds[i].toFixed(3));
            if (r <= odds[i]) {
                weights[i] += odds[i];
            }
        }

        if (weights[i] > wMax) {
            wMax = weights[i];
            iMax = i;
        }
    }

    //log(weights);
    //log("wMax = " + wMax + "   iMax = " + iMax);
    return iMax;
};
/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: Get a weighted random based on odds and iterations
 * @param odds array: array of odds
 * @param iterations number: number of iterations to run on each number test
 * @link: https://codepen.io/AllForTheCode/pen/RyvWjZ
 */
function InertiaTo(current,target,amount){
    if (amount == 1) {
        return target;
    }
    let distToGo = target - current;
    let delta = current + (distToGo * amount);

    if (Math.abs(distToGo) < 0.01) {
        distToGo = 0;
        delta = target;
    }
    return delta;
}

function IsEven(n) {
    return n % 2 === 0;
}

function IsOdd(n) {
    return Math.abs(n % 2) === 1;
}
function NormaliseRange(min, max, v) {
    let range = max - min;
    let step = 1 / range;
    let r = (step * (v - min));
    if (v < min) {
        r = 0;
    } else if (v > max) {
        r = 1;
    }
    return r;
}

function ParseArrayToFloat(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseFloat(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}

function ParseArrayToInt(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) {
        converted = parseInt(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}
function RoundTo(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec);
}

class FPSMonitor {



    constructor(ele) {

        this.dom = {
            fps: false
        }

        this.fpsStack = false;
        this.stackSize = 60;
        this.index = 0;

        this.last = 0;
        this.now = 0;

        this.delta = 0;

        this.currentFrameFps = 0;

        this.total = 0;
        this.averageFps = 0;

        this.i = 0;

        if (ele){
            this.dom.fps = ele;
        }

        this.fpsStack = new Float32Array(this.stackSize);

        this.update();
    }




    update(){
        this.now = performance.now();

        this.delta = (this.now - this.last) / 1000;
        this.currentFrameFps = 1/this.delta;
        // log("currentFrameFps = " + this.currentFrameFps);

        this.fpsStack[this.index] = this.currentFrameFps;

        this.total = 0;
        for(this.i=0; this.i < this.stackSize; this.i++){
            this.total += this.fpsStack[this.i];
        }

        this.averageFps = Math.round( this.total/this.stackSize );

        if (this.dom.fps){
            this.dom.fps.innerText = this.averageFps;
        }

        this.last = this.now;

        this.index++;
        if (this.index >= this.stackSize){
            this.index = 0;
        }

        requestAnimationFrame(()=>{
            this.update();
        });
    }


    getFps(){
        return this.averageFps;
    }
}

function GetGUID() {
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}
function GetUID(len) {
    if (len > 34){
        console.error("GetUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}
function IsAlphaNumeric(v) {
    return !(/\W/.test(v));
}
function IsArray(input) {
    return !!input && input.constructor === Array;
    //return arr.constructor === Array;
}
function IsBool(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
function IsBoolean(input) {
    if (typeof (input) === "boolean") {
        return true;
    } else {
        return false;
    }
}
function IsNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function IsNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function CutStringTo(s, len) {
    return s.substring(0, len);
}
function EscapeHTML(str) {
    if (typeof (str) != "string") { console.error("escape(arg): usage error: arg needs to be a string!"); return false; }

    let replacements = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "\"": "&quot;",
        "`": "&#039;"
    };
    return str.replace(/[<>&"]/g, function (character) {
        return replacements[character];
    });
}
function GetAnchor(url) {
    if (!url) { url = window.location.href; }
    let anchorAvailable = isInString("#", url);
    if (anchorAvailable) {
        return url.slice(url.lastIndexOf('#') + 1);
    } else {
        return false;
    }
}
/**
 * @function: GetAnchor(url)
 * @desc: Get anchor from url
 * @param string url: The url to get the anchor from
 * @link:
 */
function GetCleanJSONString (s) {
    // preserve newlines, etc - use valid JSON
    s = s.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    // remove non-printable and other non-valid JSON chars
    s = s.replace(/[\u0000-\u0019]+/g, "");
    return s;
}
function GetFileExtension(input) {
    return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}
function GetFileExtension2(str) {
    // Needs improving
    let ext = str.split('.').pop();
    return ext;
}
function GetLastPartOfUrl(url) {
    if (!url) {
        url = window.location.href;
    }
    let part = url.substring(url.lastIndexOf('/') + 1);
    return part;
}
function GetRandomString(len) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function GetStringBetween(str, start, end) {
    return str.split(start).pop().split(end).shift().trim();
}
/**
 * @function: getStringBetween(input,start,end)
 * @desc: Gets a string between two other strings
 * @param string input: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
function getStringsBetween2(str, start, end) {
    let orig = str;
    let results = [];
    // log(orig);
    // log("--------");

    function getBetween() {
        // log("CHECKING: " + str);
        let startMatchIndex = str.indexOf(start); // Find start match
        // log("startMatchIndex: " + startMatchIndex);
        if (startMatchIndex === -1) { return false; }

        let startCutIndex = start.length + startMatchIndex; // calc start cut index
        // log("startCutIndex: " + startCutIndex);

        str = str.substring(startCutIndex, str.length); // LTrim to start cut index
        // log("CUT: " + str);

        let endMatchIndex = str.indexOf(end); // find end match index
        // log("endMatchIndex: " + endMatchIndex);
        if (endMatchIndex === -1) { return false; }

        let between = str.substring(0, endMatchIndex); // get string between
        // log("between: " + between);
        let endCutIndex = end.length + endMatchIndex;
        //log("endCutIndex: " + endCutIndex);
        str = str.substring(endCutIndex, str.length); // cut off end string
        //log("FINAL: " + str);
        return between;
    }
    let lim = 500; // Want to loop forever? 500 seems like areasonable limit
    let pos = 0;
    let result = true;
    while (pos <= lim && result != false) {
        pos++;
        result = getBetween();
        if (result) {
            //log("between["+i+"] = " + result);
            results.push(result);
            //log("");
        }
    }
    return results;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @function: getStringsBetween(str,start,end)
 * @desc: Gets all strings between two other strings (multi match)
 * @param string str: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
function GetWordCount(str) {
    return str.split(/\S+/).length - 1;
}
function InString(find,source) { return source.indexOf(find) !== -1; }
function IsInString(find,source) { return source.indexOf(find) !== -1; }
function LTrimBy(str, by) {
    return str.substring(by, str.length);
}
function RemoveFileFromPath(path) {
    //let pa = '/this/is/a/folder/aFile.txt';
    let r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
function RTrimBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
function TrimStringBy(str, trimBy) {
    return (str.substring(0, str.length - trimBy));
}
function UcFirst(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
function IsEmail (email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


/***/ }),

/***/ "./src/TestApp.ts":
/*!************************!*\
  !*** ./src/TestApp.ts ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aftc_modules_1 = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
var TestApp = /** @class */ (function () {
    function TestApp() {
        this.t = 0;
        aftc_modules_1.log("TestApp.constructor()");
        this.domOut = document.getElementById("out");
        aftc_modules_1.log(this.domOut);
        this.render();
    }
    TestApp.prototype.render = function () {
        var _this = this;
        this.t += 0.1;
        this.domOut.innerHTML = "t = " + this.t.toFixed(3);
        requestAnimationFrame(function () {
            _this.render();
        });
    };
    return TestApp;
}());
exports.TestApp = TestApp;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aftc_modules_1 = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
var TestApp_1 = __webpack_require__(/*! ./TestApp */ "./src/TestApp.ts");
aftc_modules_1.onReady(function () {
    new TestApp_1.TestApp();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FmdGMtbW9kdWxlcy9hZnRjLW1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rlc3RBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1AsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSx1QkFBdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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K0JBQStCLHlCQUF5QixnQ0FBZ0MsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsR0FBRztBQUNwSztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcnJEQSw0R0FBcUQ7QUFFckQ7SUFLSTtRQUhRLE1BQUMsR0FBVSxDQUFDLENBQUM7UUFJakIsa0JBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxrQkFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUdELHdCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR25ELHFCQUFxQixDQUFDO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQXpCWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQiw0R0FBeUM7QUFDekMseUVBQW9DO0FBR3BDLHNCQUFPLENBQUM7SUFDSixJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBhZnRjLW1vZHVsZXMgdjEuMi4yXG4vLyBBdXRob3I6IERhcmNleUBhZnRjLmlvXG5leHBvcnQgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWVTdGFjaygpIHtcclxuICAgIHZhciBtZSA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoIXdpbmRvdyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbmltYXRpb25GcmFtZVN0YWNrKCk6IEVSUk9SIC0gVW5hYmxlIHRvIGFjY2VzcyB3aW5kb3chXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmFmdGNBbmltU3RhY2spe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSdW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFjazogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOTk5OTkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuYWZ0Y0FuaW1TdGFjay5maXJzdFJ1bil7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLmZpcnN0UnVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZuU3RhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRm5TdGFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5hZnRjQW5pbVN0YWNrKXtcclxuICAgICAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjayA9IFtdO1xyXG4gICAgICAgICAgICBkZWxldGUgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvY2Vzc0ZuU3RhY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICghd2luZG93LmFmdGNBbmltU3RhY2suZW5hYmxlZCl7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2tbaV0uZm4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucHJvY2Vzc0ZuU3RhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24odWlkLGZuKXtcclxuICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgdWlkOiB1aWQsXHJcbiAgICAgICAgICAgIGZuOiBmblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24odWlkKXtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrW2ldLnVpZCA9PT0gdWlkKXtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrID0gYXJyYXlSZW1vdmVJdGVtKHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrLGZuKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGZ1bmN0aW9uOiBBbmltYXRpb25GcmFtZVN0YWNrKClcclxuICogQGRlc2M6IEdpdmVzIGVhc3kgYWNjZXNzIHRvIGEgc2luZ2xlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wIHdoaWNoIHlvdSBjYW4gYWRkIGZ1bmN0aW9ucyB0byBwcm9jZXNzIGluIGVhY2ggbG9vcCwgbm90ZSB0aGUgZnVuY3Rpb24gc3RhY2sgaXMgc3RvcmVkIG9uIGdsb2JhbCB3aW5kb3cgc2NvcGVcclxuICogQG1ldGhvZCBhZGQ6IGFkZCBhIGZ1bmN0aW9uIHRvIHRoZSBzdGFjayB0byBiZSBleGVjdXRlZCBvbiBhbmltYXRpb25GcmFtZUxvb3BcclxuICogQG1ldGhvZCByZW1vdmU6IHJlbW92ZSBhIGZ1bmN0aW9uIGZyb20gdGhlIHN0YWNrXHJcbiAqIEBtZXRob2Qgc3RhcnQ6IHN0YXJ0IHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcFxyXG4gKiBAbWV0aG9kIHN0b3A6IHN0b3AgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBsb29wXHJcbiAqIEBtZXRob2QgZGlzcG9zZTogZGlzcG9zZSBvZiBhbGwgZnVuY3Rpb25zIGluIHRoZSBmdW5jdGlvbiBzdGFja1xyXG4gKiBAbGluazpcclxuICovXG5leHBvcnQgZnVuY3Rpb24gQXJnc1RvT2JqZWN0KGZBcmdzLCBvYmosIHN0cmljdCkge1xyXG4gICAgaWYgKGZBcmdzWzBdICYmIHR5cGVvZiAoZkFyZ3NbMF0pID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSBmQXJnc1swXTtcclxuXHJcbiAgICAgICAgaWYgKHN0cmljdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN0cmljdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmdzICYmIHR5cGVvZiAoYXJncykgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBhcmdzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiYXJnc1RvT2JqZWN0KCk6IEFyZ3VtZW50IFtcIiArIGtleSArIFwiXSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gYXJnc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGFyZ3NUb09iamVjdChmQXJncywgb2JqLCBzdHJpY3QpXHJcbiAqIEBkZXNjOiBRdWljayBhbmQgZWFzeSBhcmdzIHRvIG9iamVjdFxyXG4gKiBAcGFyYW0gYXJncyBvYmplY3Q6IGFyZ3VtZW50cyAoZnJvbSB0aGUgZnVuY3Rpb24gc3RydWN0dXJlLCB0eXBpY2FsbHkgY29kZSB3aWxsIGFsd2F5cyBiZSAnYXJndW1lbnRzJ1xyXG4gKiBAcGFyYW0gb2JqIG9iamVjdDogb2JqZWN0IHRvIHBhcnNlIGludG9cclxuICogQHBhcmFtIHN0cmljdCBib29sZWFuOiBjb25zb2xlLndhcm4gYW55IGFyZ3MgdGhhdCBoYXZlIGJlZW4gc3VwcGxpZWQgdGhhdCBkb24ndCBleGlzdCBpbiBhcmdzXHJcbiAqIEByZXR1cm46IG51bGxcclxuICogQGFsaWFzOiBhcmdzVG9cclxuICogQGxpbms6IGh0dHBzOi8vY29kZXBlbi5pby9BbGxGb3JUaGVDb2RlL3Blbi9QYXFiS05cclxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0QnJvd3NlciAoKSB7XHJcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LCB0ZW0sIE0gPSB1YS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpIHx8IFtdO1xyXG4gICAgaWYgKC90cmlkZW50L2kudGVzdChNWzFdKSkge1xyXG4gICAgICAgIHRlbSA9IC9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW107XHJcbiAgICAgICAgcmV0dXJuICdJRSc7XHJcbiAgICB9XHJcbiAgICBpZiAoTVsxXSA9PT0gJ0Nocm9tZScpIHtcclxuICAgICAgICB0ZW0gPSB1YS5tYXRjaCgvXFxiT1BSXFwvKFxcZCspLyk7XHJcbiAgICAgICAgaWYgKHRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnT3BlcmEnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE0gPSBNWzJdID8gW01bMV0sIE1bMl1dIDogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J107XHJcbiAgICBpZiAoKHRlbSA9IHVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpKSAhPSBudWxsKSB7XHJcbiAgICAgICAgTS5zcGxpY2UoMSwgMSwgdGVtWzFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNWzBdO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0QnJvd3NlclgoKXtcclxuICAgIGxldCBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IGlzQ1NTMUNvbXBhdCA9ICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCIpO1xyXG5cclxuICAgIGxldCB4ID0gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBpc0NTUzFDb21wYXQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgIC8vIGxldCB5ID0gc3VwcG9ydFBhZ2VPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBpc0NTUzFDb21wYXQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgcmV0dXJuIHg7XHJcbn1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldEJyb3dzZXJZKCl7XHJcbiAgICBsZXQgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc0NTUzFDb21wYXQgPSAoKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiKTtcclxuXHJcbiAgICAvLyBsZXQgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICBsZXQgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cclxuICAgIHJldHVybiB5O1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzSW5WaWV3cG9ydChlbCl7XHJcbiAgICBsZXQgdG9wID0gZWwub2Zmc2V0VG9wO1xyXG4gICAgbGV0IGxlZnQgPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgbGV0IHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XHJcbiAgICBsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIHdoaWxlKGVsLm9mZnNldFBhcmVudCkge1xyXG4gICAgICAgIGVsID0gZWwub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIHRvcCArPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgICAgbGVmdCArPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdG9wIDwgKHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCkgJiZcclxuICAgICAgICBsZWZ0IDwgKHdpbmRvdy5wYWdlWE9mZnNldCArIHdpbmRvdy5pbm5lcldpZHRoKSAmJlxyXG4gICAgICAgICh0b3AgKyBoZWlnaHQpID4gd2luZG93LnBhZ2VZT2Zmc2V0ICYmXHJcbiAgICAgICAgKGxlZnQgKyB3aWR0aCkgPiB3aW5kb3cucGFnZVhPZmZzZXRcclxuICAgICk7XHJcblxyXG5cclxuICAgIC8vIGxldCBib3VuZGluZyA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgYm91bmRpbmcudG9wID49IDAgJiZcclxuICAgIC8vICAgICBib3VuZGluZy5sZWZ0ID49IDAgJiZcclxuICAgIC8vICAgICBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxyXG4gICAgLy8gICAgIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcbiAgICAvLyApO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5Q2xlYXIoYXJyKSB7XHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHsgYXJyLnBvcCgpOyB9XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gQXJyYXlDb250YWlucyhuZWVkbGUsIGhheXN0YWNrKSB7XHJcbiAgICBpZiAoaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpID4gLTEpIHsgcmV0dXJuIHRydWU7IH0gZWxzZSB7IHJldHVybiBmYWxzZTsgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFbXB0eShhcnIpIHtcclxuICAgIHdoaWxlIChhcnIubGVuZ3RoID4gMCkgeyBhcnIucG9wKCk7IH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5R2V0TWF4KGFycikge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFycik7XHJcbn1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5R2V0TWluKGFycikge1xyXG4gICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIGFycik7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcnJheU1heChhcnIpIHtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBhcnIpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQXJyYXlNaW4oYXJyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgYXJyKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5UmVtb3ZlSW5kZXgoYXJyLGluZGV4KXtcclxuICAgIGFyci5zcGxpY2UoaW5kZXgsMSk7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gQXJyYXlSZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtICE9IHZhbHVlO1xyXG4gICAgfSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcnJheVNodWZmbGUoYXJyKSB7XHJcbiAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyLmxlbmd0aCxcclxuICAgICAgICB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XHJcblxyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cclxuICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcclxuXHJcbiAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXHJcbiAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJbY3VycmVudEluZGV4XTtcclxuICAgICAgICBhcnJbY3VycmVudEluZGV4XSA9IGFycltyYW5kb21JbmRleF07XHJcbiAgICAgICAgYXJyW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gQXJyYXlTaHVmZmxlMihhKSB7XHJcbiAgICBsZXQgeCwgdCwgciA9IG5ldyBVaW50MzJBcnJheSgxKTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBjID0gYS5sZW5ndGggLSAxLCBtID0gYS5sZW5ndGg7IGkgPCBjOyBpKysgLCBtLS0pIHtcclxuICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHIpO1xyXG4gICAgICAgIHggPSBNYXRoLmZsb29yKHIgLyA2NTUzNiAvIDY1NTM2ICogbSkgKyBpO1xyXG4gICAgICAgIHQgPSBhW2ldLCBhW2ldID0gYVt4XSwgYVt4XSA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGE7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0luQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xyXG4gICAgaWYgKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xKSB7IHJldHVybiB0cnVlOyB9IGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzU3RyaW5nSW5BcnJheShuZWVkbGUsIGhheXN0YWNrKSB7XHJcbiAgICByZXR1cm4gKG5ldyBSZWdFeHAoJygnICsgaGF5c3RhY2suam9pbignfCcpLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKSArICcpJCcpKS50ZXN0KG5lZWRsZSk7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gQm9vbFRvU3RyaW5nIChib29sKSB7XHJcblxyXG4gICAgaWYgKCFib29sIHx8IGJvb2wgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgKGJvb2wpICE9IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBRlRDLmpzOiBDb252ZXJzaW9uLmpzOiBib29sVG9TdHJpbmcoc3RyKTogRXJyb3IgLSBpbnB1dCBpcyBub3QgYSBib29sZWFuIVwiKTtcclxuICAgICAgICByZXR1cm4gXCJlcnJvclwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJmYWxzZVwiO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gQm9vbFRvWWVzTm8gKGIpIHtcclxuXHJcbiAgICBpZiAoIWIgfHwgYiA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiAoYikgIT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvb2xUb1llc05vKHN0cik6IEVycm9yIC0gaW5wdXQgaXMgbm90IGEgYm9vbGVhbiFcIik7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYikge1xyXG4gICAgICAgIHJldHVybiBcInllc1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJub1wiO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gRGVnVG9SYWQoaW5wdXQpIHsgcmV0dXJuIGlucHV0ICogKE1hdGguUEkgLyAxODApOyB9XG5leHBvcnQgZnVuY3Rpb24gSGV4VG9SZ2IgKGhleCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgfSA6IG51bGw7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBOdW1Ub0hleCAobnVtKSB7XHJcbiAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDE2KTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJhZFRvRGVnKGlucHV0KSB7IHJldHVybiBpbnB1dCAqICgxODAgLyBNYXRoLlBJKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIFJHQlRvSGV4IChyLCBnLCBiKSB7XHJcbiAgICByZXR1cm4gKChyIDw8IDE2KSB8IChnIDw8IDgpIHwgYikudG9TdHJpbmcoMTYpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIFJHQlRvSGV4MiAociwgZywgYikge1xyXG4gICAgZnVuY3Rpb24gZ2V0SGV4KGMpIHtcclxuICAgICAgICBsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcclxuICAgIH1cclxuICAgIGxldCBoZXggPSBcIiNcIiArIGdldEhleChyKSArIGdldEhleChnKSArIGdldEhleChiKTtcclxuICAgIGhleCA9IGhleC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGhleDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFN0cmluZ1RvQm9vbCAoc3RyKSB7XHJcblxyXG4gICAgaWYgKCFzdHIgfHwgc3RyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIChzdHIpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0cmluZ1RvQm9vbChzdHIpOiBFcnJvciAtIGlucHV0IHN0cmluZyBpcyBub3QgdmFsaWQhXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHN0ci50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcInlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ5ZXNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwidHJ1ZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0Q29va2llKG5hbWUpIHtcclxuXHQvL3JldHVybiAuY29va2llKG5hbWUpO1xyXG5cdHZhciBrZXlWYWx1ZSA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaCgnKF58OykgPycgKyBuYW1lICsgJz0oW147XSopKDt8KScpO1xyXG5cdHJldHVybiBrZXlWYWx1ZSA/IGtleVZhbHVlWzJdIDogbnVsbDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFNldENvb2tpZShuYW1lLCB2YWx1ZSkge1xyXG5cdC8vZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBcIjsgZXhwaXJlcz1UaHUsIDE4IERlYyAyMDEzIDEyOjAwOjAwIEdNVFwiO1xyXG5cdC8vLmNvb2tpZShuYW1lLCB2YWx1ZSwge2V4cGlyZXM6MzY1LHBhdGg6Jy9jb29raWVzJ30pO1xyXG5cdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuXHRleHBpcmVzLnNldFRpbWUoZXhwaXJlcy5nZXRUaW1lKCkgKyAoMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuXHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgKyAnO2V4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldERheXNCZXR3ZWVuIChzdGFydERhdGVUaW1lLCBlbmREYXRlVGltZSkge1xyXG4gICAgbGV0IG1zUGVyRGF5ID0gOC42NGU3O1xyXG4gICAgLy8gQ29weSBkYXRlcyBzbyBkb24ndCBtZXNzIHRoZW0gdXBcclxuICAgIGxldCBzZCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZVRpbWUpO1xyXG4gICAgbGV0IGVkID0gbmV3IERhdGUoZW5kRGF0ZVRpbWUpO1xyXG4gICAgLy8gU2V0IHRvIG5vb24gLSBhdm9pZCBEU1QgZXJyb3JzXHJcbiAgICBzZC5zZXRIb3VycygxMiwgMCwgMCk7XHJcbiAgICBlZC5zZXRIb3VycygxMiwgMCwgMCk7XHJcbiAgICAvLyBSb3VuZCB0byByZW1vdmUgZGF5bGlnaHQgc2F2aW5nIGVycm9yc1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKGVkIC0gc2QpIC8gbXNQZXJEYXkpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldE15U1FMRGF0ZVRpbWVTdHJpbmcoKSB7XHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgZGF5ID0gbm93LmdldERhdGUoKTtcclxuICAgIGxldCBob3VyID0gbm93LmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWludXRlID0gbm93LmdldE1pbnV0ZXMoKTtcclxuICAgIGxldCBzZWNvbmQgPSBub3cuZ2V0U2Vjb25kcygpO1xyXG4gICAgaWYgKG1vbnRoLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbW9udGggPSAnMCcgKyBtb250aDtcclxuICAgIH1cclxuICAgIGlmIChkYXkudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XHJcbiAgICB9XHJcbiAgICBpZiAoaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGhvdXIgPSAnMCcgKyBob3VyO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbnV0ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG1pbnV0ZSA9ICcwJyArIG1pbnV0ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWNvbmQudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBzZWNvbmQgPSAnMCcgKyBzZWNvbmQ7XHJcbiAgICB9XHJcbiAgICBsZXQgc3RyID0geWVhciArICcvJyArIG1vbnRoICsgJy8nICsgZGF5ICsgJyAnICsgaG91ciArICc6JyArIG1pbnV0ZSArICc6JyArIHNlY29uZDtcclxuICAgIHJldHVybiBzdHI7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0VUtEYXRlKGR0ZSl7XHJcbiAgICBsZXQgb3V0cHV0ID0gZHRlLmdldERheSgpICsgXCItXCIgKyAoZHRlLmdldE1vbnRoKCkrMSkgKyBcIi1cIiArIGR0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFVrRGF0ZUZyb21EYkRhdGVUaW1lIChpbnB1dCkge1xyXG4gICAgLy8gXCIyMDE2LTA0LTA4IDIxOjExOjU5XCIgdG8gVUsgZGF0ZVxyXG4gICAgaWYgKGlucHV0ID09PSBcIlwiIHx8IGlucHV0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibm8gaW5wdXRcIjtcclxuICAgIH1cclxuICAgIGxldCBEYXRlVGltZSA9IGlucHV0LnNwbGl0KFwiIFwiKTtcclxuICAgIGxldCBEYXRlUGFydHMgPSBEYXRlVGltZVswXS5zcGxpdChcIi1cIik7XHJcbiAgICBsZXQgVUtEYXRlID0gRGF0ZVBhcnRzWzJdICsgXCIvXCIgKyBEYXRlUGFydHNbMV0gKyBcIi9cIiArIERhdGVQYXJ0c1swXTtcclxuICAgIHJldHVybiBVS0RhdGU7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRVa0RhdGVUaW1lRnJvbURiRGF0ZVRpbWUgIChpbnB1dCkge1xyXG4gICAgLy8gXCIyMDE2LTA0LTA4IDIxOjExOjU5XCIgdG8gVUsgZGF0ZSB0aW1lXHJcbiAgICBsZXQgRGF0ZVRpbWUgPSBpbnB1dC5zcGxpdChcIiBcIik7XHJcbiAgICBsZXQgRGF0ZVBhcnRzID0gRGF0ZVRpbWVbMF0uc3BsaXQoXCItXCIpO1xyXG4gICAgbGV0IFRpbWVQYXJ0cyA9IERhdGVUaW1lWzFdLnNwbGl0KFwiOlwiKTtcclxuICAgIGxldCBVS0RhdGUgPSBEYXRlUGFydHNbMl0gKyBcIi9cIiArIERhdGVQYXJ0c1sxXSArIFwiL1wiICsgRGF0ZVBhcnRzWzBdO1xyXG4gICAgbGV0IFRpbWUgPSBUaW1lUGFydHNbMF0gKyBcIjpcIiArIFRpbWVQYXJ0c1sxXTtcclxuICAgIHJldHVybiAoVUtEYXRlICsgXCIgXCIgKyBUaW1lKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFVTRGF0ZShkdGUpe1xyXG4gICAgbGV0IG91dHB1dCA9IGR0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAoZHRlLmdldE1vbnRoKCkrMSkgKyBcIi1cIiArIChkdGUuZ2V0RGF5KCkrMSlcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUbyhlbGVtZW50T3JJZCxtc2csZW5kT2ZMaW5lPVwiPGJyPlwiKXtcclxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudChvKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXHJcbiAgICAgICAgICAgICAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVsZSA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZihlbGVtZW50T3JJZCkgPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgZWxlbWVudE9ySWQgPSBlbGVtZW50T3JJZC5yZXBsYWNlKFwiI1wiLFwiXCIpO1xyXG4gICAgICAgIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRPcklkKTtcclxuICAgICAgICBpZiAoIWVsZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBlbmRUbygpOiBVbmFibGUgdG8gZmluZCBJRCAnXCIgKyBlbGVtZW50T3JJZCArIFwiJyBvbiB0aGUgRE9NIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlID0gZWxlbWVudE9ySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRWxlbWVudChlbGUpKXtcclxuICAgICAgICBlbGUuaW5uZXJIVE1MID0gZWxlLmlubmVySFRNTCArIG1zZyArIGVuZE9mTGluZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBlbmRUbygpOiBVbmFibGUgdG8gbG9nIHRvIGVsZW1lbnQgb3IgaWQgcHJvdmlkZWQhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZWxlbWVudE9ySWQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXG5leHBvcnQgZnVuY3Rpb24gQXR0YWNoRGVidWcobm8sZWxlKSB7XHJcbiAgICAvLyByZXR1cm4gaWQncyBub3QgdGhlIGRpdiBjcmVhdGUgZWxlbWVudHMgYXMgdGhlc2UgYXJlIHR5cGUgb2Ygb2JqZWN0IGFuZCBub3QgaHRtbCBlbGVtZW50XHJcbiAgICBsZXQgaWRzID0gW107XHJcblxyXG4gICAgbGV0IGRlYnVnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlYnVnQ29udGFpbmVyLmlkID0gXCJkZWJ1Zy1jb250YWluZXJcIjtcclxuICAgIGRlYnVnQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZGVidWdDb250YWluZXIuc3R5bGUucmlnaHQgPSBcIjVweFwiO1xyXG4gICAgZGVidWdDb250YWluZXIuc3R5bGUudG9wID0gXCI1cHhcIjtcclxuICAgIGRlYnVnQ29udGFpbmVyLnN0eWxlLnRleHRBbGdpbiA9IFwicmlnaHRcIjtcclxuXHJcblxyXG4gICAgd2luZG93LmFmdGNEZWJ1ZyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm87IGkrKykge1xyXG4gICAgICAgIGxldCByID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjk5OTk5OTk5OTkpO1xyXG4gICAgICAgIGxldCBpZCA9IFwiYWZ0Yy1kZWJ1Zy1jb250YWluZXItXCIgKyByO1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgICAgIGRpdi5zdHlsZS5taW5XaWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICAgIC8vIGRpdi5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUubWFyZ2luQm90dG9tID0gXCIzcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUuYm9yZGVyID0gXCIxcHggZGFzaGVkICM5OTk5OTlcIjtcclxuICAgICAgICBkaXYuc3R5bGUucGFkZGluZyA9IFwiMXB4IDJweCAycHggNHB4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmQgPSBcIlJHQkEoMjU1LDI1NSwyNTUsMC45MilcIjtcclxuICAgICAgICBkaXYuc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRlYnVnLXJvd1wiKTtcclxuICAgICAgICBkZWJ1Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbm5lckhUTUwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWZ0Y0RlYnVnLnB1c2goZGl2KTtcclxuICAgICAgICBpZHMucHVzaChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlKXtcclxuICAgICAgICBlbGUuYXBwZW5kQ2hpbGQoZGVidWdDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlYnVnQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXCJBdHRhY2hEZWJ1ZygpOiBBdHRhY2hlZCFcIik7XHJcbiAgICBjb25zb2xlLndhcm4oXCJBdHRhY2hEZWJ1ZygpOiBVc2UgRGVidWdUbyhpbmRleCxzdHJpbmcpIHRvIHdyaXRlIGRpcmVjdGx5IHRvIGRlYnVnIGVsZW1lbnRzLlwiKTtcclxuICAgIHJldHVybiBpZHM7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBEZWJ1Z1RvKGluZGV4LHN0cil7XHJcbiAgICBpZiAod2luZG93LmFmdGNEZWJ1Z1tpbmRleF0pe1xyXG4gICAgICAgIHdpbmRvdy5hZnRjRGVidWdbaW5kZXhdLmlubmVySFRNTCA9IHN0cjtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhhcmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyZyk7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG8oZWxlbWVudE9ySWQsbXNnLGFwcGVuZD1mYWxzZSxlbmRPZkxpbmU9XCJcIil7XHJcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnQobykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxyXG4gICAgICAgICAgICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbGUgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YoZWxlbWVudE9ySWQpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgIGVsZW1lbnRPcklkID0gZWxlbWVudE9ySWQucmVwbGFjZShcIiNcIixcIlwiKTtcclxuICAgICAgICBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50T3JJZCk7XHJcbiAgICAgICAgaWYgKCFlbGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9nVG8oKTogVW5hYmxlIHRvIGZpbmQgSUQgJ1wiICsgZWxlbWVudE9ySWQgKyBcIicgb24gdGhlIERPTSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZSA9IGVsZW1lbnRPcklkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0VsZW1lbnQoZWxlKSl7XHJcbiAgICAgICAgaWYgKGFwcGVuZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBlbGUuaW5uZXJIVE1MICsgbXNnICsgZW5kT2ZMaW5lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBtc2cgKyBlbmRPZkxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ1RvKCk6IFVuYWJsZSB0byBsb2cgdG8gZWxlbWVudCBvciBpZCBwcm92aWRlZCFcIik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlbGVtZW50T3JJZCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRJRVZlcnNpb24gKCkge1xyXG4gICAgbGV0IG1hdGNoID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKD86TVNJRSB8VHJpZGVudFxcLy4qOyBydjopKFxcZCspLyk7XHJcbiAgICByZXR1cm4gbWF0Y2ggPyBwYXJzZUludChtYXRjaFsxXSkgOiB1bmRlZmluZWQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRPUyh0ZXN0QWdlbnQpIHtcclxuICAgIGxldCB1c2VyQWdlbnQ7XHJcblxyXG4gICAgaWYgKCF0ZXN0QWdlbnQpe1xyXG4gICAgICAgIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJBZ2VudCA9IHRlc3RBZ2VudDtcclxuICAgIH1cclxuXHJcbiAgICB1c2VyQWdlbnQgPSB1c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBXaW5kb3dzIFBob25lIG11c3QgY29tZSBmaXJzdCBiZWNhdXNlIGl0cyBVQSBhbHNvIGNvbnRhaW5zIFwiQW5kcm9pZFwiIVxyXG4gICAgaWYgKC93aW5kb3dzIHBob25lL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJ3aW5kb3dzIHBob25lXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2Ftc3VuZyBCcm93c2VyIGRldGVjdGlvbiBTOFxyXG4gICAgaWYgKC9zYW1zdW5nYnJvd3Nlci9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiYW5kcm9pZFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJhbmRyb2lkXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9pcGFkfGlwaG9uZXxpcG9kL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJpb3NcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIFdpbmRvd3MgUGhvbmUgbXVzdCBjb21lIGZpcnN0IGJlY2F1c2UgaXRzIFVBIGFsc28gY29udGFpbnMgXCJBbmRyb2lkXCJcclxuICAgIGlmICgvd2luNjR8d2luMzJ8d2luMTZ8d2luOTV8d2luOTh8d2luZG93cyAyMDAwfHdpbmRvd3MgeHB8bXNpZXx3aW5kb3dzIG50IDYuMzsgdHJpZGVudHx3aW5kb3dzIG50fHdpbmRvd3MvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIndpbmRvd3NcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKC9vcyB4L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJvc3hcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL21hY2ludG9zaHxvc3gvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIm9zeFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvb3BlbmJzZC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwib3BlbiBic2RcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKC9zdW5vcy9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwic3Vub3NcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGlmICgvY3JrZXkvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImNocm9tZWNhc3RcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL2FwcGxldHYvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImFwcGxlIHR2XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC93aWl1L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJuaW50ZW5kbyB3aWl1XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9uaW50ZW5kbyAzZHMvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIm5pbnRlbmRvIDNkc1wiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvcGxheXN0YXRpb24vaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcInBsYXlzdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9raW5kbGUvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImFtYXpvbiBraW5kbGVcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoLyBjcm9zIC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiY2hyb21lIG9zXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoL3VidW50dS9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwidWJ1bnR1XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICgvZ29vZ2xlYm90L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJnb29nbGUgYm90XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9iaW5nYm90L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJiaW5nIGJvdFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgveWFob28hIHNsdXJwL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJ5YWhvbyBib3RcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3M6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgIH07XHJcbn1cclxuLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXG5leHBvcnQgZnVuY3Rpb24gSXNBbmRyb2lkKCl7XHJcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAoL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGlzQW5kcm9pZCA9IHVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gLTE7IC8vJiYgdWEuaW5kZXhPZihcIm1vYmlsZVwiKTtcclxuICAgICAgICByZXR1cm4gaXNBbmRyb2lkO1xyXG4gICAgfVxyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzQ2hyb21lKCkge1xyXG4gICAgdmFyIGlzQ2hyb21pdW0gPSB3aW5kb3cuY2hyb21lO1xyXG4gICAgdmFyIHdpbk5hdiA9IHdpbmRvdy5uYXZpZ2F0b3I7XHJcbiAgICB2YXIgdmVuZG9yTmFtZSA9IHdpbk5hdi52ZW5kb3I7XHJcbiAgICB2YXIgaXNPcGVyYSA9IHR5cGVvZiB3aW5kb3cub3ByICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgdmFyIGlzSUVlZGdlID0gd2luTmF2LnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IC0xO1xyXG4gICAgdmFyIGlzSU9TQ2hyb21lID0gd2luTmF2LnVzZXJBZ2VudC5tYXRjaChcIkNyaU9TXCIpO1xyXG5cclxuICAgIGlmIChpc0lPU0Nocm9tZSkge1xyXG4gICAgICAgIC8vIGlzIEdvb2dsZSBDaHJvbWUgb24gSU9TXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGlzQ2hyb21pdW0gIT09IG51bGwgJiZcclxuICAgICAgICB0eXBlb2YgaXNDaHJvbWl1bSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgIHZlbmRvck5hbWUgPT09IFwiR29vZ2xlIEluYy5cIiAmJlxyXG4gICAgICAgIGlzT3BlcmEgPT09IGZhbHNlICYmXHJcbiAgICAgICAgaXNJRWVkZ2UgPT09IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICAvLyBpcyBHb29nbGUgQ2hyb21lXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG5vdCBHb29nbGUgQ2hyb21lXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNFZGdlICgpIHtcclxuICAgIC8vbGV0IGlzRWRnZSA9ICFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWE7IC8vIEVkZ2UgMjArXHJcbiAgICBsZXQgZWRnZSA9IGZhbHNlO1xyXG4gICAgaWYgKC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICAgICBlZGdlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBlZGdlO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNGaXJlRm94ICgpIHtcclxuICAgIC8vIGxldCBpc19maXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xyXG4gICAgLy8gcmV0dXJuIGlzX2ZpcmVmb3g7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNJRSAoKSB7XHJcbiAgICAvLyBsZXQgaXNfaWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignTVNJRScpID4gLTE7XHJcbiAgICAvLyByZXR1cm4gaXNfaWU7XHJcbiAgICAvLyBwYXJhbXMuaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL01TSUV8VHJpZGVudC8pO1xyXG4gICAgLy8gcGFyYW1zLmlzSUUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7IC8vIElTOSBhbmQgYWJvdmVcclxuICAgIHJldHVybiAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTsgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNi0xMVxyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzSU9TKCkge1xyXG4gICAgbGV0IGlEZXZpY2VzID0gW1xyXG4gICAgICAgICdpUGFkIFNpbXVsYXRvcicsXHJcbiAgICAgICAgJ2lQaG9uZSBTaW11bGF0b3InLFxyXG4gICAgICAgICdpUG9kIFNpbXVsYXRvcicsXHJcbiAgICAgICAgJ2lQYWQnLFxyXG4gICAgICAgICdpUGhvbmUnLFxyXG4gICAgICAgICdpUG9kJ1xyXG4gICAgXTtcclxuXHJcbiAgICBpZiAoISFuYXZpZ2F0b3IucGxhdGZvcm0pIHtcclxuICAgICAgICB3aGlsZSAoaURldmljZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0gPT09IGlEZXZpY2VzLnBvcCgpKXsgcmV0dXJuIHRydWU7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzTW9iaWxlKCl7XHJcbiAgICAvLyBXaW5kb3dzIFBob25lIG11c3QgY29tZSBmaXJzdCBiZWNhdXNlIGl0cyBVQSBhbHNvIGNvbnRhaW5zIFwiQW5kcm9pZFwiIVxyXG4gICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKC93aW5kb3dzIHBob25lL2kudGVzdCh1YSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGlzTW9iaWxlKClcclxuICogQGRlc2M6IERldGVjdHMgaWYgdGhlIGRldmljZSB5b3UgYXJlIHVzaW5nIGlzIGEgbW9iaWxlIG9yIG5vdFxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICogQGxpbms6IGh0dHBzOi8vY29kZXBlbi5pby9BbGxGb3JUaGVDb2RlL3Blbi9LUmJMZG1cclxuICovXG5leHBvcnQgZnVuY3Rpb24gSXNPcGVyYSgpIHtcclxuICAgIC8vIGxldCBpc0Nocm9taXVtID0gd2luZG93LmNocm9tZTtcclxuICAgIC8vIGxldCBpc09wZXJhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk9QUlwiKSA+IC0xIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPcGVyYVwiKSA+IC0xO1xyXG4gICAgLy8gbGV0IGlzT3BlcmEgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmF8T1BSXFwvLykgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgbGV0IGlzT3BlcmEgPSAoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDA7XHJcbiAgICByZXR1cm4gaXNPcGVyYTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzU2FmYXJpKCkge1xyXG4gICAgLy8gbGV0IGlzX3NhZmFyaSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSA+IC0xO1xyXG4gICAgLy8gcmV0dXJuIGlzX3NhZmFyaTtcclxuICAgIHJldHVybiAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RWxlbWVudFBvc2l0aW9uKGVsKSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3AsXHJcbiAgICAgICAgbGVmdDogZWwub2Zmc2V0TGVmdFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZWwub2Zmc2V0UGFyZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudFBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB0b3A6IGVsLm9mZnNldFBhcmVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IGVsLm9mZnNldFBhcmVudC5vZmZzZXRMZWZ0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcG9zaXRpb24udG9wICs9IHBhcmVudFBvc2l0aW9uLnRvcDtcclxuICAgICAgICBwb3NpdGlvbi5sZWZ0ICs9IHBhcmVudFBvc2l0aW9uLmxlZnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbn1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzRE9NKG9iaikge1xyXG4gICAgLy8gdGhpcyB3b3JrcyBmb3IgbmV3ZXIgYnJvd3NlcnNcclxuICAgIHRyeSB7IHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDsgfVxyXG5cclxuICAgICAgICAvLyB0aGlzIHdvcmtzIGZvciBvbGRlciBicm93c2Vyc1xyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgICAgIChvYmoubm9kZVR5cGUgPT09IDEpICYmICh0eXBlb2Ygb2JqLnN0eWxlID09PSBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgICAgICAodHlwZW9mIG9iai5vd25lckRvY3VtZW50ID09PSBcIm9iamVjdFwiKTtcclxuICAgIH1cclxufTtcbmV4cG9ydCBmdW5jdGlvbiBJc0VsZW1lbnQobykge1xyXG4gICAgbGV0IGFuc3dlciA9IChcclxuICAgICAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcclxuICAgICAgICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGFuc3dlciAhPSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzRWxlbWVudDIoZWxlbWVudCkge1xyXG4gICAgLy8gd29ya3Mgb24gbWFqb3IgYnJvd3NlcnMgYmFjayB0byBJRTdcclxuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudDtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRFbGVtZW50T2Zmc2V0VG9wKGVsZW1lbnRJZCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG4gICAgbGV0IGN1cnRvcCA9IDA7XHJcbiAgICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShcIm9mZnNldFBhcmVudFwiKSl7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjdXJ0b3AgKz0gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KTtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChbY3VydG9wXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIEhhc0NsYXNzKGVsZW1lbnRPcklkLCBjKSB7XHJcbiAgICBpZiAoaXNFbGVtZW50KGVsZW1lbnRPcklkKSkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50T3JJZC5jbGFzc0xpc3QuY29udGFpbnMoYyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50QnlJZChlbGVtZW50T3JJZCkuY2xhc3NMaXN0LmNvbnRhaW5zKGMpO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gU2V0SFRNTChlbGVtZW50T3JJZCwgc3RyKSB7XHJcbiAgICBsZXQgZWxlO1xyXG4gICAgaWYgKHR5cGVvZiAoZWxlbWVudE9ySWQpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWxlID0gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE9ySWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGUgPSBlbGVtZW50T3JJZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgZWxlLmlubmVySFRNTCA9IHN0cjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiU2V0SFRNTChlbGVtZW50T3JJZCwgc3RyKTogVXNhZ2UgZXJyb3I6IFVuYWJsZSB0byByZXRyaWV2ZSBlbGVtZW50IGlkIG9yIHVzZSBlbGVtZW50IFtcIiArIGVsZW1lbnRPcklkICsgXCJdXCI7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG5cclxufVxyXG5cclxuLyoqIGpzbyB7XHJcbiAqIFwiRnVuY3Rpb25cIjogXCJFdmVudE1hbmFnZXIuanNcIixcclxuICogXCJEZXNjcmlwdGlvblwiOiBcIkEgY2VudHJhbGlzZWQgZXZlbnQgc3RhY2sgd2hlcmUgeW91IGNhbiBob29rIHlvdXIgZnVuY3Rpb25zIC8gY2xhc3MncyBpbnRvIGZvciBjZW50cmFsaXNlZCBxdWljayBhbmQgZWFzeSBldmVudCBhcHBsaWNhdGlvbiBldmVudCBoYW5kbGluZy5cIixcclxuICogXCJNZXRob2RzXCI6IFtcclxuICogICAgICB7XHJcbiAqICAgICAgICAgIFwibmFtZVwiOiBcImxpc3RcIixcclxuICogICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxpc3RzIHdoaWNoIGV2ZW50cyBoYXZlIGJlZW4gY3JlYXRlZCBhbmQgYXZhaWxhYmxlIGZvciBkaXNwYXRjaCBpbiB0aGUgRXZlbnRNYW5hZ2VyLlwiLFxyXG4gICogICAgICAgICAgXCJyZXR1cm5zXCI6IFwiY29uc29sZS5sb2dcIixcclxuICogICAgICB9LFxyXG4gKiAgICAgIHtcclxuICogICAgICAgICAgXCJuYW1lXCI6IFwiYWRkXCIsXHJcbiAqICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBZGRzIG9yIGNyZWF0ZXMgYSBuZXcgZXZlbnQgd2l0aGluIHRoZSBldmVudCBtYW5hZ2VyIGFuZCBhdHRhY2hlZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIC8gbGlzdGVuZXIgb2JqZWN0IHRvIGJlIGNhbGxlZCBvbiBkaXNwYXRjaCBvZiB0aGlzIGV2ZW50LlwiLFxyXG4gKiAgICAgICAgICBcInBhcmFtZXRlcnNcIjogW1xyXG4gKiAgICAgICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50TmFtZVwiLFxyXG4gKiAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAqICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBhZGQuXCIsXHJcbiAqICAgICAgICAgICAgICB9LFxyXG4gKiAgICAgICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNhbGxiYWNrRnVuY3Rpb25cIixcclxuICAqICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICogICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGxpc3RlbmVyIG9iamVjdCAvIGZ1bmN0aW9uIHdoaWNoIGdldHMgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC5cIixcclxuICogICAgICAgICAgICAgIH0sXHJcbiAqICAgICAgICAgIF0sXHJcbiAqICAgICAgfSxcclxuICogICAgICB7XHJcbiAqICAgICAgICAgIFwibmFtZVwiOiBcImRpc3BhdGNoXCIsXHJcbiAqICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEaXNwYXRjaGVzIC8gVHJpZ2dlcnMgYW4gZXZlbnQgYnkgbmFtZSBmcm9tIHRoZSBFdmVudE1hbmFnZXIuXCIsXHJcbiAqICAgICAgICAgIFwicGFyYW1ldGVyc1wiOiBbXHJcbiAqICAgICAgICAgICAgICB7XHJcbiAqICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXZlbnROYW1lXCIsXHJcbiAqICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBcInRydWVcIixcclxuICogICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGRpc3BhdGNoLlwiLFxyXG4gKiAgICAgICAgICAgICAgfVxyXG4gKiAgICAgICAgICBdLFxyXG4gKiAgICAgIH0sXHJcbiAqICBdXHJcbiAqIH1cclxuICovXG5leHBvcnQgZnVuY3Rpb24gb25SZWFkeShmbikge1xyXG4gICAgLy8gSUU5K1xyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZuLCAxMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbiwgMTApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIFdvcmRMaW1pdGVyKHN0ciwgbWF4V29yZHMpIHtcclxuICAgIGxldCB3b3JkQ291bnQgPSBzdHIuc3BsaXQoL1xcUysvKS5sZW5ndGggLSAxO1xyXG4gICAgbGV0IHJlID0gbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcUysoPzpcXFxccytcXFxcUyspezAsXCIgKyAobWF4V29yZHMgLSAxKSArIFwifVwiKTtcclxuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xyXG4gICAgaWYgKHdvcmRDb3VudCA+PSBtYXhXb3Jkcykge1xyXG4gICAgICAgIG91dHB1dCA9IHN0ci5tYXRjaChyZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dHB1dCA9IHN0cjtcclxuICAgIH1cclxuICAgIHJldHVybiB7IG91dHB1dDogb3V0cHV0LCByZW1haW5pbmc6IChtYXhXb3JkcyAtIHdvcmRDb3VudCkgfTtcclxufVxyXG5cbmV4cG9ydCBjbGFzcyBYSFIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8veG1saHR0cHJlcXVlc3RcclxuXHJcbiAgICAgICAgLy8gdmFyIGRlZnNcclxuICAgICAgICB0aGlzLmFyZ3MgPSB7XHJcbiAgICAgICAgICAgIHVybDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1ldGhvZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogZmFsc2UsIC8vIGFrYSByZXF1ZXN0VHlwZSB0aGlzIGlzIGVpdGhlciBmb3JtIG9yIGpzb24geGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogZmFsc2UsIC8vIGZvciBjbGllbnRzaWRlIHByb2Nlc3NpbmcgcmVzcG9uc2UgZGF0YSB0eXBlXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDAsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBvbkVycm9yOiBmYWxzZSwgLy8gb25seSB0cmlnZ2VycyBpZiB0aGUgcmVxdWVzdCBjb3VsZG4ndCBiZSBtYWRlIGF0IGFsbFxyXG4gICAgICAgICAgICBvblByb2dyZXNzOiBmYWxzZSxcclxuICAgICAgICAgICAgb25DYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMudXJsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cmxQYXJhbXMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMueGhyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgYXJndW1lbnRzXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50c1swXSAmJiB0eXBlb2YgKGFyZ3VtZW50c1swXSkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1swXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmdzW2tleV0gPSBhcmd1bWVudHNbMF1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFyZ3MpO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGF0ZVxyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3MudXJsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gYFhIUigpOiBVc2FnZSBlcnJvcjogT3B0aW9uIFwidXJsXCIgaGFzIG5vdCBiZWVuIHNldCFcclxuUGxlYXNlIGVudGVyIGEgdmFsaWQgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvIWA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5tZXRob2QgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSBgWEhSKCk6IFVzYWdlIGVycm9yOiBPcHRpb24gXCJtZXRob2RcIiBoYXMgbm90IGJlZW4gc2V0IVxyXG5WYWxpZCBvcHRpb25zIGFyZTpcclxuICAgIFBPU1QsXHJcbiAgICBHRVRgO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLmRhdGEgIT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgdGhpcy5hcmdzLmRhdGFUeXBlLnRvTG93ZXJDYXNlKCkgIT09IFwianNvblwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpICE9PSBcImZvcm1cIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmFyZ3MuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSAhPT0gXCJ0ZXh0XCJcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSBgWEhSKCk6IFVzYWdlIGVycm9yOiBJbnZhbGlkIFwiZGF0YVR5cGVcIiBoYXMgYmVlbiBzZXQhXHJcblZhbGlkIG9wdGlvbnMgYXJlOlxyXG4gICAgSlNPTiAgICAgICAgLSBzZW5kIGpzb24gc3RyaW5nXHJcbiAgICBGT1JNICAgICAgICAtIHNlbmQgZm9ybSBvYmplY3RcclxuICAgIFRFWFQgICAgICAgIC0gc2VuZCB1cmwgc3RyaW5nXHJcbmA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3MucmVzcG9uc2VUeXBlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID1cclxuICAgICAgICAgICAgICAgIGBYSFIoKTogVXNhZ2Ugd2FybmluZzogT3B0aW9uIFwicmVzcG9uc2VUeXBlXCIgbm90IHNldCFcclxuVmFsaWQgb3B0aW9ucyBhcmU6XHJcbiAgICBqc29uIFxcdFxcdFxcdCBKU09OIChwYXJzZWQgYXV0b21hdGljYWxseSlcclxuICAgIGRvY3VtZW50IFxcdFxcdCBYTUwgRG9jdW1lbnQgKFhQYXRoIGV0YyksXHJcbiAgICB0ZXh0IFxcdFxcdFxcdCBzdHJpbmcsXHJcbiAgICBhcnJheWJ1ZmZlciBcXHQgQXJyYXlCdWZmZXIgZm9yIGJpbmFyeSBkYXRhLFxyXG4gICAgYmxvYiBcXHRcXHRcXHQgQmxvYiBmb3IgYmluYXJ5IGRhdGEsXHJcbmA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmFyZ3MucmVzcG9uc2VUeXBlLnRvTG93ZXJDYXNlKCkgIT0gXCJ0ZXh0XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwiZG9jdW1lbnRcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmFyZ3MucmVzcG9uc2VUeXBlLnRvTG93ZXJDYXNlKCkgIT0gXCJqc29uXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwiYXJyYXlidWZmZXJcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmFyZ3MucmVzcG9uc2VUeXBlLnRvTG93ZXJDYXNlKCkgIT0gXCJibG9iXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9XHJcbiAgICAgICAgICAgICAgICBgWEhSKCk6IFVzYWdlIGVycm9yOiBOb3QgYSB2YWxpZCBcInJlc3BvbnNlVHlwZVwiIHNwZWNpZmllZCBcIiR7dGhpcy5hcmdzLnJlc3BvbnNlVHlwZX1cIlxyXG5WYWxpZCBvcHRpb25zIGFyZTpcclxuICAgIGpzb24gXFx0XFx0XFx0IEpTT04gKHBhcnNlZCBhdXRvbWF0aWNhbGx5KVxyXG4gICAgZG9jdW1lbnQgXFx0XFx0IFhNTCBEb2N1bWVudCAoWFBhdGggZXRjKSxcclxuICAgIHRleHQgXFx0XFx0XFx0IHN0cmluZyxcclxuICAgIGFycmF5YnVmZmVyIFxcdCBBcnJheUJ1ZmZlciBmb3IgYmluYXJ5IGRhdGEsXHJcbiAgICBibG9iIFxcdFxcdFxcdCBCbG9iIGZvciBiaW5hcnkgZGF0YSxcclxuYDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5vbkNvbXBsZXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gYFhIUigpOiBVc2FnZSBlcnJvcjogT3B0aW9uIFwib25Db21wbGV0ZVwiIGhhcyBub3QgYmVlbiBzZXQhXHJcbllvdXIgbWFraW5nIGEgcmVxdWVzdCBidXQgYXJlIG5vdCBkb2luZyBhbnl0aGluZyB3aXRoIHRoZSByZXNwb25zZT8gTWFrZSBzdXJlIHRvIHN1cHBseSBhbiBvbkNvbXBsZXRlIGNhbGxiYWNrIGZ1bmN0aW9uLmA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWtlUmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG5cclxuICAgIG1ha2VSZXF1ZXN0KCkge1xyXG4gICAgICAgIHRoaXMueGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMueGhyLnRpbWVvdXQgPSB0aGlzLmFyZ3MudGltZW91dDtcclxuXHJcblxyXG4gICAgICAgIC8vIEdFVFxyXG4gICAgICAgIC8vIEFwcGVuZCBkYXRhIHZhcmlhYmxlcyB0byB1cmwgc3RyaW5nLCBvbmx5IGhhbmRsZSBqc29uLCBmb3JtIGFuZCBzdHJpbmdcclxuXHJcbiAgICAgICAgLy8gUE9TVHx8UFVUfHxERUxFVEV8fFBBVENIXHJcbiAgICAgICAgLy8gSWYganNvbiBzZW5kIGpzb24gb2JqZWN0XHJcbiAgICAgICAgLy8gSWYgZm9ybSBzZW5kIGZvcm0gb2JqZWN0XHJcbiAgICAgICAgLy8gSWYgdGV4dCBzZW5kIHN0cmluZ1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLm1ldGhvZC50b0xvd2VyQ2FzZSgpID09IFwiZ2V0XCIpIHtcclxuICAgICAgICAgICAgLy8gR0VUXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFyZ3MuZGF0YVR5cGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYXJncy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLmFyZ3MudXJsICsgXCI/XCIgKyB0aGlzLmFyZ3MuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvcm1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLmFyZ3MudXJsICsgXCI/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBvZiB0aGlzLmFyZ3MuZGF0YS5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdGhpcy5hcmdzLmRhdGEuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy51cmwgKyBlbmNvZGVVUkkoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJKHYpICsgXCImXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImpzb25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLmFyZ3MudXJsICsgXCI/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFyZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXJncy5kYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmFyZ3MuZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9nKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsICsgZW5jb2RlVVJJKGtleSkgKyBcIj1cIiArIGVuY29kZVVSSSh2KSArIFwiJlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnVybCA9IFwiICsgdGhpcy51cmwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLmFyZ3MudXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBQT1NUIHx8IFBVVCB8fCBQQVRDSCB8fCBERUxFVEVcclxuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLmFyZ3MudXJsXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gb3BlblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3MudXNlcm5hbWUgIT09IGZhbHNlICYmIHRoaXMuYXJncy5wYXNzd29yZCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy54aHIub3Blbih0aGlzLmFyZ3MubWV0aG9kLCB0aGlzLnVybCwgdGhpcy5hcmdzLnVzZXJuYW1lLCB0aGlzLmFyZ3MucGFzc3dvcmQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyLm9wZW4odGhpcy5hcmdzLm1ldGhvZCwgdGhpcy51cmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzcG9uc2VUeXBlXHJcbiAgICAgICAgdGhpcy54aHIucmVzcG9uc2VUeXBlID0gdGhpcy5hcmdzLnJlc3BvbnNlVHlwZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gU2V0IHJlcXVlc3RIZWFkZXIgdHlwZSBha2EgZGF0YVR5cGUgYW5kIHNlbmRcclxuICAgICAgICBpZiAodGhpcy5hcmdzLmRhdGFUeXBlICE9PSBmYWxzZSAmJiB0eXBlb2YodGhpcy5hcmdzLmRhdGFUeXBlKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hcmdzLmRhdGFUeXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJqc29uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHRoaXMuYXJncy5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZm9ybVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGtleSBvZiB0aGlzLmFyZ3MuZGF0YS5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHYgPSB0aGlzLmFyZ3MuZGF0YS5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coa2V5ICsgXCIgPSBcIiArIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhoci5zZW5kKHRoaXMuYXJncy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhoci5zZW5kKHRoaXMuYXJncy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54aHIuc2VuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFNlbmRcclxuICAgICAgICAvLyBpZiAodGhpcy5hcmdzLmRhdGEgIT09IGZhbHNlICYmIHRoaXMuYXJncy5kYXRhVHlwZSAhPT0gZmFsc2Upe1xyXG4gICAgICAgIC8vICAgICBsb2coXCJzZW5kaW5nIGRhdGFcIik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMueGhyLnNlbmQodGhpcy5hcmdzLmRhdGEpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMueGhyLnNlbmQoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzXHJcbiAgICAgICAgdGhpcy54aHIuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChlKSA9PiB0aGlzLnByb2dyZXNzSGFuZGxlcihlKSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGUpID0+IHRoaXMub25Mb2FkSGFuZGxlcihlKSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54aHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlKSA9PiB0aGlzLmVycm9ySGFuZGxlcihlKSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54aHIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIChlKSA9PiB0aGlzLmVycm9ySGFuZGxlcihlKSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54aHIuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWVvdXRcIiwgKGUpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGUpLCB0cnVlKTtcclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgZXJyb3JIYW5kbGVyKGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhIUi5lcnJvckhhbmRsZXIoKVwiKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5vbkVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgcHJvZ3Jlc3NIYW5kbGVyKGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhIUi5wcm9ncmVzc0hhbmRsZXIoKVwiKTtcclxuICAgICAgICAvLyBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCAke2UubG9hZGVkfSBvZiAke2UudG90YWx9IGJ5dGVzYCk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFJlY2VpdmVkICR7ZS5sb2FkZWR9IGJ5dGVzYCk7IC8vIG5vIENvbnRlbnQtTGVuZ3RoXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBSZWNlaXZlZCAke2V2ZW50LmxvYWRlZH0gb2YgJHtldmVudC50b3RhbH1gKTtcclxuICAgICAgICBpZiAodGhpcy5hcmdzLm9uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hcmdzLm9uUHJvZ3Jlc3MoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbiAgICBvbkxvYWRIYW5kbGVyKGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhIUi5vbkxvYWRIYW5kbGVyKClcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYERvbmUsIGdvdCAke3RoaXMueGhyLnJlc3BvbnNlLmxlbmd0aH0gYnl0ZXNgKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hcmdzLm9uQ29tcGxldGUoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbiAgICBnZXRSZXNwb25zZUhlYWRlcihuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcihuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIGdldEFsbFJlc3BvbnNlSGVhZGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy54aHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgZ2V0UmVzcG9uc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhoci5yZXNwb25zZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMueGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gdGhpcy5wcm9ncmVzc0hhbmRsZXIoZSkpO1xyXG4gICAgICAgIHRoaXMueGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB0aGlzLm9uTG9hZEhhbmRsZXIoZSkpO1xyXG4gICAgICAgIHRoaXMueGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSkpO1xyXG4gICAgICAgIHRoaXMueGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSkpO1xyXG4gICAgICAgIHRoaXMueGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsIChlKSA9PiB0aGlzLmVycm9ySGFuZGxlcihlKSk7XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0UmFuZG9tQm9vbGVhbigpe1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPj0gMC41O1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0UmFuZG9tRmxvYXQobWluLCBtYXgpIHtcclxuICAgIC8vIGxldCByID0gZnJvbSArIChNYXRoLnJhbmRvbSgpKiAodG8qMikpO1xyXG4gICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59O1xyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0UmFuZG9tVGhhdHNOb3QobWluLG1heCxub3Qpe1xyXG4gICAgbGV0IHIgPSBub3Q7IGxldCBsaW0gPSAxMDA7IGxldCBydW5zID0gMDtcclxuICAgIHdoaWxlIChyPT09bm90ICYmIHJ1bnMgPCBsaW0pe1xyXG4gICAgICAgIHJ1bnMrKztcclxuICAgICAgICByID0gZ2V0UmFuZG9tSW50KG1pbixtYXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJ1bnM+PWxpbSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQGZ1bmN0aW9uOiBnZXRSYW5kb21UaGF0c05vdChtaW4sbWF4LG5vdClcclxuICogQGRlc2M6IHJldHVybnMgYSByYW5kb20gaW50IGJldHdlbiB5b3VyIHNwZWNpZmllZCBtaW4gYW5kIG1heCB2YWx1ZXMgYnV0IG5ldmVyIHRoZSBub3QgdmFsdWVcclxuICogQHBhcmFtIG1pbiBudW1iZXI6IHRoZSBtaW5pbXVtIHlvdXIgcmFuZG9tIG51bWJlciBpcyBhbGxvd2VkIHRvIGdvXHJcbiAqIEBwYXJhbSBtYXggbnVtYmVyOiB0aGUgbWF4aW11bSB5b3VyIHJhbmRvbSBudW1iZXIgaXMgYWxsb3dlZCB0byBnb1xyXG4gKiBAYWxpYXM6IGdldFJhbmRvbVxyXG4gKiBAbGluazogaHR0cHM6Ly9jb2RlcGVuLmlvL0FsbEZvclRoZUNvZGUvcGVuL3lFQlpOcVxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRXZWlnaHRlZFJhbmRvbShvZGRzLCBpdGVyYXRpb25zKSB7XHJcbiAgICBpZiAoIW9kZHMpIHtcclxuICAgICAgICBvZGRzID0gW1xyXG4gICAgICAgICAgICAwLjY4LCAvLyAwXHJcbiAgICAgICAgICAgIDAuNjksIC8vIDFcclxuICAgICAgICAgICAgMC42OTgsIC8vIDJcclxuICAgICAgICAgICAgMC42OTA5LCAvLyAzXHJcbiAgICAgICAgICAgIDAuNjgsIC8vIDRcclxuICAgICAgICAgICAgMC41OCwgLy8gNVxyXG4gICAgICAgICAgICAwLjU3LCAvLyA2XHJcbiAgICAgICAgICAgIDAuNTYsIC8vIDdcclxuICAgICAgICAgICAgMC40LCAvLyA4XHJcbiAgICAgICAgICAgIDAuMywgLy8gOVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBsZXQgd2VpZ2h0cyA9IFtdO1xyXG4gICAgbGV0IHIgPSAwO1xyXG4gICAgbGV0IGlNYXggPSAwO1xyXG4gICAgbGV0IHdNYXggPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gb2Rkcykge1xyXG4gICAgICAgIGlmICghd2VpZ2h0c1tpXSkge1xyXG4gICAgICAgICAgICB3ZWlnaHRzW2ldID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlcmF0aW9uczsgeCsrKSB7XHJcbiAgICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAvL2xvZyhyLnRvRml4ZWQoMykgKyBcIiAgIFwiICsgb2Rkc1tpXS50b0ZpeGVkKDMpKTtcclxuICAgICAgICAgICAgaWYgKHIgPD0gb2Rkc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgd2VpZ2h0c1tpXSArPSBvZGRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2VpZ2h0c1tpXSA+IHdNYXgpIHtcclxuICAgICAgICAgICAgd01heCA9IHdlaWdodHNbaV07XHJcbiAgICAgICAgICAgIGlNYXggPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2xvZyh3ZWlnaHRzKTtcclxuICAgIC8vbG9nKFwid01heCA9IFwiICsgd01heCArIFwiICAgaU1heCA9IFwiICsgaU1heCk7XHJcbiAgICByZXR1cm4gaU1heDtcclxufTtcclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogZ2V0V2VpZ2h0ZWRSYW5kb20ob2RkcywgaXRlcmF0aW9ucylcclxuICogQGRlc2M6IEdldCBhIHdlaWdodGVkIHJhbmRvbSBiYXNlZCBvbiBvZGRzIGFuZCBpdGVyYXRpb25zXHJcbiAqIEBwYXJhbSBvZGRzIGFycmF5OiBhcnJheSBvZiBvZGRzXHJcbiAqIEBwYXJhbSBpdGVyYXRpb25zIG51bWJlcjogbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcnVuIG9uIGVhY2ggbnVtYmVyIHRlc3RcclxuICogQGxpbms6IGh0dHBzOi8vY29kZXBlbi5pby9BbGxGb3JUaGVDb2RlL3Blbi9SeXZXalpcclxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5lcnRpYVRvKGN1cnJlbnQsdGFyZ2V0LGFtb3VudCl7XHJcbiAgICBpZiAoYW1vdW50ID09IDEpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgbGV0IGRpc3RUb0dvID0gdGFyZ2V0IC0gY3VycmVudDtcclxuICAgIGxldCBkZWx0YSA9IGN1cnJlbnQgKyAoZGlzdFRvR28gKiBhbW91bnQpO1xyXG5cclxuICAgIGlmIChNYXRoLmFicyhkaXN0VG9HbykgPCAwLjAxKSB7XHJcbiAgICAgICAgZGlzdFRvR28gPSAwO1xyXG4gICAgICAgIGRlbHRhID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlbHRhO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzRXZlbihuKSB7XHJcbiAgICByZXR1cm4gbiAlIDIgPT09IDA7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gSXNPZGQobikge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKG4gJSAyKSA9PT0gMTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIE5vcm1hbGlzZVJhbmdlKG1pbiwgbWF4LCB2KSB7XHJcbiAgICBsZXQgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICBsZXQgc3RlcCA9IDEgLyByYW5nZTtcclxuICAgIGxldCByID0gKHN0ZXAgKiAodiAtIG1pbikpO1xyXG4gICAgaWYgKHYgPCBtaW4pIHtcclxuICAgICAgICByID0gMDtcclxuICAgIH0gZWxzZSBpZiAodiA+IG1heCkge1xyXG4gICAgICAgIHIgPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VBcnJheVRvRmxvYXQoYXJyKSB7XHJcbiAgICBsZXQgY29udmVydGVkO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb252ZXJ0ZWQgPSBwYXJzZUZsb2F0KGFycltpXSk7XHJcbiAgICAgICAgaWYgKGlzTmFOKGNvbnZlcnRlZCkpe1xyXG4gICAgICAgICAgICBhcnJbaV0gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycltpXSA9IGNvbnZlcnRlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlQXJyYXlUb0ludChhcnIpIHtcclxuICAgIGxldCBjb252ZXJ0ZWQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnZlcnRlZCA9IHBhcnNlSW50KGFycltpXSk7XHJcbiAgICAgICAgaWYgKGlzTmFOKGNvbnZlcnRlZCkpe1xyXG4gICAgICAgICAgICBhcnJbaV0gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycltpXSA9IGNvbnZlcnRlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gUm91bmRUbyh2LCBkZWMpIHtcclxuICAgIHJldHVybiArKE1hdGgucm91bmQoTnVtYmVyKHYgKyBcImUrXCIgKyBkZWMpKSArIFwiZS1cIiArIGRlYyk7XHJcbn1cclxuXG5leHBvcnQgY2xhc3MgRlBTTW9uaXRvciB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kb20gPSB7XHJcbiAgICAgICAgICAgIGZwczogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnBzU3RhY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YWNrU2l6ZSA9IDYwO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3QgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lRnBzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5hdmVyYWdlRnBzID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5pID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGVsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZwcyA9IGVsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZnBzU3RhY2sgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc3RhY2tTaXplKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICB0aGlzLmRlbHRhID0gKHRoaXMubm93IC0gdGhpcy5sYXN0KSAvIDEwMDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWVGcHMgPSAxL3RoaXMuZGVsdGE7XHJcbiAgICAgICAgLy8gbG9nKFwiY3VycmVudEZyYW1lRnBzID0gXCIgKyB0aGlzLmN1cnJlbnRGcmFtZUZwcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZnBzU3RhY2tbdGhpcy5pbmRleF0gPSB0aGlzLmN1cnJlbnRGcmFtZUZwcztcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yKHRoaXMuaT0wOyB0aGlzLmkgPCB0aGlzLnN0YWNrU2l6ZTsgdGhpcy5pKyspe1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsICs9IHRoaXMuZnBzU3RhY2tbdGhpcy5pXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXZlcmFnZUZwcyA9IE1hdGgucm91bmQoIHRoaXMudG90YWwvdGhpcy5zdGFja1NpemUgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZG9tLmZwcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLmZwcy5pbm5lclRleHQgPSB0aGlzLmF2ZXJhZ2VGcHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuc3RhY2tTaXplKXtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0RnBzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXZlcmFnZUZwcztcclxuICAgIH1cclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRHVUlEKCkge1xyXG4gICAgZnVuY3Rpb24gQW1pZ2EoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQW1pZ2EoKSArIEFtaWdhKCkgKyAnLScgKyBBbWlnYSgpICsgJy0nICsgQW1pZ2EoKSArICctJyArXHJcbiAgICAgICAgQW1pZ2EoKSArICctJyArIEFtaWdhKCkgKyBBbWlnYSgpICsgQW1pZ2EoKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFVJRChsZW4pIHtcclxuICAgIGlmIChsZW4gPiAzNCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdldFVJRChsZW5ndGgpOiBMaW1pdCBlcnJvcjogTGVuZ3RoIG11c3QgYmUgMzQgb3IgbG93ZXJcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgbGVuKTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzQWxwaGFOdW1lcmljKHYpIHtcclxuICAgIHJldHVybiAhKC9cXFcvLnRlc3QodikpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNBcnJheShpbnB1dCkge1xyXG4gICAgcmV0dXJuICEhaW5wdXQgJiYgaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5O1xyXG4gICAgLy9yZXR1cm4gYXJyLmNvbnN0cnVjdG9yID09PSBBcnJheTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbChpbnB1dCkge1xyXG4gICAgaWYgKHR5cGVvZiAoaW5wdXQpID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0Jvb2xlYW4oaW5wdXQpIHtcclxuICAgIGlmICh0eXBlb2YgKGlucHV0KSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNOdW1iZXIobikge1xyXG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzTnVtZXJpYyhuKSB7XHJcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQ3V0U3RyaW5nVG8ocywgbGVuKSB7XHJcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgbGVuKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEVzY2FwZUhUTUwoc3RyKSB7XHJcbiAgICBpZiAodHlwZW9mIChzdHIpICE9IFwic3RyaW5nXCIpIHsgY29uc29sZS5lcnJvcihcImVzY2FwZShhcmcpOiB1c2FnZSBlcnJvcjogYXJnIG5lZWRzIHRvIGJlIGEgc3RyaW5nIVwiKTsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgbGV0IHJlcGxhY2VtZW50cyA9IHtcclxuICAgICAgICBcIjxcIjogXCImbHQ7XCIsXHJcbiAgICAgICAgXCI+XCI6IFwiJmd0O1wiLFxyXG4gICAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXHJcbiAgICAgICAgXCJcXFwiXCI6IFwiJnF1b3Q7XCIsXHJcbiAgICAgICAgXCJgXCI6IFwiJiMwMzk7XCJcclxuICAgIH07XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1s8PiZcIl0vZywgZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIHJldHVybiByZXBsYWNlbWVudHNbY2hhcmFjdGVyXTtcclxuICAgIH0pO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0QW5jaG9yKHVybCkge1xyXG4gICAgaWYgKCF1cmwpIHsgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7IH1cclxuICAgIGxldCBhbmNob3JBdmFpbGFibGUgPSBpc0luU3RyaW5nKFwiI1wiLCB1cmwpO1xyXG4gICAgaWYgKGFuY2hvckF2YWlsYWJsZSkge1xyXG4gICAgICAgIHJldHVybiB1cmwuc2xpY2UodXJsLmxhc3RJbmRleE9mKCcjJykgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IEdldEFuY2hvcih1cmwpXHJcbiAqIEBkZXNjOiBHZXQgYW5jaG9yIGZyb20gdXJsXHJcbiAqIEBwYXJhbSBzdHJpbmcgdXJsOiBUaGUgdXJsIHRvIGdldCB0aGUgYW5jaG9yIGZyb21cclxuICogQGxpbms6XHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdldENsZWFuSlNPTlN0cmluZyAocykge1xyXG4gICAgLy8gcHJlc2VydmUgbmV3bGluZXMsIGV0YyAtIHVzZSB2YWxpZCBKU09OXHJcbiAgICBzID0gcy5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcXFxuXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFwnL2csIFwiXFxcXCdcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcXFxcXCInKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcJi9nLCBcIlxcXFwmXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxyL2csIFwiXFxcXHJcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxcXHQvZywgXCJcXFxcdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcYi9nLCBcIlxcXFxiXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxmL2csIFwiXFxcXGZcIik7XHJcbiAgICAvLyByZW1vdmUgbm9uLXByaW50YWJsZSBhbmQgb3RoZXIgbm9uLXZhbGlkIEpTT04gY2hhcnNcclxuICAgIHMgPSBzLnJlcGxhY2UoL1tcXHUwMDAwLVxcdTAwMTldKy9nLCBcIlwiKTtcclxuICAgIHJldHVybiBzO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RmlsZUV4dGVuc2lvbihpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0LnNsaWNlKChpbnB1dC5sYXN0SW5kZXhPZihcIi5cIikgLSAxID4+PiAwKSArIDIpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RmlsZUV4dGVuc2lvbjIoc3RyKSB7XHJcbiAgICAvLyBOZWVkcyBpbXByb3ZpbmdcclxuICAgIGxldCBleHQgPSBzdHIuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgIHJldHVybiBleHQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRMYXN0UGFydE9mVXJsKHVybCkge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuICAgIGxldCBwYXJ0ID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgcmV0dXJuIHBhcnQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRSYW5kb21TdHJpbmcobGVuKSB7XHJcbiAgICBsZXQgdGV4dCA9IFwiXCI7XHJcbiAgICBsZXQgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0U3RyaW5nQmV0d2VlbihzdHIsIHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiBzdHIuc3BsaXQoc3RhcnQpLnBvcCgpLnNwbGl0KGVuZCkuc2hpZnQoKS50cmltKCk7XHJcbn1cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogZ2V0U3RyaW5nQmV0d2VlbihpbnB1dCxzdGFydCxlbmQpXHJcbiAqIEBkZXNjOiBHZXRzIGEgc3RyaW5nIGJldHdlZW4gdHdvIG90aGVyIHN0cmluZ3NcclxuICogQHBhcmFtIHN0cmluZyBpbnB1dDogaW5wdXQgc3RyaW5nIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSBzdHJpbmcgc3RhcnQ6IHN0YXJ0IHN0cmluZyBtYXJrZXJcclxuICogQHBhcmFtIHN0cmluZyBlbmQ6IGVuZCBzdHJpbmcgbWFya2VyXHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4veHh4eHh4eFxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJpbmdzQmV0d2VlbjIoc3RyLCBzdGFydCwgZW5kKSB7XHJcbiAgICBsZXQgb3JpZyA9IHN0cjtcclxuICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICAvLyBsb2cob3JpZyk7XHJcbiAgICAvLyBsb2coXCItLS0tLS0tLVwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCZXR3ZWVuKCkge1xyXG4gICAgICAgIC8vIGxvZyhcIkNIRUNLSU5HOiBcIiArIHN0cik7XHJcbiAgICAgICAgbGV0IHN0YXJ0TWF0Y2hJbmRleCA9IHN0ci5pbmRleE9mKHN0YXJ0KTsgLy8gRmluZCBzdGFydCBtYXRjaFxyXG4gICAgICAgIC8vIGxvZyhcInN0YXJ0TWF0Y2hJbmRleDogXCIgKyBzdGFydE1hdGNoSW5kZXgpO1xyXG4gICAgICAgIGlmIChzdGFydE1hdGNoSW5kZXggPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICBsZXQgc3RhcnRDdXRJbmRleCA9IHN0YXJ0Lmxlbmd0aCArIHN0YXJ0TWF0Y2hJbmRleDsgLy8gY2FsYyBzdGFydCBjdXQgaW5kZXhcclxuICAgICAgICAvLyBsb2coXCJzdGFydEN1dEluZGV4OiBcIiArIHN0YXJ0Q3V0SW5kZXgpO1xyXG5cclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0Q3V0SW5kZXgsIHN0ci5sZW5ndGgpOyAvLyBMVHJpbSB0byBzdGFydCBjdXQgaW5kZXhcclxuICAgICAgICAvLyBsb2coXCJDVVQ6IFwiICsgc3RyKTtcclxuXHJcbiAgICAgICAgbGV0IGVuZE1hdGNoSW5kZXggPSBzdHIuaW5kZXhPZihlbmQpOyAvLyBmaW5kIGVuZCBtYXRjaCBpbmRleFxyXG4gICAgICAgIC8vIGxvZyhcImVuZE1hdGNoSW5kZXg6IFwiICsgZW5kTWF0Y2hJbmRleCk7XHJcbiAgICAgICAgaWYgKGVuZE1hdGNoSW5kZXggPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICBsZXQgYmV0d2VlbiA9IHN0ci5zdWJzdHJpbmcoMCwgZW5kTWF0Y2hJbmRleCk7IC8vIGdldCBzdHJpbmcgYmV0d2VlblxyXG4gICAgICAgIC8vIGxvZyhcImJldHdlZW46IFwiICsgYmV0d2Vlbik7XHJcbiAgICAgICAgbGV0IGVuZEN1dEluZGV4ID0gZW5kLmxlbmd0aCArIGVuZE1hdGNoSW5kZXg7XHJcbiAgICAgICAgLy9sb2coXCJlbmRDdXRJbmRleDogXCIgKyBlbmRDdXRJbmRleCk7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZyhlbmRDdXRJbmRleCwgc3RyLmxlbmd0aCk7IC8vIGN1dCBvZmYgZW5kIHN0cmluZ1xyXG4gICAgICAgIC8vbG9nKFwiRklOQUw6IFwiICsgc3RyKTtcclxuICAgICAgICByZXR1cm4gYmV0d2VlbjtcclxuICAgIH1cclxuICAgIGxldCBsaW0gPSA1MDA7IC8vIFdhbnQgdG8gbG9vcCBmb3JldmVyPyA1MDAgc2VlbXMgbGlrZSBhcmVhc29uYWJsZSBsaW1pdFxyXG4gICAgbGV0IHBvcyA9IDA7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIHdoaWxlIChwb3MgPD0gbGltICYmIHJlc3VsdCAhPSBmYWxzZSkge1xyXG4gICAgICAgIHBvcysrO1xyXG4gICAgICAgIHJlc3VsdCA9IGdldEJldHdlZW4oKTtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIC8vbG9nKFwiYmV0d2VlbltcIitpK1wiXSA9IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIC8vbG9nKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59XHJcbi8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGdldFN0cmluZ3NCZXR3ZWVuKHN0cixzdGFydCxlbmQpXHJcbiAqIEBkZXNjOiBHZXRzIGFsbCBzdHJpbmdzIGJldHdlZW4gdHdvIG90aGVyIHN0cmluZ3MgKG11bHRpIG1hdGNoKVxyXG4gKiBAcGFyYW0gc3RyaW5nIHN0cjogaW5wdXQgc3RyaW5nIHRvIGNoZWNrXHJcbiAqIEBwYXJhbSBzdHJpbmcgc3RhcnQ6IHN0YXJ0IHN0cmluZyBtYXJrZXJcclxuICogQHBhcmFtIHN0cmluZyBlbmQ6IGVuZCBzdHJpbmcgbWFya2VyXHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4veHh4eHh4eFxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRXb3JkQ291bnQoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KC9cXFMrLykubGVuZ3RoIC0gMTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEluU3RyaW5nKGZpbmQsc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihmaW5kKSAhPT0gLTE7IH1cbmV4cG9ydCBmdW5jdGlvbiBJc0luU3RyaW5nKGZpbmQsc291cmNlKSB7IHJldHVybiBzb3VyY2UuaW5kZXhPZihmaW5kKSAhPT0gLTE7IH1cbmV4cG9ydCBmdW5jdGlvbiBMVHJpbUJ5KHN0ciwgYnkpIHtcclxuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKGJ5LCBzdHIubGVuZ3RoKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJlbW92ZUZpbGVGcm9tUGF0aChwYXRoKSB7XHJcbiAgICAvL2xldCBwYSA9ICcvdGhpcy9pcy9hL2ZvbGRlci9hRmlsZS50eHQnO1xyXG4gICAgbGV0IHIgPSAvW15cXC9dKiQvO1xyXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZShyLCAnJyk7XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJUcmltQnkoc3RyLCB0cmltQnkpIHtcclxuICAgIHJldHVybiAoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gdHJpbUJ5KSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBUcmltU3RyaW5nQnkoc3RyLCB0cmltQnkpIHtcclxuICAgIHJldHVybiAoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gdHJpbUJ5KSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBVY0ZpcnN0KHMpIHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJ1xyXG4gICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpXHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0VtYWlsIChlbWFpbCkge1xyXG4gICAgbGV0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuIiwiaW1wb3J0IHtsb2csQXR0YWNoRGVidWcsRGVidWdUb30gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RBcHAge1xyXG5cclxuICAgIHByaXZhdGUgdDpudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkb21PdXQ6SFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBsb2coXCJUZXN0QXBwLmNvbnN0cnVjdG9yKClcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tT3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRcIik7XHJcbiAgICAgICAgbG9nKHRoaXMuZG9tT3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgdGhpcy50ICs9IDAuMTtcclxuXHJcbiAgICAgICAgdGhpcy5kb21PdXQuaW5uZXJIVE1MID0gXCJ0ID0gXCIgKyB0aGlzLnQudG9GaXhlZCgzKTtcclxuXHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtsb2csb25SZWFkeX0gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBUZXN0QXBwIH0gZnJvbSBcIi4vVGVzdEFwcFwiO1xyXG5cclxuXHJcbm9uUmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIG5ldyBUZXN0QXBwKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9