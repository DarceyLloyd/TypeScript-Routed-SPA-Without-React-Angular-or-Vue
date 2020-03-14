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

/***/ "./src/DevSite/About/About.ts":
/*!************************************!*\
  !*** ./src/DevSite/About/About.ts ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(/*! ../Page */ "./src/DevSite/Page.ts");
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    // var defs
    function About() {
        var _this = _super.call(this) || this;
        console.log("About.constructor()");
        return _this;
    }
    return About;
}(Page_1.Page));
exports.About = About;


/***/ }),

/***/ "./src/DevSite/Contact/Contact.ts":
/*!****************************************!*\
  !*** ./src/DevSite/Contact/Contact.ts ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(/*! ../Page */ "./src/DevSite/Page.ts");
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    // var defs
    function Contact() {
        var _this = _super.call(this) || this;
        console.log("Contact.constructor()");
        return _this;
    }
    return Contact;
}(Page_1.Page));
exports.Contact = Contact;


/***/ }),

/***/ "./src/DevSite/DevSite.ts":
/*!********************************!*\
  !*** ./src/DevSite/DevSite.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationHandler_1 = __webpack_require__(/*! ./NavigationHandler */ "./src/DevSite/NavigationHandler.ts");
var Home_1 = __webpack_require__(/*! ./Home/Home */ "./src/DevSite/Home/Home.ts");
var About_1 = __webpack_require__(/*! ./About/About */ "./src/DevSite/About/About.ts");
var Contact_1 = __webpack_require__(/*! ./Contact/Contact */ "./src/DevSite/Contact/Contact.ts");
var DevSite = /** @class */ (function () {
    function DevSite() {
        // console.log("DevSite.constructor()");
        this.pageHome = new Home_1.Home();
        this.pageAbout = new About_1.About();
        this.pageContact = new Contact_1.Contact();
        // Navigation handles would typically require access to page class instantiations
        // This is if we take this further to dynamic show/hide capabilities
        // Which again is far quicker and simpler than using react, vue or angular
        this.navigationHandler = new NavigationHandler_1.NavigationHandler();
    }
    return DevSite;
}());
exports.DevSite = DevSite;


/***/ }),

/***/ "./src/DevSite/Home/Home.ts":
/*!**********************************!*\
  !*** ./src/DevSite/Home/Home.ts ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(/*! ../Page */ "./src/DevSite/Page.ts");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    // var defs
    function Home() {
        var _this = _super.call(this) || this;
        console.log("Home.constructor()");
        return _this;
    }
    return Home;
}(Page_1.Page));
exports.Home = Home;


/***/ }),

/***/ "./src/DevSite/NavigationHandler.ts":
/*!******************************************!*\
  !*** ./src/DevSite/NavigationHandler.ts ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aftc_modules_1 = __webpack_require__(/*! aftc-modules */ "./node_modules/aftc-modules/aftc-modules.js");
var NavigationHandler = /** @class */ (function () {
    function NavigationHandler() {
        // console.log("NavigationHandler.constructor()");
        var _this = this;
        this.siteName = "dev1.com";
        this.browserTitle = "DEV1";
        this.activePage = "";
        this.domHome = document.getElementById("home");
        this.domAbout = document.getElementById("about");
        this.domContact = document.getElementById("contact");
        this.domNav = document.getElementById("nav");
        this.navItems = this.domNav.getElementsByTagName("a");
        // console.log(this.domNav);
        // console.log(this.navItems);
        // We want to prevent default on link click to stop page reloads
        for (var i = 0; i < this.navItems.length; i++) {
            // console.log(this.navItems[i]);
            var link = this.navItems[i];
            link.addEventListener("click", function (e) {
                e.preventDefault();
                _this.navClickHandler(e);
            });
        }
        // Watch for for browser back and forward
        window.onpopstate = function (e) {
            e.preventDefault();
            console.log(e);
        };
        // Show page start page the browser enters on
        var route = this.getRoute();
        this.showPage(route);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    NavigationHandler.prototype.navClickHandler = function (e) {
        // target page name is from link click which we
        // get from the event (e) currentTarget or target
        // console.log("e.currentTarget.href = " + e.currentTarget.href);
        // Get the route
        var route = this.getRoute(e.currentTarget.href);
        // show page
        this.showPage(route);
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    NavigationHandler.prototype.showPage = function (route) {
        // console.log("navigationHandler.showPage(route:"+ route + ")");
        var page = "";
        switch (route) {
            case "":
                this.domHome.style.display = "block";
                this.domAbout.style.display = "none";
                this.domContact.style.display = "none";
                break;
            case "about":
                this.domHome.style.display = "none";
                this.domAbout.style.display = "block";
                this.domContact.style.display = "none";
                break;
            case "contact":
                this.domHome.style.display = "none";
                this.domAbout.style.display = "none";
                this.domContact.style.display = "block";
                break;
            default:
                this.domHome.style.display = "block";
                this.domAbout.style.display = "none";
                this.domContact.style.display = "none";
                break;
        }
        var title = "";
        if (route == "") {
            title = this.browserTitle;
        }
        else {
            title = this.browserTitle + " > " + aftc_modules_1.UcFirst(route);
        }
        var state = {
            "pageTitle": title
        };
        // Set url via history
        history.pushState(state, title, route);
        // Set document title
        document.title = title;
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    NavigationHandler.prototype.getRoute = function (url) {
        // console.log("getRoute(url:"+url+")");
        if (url === void 0) { url = ""; }
        if (url === "") {
            url = self.location.href;
        }
        // console.log("this.url = " + url);
        var page = "";
        page = url.replace("https://", "");
        page = page.replace("http://", "");
        page = page.replace("www.", "");
        page = page.replace(this.siteName + "/", "");
        // console.log("getRoute(): page = " + page);
        return page;
    };
    return NavigationHandler;
}());
exports.NavigationHandler = NavigationHandler;


/***/ }),

/***/ "./src/DevSite/Page.ts":
/*!*****************************!*\
  !*** ./src/DevSite/Page.ts ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page = /** @class */ (function () {
    function Page() {
        this.visible = false;
    }
    Page.prototype.show = function () {
        console.log("Page.show()");
    };
    Page.prototype.hide = function () {
        console.log("Page.hide()");
    };
    return Page;
}());
exports.Page = Page;


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
var DevSite_1 = __webpack_require__(/*! ./DevSite/DevSite */ "./src/DevSite/DevSite.ts");
aftc_modules_1.onReady(function () {
    new DevSite_1.DevSite();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FmdGMtbW9kdWxlcy9hZnRjLW1vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RldlNpdGUvQWJvdXQvQWJvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RldlNpdGUvQ29udGFjdC9Db250YWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9EZXZTaXRlL0RldlNpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RldlNpdGUvSG9tZS9Ib21lLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXZTaXRlL05hdmlnYXRpb25IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXZTaXRlL1BhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLFFBQVE7O0FBRW5ELG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0Esb0JBQW9CLHVDQUF1QztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1AsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUlBQW1JO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSx1QkFBdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVMsTUFBTSxRQUFRO0FBQzlELFlBQVk7QUFDWix1Q0FBdUMsU0FBUyxTQUFTO0FBQ3pEO0FBQ0EsbUNBQW1DLGFBQWEsTUFBTSxZQUFZO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRU87Ozs7QUFJUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUCxtQ0FBbUMsc0VBQXNFLGNBQWM7O0FBRXZIO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQLGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EscUNBQXFDLGNBQWM7O0FBRW5ELDJEQUEyRDtBQUMzRDs7QUFFQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0EsbUNBQW1DLGNBQWM7O0FBRWpELHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPLGdDQUFnQyxvQ0FBb0M7QUFDcEUsa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsK0JBQStCLHlCQUF5QixnQ0FBZ0MsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsR0FBRztBQUNwSztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JyREEseUVBQStCO0FBRS9CO0lBQTJCLHlCQUFJO0lBRTNCLFdBQVc7SUFFWDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQztJQUlMLFlBQUM7QUFBRCxDQUFDLENBWDBCLFdBQUksR0FXOUI7QUFYWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEIseUVBQStCO0FBRS9CO0lBQTZCLDJCQUFJO0lBRTdCLFdBQVc7SUFFWDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7SUFDekMsQ0FBQztJQUlMLGNBQUM7QUFBRCxDQUFDLENBWDRCLFdBQUksR0FXaEM7QUFYWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQiwrR0FBd0Q7QUFDeEQsa0ZBQW1DO0FBQ25DLHVGQUFzQztBQUN0QyxpR0FBNEM7QUFFNUM7SUFTSTtRQUNJLHdDQUF3QztRQUV4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFHakMsaUZBQWlGO1FBQ2pGLG9FQUFvRTtRQUNwRSwwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBSUwsY0FBQztBQUFELENBQUM7QUF6QlksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBCLHlFQUErQjtBQUUvQjtJQUEwQix3QkFBSTtJQUUxQixXQUFXO0lBRVg7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7O0lBQ3RDLENBQUM7SUFJTCxXQUFDO0FBQUQsQ0FBQyxDQVh5QixXQUFJLEdBVzdCO0FBWFksb0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGakIsNEdBQXVDO0FBRXZDO0lBY0k7UUFDSSxrREFBa0Q7UUFEdEQsaUJBZ0NDO1FBcENPLGFBQVEsR0FBVyxVQUFVLENBQUM7UUFDOUIsaUJBQVksR0FBVyxNQUFNLENBQUM7UUFDL0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUszQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFFOUIsZ0VBQWdFO1FBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxpQ0FBaUM7WUFDakMsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBRXhELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1NBQ0w7UUFFRCx5Q0FBeUM7UUFDekMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUVELDZDQUE2QztRQUM3QyxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsa0VBQWtFO0lBSWxFLDJDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNiLCtDQUErQztRQUMvQyxpREFBaUQ7UUFDakQsaUVBQWlFO1FBRWpFLGdCQUFnQjtRQUNoQixJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEQsWUFBWTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELGtFQUFrRTtJQUlsRSxvQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixpRUFBaUU7UUFFakUsSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO1FBRXRCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxFQUFFO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZDLE1BQU07WUFDVixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxNQUFNO1lBQ1Y7Z0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsTUFBTTtTQUNiO1FBRUQsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBRXZCLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNiLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLEdBQUcsc0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksS0FBSyxHQUFHO1lBQ1IsV0FBVyxFQUFFLEtBQUs7U0FDckI7UUFFRCxzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZDLHFCQUFxQjtRQUNyQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0VBQWtFO0lBSWxFLG9DQUFRLEdBQVIsVUFBUyxHQUFnQjtRQUNyQix3Q0FBd0M7UUFEbkMsOEJBQWdCO1FBR3JCLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNaLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUM1QjtRQUVELG9DQUFvQztRQUVwQyxJQUFJLElBQUksR0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0MsNkNBQTZDO1FBRTdDLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFJTCx3QkFBQztBQUFELENBQUM7QUEzSVksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRjlCO0lBQUE7UUFFSSxZQUFPLEdBQVcsS0FBSyxDQUFDO0lBUzVCLENBQUM7SUFQRyxtQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBWFksb0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsNEdBQXlDO0FBQ3pDLHlGQUE0QztBQUU1QyxzQkFBTyxDQUFDO0lBQ0osSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gYWZ0Yy1tb2R1bGVzIHYxLjIuMlxuLy8gQXV0aG9yOiBEYXJjZXlAYWZ0Yy5pb1xuZXhwb3J0IGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lU3RhY2soKSB7XHJcbiAgICB2YXIgbWUgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQW5pbWF0aW9uRnJhbWVTdGFjaygpOiBFUlJPUiAtIFVuYWJsZSB0byBhY2Nlc3Mgd2luZG93IVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5hZnRjQW5pbVN0YWNrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UnVuOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjk5OTk5KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmFmdGNBbmltU3RhY2suZmlyc3RSdW4pe1xyXG4gICAgICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5maXJzdFJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NGblN0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0ZuU3RhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICh3aW5kb3cuYWZ0Y0FuaW1TdGFjayl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2sgPSBbXTtcclxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NGblN0YWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoIXdpbmRvdy5hZnRjQW5pbVN0YWNrLmVuYWJsZWQpeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjay5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZnRjQW5pbVN0YWNrLnN0YWNrW2ldLmZuKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnByb2Nlc3NGblN0YWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKHVpZCxmbil7XHJcbiAgICAgICAgd2luZG93LmFmdGNBbmltU3RhY2suc3RhY2sucHVzaCh7XHJcbiAgICAgICAgICAgIHVpZDogdWlkLFxyXG4gICAgICAgICAgICBmbjogZm5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uKHVpZCl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjay5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFja1tpXS51aWQgPT09IHVpZCl7XHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjayA9IGFycmF5UmVtb3ZlSXRlbSh3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjayxmbik7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWZ0Y0FuaW1TdGFjay5zdGFjay5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogQW5pbWF0aW9uRnJhbWVTdGFjaygpXHJcbiAqIEBkZXNjOiBHaXZlcyBlYXN5IGFjY2VzcyB0byBhIHNpbmdsZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCB3aGljaCB5b3UgY2FuIGFkZCBmdW5jdGlvbnMgdG8gcHJvY2VzcyBpbiBlYWNoIGxvb3AsIG5vdGUgdGhlIGZ1bmN0aW9uIHN0YWNrIGlzIHN0b3JlZCBvbiBnbG9iYWwgd2luZG93IHNjb3BlXHJcbiAqIEBtZXRob2QgYWRkOiBhZGQgYSBmdW5jdGlvbiB0byB0aGUgc3RhY2sgdG8gYmUgZXhlY3V0ZWQgb24gYW5pbWF0aW9uRnJhbWVMb29wXHJcbiAqIEBtZXRob2QgcmVtb3ZlOiByZW1vdmUgYSBmdW5jdGlvbiBmcm9tIHRoZSBzdGFja1xyXG4gKiBAbWV0aG9kIHN0YXJ0OiBzdGFydCB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3BcclxuICogQG1ldGhvZCBzdG9wOiBzdG9wIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcFxyXG4gKiBAbWV0aG9kIGRpc3Bvc2U6IGRpc3Bvc2Ugb2YgYWxsIGZ1bmN0aW9ucyBpbiB0aGUgZnVuY3Rpb24gc3RhY2tcclxuICogQGxpbms6XHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEFyZ3NUb09iamVjdChmQXJncywgb2JqLCBzdHJpY3QpIHtcclxuICAgIGlmIChmQXJnc1swXSAmJiB0eXBlb2YgKGZBcmdzWzBdKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGxldCBhcmdzID0gZkFyZ3NbMF07XHJcblxyXG4gICAgICAgIGlmIChzdHJpY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdHJpY3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJncyAmJiB0eXBlb2YgKGFyZ3MpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyaWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gYXJnc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImFyZ3NUb09iamVjdCgpOiBBcmd1bWVudCBbXCIgKyBrZXkgKyBcIl0gaXMgbm90IHN1cHBvcnRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGFyZ3Nba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQGZ1bmN0aW9uOiBhcmdzVG9PYmplY3QoZkFyZ3MsIG9iaiwgc3RyaWN0KVxyXG4gKiBAZGVzYzogUXVpY2sgYW5kIGVhc3kgYXJncyB0byBvYmplY3RcclxuICogQHBhcmFtIGFyZ3Mgb2JqZWN0OiBhcmd1bWVudHMgKGZyb20gdGhlIGZ1bmN0aW9uIHN0cnVjdHVyZSwgdHlwaWNhbGx5IGNvZGUgd2lsbCBhbHdheXMgYmUgJ2FyZ3VtZW50cydcclxuICogQHBhcmFtIG9iaiBvYmplY3Q6IG9iamVjdCB0byBwYXJzZSBpbnRvXHJcbiAqIEBwYXJhbSBzdHJpY3QgYm9vbGVhbjogY29uc29sZS53YXJuIGFueSBhcmdzIHRoYXQgaGF2ZSBiZWVuIHN1cHBsaWVkIHRoYXQgZG9uJ3QgZXhpc3QgaW4gYXJnc1xyXG4gKiBAcmV0dXJuOiBudWxsXHJcbiAqIEBhbGlhczogYXJnc1RvXHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4vUGFxYktOXHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdldEJyb3dzZXIgKCkge1xyXG4gICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgdGVtLCBNID0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcclxuICAgIGlmICgvdHJpZGVudC9pLnRlc3QoTVsxXSkpIHtcclxuICAgICAgICB0ZW0gPSAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWModWEpIHx8IFtdO1xyXG4gICAgICAgIHJldHVybiAnSUUnO1xyXG4gICAgfVxyXG4gICAgaWYgKE1bMV0gPT09ICdDaHJvbWUnKSB7XHJcbiAgICAgICAgdGVtID0gdWEubWF0Y2goL1xcYk9QUlxcLyhcXGQrKS8pO1xyXG4gICAgICAgIGlmICh0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ09wZXJhJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBNID0gTVsyXSA/IFtNWzFdLCBNWzJdXSA6IFtuYXZpZ2F0b3IuYXBwTmFtZSwgbmF2aWdhdG9yLmFwcFZlcnNpb24sICctPyddO1xyXG4gICAgaWYgKCh0ZW0gPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKSkgIT0gbnVsbCkge1xyXG4gICAgICAgIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTVswXTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEJyb3dzZXJYKCl7XHJcbiAgICBsZXQgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc0NTUzFDb21wYXQgPSAoKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiKTtcclxuXHJcbiAgICBsZXQgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICAvLyBsZXQgeSA9IHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cclxuICAgIHJldHVybiB4O1xyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRCcm93c2VyWSgpe1xyXG4gICAgbGV0IHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaXNDU1MxQ29tcGF0ID0gKChkb2N1bWVudC5jb21wYXRNb2RlIHx8IFwiXCIpID09PSBcIkNTUzFDb21wYXRcIik7XHJcblxyXG4gICAgLy8gbGV0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgbGV0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IGlzQ1NTMUNvbXBhdCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICByZXR1cm4geTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0luVmlld3BvcnQoZWwpe1xyXG4gICAgbGV0IHRvcCA9IGVsLm9mZnNldFRvcDtcclxuICAgIGxldCBsZWZ0ID0gZWwub2Zmc2V0TGVmdDtcclxuICAgIGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IGVsLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICB3aGlsZShlbC5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgICAgICB0b3AgKz0gZWwub2Zmc2V0VG9wO1xyXG4gICAgICAgIGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHRvcCA8ICh3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQpICYmXHJcbiAgICAgICAgbGVmdCA8ICh3aW5kb3cucGFnZVhPZmZzZXQgKyB3aW5kb3cuaW5uZXJXaWR0aCkgJiZcclxuICAgICAgICAodG9wICsgaGVpZ2h0KSA+IHdpbmRvdy5wYWdlWU9mZnNldCAmJlxyXG4gICAgICAgIChsZWZ0ICsgd2lkdGgpID4gd2luZG93LnBhZ2VYT2Zmc2V0XHJcbiAgICApO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgYm91bmRpbmcgPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAvLyByZXR1cm4gKFxyXG4gICAgLy8gICAgIGJvdW5kaW5nLnRvcCA+PSAwICYmXHJcbiAgICAvLyAgICAgYm91bmRpbmcubGVmdCA+PSAwICYmXHJcbiAgICAvLyAgICAgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcclxuICAgIC8vICAgICBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG4gICAgLy8gKTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUNsZWFyKGFycikge1xyXG4gICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7IGFyci5wb3AoKTsgfVxyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5Q29udGFpbnMobmVlZGxlLCBoYXlzdGFjaykge1xyXG4gICAgaWYgKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xKSB7IHJldHVybiB0cnVlOyB9IGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RW1wdHkoYXJyKSB7XHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHsgYXJyLnBvcCgpOyB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUdldE1heChhcnIpIHtcclxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBhcnIpO1xyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUdldE1pbihhcnIpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBhcnIpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQXJyYXlNYXgoYXJyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgYXJyKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5TWluKGFycikge1xyXG4gICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIGFycik7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcnJheVJlbW92ZUluZGV4KGFycixpbmRleCl7XHJcbiAgICBhcnIuc3BsaWNlKGluZGV4LDEpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5UmVtb3ZlSXRlbShhcnIsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPSB2YWx1ZTtcclxuICAgIH0pO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gQXJyYXlTaHVmZmxlKGFycikge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IGFyci5sZW5ndGgsXHJcbiAgICAgICAgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xyXG5cclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXHJcbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XHJcblxyXG4gICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxyXG4gICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcclxuICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcclxuXHJcbiAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgYXJyW2N1cnJlbnRJbmRleF0gPSBhcnJbcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGFycltyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEFycmF5U2h1ZmZsZTIoYSkge1xyXG4gICAgbGV0IHgsIHQsIHIgPSBuZXcgVWludDMyQXJyYXkoMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgYyA9IGEubGVuZ3RoIC0gMSwgbSA9IGEubGVuZ3RoOyBpIDwgYzsgaSsrICwgbS0tKSB7XHJcbiAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyKTtcclxuICAgICAgICB4ID0gTWF0aC5mbG9vcihyIC8gNjU1MzYgLyA2NTUzNiAqIG0pICsgaTtcclxuICAgICAgICB0ID0gYVtpXSwgYVtpXSA9IGFbeF0sIGFbeF0gPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNJbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcclxuICAgIGlmIChoYXlzdGFjay5pbmRleE9mKG5lZWRsZSkgPiAtMSkgeyByZXR1cm4gdHJ1ZTsgfSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc1N0cmluZ0luQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xyXG4gICAgcmV0dXJuIChuZXcgUmVnRXhwKCcoJyArIGhheXN0YWNrLmpvaW4oJ3wnKS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJykgKyAnKSQnKSkudGVzdChuZWVkbGUpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2xUb1N0cmluZyAoYm9vbCkge1xyXG5cclxuICAgIGlmICghYm9vbCB8fCBib29sID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIChib29sKSAhPSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUZUQy5qczogQ29udmVyc2lvbi5qczogYm9vbFRvU3RyaW5nKHN0cik6IEVycm9yIC0gaW5wdXQgaXMgbm90IGEgYm9vbGVhbiFcIik7XHJcbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgIHJldHVybiBcInRydWVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiZmFsc2VcIjtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIEJvb2xUb1llc05vIChiKSB7XHJcblxyXG4gICAgaWYgKCFiIHx8IGIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgKGIpICE9IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCb29sVG9ZZXNObyhzdHIpOiBFcnJvciAtIGlucHV0IGlzIG5vdCBhIGJvb2xlYW4hXCIpO1xyXG4gICAgICAgIHJldHVybiBcImVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGIpIHtcclxuICAgICAgICByZXR1cm4gXCJ5ZXNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwibm9cIjtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIERlZ1RvUmFkKGlucHV0KSB7IHJldHVybiBpbnB1dCAqIChNYXRoLlBJIC8gMTgwKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIEhleFRvUmdiIChoZXgpIHtcclxuICAgIGxldCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICAgIH0gOiBudWxsO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gTnVtVG9IZXggKG51bSkge1xyXG4gICAgcmV0dXJuIG51bS50b1N0cmluZygxNik7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBSYWRUb0RlZyhpbnB1dCkgeyByZXR1cm4gaW5wdXQgKiAoMTgwIC8gTWF0aC5QSSk7IH1cbmV4cG9ydCBmdW5jdGlvbiBSR0JUb0hleCAociwgZywgYikge1xyXG4gICAgcmV0dXJuICgociA8PCAxNikgfCAoZyA8PCA4KSB8IGIpLnRvU3RyaW5nKDE2KTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBSR0JUb0hleDIgKHIsIGcsIGIpIHtcclxuICAgIGZ1bmN0aW9uIGdldEhleChjKSB7XHJcbiAgICAgICAgbGV0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgICB9XHJcbiAgICBsZXQgaGV4ID0gXCIjXCIgKyBnZXRIZXgocikgKyBnZXRIZXgoZykgKyBnZXRIZXgoYik7XHJcbiAgICBoZXggPSBoZXgudG9VcHBlckNhc2UoKTtcclxuICAgIHJldHVybiBoZXg7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBTdHJpbmdUb0Jvb2wgKHN0cikge1xyXG5cclxuICAgIGlmICghc3RyIHx8IHN0ciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiAoc3RyKSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdHJpbmdUb0Jvb2woc3RyKTogRXJyb3IgLSBpbnB1dCBzdHJpbmcgaXMgbm90IHZhbGlkIVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChzdHIudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgXCJ5XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwieWVzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRydWVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldENvb2tpZShuYW1lKSB7XHJcblx0Ly9yZXR1cm4gLmNvb2tpZShuYW1lKTtcclxuXHR2YXIga2V5VmFsdWUgPSBkb2N1bWVudC5jb29raWUubWF0Y2goJyhefDspID8nICsgbmFtZSArICc9KFteO10qKSg7fCknKTtcclxuXHRyZXR1cm4ga2V5VmFsdWUgPyBrZXlWYWx1ZVsyXSA6IG51bGw7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBTZXRDb29raWUobmFtZSwgdmFsdWUpIHtcclxuXHQvL2RvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgXCI7IGV4cGlyZXM9VGh1LCAxOCBEZWMgMjAxMyAxMjowMDowMCBHTVRcIjtcclxuXHQvLy5jb29raWUobmFtZSwgdmFsdWUsIHtleHBpcmVzOjM2NSxwYXRoOicvY29va2llcyd9KTtcclxuXHR2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XHJcblx0ZXhwaXJlcy5zZXRUaW1lKGV4cGlyZXMuZ2V0VGltZSgpICsgKDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcblx0ZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJztleHBpcmVzPScgKyBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXREYXlzQmV0d2VlbiAoc3RhcnREYXRlVGltZSwgZW5kRGF0ZVRpbWUpIHtcclxuICAgIGxldCBtc1BlckRheSA9IDguNjRlNztcclxuICAgIC8vIENvcHkgZGF0ZXMgc28gZG9uJ3QgbWVzcyB0aGVtIHVwXHJcbiAgICBsZXQgc2QgPSBuZXcgRGF0ZShzdGFydERhdGVUaW1lKTtcclxuICAgIGxldCBlZCA9IG5ldyBEYXRlKGVuZERhdGVUaW1lKTtcclxuICAgIC8vIFNldCB0byBub29uIC0gYXZvaWQgRFNUIGVycm9yc1xyXG4gICAgc2Quc2V0SG91cnMoMTIsIDAsIDApO1xyXG4gICAgZWQuc2V0SG91cnMoMTIsIDAsIDApO1xyXG4gICAgLy8gUm91bmQgdG8gcmVtb3ZlIGRheWxpZ2h0IHNhdmluZyBlcnJvcnNcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChlZCAtIHNkKSAvIG1zUGVyRGF5KTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRNeVNRTERhdGVUaW1lU3RyaW5nKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgbGV0IGRheSA9IG5vdy5nZXREYXRlKCk7XHJcbiAgICBsZXQgaG91ciA9IG5vdy5nZXRIb3VycygpO1xyXG4gICAgbGV0IG1pbnV0ZSA9IG5vdy5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgc2Vjb25kID0gbm93LmdldFNlY29uZHMoKTtcclxuICAgIGlmIChtb250aC50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF5LnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xyXG4gICAgfVxyXG4gICAgaWYgKGhvdXIudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBob3VyID0gJzAnICsgaG91cjtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGUudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBtaW51dGUgPSAnMCcgKyBtaW51dGU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Vjb25kLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgc2Vjb25kID0gJzAnICsgc2Vjb25kO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0ciA9IHllYXIgKyAnLycgKyBtb250aCArICcvJyArIGRheSArICcgJyArIGhvdXIgKyAnOicgKyBtaW51dGUgKyAnOicgKyBzZWNvbmQ7XHJcbiAgICByZXR1cm4gc3RyO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFVLRGF0ZShkdGUpe1xyXG4gICAgbGV0IG91dHB1dCA9IGR0ZS5nZXREYXkoKSArIFwiLVwiICsgKGR0ZS5nZXRNb250aCgpKzEpICsgXCItXCIgKyBkdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRVa0RhdGVGcm9tRGJEYXRlVGltZSAoaW5wdXQpIHtcclxuICAgIC8vIFwiMjAxNi0wNC0wOCAyMToxMTo1OVwiIHRvIFVLIGRhdGVcclxuICAgIGlmIChpbnB1dCA9PT0gXCJcIiB8fCBpbnB1dCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIm5vIGlucHV0XCI7XHJcbiAgICB9XHJcbiAgICBsZXQgRGF0ZVRpbWUgPSBpbnB1dC5zcGxpdChcIiBcIik7XHJcbiAgICBsZXQgRGF0ZVBhcnRzID0gRGF0ZVRpbWVbMF0uc3BsaXQoXCItXCIpO1xyXG4gICAgbGV0IFVLRGF0ZSA9IERhdGVQYXJ0c1syXSArIFwiL1wiICsgRGF0ZVBhcnRzWzFdICsgXCIvXCIgKyBEYXRlUGFydHNbMF07XHJcbiAgICByZXR1cm4gVUtEYXRlO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0VWtEYXRlVGltZUZyb21EYkRhdGVUaW1lICAoaW5wdXQpIHtcclxuICAgIC8vIFwiMjAxNi0wNC0wOCAyMToxMTo1OVwiIHRvIFVLIGRhdGUgdGltZVxyXG4gICAgbGV0IERhdGVUaW1lID0gaW5wdXQuc3BsaXQoXCIgXCIpO1xyXG4gICAgbGV0IERhdGVQYXJ0cyA9IERhdGVUaW1lWzBdLnNwbGl0KFwiLVwiKTtcclxuICAgIGxldCBUaW1lUGFydHMgPSBEYXRlVGltZVsxXS5zcGxpdChcIjpcIik7XHJcbiAgICBsZXQgVUtEYXRlID0gRGF0ZVBhcnRzWzJdICsgXCIvXCIgKyBEYXRlUGFydHNbMV0gKyBcIi9cIiArIERhdGVQYXJ0c1swXTtcclxuICAgIGxldCBUaW1lID0gVGltZVBhcnRzWzBdICsgXCI6XCIgKyBUaW1lUGFydHNbMV07XHJcbiAgICByZXR1cm4gKFVLRGF0ZSArIFwiIFwiICsgVGltZSk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRVU0RhdGUoZHRlKXtcclxuICAgIGxldCBvdXRwdXQgPSBkdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKGR0ZS5nZXRNb250aCgpKzEpICsgXCItXCIgKyAoZHRlLmdldERheSgpKzEpXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG8oZWxlbWVudE9ySWQsbXNnLGVuZE9mTGluZT1cIjxicj5cIil7XHJcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnQobykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxyXG4gICAgICAgICAgICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbGUgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YoZWxlbWVudE9ySWQpID09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgIGVsZW1lbnRPcklkID0gZWxlbWVudE9ySWQucmVwbGFjZShcIiNcIixcIlwiKTtcclxuICAgICAgICBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50T3JJZCk7XHJcbiAgICAgICAgaWYgKCFlbGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQXBwZW5kVG8oKTogVW5hYmxlIHRvIGZpbmQgSUQgJ1wiICsgZWxlbWVudE9ySWQgKyBcIicgb24gdGhlIERPTSFcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZSA9IGVsZW1lbnRPcklkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0VsZW1lbnQoZWxlKSl7XHJcbiAgICAgICAgZWxlLmlubmVySFRNTCA9IGVsZS5pbm5lckhUTUwgKyBtc2cgKyBlbmRPZkxpbmU7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXBwZW5kVG8oKTogVW5hYmxlIHRvIGxvZyB0byBlbGVtZW50IG9yIGlkIHByb3ZpZGVkIVwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVsZW1lbnRPcklkKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIEF0dGFjaERlYnVnKG5vLGVsZSkge1xyXG4gICAgLy8gcmV0dXJuIGlkJ3Mgbm90IHRoZSBkaXYgY3JlYXRlIGVsZW1lbnRzIGFzIHRoZXNlIGFyZSB0eXBlIG9mIG9iamVjdCBhbmQgbm90IGh0bWwgZWxlbWVudFxyXG4gICAgbGV0IGlkcyA9IFtdO1xyXG5cclxuICAgIGxldCBkZWJ1Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWJ1Z0NvbnRhaW5lci5pZCA9IFwiZGVidWctY29udGFpbmVyXCI7XHJcbiAgICBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGRlYnVnQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gXCI1cHhcIjtcclxuICAgIGRlYnVnQ29udGFpbmVyLnN0eWxlLnRvcCA9IFwiNXB4XCI7XHJcbiAgICBkZWJ1Z0NvbnRhaW5lci5zdHlsZS50ZXh0QWxnaW4gPSBcInJpZ2h0XCI7XHJcblxyXG5cclxuICAgIHdpbmRvdy5hZnRjRGVidWcgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vOyBpKyspIHtcclxuICAgICAgICBsZXQgciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5OTk5OTk5OTk5KTtcclxuICAgICAgICBsZXQgaWQgPSBcImFmdGMtZGVidWctY29udGFpbmVyLVwiICsgcjtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuaWQgPSBpZDtcclxuICAgICAgICBkaXYuc3R5bGUubWluV2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgICAvLyBkaXYuc3R5bGUuaGVpZ2h0ID0gXCIyMHB4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiM3B4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLmJvcmRlciA9IFwiMXB4IGRhc2hlZCAjOTk5OTk5XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLnBhZGRpbmcgPSBcIjFweCAycHggMnB4IDRweFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJSR0JBKDI1NSwyNTUsMjU1LDAuOTIpXCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkZWJ1Zy1yb3dcIik7XHJcbiAgICAgICAgZGVidWdDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5uZXJIVE1MKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFmdGNEZWJ1Zy5wdXNoKGRpdik7XHJcbiAgICAgICAgaWRzLnB1c2goaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZSl7XHJcbiAgICAgICAgZWxlLmFwcGVuZENoaWxkKGRlYnVnQ29udGFpbmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWJ1Z0NvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFwiQXR0YWNoRGVidWcoKTogQXR0YWNoZWQhXCIpO1xyXG4gICAgY29uc29sZS53YXJuKFwiQXR0YWNoRGVidWcoKTogVXNlIERlYnVnVG8oaW5kZXgsc3RyaW5nKSB0byB3cml0ZSBkaXJlY3RseSB0byBkZWJ1ZyBlbGVtZW50cy5cIik7XHJcbiAgICByZXR1cm4gaWRzO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gRGVidWdUbyhpbmRleCxzdHIpe1xyXG4gICAgaWYgKHdpbmRvdy5hZnRjRGVidWdbaW5kZXhdKXtcclxuICAgICAgICB3aW5kb3cuYWZ0Y0RlYnVnW2luZGV4XS5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2coYXJnKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmcpO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1RvKGVsZW1lbnRPcklkLG1zZyxhcHBlbmQ9ZmFsc2UsZW5kT2ZMaW5lPVwiXCIpe1xyXG4gICAgZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcclxuICAgICAgICAgICAgICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWxlID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mKGVsZW1lbnRPcklkKSA9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICBlbGVtZW50T3JJZCA9IGVsZW1lbnRPcklkLnJlcGxhY2UoXCIjXCIsXCJcIik7XHJcbiAgICAgICAgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE9ySWQpO1xyXG4gICAgICAgIGlmICghZWxlKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkxvZ1RvKCk6IFVuYWJsZSB0byBmaW5kIElEICdcIiArIGVsZW1lbnRPcklkICsgXCInIG9uIHRoZSBET00hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGUgPSBlbGVtZW50T3JJZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNFbGVtZW50KGVsZSkpe1xyXG4gICAgICAgIGlmIChhcHBlbmQgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gZWxlLmlubmVySFRNTCArIG1zZyArIGVuZE9mTGluZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gbXNnICsgZW5kT2ZMaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dUbygpOiBVbmFibGUgdG8gbG9nIHRvIGVsZW1lbnQgb3IgaWQgcHJvdmlkZWQhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZWxlbWVudE9ySWQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0SUVWZXJzaW9uICgpIHtcclxuICAgIGxldCBtYXRjaCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyg/Ok1TSUUgfFRyaWRlbnRcXC8uKjsgcnY6KShcXGQrKS8pO1xyXG4gICAgcmV0dXJuIG1hdGNoID8gcGFyc2VJbnQobWF0Y2hbMV0pIDogdW5kZWZpbmVkO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0T1ModGVzdEFnZW50KSB7XHJcbiAgICBsZXQgdXNlckFnZW50O1xyXG5cclxuICAgIGlmICghdGVzdEFnZW50KXtcclxuICAgICAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyQWdlbnQgPSB0ZXN0QWdlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlckFnZW50ID0gdXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gV2luZG93cyBQaG9uZSBtdXN0IGNvbWUgZmlyc3QgYmVjYXVzZSBpdHMgVUEgYWxzbyBjb250YWlucyBcIkFuZHJvaWRcIiFcclxuICAgIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwid2luZG93cyBwaG9uZVwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhbXN1bmcgQnJvd3NlciBkZXRlY3Rpb24gUzhcclxuICAgIGlmICgvc2Ftc3VuZ2Jyb3dzZXIvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImFuZHJvaWRcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiYW5kcm9pZFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvaXBhZHxpcGhvbmV8aXBvZC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiaW9zXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBXaW5kb3dzIFBob25lIG11c3QgY29tZSBmaXJzdCBiZWNhdXNlIGl0cyBVQSBhbHNvIGNvbnRhaW5zIFwiQW5kcm9pZFwiXHJcbiAgICBpZiAoL3dpbjY0fHdpbjMyfHdpbjE2fHdpbjk1fHdpbjk4fHdpbmRvd3MgMjAwMHx3aW5kb3dzIHhwfG1zaWV8d2luZG93cyBudCA2LjM7IHRyaWRlbnR8d2luZG93cyBudHx3aW5kb3dzL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJ3aW5kb3dzXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICgvb3MgeC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwib3N4XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9tYWNpbnRvc2h8b3N4L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJvc3hcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL29wZW5ic2QvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcIm9wZW4gYnNkXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICgvc3Vub3MvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcInN1bm9zXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBpZiAoL2Nya2V5L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJjaHJvbWVjYXN0XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC9hcHBsZXR2L2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJhcHBsZSB0dlwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvd2lpdS9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwibmludGVuZG8gd2lpdVwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvbmludGVuZG8gM2RzL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJuaW50ZW5kbyAzZHNcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL3BsYXlzdGF0aW9uL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJwbGF5c3RhdGlvblwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgva2luZGxlL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3M6XCJhbWF6b24ga2luZGxlXCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC8gY3JvcyAvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcImNocm9tZSBvc1wiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaWYgKC91YnVudHUvaS50ZXN0KHVzZXJBZ2VudCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvczpcInVidW50dVwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoL2dvb2dsZWJvdC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiZ29vZ2xlIGJvdFwiLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgvYmluZ2JvdC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwiYmluZyBib3RcIixcclxuICAgICAgICAgICAgdXNlckFnZW50OnVzZXJBZ2VudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoL3lhaG9vISBzbHVycC9pLnRlc3QodXNlckFnZW50KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9zOlwieWFob28gYm90XCIsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDp1c2VyQWdlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9zOiBmYWxzZSxcclxuICAgICAgICB1c2VyQWdlbnQ6dXNlckFnZW50XHJcbiAgICB9O1xyXG59XHJcbi8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzQW5kcm9pZCgpe1xyXG4gICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKC93aW5kb3dzIHBob25lL2kudGVzdCh1YSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBpc0FuZHJvaWQgPSB1YS5pbmRleE9mKFwiYW5kcm9pZFwiKSA+IC0xOyAvLyYmIHVhLmluZGV4T2YoXCJtb2JpbGVcIik7XHJcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZDtcclxuICAgIH1cclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0Nocm9tZSgpIHtcclxuICAgIHZhciBpc0Nocm9taXVtID0gd2luZG93LmNocm9tZTtcclxuICAgIHZhciB3aW5OYXYgPSB3aW5kb3cubmF2aWdhdG9yO1xyXG4gICAgdmFyIHZlbmRvck5hbWUgPSB3aW5OYXYudmVuZG9yO1xyXG4gICAgdmFyIGlzT3BlcmEgPSB0eXBlb2Ygd2luZG93Lm9wciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIHZhciBpc0lFZWRnZSA9IHdpbk5hdi51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2VcIikgPiAtMTtcclxuICAgIHZhciBpc0lPU0Nocm9tZSA9IHdpbk5hdi51c2VyQWdlbnQubWF0Y2goXCJDcmlPU1wiKTtcclxuXHJcbiAgICBpZiAoaXNJT1NDaHJvbWUpIHtcclxuICAgICAgICAvLyBpcyBHb29nbGUgQ2hyb21lIG9uIElPU1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgICBpc0Nocm9taXVtICE9PSBudWxsICYmXHJcbiAgICAgICAgdHlwZW9mIGlzQ2hyb21pdW0gIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICB2ZW5kb3JOYW1lID09PSBcIkdvb2dsZSBJbmMuXCIgJiZcclxuICAgICAgICBpc09wZXJhID09PSBmYWxzZSAmJlxyXG4gICAgICAgIGlzSUVlZGdlID09PSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gaXMgR29vZ2xlIENocm9tZVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBub3QgR29vZ2xlIENocm9tZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzRWRnZSAoKSB7XHJcbiAgICAvL2xldCBpc0VkZ2UgPSAhaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhOyAvLyBFZGdlIDIwK1xyXG4gICAgbGV0IGVkZ2UgPSBmYWxzZTtcclxuICAgIGlmICgvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgICAgZWRnZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWRnZTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzRmlyZUZveCAoKSB7XHJcbiAgICAvLyBsZXQgaXNfZmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcclxuICAgIC8vIHJldHVybiBpc19maXJlZm94O1xyXG4gICAgcmV0dXJuICh0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzSUUgKCkge1xyXG4gICAgLy8gbGV0IGlzX2llID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ01TSUUnKSA+IC0xO1xyXG4gICAgLy8gcmV0dXJuIGlzX2llO1xyXG4gICAgLy8gcGFyYW1zLmlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFfFRyaWRlbnQvKTtcclxuICAgIC8vIHBhcmFtcy5pc0lFID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlOyAvLyBJUzkgYW5kIGFib3ZlXHJcbiAgICByZXR1cm4gLypAY2Nfb24hQCovZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7IC8vIEludGVybmV0IEV4cGxvcmVyIDYtMTFcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0lPUygpIHtcclxuICAgIGxldCBpRGV2aWNlcyA9IFtcclxuICAgICAgICAnaVBhZCBTaW11bGF0b3InLFxyXG4gICAgICAgICdpUGhvbmUgU2ltdWxhdG9yJyxcclxuICAgICAgICAnaVBvZCBTaW11bGF0b3InLFxyXG4gICAgICAgICdpUGFkJyxcclxuICAgICAgICAnaVBob25lJyxcclxuICAgICAgICAnaVBvZCdcclxuICAgIF07XHJcblxyXG4gICAgaWYgKCEhbmF2aWdhdG9yLnBsYXRmb3JtKSB7XHJcbiAgICAgICAgd2hpbGUgKGlEZXZpY2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtID09PSBpRGV2aWNlcy5wb3AoKSl7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc01vYmlsZSgpe1xyXG4gICAgLy8gV2luZG93cyBQaG9uZSBtdXN0IGNvbWUgZmlyc3QgYmVjYXVzZSBpdHMgVUEgYWxzbyBjb250YWlucyBcIkFuZHJvaWRcIiFcclxuICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodWEpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQGZ1bmN0aW9uOiBpc01vYmlsZSgpXHJcbiAqIEBkZXNjOiBEZXRlY3RzIGlmIHRoZSBkZXZpY2UgeW91IGFyZSB1c2luZyBpcyBhIG1vYmlsZSBvciBub3RcclxuICogQHJldHVybiBib29sZWFuXHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4vS1JiTGRtXHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElzT3BlcmEoKSB7XHJcbiAgICAvLyBsZXQgaXNDaHJvbWl1bSA9IHdpbmRvdy5jaHJvbWU7XHJcbiAgICAvLyBsZXQgaXNPcGVyYSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJPUFJcIikgPiAtMSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiT3BlcmFcIikgPiAtMTtcclxuICAgIC8vIGxldCBpc09wZXJhID0gKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhfE9QUlxcLy8pID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgIGxldCBpc09wZXJhID0gKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwO1xyXG4gICAgcmV0dXJuIGlzT3BlcmE7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc1NhZmFyaSgpIHtcclxuICAgIC8vIGxldCBpc19zYWZhcmkgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2FmYXJpJykgPiAtMTtcclxuICAgIC8vIHJldHVybiBpc19zYWZhcmk7XHJcbiAgICByZXR1cm4gL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpIHx8IChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiOyB9KSghd2luZG93WydzYWZhcmknXSB8fCAodHlwZW9mIHNhZmFyaSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEVsZW1lbnRQb3NpdGlvbihlbCkge1xyXG4gICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgIHRvcDogZWwub2Zmc2V0VG9wLFxyXG4gICAgICAgIGxlZnQ6IGVsLm9mZnNldExlZnRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGVsLm9mZnNldFBhcmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRQb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgdG9wOiBlbC5vZmZzZXRQYXJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBlbC5vZmZzZXRQYXJlbnQub2Zmc2V0TGVmdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBvc2l0aW9uLnRvcCArPSBwYXJlbnRQb3NpdGlvbi50b3A7XHJcbiAgICAgICAgcG9zaXRpb24ubGVmdCArPSBwYXJlbnRQb3NpdGlvbi5sZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG59XHJcblxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0RPTShvYmopIHtcclxuICAgIC8vIHRoaXMgd29ya3MgZm9yIG5ld2VyIGJyb3dzZXJzXHJcbiAgICB0cnkgeyByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7IH1cclxuXHJcbiAgICAgICAgLy8gdGhpcyB3b3JrcyBmb3Igb2xkZXIgYnJvd3NlcnNcclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgICAgICAob2JqLm5vZGVUeXBlID09PSAxKSAmJiAodHlwZW9mIG9iai5zdHlsZSA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAgICAgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gXCJvYmplY3RcIik7XHJcbiAgICB9XHJcbn07XG5leHBvcnQgZnVuY3Rpb24gSXNFbGVtZW50KG8pIHtcclxuICAgIGxldCBhbnN3ZXIgPSAoXHJcbiAgICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXHJcbiAgICAgICAgICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChhbnN3ZXIgIT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0VsZW1lbnQyKGVsZW1lbnQpIHtcclxuICAgIC8vIHdvcmtzIG9uIG1ham9yIGJyb3dzZXJzIGJhY2sgdG8gSUU3XHJcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQ7XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0RWxlbWVudE9mZnNldFRvcChlbGVtZW50SWQpIHtcclxuICAgIGxldCBlbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgIGxldCBjdXJ0b3AgPSAwO1xyXG4gICAgaWYgKGVsZW1lbnQuaGFzT3duUHJvcGVydHkoXCJvZmZzZXRQYXJlbnRcIikpe1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY3VydG9wICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgIH0gd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoW2N1cnRvcF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBIYXNDbGFzcyhlbGVtZW50T3JJZCwgYykge1xyXG4gICAgaWYgKGlzRWxlbWVudChlbGVtZW50T3JJZCkpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudE9ySWQuY2xhc3NMaXN0LmNvbnRhaW5zKGMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE9ySWQpLmNsYXNzTGlzdC5jb250YWlucyhjKTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIFNldEhUTUwoZWxlbWVudE9ySWQsIHN0cikge1xyXG4gICAgbGV0IGVsZTtcclxuICAgIGlmICh0eXBlb2YgKGVsZW1lbnRPcklkKSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGVsZSA9IGdldEVsZW1lbnRCeUlkKGVsZW1lbnRPcklkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlID0gZWxlbWVudE9ySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsZSkge1xyXG4gICAgICAgIGVsZS5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlNldEhUTUwoZWxlbWVudE9ySWQsIHN0cik6IFVzYWdlIGVycm9yOiBVbmFibGUgdG8gcmV0cmlldmUgZWxlbWVudCBpZCBvciB1c2UgZWxlbWVudCBbXCIgKyBlbGVtZW50T3JJZCArIFwiXVwiO1xyXG4gICAgfVxyXG59XG5leHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuXHJcbn1cclxuXHJcbi8qKiBqc28ge1xyXG4gKiBcIkZ1bmN0aW9uXCI6IFwiRXZlbnRNYW5hZ2VyLmpzXCIsXHJcbiAqIFwiRGVzY3JpcHRpb25cIjogXCJBIGNlbnRyYWxpc2VkIGV2ZW50IHN0YWNrIHdoZXJlIHlvdSBjYW4gaG9vayB5b3VyIGZ1bmN0aW9ucyAvIGNsYXNzJ3MgaW50byBmb3IgY2VudHJhbGlzZWQgcXVpY2sgYW5kIGVhc3kgZXZlbnQgYXBwbGljYXRpb24gZXZlbnQgaGFuZGxpbmcuXCIsXHJcbiAqIFwiTWV0aG9kc1wiOiBbXHJcbiAqICAgICAge1xyXG4gKiAgICAgICAgICBcIm5hbWVcIjogXCJsaXN0XCIsXHJcbiAqICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMaXN0cyB3aGljaCBldmVudHMgaGF2ZSBiZWVuIGNyZWF0ZWQgYW5kIGF2YWlsYWJsZSBmb3IgZGlzcGF0Y2ggaW4gdGhlIEV2ZW50TWFuYWdlci5cIixcclxuICAqICAgICAgICAgIFwicmV0dXJuc1wiOiBcImNvbnNvbGUubG9nXCIsXHJcbiAqICAgICAgfSxcclxuICogICAgICB7XHJcbiAqICAgICAgICAgIFwibmFtZVwiOiBcImFkZFwiLFxyXG4gKiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWRkcyBvciBjcmVhdGVzIGEgbmV3IGV2ZW50IHdpdGhpbiB0aGUgZXZlbnQgbWFuYWdlciBhbmQgYXR0YWNoZWQgYSBjYWxsYmFjayBmdW5jdGlvbiAvIGxpc3RlbmVyIG9iamVjdCB0byBiZSBjYWxsZWQgb24gZGlzcGF0Y2ggb2YgdGhpcyBldmVudC5cIixcclxuICogICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IFtcclxuICogICAgICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJldmVudE5hbWVcIixcclxuICogICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IFwidHJ1ZVwiLFxyXG4gKiAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gYWRkLlwiLFxyXG4gKiAgICAgICAgICAgICAgfSxcclxuICogICAgICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjYWxsYmFja0Z1bmN0aW9uXCIsXHJcbiAgKiAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAqICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBsaXN0ZW5lciBvYmplY3QgLyBmdW5jdGlvbiB3aGljaCBnZXRzIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuXCIsXHJcbiAqICAgICAgICAgICAgICB9LFxyXG4gKiAgICAgICAgICBdLFxyXG4gKiAgICAgIH0sXHJcbiAqICAgICAge1xyXG4gKiAgICAgICAgICBcIm5hbWVcIjogXCJkaXNwYXRjaFwiLFxyXG4gKiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGlzcGF0Y2hlcyAvIFRyaWdnZXJzIGFuIGV2ZW50IGJ5IG5hbWUgZnJvbSB0aGUgRXZlbnRNYW5hZ2VyLlwiLFxyXG4gKiAgICAgICAgICBcInBhcmFtZXRlcnNcIjogW1xyXG4gKiAgICAgICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50TmFtZVwiLFxyXG4gKiAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogXCJ0cnVlXCIsXHJcbiAqICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBkaXNwYXRjaC5cIixcclxuICogICAgICAgICAgICAgIH1cclxuICogICAgICAgICAgXSxcclxuICogICAgICB9LFxyXG4gKiAgXVxyXG4gKiB9XHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uUmVhZHkoZm4pIHtcclxuICAgIC8vIElFOStcclxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHwgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmbiwgMTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZm4sIDEwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBXb3JkTGltaXRlcihzdHIsIG1heFdvcmRzKSB7XHJcbiAgICBsZXQgd29yZENvdW50ID0gc3RyLnNwbGl0KC9cXFMrLykubGVuZ3RoIC0gMTtcclxuICAgIGxldCByZSA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXFMrKD86XFxcXHMrXFxcXFMrKXswLFwiICsgKG1heFdvcmRzIC0gMSkgKyBcIn1cIik7XHJcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcclxuICAgIGlmICh3b3JkQ291bnQgPj0gbWF4V29yZHMpIHtcclxuICAgICAgICBvdXRwdXQgPSBzdHIubWF0Y2gocmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvdXRwdXQgPSBzdHI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBvdXRwdXQ6IG91dHB1dCwgcmVtYWluaW5nOiAobWF4V29yZHMgLSB3b3JkQ291bnQpIH07XHJcbn1cclxuXG5leHBvcnQgY2xhc3MgWEhSIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL2h0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3htbGh0dHByZXF1ZXN0XHJcblxyXG4gICAgICAgIC8vIHZhciBkZWZzXHJcbiAgICAgICAgdGhpcy5hcmdzID0ge1xyXG4gICAgICAgICAgICB1cmw6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IGZhbHNlLCAvLyBha2EgcmVxdWVzdFR5cGUgdGhpcyBpcyBlaXRoZXIgZm9ybSBvciBqc29uIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IGZhbHNlLCAvLyBmb3IgY2xpZW50c2lkZSBwcm9jZXNzaW5nIHJlc3BvbnNlIGRhdGEgdHlwZVxyXG4gICAgICAgICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgb25FcnJvcjogZmFsc2UsIC8vIG9ubHkgdHJpZ2dlcnMgaWYgdGhlIHJlcXVlc3QgY291bGRuJ3QgYmUgbWFkZSBhdCBhbGxcclxuICAgICAgICAgICAgb25Qcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uQ2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVybCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXJsUGFyYW1zID0gXCJcIjtcclxuICAgICAgICB0aGlzLnhociA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGFyZ3VtZW50c1xyXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gJiYgdHlwZW9mIChhcmd1bWVudHNbMF0pID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbMF0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFyZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJnc1trZXldID0gYXJndW1lbnRzWzBdW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcmdzKTtcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGVcclxuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLnVybCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IGBYSFIoKTogVXNhZ2UgZXJyb3I6IE9wdGlvbiBcInVybFwiIGhhcyBub3QgYmVlbiBzZXQhXHJcblBsZWFzZSBlbnRlciBhIHZhbGlkIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0byFgO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3MubWV0aG9kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gYFhIUigpOiBVc2FnZSBlcnJvcjogT3B0aW9uIFwibWV0aG9kXCIgaGFzIG5vdCBiZWVuIHNldCFcclxuVmFsaWQgb3B0aW9ucyBhcmU6XHJcbiAgICBQT1NULFxyXG4gICAgR0VUYDtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5kYXRhICE9PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpICE9PSBcImpzb25cIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmFyZ3MuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSAhPT0gXCJmb3JtXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLmRhdGFUeXBlLnRvTG93ZXJDYXNlKCkgIT09IFwidGV4dFwiXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgICAgICBsZXQgbXNnID0gYFhIUigpOiBVc2FnZSBlcnJvcjogSW52YWxpZCBcImRhdGFUeXBlXCIgaGFzIGJlZW4gc2V0IVxyXG5WYWxpZCBvcHRpb25zIGFyZTpcclxuICAgIEpTT04gICAgICAgIC0gc2VuZCBqc29uIHN0cmluZ1xyXG4gICAgRk9STSAgICAgICAgLSBzZW5kIGZvcm0gb2JqZWN0XHJcbiAgICBURVhUICAgICAgICAtIHNlbmQgdXJsIHN0cmluZ1xyXG5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLnJlc3BvbnNlVHlwZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9XHJcbiAgICAgICAgICAgICAgICBgWEhSKCk6IFVzYWdlIHdhcm5pbmc6IE9wdGlvbiBcInJlc3BvbnNlVHlwZVwiIG5vdCBzZXQhXHJcblZhbGlkIG9wdGlvbnMgYXJlOlxyXG4gICAganNvbiBcXHRcXHRcXHQgSlNPTiAocGFyc2VkIGF1dG9tYXRpY2FsbHkpXHJcbiAgICBkb2N1bWVudCBcXHRcXHQgWE1MIERvY3VtZW50IChYUGF0aCBldGMpLFxyXG4gICAgdGV4dCBcXHRcXHRcXHQgc3RyaW5nLFxyXG4gICAgYXJyYXlidWZmZXIgXFx0IEFycmF5QnVmZmVyIGZvciBiaW5hcnkgZGF0YSxcclxuICAgIGJsb2IgXFx0XFx0XFx0IEJsb2IgZm9yIGJpbmFyeSBkYXRhLFxyXG5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwidGV4dFwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5yZXNwb25zZVR5cGUudG9Mb3dlckNhc2UoKSAhPSBcImRvY3VtZW50XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwianNvblwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5yZXNwb25zZVR5cGUudG9Mb3dlckNhc2UoKSAhPSBcImFycmF5YnVmZmVyXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5hcmdzLnJlc3BvbnNlVHlwZS50b0xvd2VyQ2FzZSgpICE9IFwiYmxvYlwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPVxyXG4gICAgICAgICAgICAgICAgYFhIUigpOiBVc2FnZSBlcnJvcjogTm90IGEgdmFsaWQgXCJyZXNwb25zZVR5cGVcIiBzcGVjaWZpZWQgXCIke3RoaXMuYXJncy5yZXNwb25zZVR5cGV9XCJcclxuVmFsaWQgb3B0aW9ucyBhcmU6XHJcbiAgICBqc29uIFxcdFxcdFxcdCBKU09OIChwYXJzZWQgYXV0b21hdGljYWxseSlcclxuICAgIGRvY3VtZW50IFxcdFxcdCBYTUwgRG9jdW1lbnQgKFhQYXRoIGV0YyksXHJcbiAgICB0ZXh0IFxcdFxcdFxcdCBzdHJpbmcsXHJcbiAgICBhcnJheWJ1ZmZlciBcXHQgQXJyYXlCdWZmZXIgZm9yIGJpbmFyeSBkYXRhLFxyXG4gICAgYmxvYiBcXHRcXHRcXHQgQmxvYiBmb3IgYmluYXJ5IGRhdGEsXHJcbmA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFyZ3Mub25Db21wbGV0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IGBYSFIoKTogVXNhZ2UgZXJyb3I6IE9wdGlvbiBcIm9uQ29tcGxldGVcIiBoYXMgbm90IGJlZW4gc2V0IVxyXG5Zb3VyIG1ha2luZyBhIHJlcXVlc3QgYnV0IGFyZSBub3QgZG9pbmcgYW55dGhpbmcgd2l0aCB0aGUgcmVzcG9uc2U/IE1ha2Ugc3VyZSB0byBzdXBwbHkgYW4gb25Db21wbGV0ZSBjYWxsYmFjayBmdW5jdGlvbi5gO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZVJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcbiAgICBtYWtlUmVxdWVzdCgpIHtcclxuICAgICAgICB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnhoci50aW1lb3V0ID0gdGhpcy5hcmdzLnRpbWVvdXQ7XHJcblxyXG5cclxuICAgICAgICAvLyBHRVRcclxuICAgICAgICAvLyBBcHBlbmQgZGF0YSB2YXJpYWJsZXMgdG8gdXJsIHN0cmluZywgb25seSBoYW5kbGUganNvbiwgZm9ybSBhbmQgc3RyaW5nXHJcblxyXG4gICAgICAgIC8vIFBPU1R8fFBVVHx8REVMRVRFfHxQQVRDSFxyXG4gICAgICAgIC8vIElmIGpzb24gc2VuZCBqc29uIG9iamVjdFxyXG4gICAgICAgIC8vIElmIGZvcm0gc2VuZCBmb3JtIG9iamVjdFxyXG4gICAgICAgIC8vIElmIHRleHQgc2VuZCBzdHJpbmdcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5tZXRob2QudG9Mb3dlckNhc2UoKSA9PSBcImdldFwiKSB7XHJcbiAgICAgICAgICAgIC8vIEdFVFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hcmdzLmRhdGFUeXBlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFyZ3MuZGF0YVR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybCArIFwiP1wiICsgdGhpcy5hcmdzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb3JtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybCArIFwiP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgb2YgdGhpcy5hcmdzLmRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHRoaXMuYXJncy5kYXRhLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsICsgZW5jb2RlVVJJKGtleSkgKyBcIj1cIiArIGVuY29kZVVSSSh2KSArIFwiJlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJqc29uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybCArIFwiP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hcmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFyZ3MuZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdGhpcy5hcmdzLmRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybCArIGVuY29kZVVSSShrZXkpICsgXCI9XCIgKyBlbmNvZGVVUkkodikgKyBcIiZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy51cmwgPSBcIiArIHRoaXMudXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUE9TVCB8fCBQVVQgfHwgUEFUQ0ggfHwgREVMRVRFXHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gdGhpcy5hcmdzLnVybFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIG9wZW5cclxuICAgICAgICBpZiAodGhpcy5hcmdzLnVzZXJuYW1lICE9PSBmYWxzZSAmJiB0aGlzLmFyZ3MucGFzc3dvcmQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyLm9wZW4odGhpcy5hcmdzLm1ldGhvZCwgdGhpcy51cmwsIHRoaXMuYXJncy51c2VybmFtZSwgdGhpcy5hcmdzLnBhc3N3b3JkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMuYXJncy5tZXRob2QsIHRoaXMudXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc3BvbnNlVHlwZVxyXG4gICAgICAgIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuYXJncy5yZXNwb25zZVR5cGU7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIFNldCByZXF1ZXN0SGVhZGVyIHR5cGUgYWthIGRhdGFUeXBlIGFuZCBzZW5kXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5kYXRhVHlwZSAhPT0gZmFsc2UgJiYgdHlwZW9mKHRoaXMuYXJncy5kYXRhVHlwZSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYXJncy5kYXRhVHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwianNvblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZChKU09OLnN0cmluZ2lmeSh0aGlzLmFyZ3MuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZvcm1cIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBrZXkgb2YgdGhpcy5hcmdzLmRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB2ID0gdGhpcy5hcmdzLmRhdGEuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGtleSArIFwiID0gXCIgKyB2KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZCh0aGlzLmFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHIuc2VuZCh0aGlzLmFyZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyLnNlbmQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBTZW5kXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJncy5kYXRhICE9PSBmYWxzZSAmJiB0aGlzLmFyZ3MuZGF0YVR5cGUgIT09IGZhbHNlKXtcclxuICAgICAgICAvLyAgICAgbG9nKFwic2VuZGluZyBkYXRhXCIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnhoci5zZW5kKHRoaXMuYXJncy5kYXRhKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnhoci5zZW5kKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVyc1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gdGhpcy5wcm9ncmVzc0hhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB0aGlzLm9uTG9hZEhhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSksIHRydWUpO1xyXG4gICAgICAgIHRoaXMueGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsIChlKSA9PiB0aGlzLmVycm9ySGFuZGxlcihlKSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIGVycm9ySGFuZGxlcihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJYSFIuZXJyb3JIYW5kbGVyKClcIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZ3Mub25FcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmFyZ3Mub25FcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIHByb2dyZXNzSGFuZGxlcihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJYSFIucHJvZ3Jlc3NIYW5kbGVyKClcIik7XHJcbiAgICAgICAgLy8gaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgJHtlLmxvYWRlZH0gb2YgJHtlLnRvdGFsfSBieXRlc2ApO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCAke2UubG9hZGVkfSBieXRlc2ApOyAvLyBubyBDb250ZW50LUxlbmd0aFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgJHtldmVudC5sb2FkZWR9IG9mICR7ZXZlbnQudG90YWx9YCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5vblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5vblByb2dyZXNzKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgb25Mb2FkSGFuZGxlcihlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJYSFIub25Mb2FkSGFuZGxlcigpXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEb25lLCBnb3QgJHt0aGlzLnhoci5yZXNwb25zZS5sZW5ndGh9IGJ5dGVzYCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy54aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXJncy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJncy5vbkNvbXBsZXRlKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG4gICAgZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnhocikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbiAgICBnZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuICAgIGdldFJlc3BvbnNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnhocikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHIucmVzcG9uc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IHRoaXMucHJvZ3Jlc3NIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4gdGhpcy5vbkxvYWRIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGUpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKGUpID0+IHRoaXMuZXJyb3JIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLnhoci5yZW1vdmVFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoZSkgPT4gdGhpcy5lcnJvckhhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFJhbmRvbUJvb2xlYW4oKXtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID49IDAuNTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFJhbmRvbUZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICAvLyBsZXQgciA9IGZyb20gKyAoTWF0aC5yYW5kb20oKSogKHRvKjIpKTtcclxuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufTtcclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldFJhbmRvbVRoYXRzTm90KG1pbixtYXgsbm90KXtcclxuICAgIGxldCByID0gbm90OyBsZXQgbGltID0gMTAwOyBsZXQgcnVucyA9IDA7XHJcbiAgICB3aGlsZSAocj09PW5vdCAmJiBydW5zIDwgbGltKXtcclxuICAgICAgICBydW5zKys7XHJcbiAgICAgICAgciA9IGdldFJhbmRvbUludChtaW4sbWF4KTtcclxuICAgIH1cclxuICAgIGlmIChydW5zPj1saW0pe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBmdW5jdGlvbjogZ2V0UmFuZG9tVGhhdHNOb3QobWluLG1heCxub3QpXHJcbiAqIEBkZXNjOiByZXR1cm5zIGEgcmFuZG9tIGludCBiZXR3ZW4geW91ciBzcGVjaWZpZWQgbWluIGFuZCBtYXggdmFsdWVzIGJ1dCBuZXZlciB0aGUgbm90IHZhbHVlXHJcbiAqIEBwYXJhbSBtaW4gbnVtYmVyOiB0aGUgbWluaW11bSB5b3VyIHJhbmRvbSBudW1iZXIgaXMgYWxsb3dlZCB0byBnb1xyXG4gKiBAcGFyYW0gbWF4IG51bWJlcjogdGhlIG1heGltdW0geW91ciByYW5kb20gbnVtYmVyIGlzIGFsbG93ZWQgdG8gZ29cclxuICogQGFsaWFzOiBnZXRSYW5kb21cclxuICogQGxpbms6IGh0dHBzOi8vY29kZXBlbi5pby9BbGxGb3JUaGVDb2RlL3Blbi95RUJaTnFcclxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0V2VpZ2h0ZWRSYW5kb20ob2RkcywgaXRlcmF0aW9ucykge1xyXG4gICAgaWYgKCFvZGRzKSB7XHJcbiAgICAgICAgb2RkcyA9IFtcclxuICAgICAgICAgICAgMC42OCwgLy8gMFxyXG4gICAgICAgICAgICAwLjY5LCAvLyAxXHJcbiAgICAgICAgICAgIDAuNjk4LCAvLyAyXHJcbiAgICAgICAgICAgIDAuNjkwOSwgLy8gM1xyXG4gICAgICAgICAgICAwLjY4LCAvLyA0XHJcbiAgICAgICAgICAgIDAuNTgsIC8vIDVcclxuICAgICAgICAgICAgMC41NywgLy8gNlxyXG4gICAgICAgICAgICAwLjU2LCAvLyA3XHJcbiAgICAgICAgICAgIDAuNCwgLy8gOFxyXG4gICAgICAgICAgICAwLjMsIC8vIDlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgbGV0IHdlaWdodHMgPSBbXTtcclxuICAgIGxldCByID0gMDtcclxuICAgIGxldCBpTWF4ID0gMDtcclxuICAgIGxldCB3TWF4ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIG9kZHMpIHtcclxuICAgICAgICBpZiAoIXdlaWdodHNbaV0pIHtcclxuICAgICAgICAgICAgd2VpZ2h0c1tpXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZXJhdGlvbnM7IHgrKykge1xyXG4gICAgICAgICAgICByID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgLy9sb2coci50b0ZpeGVkKDMpICsgXCIgICBcIiArIG9kZHNbaV0udG9GaXhlZCgzKSk7XHJcbiAgICAgICAgICAgIGlmIChyIDw9IG9kZHNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHdlaWdodHNbaV0gKz0gb2Rkc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdlaWdodHNbaV0gPiB3TWF4KSB7XHJcbiAgICAgICAgICAgIHdNYXggPSB3ZWlnaHRzW2ldO1xyXG4gICAgICAgICAgICBpTWF4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb2cod2VpZ2h0cyk7XHJcbiAgICAvL2xvZyhcIndNYXggPSBcIiArIHdNYXggKyBcIiAgIGlNYXggPSBcIiArIGlNYXgpO1xyXG4gICAgcmV0dXJuIGlNYXg7XHJcbn07XHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGdldFdlaWdodGVkUmFuZG9tKG9kZHMsIGl0ZXJhdGlvbnMpXHJcbiAqIEBkZXNjOiBHZXQgYSB3ZWlnaHRlZCByYW5kb20gYmFzZWQgb24gb2RkcyBhbmQgaXRlcmF0aW9uc1xyXG4gKiBAcGFyYW0gb2RkcyBhcnJheTogYXJyYXkgb2Ygb2Rkc1xyXG4gKiBAcGFyYW0gaXRlcmF0aW9ucyBudW1iZXI6IG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHJ1biBvbiBlYWNoIG51bWJlciB0ZXN0XHJcbiAqIEBsaW5rOiBodHRwczovL2NvZGVwZW4uaW8vQWxsRm9yVGhlQ29kZS9wZW4vUnl2V2paXHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEluZXJ0aWFUbyhjdXJyZW50LHRhcmdldCxhbW91bnQpe1xyXG4gICAgaWYgKGFtb3VudCA9PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGxldCBkaXN0VG9HbyA9IHRhcmdldCAtIGN1cnJlbnQ7XHJcbiAgICBsZXQgZGVsdGEgPSBjdXJyZW50ICsgKGRpc3RUb0dvICogYW1vdW50KTtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnMoZGlzdFRvR28pIDwgMC4wMSkge1xyXG4gICAgICAgIGRpc3RUb0dvID0gMDtcclxuICAgICAgICBkZWx0YSA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWx0YTtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBJc0V2ZW4obikge1xyXG4gICAgcmV0dXJuIG4gJSAyID09PSAwO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIElzT2RkKG4pIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhuICUgMikgPT09IDE7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBOb3JtYWxpc2VSYW5nZShtaW4sIG1heCwgdikge1xyXG4gICAgbGV0IHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgbGV0IHN0ZXAgPSAxIC8gcmFuZ2U7XHJcbiAgICBsZXQgciA9IChzdGVwICogKHYgLSBtaW4pKTtcclxuICAgIGlmICh2IDwgbWluKSB7XHJcbiAgICAgICAgciA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHYgPiBtYXgpIHtcclxuICAgICAgICByID0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiByO1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlQXJyYXlUb0Zsb2F0KGFycikge1xyXG4gICAgbGV0IGNvbnZlcnRlZDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29udmVydGVkID0gcGFyc2VGbG9hdChhcnJbaV0pO1xyXG4gICAgICAgIGlmIChpc05hTihjb252ZXJ0ZWQpKXtcclxuICAgICAgICAgICAgYXJyW2ldID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJbaV0gPSBjb252ZXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxufVxyXG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUFycmF5VG9JbnQoYXJyKSB7XHJcbiAgICBsZXQgY29udmVydGVkO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb252ZXJ0ZWQgPSBwYXJzZUludChhcnJbaV0pO1xyXG4gICAgICAgIGlmIChpc05hTihjb252ZXJ0ZWQpKXtcclxuICAgICAgICAgICAgYXJyW2ldID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJbaV0gPSBjb252ZXJ0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycjtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIFJvdW5kVG8odiwgZGVjKSB7XHJcbiAgICByZXR1cm4gKyhNYXRoLnJvdW5kKE51bWJlcih2ICsgXCJlK1wiICsgZGVjKSkgKyBcImUtXCIgKyBkZWMpO1xyXG59XHJcblxuZXhwb3J0IGNsYXNzIEZQU01vbml0b3Ige1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tID0ge1xyXG4gICAgICAgICAgICBmcHM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZwc1N0YWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFja1NpemUgPSA2MDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0ID0gMDtcclxuICAgICAgICB0aGlzLm5vdyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZUZwcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuYXZlcmFnZUZwcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuaSA9IDA7XHJcblxyXG4gICAgICAgIGlmIChlbGUpe1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5mcHMgPSBlbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZwc1N0YWNrID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnN0YWNrU2l6ZSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5ub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9ICh0aGlzLm5vdyAtIHRoaXMubGFzdCkgLyAxMDAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lRnBzID0gMS90aGlzLmRlbHRhO1xyXG4gICAgICAgIC8vIGxvZyhcImN1cnJlbnRGcmFtZUZwcyA9IFwiICsgdGhpcy5jdXJyZW50RnJhbWVGcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmZwc1N0YWNrW3RoaXMuaW5kZXhdID0gdGhpcy5jdXJyZW50RnJhbWVGcHM7XHJcblxyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIGZvcih0aGlzLmk9MDsgdGhpcy5pIDwgdGhpcy5zdGFja1NpemU7IHRoaXMuaSsrKXtcclxuICAgICAgICAgICAgdGhpcy50b3RhbCArPSB0aGlzLmZwc1N0YWNrW3RoaXMuaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF2ZXJhZ2VGcHMgPSBNYXRoLnJvdW5kKCB0aGlzLnRvdGFsL3RoaXMuc3RhY2tTaXplICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRvbS5mcHMpe1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5mcHMuaW5uZXJUZXh0ID0gdGhpcy5hdmVyYWdlRnBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5ub3c7XHJcblxyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLnN0YWNrU2l6ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEZwcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2ZXJhZ2VGcHM7XHJcbiAgICB9XHJcbn1cclxuXG5leHBvcnQgZnVuY3Rpb24gR2V0R1VJRCgpIHtcclxuICAgIGZ1bmN0aW9uIEFtaWdhKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFtaWdhKCkgKyBBbWlnYSgpICsgJy0nICsgQW1pZ2EoKSArICctJyArIEFtaWdhKCkgKyAnLScgK1xyXG4gICAgICAgIEFtaWdhKCkgKyAnLScgKyBBbWlnYSgpICsgQW1pZ2EoKSArIEFtaWdhKCk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRVSUQobGVuKSB7XHJcbiAgICBpZiAobGVuID4gMzQpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHZXRVSUQobGVuZ3RoKTogTGltaXQgZXJyb3I6IExlbmd0aCBtdXN0IGJlIDM0IG9yIGxvd2VyXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGxlbik7XHJcbiAgICB9XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0FscGhhTnVtZXJpYyh2KSB7XHJcbiAgICByZXR1cm4gISgvXFxXLy50ZXN0KHYpKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzQXJyYXkoaW5wdXQpIHtcclxuICAgIHJldHVybiAhIWlucHV0ICYmIGlucHV0LmNvbnN0cnVjdG9yID09PSBBcnJheTtcclxuICAgIC8vcmV0dXJuIGFyci5jb25zdHJ1Y3RvciA9PT0gQXJyYXk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc0Jvb2woaW5wdXQpIHtcclxuICAgIGlmICh0eXBlb2YgKGlucHV0KSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNCb29sZWFuKGlucHV0KSB7XHJcbiAgICBpZiAodHlwZW9mIChpbnB1dCkgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuZXhwb3J0IGZ1bmN0aW9uIElzTnVtYmVyKG4pIHtcclxuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJc051bWVyaWMobikge1xyXG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEN1dFN0cmluZ1RvKHMsIGxlbikge1xyXG4gICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIGxlbik7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBFc2NhcGVIVE1MKHN0cikge1xyXG4gICAgaWYgKHR5cGVvZiAoc3RyKSAhPSBcInN0cmluZ1wiKSB7IGNvbnNvbGUuZXJyb3IoXCJlc2NhcGUoYXJnKTogdXNhZ2UgZXJyb3I6IGFyZyBuZWVkcyB0byBiZSBhIHN0cmluZyFcIik7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgIGxldCByZXBsYWNlbWVudHMgPSB7XHJcbiAgICAgICAgXCI8XCI6IFwiJmx0O1wiLFxyXG4gICAgICAgIFwiPlwiOiBcIiZndDtcIixcclxuICAgICAgICBcIiZcIjogXCImYW1wO1wiLFxyXG4gICAgICAgIFwiXFxcIlwiOiBcIiZxdW90O1wiLFxyXG4gICAgICAgIFwiYFwiOiBcIiYjMDM5O1wiXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bPD4mXCJdL2csIGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVwbGFjZW1lbnRzW2NoYXJhY3Rlcl07XHJcbiAgICB9KTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEFuY2hvcih1cmwpIHtcclxuICAgIGlmICghdXJsKSB7IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmOyB9XHJcbiAgICBsZXQgYW5jaG9yQXZhaWxhYmxlID0gaXNJblN0cmluZyhcIiNcIiwgdXJsKTtcclxuICAgIGlmIChhbmNob3JBdmFpbGFibGUpIHtcclxuICAgICAgICByZXR1cm4gdXJsLnNsaWNlKHVybC5sYXN0SW5kZXhPZignIycpICsgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQGZ1bmN0aW9uOiBHZXRBbmNob3IodXJsKVxyXG4gKiBAZGVzYzogR2V0IGFuY2hvciBmcm9tIHVybFxyXG4gKiBAcGFyYW0gc3RyaW5nIHVybDogVGhlIHVybCB0byBnZXQgdGhlIGFuY2hvciBmcm9tXHJcbiAqIEBsaW5rOlxyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRDbGVhbkpTT05TdHJpbmcgKHMpIHtcclxuICAgIC8vIHByZXNlcnZlIG5ld2xpbmVzLCBldGMgLSB1c2UgdmFsaWQgSlNPTlxyXG4gICAgcyA9IHMucmVwbGFjZSgvXFxcXG4vZywgXCJcXFxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcJy9nLCBcIlxcXFwnXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXFxcXFwiJylcclxuICAgICAgICAucmVwbGFjZSgvXFxcXCYvZywgXCJcXFxcJlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcci9nLCBcIlxcXFxyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFx0L2csIFwiXFxcXHRcIilcclxuICAgICAgICAucmVwbGFjZSgvXFxcXGIvZywgXCJcXFxcYlwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcZi9nLCBcIlxcXFxmXCIpO1xyXG4gICAgLy8gcmVtb3ZlIG5vbi1wcmludGFibGUgYW5kIG90aGVyIG5vbi12YWxpZCBKU09OIGNoYXJzXHJcbiAgICBzID0gcy5yZXBsYWNlKC9bXFx1MDAwMC1cXHUwMDE5XSsvZywgXCJcIik7XHJcbiAgICByZXR1cm4gcztcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEZpbGVFeHRlbnNpb24oaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dC5zbGljZSgoaW5wdXQubGFzdEluZGV4T2YoXCIuXCIpIC0gMSA+Pj4gMCkgKyAyKTtcclxufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEZpbGVFeHRlbnNpb24yKHN0cikge1xyXG4gICAgLy8gTmVlZHMgaW1wcm92aW5nXHJcbiAgICBsZXQgZXh0ID0gc3RyLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICByZXR1cm4gZXh0O1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0TGFzdFBhcnRPZlVybCh1cmwpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcbiAgICBsZXQgcGFydCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgIHJldHVybiBwYXJ0O1xyXG59XG5leHBvcnQgZnVuY3Rpb24gR2V0UmFuZG9tU3RyaW5nKGxlbikge1xyXG4gICAgbGV0IHRleHQgPSBcIlwiO1xyXG4gICAgbGV0IHBvc3NpYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0O1xyXG59XHJcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFN0cmluZ0JldHdlZW4oc3RyLCBzdGFydCwgZW5kKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KHN0YXJ0KS5wb3AoKS5zcGxpdChlbmQpLnNoaWZ0KCkudHJpbSgpO1xyXG59XHJcbi8qKlxyXG4gKiBAZnVuY3Rpb246IGdldFN0cmluZ0JldHdlZW4oaW5wdXQsc3RhcnQsZW5kKVxyXG4gKiBAZGVzYzogR2V0cyBhIHN0cmluZyBiZXR3ZWVuIHR3byBvdGhlciBzdHJpbmdzXHJcbiAqIEBwYXJhbSBzdHJpbmcgaW5wdXQ6IGlucHV0IHN0cmluZyB0byBjaGVja1xyXG4gKiBAcGFyYW0gc3RyaW5nIHN0YXJ0OiBzdGFydCBzdHJpbmcgbWFya2VyXHJcbiAqIEBwYXJhbSBzdHJpbmcgZW5kOiBlbmQgc3RyaW5nIG1hcmtlclxyXG4gKiBAbGluazogaHR0cHM6Ly9jb2RlcGVuLmlvL0FsbEZvclRoZUNvZGUvcGVuL3h4eHh4eHhcclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nc0JldHdlZW4yKHN0ciwgc3RhcnQsIGVuZCkge1xyXG4gICAgbGV0IG9yaWcgPSBzdHI7XHJcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG4gICAgLy8gbG9nKG9yaWcpO1xyXG4gICAgLy8gbG9nKFwiLS0tLS0tLS1cIik7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QmV0d2VlbigpIHtcclxuICAgICAgICAvLyBsb2coXCJDSEVDS0lORzogXCIgKyBzdHIpO1xyXG4gICAgICAgIGxldCBzdGFydE1hdGNoSW5kZXggPSBzdHIuaW5kZXhPZihzdGFydCk7IC8vIEZpbmQgc3RhcnQgbWF0Y2hcclxuICAgICAgICAvLyBsb2coXCJzdGFydE1hdGNoSW5kZXg6IFwiICsgc3RhcnRNYXRjaEluZGV4KTtcclxuICAgICAgICBpZiAoc3RhcnRNYXRjaEluZGV4ID09PSAtMSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0Q3V0SW5kZXggPSBzdGFydC5sZW5ndGggKyBzdGFydE1hdGNoSW5kZXg7IC8vIGNhbGMgc3RhcnQgY3V0IGluZGV4XHJcbiAgICAgICAgLy8gbG9nKFwic3RhcnRDdXRJbmRleDogXCIgKyBzdGFydEN1dEluZGV4KTtcclxuXHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZyhzdGFydEN1dEluZGV4LCBzdHIubGVuZ3RoKTsgLy8gTFRyaW0gdG8gc3RhcnQgY3V0IGluZGV4XHJcbiAgICAgICAgLy8gbG9nKFwiQ1VUOiBcIiArIHN0cik7XHJcblxyXG4gICAgICAgIGxldCBlbmRNYXRjaEluZGV4ID0gc3RyLmluZGV4T2YoZW5kKTsgLy8gZmluZCBlbmQgbWF0Y2ggaW5kZXhcclxuICAgICAgICAvLyBsb2coXCJlbmRNYXRjaEluZGV4OiBcIiArIGVuZE1hdGNoSW5kZXgpO1xyXG4gICAgICAgIGlmIChlbmRNYXRjaEluZGV4ID09PSAtMSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcbiAgICAgICAgbGV0IGJldHdlZW4gPSBzdHIuc3Vic3RyaW5nKDAsIGVuZE1hdGNoSW5kZXgpOyAvLyBnZXQgc3RyaW5nIGJldHdlZW5cclxuICAgICAgICAvLyBsb2coXCJiZXR3ZWVuOiBcIiArIGJldHdlZW4pO1xyXG4gICAgICAgIGxldCBlbmRDdXRJbmRleCA9IGVuZC5sZW5ndGggKyBlbmRNYXRjaEluZGV4O1xyXG4gICAgICAgIC8vbG9nKFwiZW5kQ3V0SW5kZXg6IFwiICsgZW5kQ3V0SW5kZXgpO1xyXG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoZW5kQ3V0SW5kZXgsIHN0ci5sZW5ndGgpOyAvLyBjdXQgb2ZmIGVuZCBzdHJpbmdcclxuICAgICAgICAvL2xvZyhcIkZJTkFMOiBcIiArIHN0cik7XHJcbiAgICAgICAgcmV0dXJuIGJldHdlZW47XHJcbiAgICB9XHJcbiAgICBsZXQgbGltID0gNTAwOyAvLyBXYW50IHRvIGxvb3AgZm9yZXZlcj8gNTAwIHNlZW1zIGxpa2UgYXJlYXNvbmFibGUgbGltaXRcclxuICAgIGxldCBwb3MgPSAwO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICB3aGlsZSAocG9zIDw9IGxpbSAmJiByZXN1bHQgIT0gZmFsc2UpIHtcclxuICAgICAgICBwb3MrKztcclxuICAgICAgICByZXN1bHQgPSBnZXRCZXR3ZWVuKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvL2xvZyhcImJldHdlZW5bXCIraStcIl0gPSBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgICAgICAvL2xvZyhcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG4vLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG4vKipcclxuICogQGZ1bmN0aW9uOiBnZXRTdHJpbmdzQmV0d2VlbihzdHIsc3RhcnQsZW5kKVxyXG4gKiBAZGVzYzogR2V0cyBhbGwgc3RyaW5ncyBiZXR3ZWVuIHR3byBvdGhlciBzdHJpbmdzIChtdWx0aSBtYXRjaClcclxuICogQHBhcmFtIHN0cmluZyBzdHI6IGlucHV0IHN0cmluZyB0byBjaGVja1xyXG4gKiBAcGFyYW0gc3RyaW5nIHN0YXJ0OiBzdGFydCBzdHJpbmcgbWFya2VyXHJcbiAqIEBwYXJhbSBzdHJpbmcgZW5kOiBlbmQgc3RyaW5nIG1hcmtlclxyXG4gKiBAbGluazogaHR0cHM6Ly9jb2RlcGVuLmlvL0FsbEZvclRoZUNvZGUvcGVuL3h4eHh4eHhcclxuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0V29yZENvdW50KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgvXFxTKy8pLmxlbmd0aCAtIDE7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBJblN0cmluZyhmaW5kLHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmluZGV4T2YoZmluZCkgIT09IC0xOyB9XG5leHBvcnQgZnVuY3Rpb24gSXNJblN0cmluZyhmaW5kLHNvdXJjZSkgeyByZXR1cm4gc291cmNlLmluZGV4T2YoZmluZCkgIT09IC0xOyB9XG5leHBvcnQgZnVuY3Rpb24gTFRyaW1CeShzdHIsIGJ5KSB7XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZyhieSwgc3RyLmxlbmd0aCk7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBSZW1vdmVGaWxlRnJvbVBhdGgocGF0aCkge1xyXG4gICAgLy9sZXQgcGEgPSAnL3RoaXMvaXMvYS9mb2xkZXIvYUZpbGUudHh0JztcclxuICAgIGxldCByID0gL1teXFwvXSokLztcclxuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UociwgJycpO1xyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cbmV4cG9ydCBmdW5jdGlvbiBSVHJpbUJ5KHN0ciwgdHJpbUJ5KSB7XHJcbiAgICByZXR1cm4gKHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIHRyaW1CeSkpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gVHJpbVN0cmluZ0J5KHN0ciwgdHJpbUJ5KSB7XHJcbiAgICByZXR1cm4gKHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIHRyaW1CeSkpO1xyXG59XG5leHBvcnQgZnVuY3Rpb24gVWNGaXJzdChzKSB7XHJcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJydcclxuICAgIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKVxyXG59XG5leHBvcnQgZnVuY3Rpb24gSXNFbWFpbCAoZW1haWwpIHtcclxuICAgIGxldCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcbiIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0IGV4dGVuZHMgUGFnZSB7XHJcblxyXG4gICAgLy8gdmFyIGRlZnNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBYm91dC5jb25zdHJ1Y3RvcigpXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxufSIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgICAvLyB2YXIgZGVmc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRhY3QuY29uc3RydWN0b3IoKVwiKTtcclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0aW9uSGFuZGxlciB9IGZyb20gXCIuL05hdmlnYXRpb25IYW5kbGVyXCI7XHJcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9Ib21lL0hvbWVcIjtcclxuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9BYm91dC9BYm91dFwiO1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSBcIi4vQ29udGFjdC9Db250YWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGV2U2l0ZSB7XHJcblxyXG4gICAgLy8gdmFyIGRlZnNcclxuICAgIG5hdmlnYXRpb25IYW5kbGVyOk5hdmlnYXRpb25IYW5kbGVyO1xyXG5cclxuICAgIHBhZ2VIb21lOkhvbWU7XHJcbiAgICBwYWdlQWJvdXQ6QWJvdXQ7XHJcbiAgICBwYWdlQ29udGFjdDpDb250YWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJEZXZTaXRlLmNvbnN0cnVjdG9yKClcIik7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUhvbWUgPSBuZXcgSG9tZSgpO1xyXG4gICAgICAgIHRoaXMucGFnZUFib3V0ID0gbmV3IEFib3V0KCk7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblxyXG5cclxuICAgICAgICAvLyBOYXZpZ2F0aW9uIGhhbmRsZXMgd291bGQgdHlwaWNhbGx5IHJlcXVpcmUgYWNjZXNzIHRvIHBhZ2UgY2xhc3MgaW5zdGFudGlhdGlvbnNcclxuICAgICAgICAvLyBUaGlzIGlzIGlmIHdlIHRha2UgdGhpcyBmdXJ0aGVyIHRvIGR5bmFtaWMgc2hvdy9oaWRlIGNhcGFiaWxpdGllc1xyXG4gICAgICAgIC8vIFdoaWNoIGFnYWluIGlzIGZhciBxdWlja2VyIGFuZCBzaW1wbGVyIHRoYW4gdXNpbmcgcmVhY3QsIHZ1ZSBvciBhbmd1bGFyXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uSGFuZGxlciA9IG5ldyBOYXZpZ2F0aW9uSGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxufSIsImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwiLi4vUGFnZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcclxuXHJcbiAgICAvLyB2YXIgZGVmc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhvbWUuY29uc3RydWN0b3IoKVwiKTtcclxuICAgIH1cclxuICAgIC8vIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBVY0ZpcnN0IH0gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25IYW5kbGVyIHtcclxuXHJcbiAgICAvLyB2YXIgZGVmc1xyXG4gICAgcHJpdmF0ZSBkb21Ib21lOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZG9tQWJvdXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBkb21Db250YWN0OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIGRvbU5hdjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG5hdkl0ZW1zOiBIVE1MQ29sbGVjdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIHNpdGVOYW1lOiBzdHJpbmcgPSBcImRldjEuY29tXCI7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJUaXRsZTogc3RyaW5nID0gXCJERVYxXCI7XHJcbiAgICBwdWJsaWMgYWN0aXZlUGFnZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb25IYW5kbGVyLmNvbnN0cnVjdG9yKClcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuICAgICAgICB0aGlzLmRvbUFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKTtcclxuICAgICAgICB0aGlzLmRvbUNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICAgICAgdGhpcy5uYXZJdGVtcyA9IHRoaXMuZG9tTmF2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRvbU5hdik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYXZJdGVtcyk7XHJcblxyXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gcHJldmVudCBkZWZhdWx0IG9uIGxpbmsgY2xpY2sgdG8gc3RvcCBwYWdlIHJlbG9hZHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmF2SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5uYXZJdGVtc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBsaW5rOiBIVE1MRWxlbWVudCA9IHRoaXMubmF2SXRlbXNbaV0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZDbGlja0hhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXYXRjaCBmb3IgZm9yIGJyb3dzZXIgYmFjayBhbmQgZm9yd2FyZFxyXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3cgcGFnZSBzdGFydCBwYWdlIHRoZSBicm93c2VyIGVudGVycyBvblxyXG4gICAgICAgIGxldCByb3V0ZTogc3RyaW5nID0gdGhpcy5nZXRSb3V0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2hvd1BhZ2Uocm91dGUpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcbiAgICBuYXZDbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICAgIC8vIHRhcmdldCBwYWdlIG5hbWUgaXMgZnJvbSBsaW5rIGNsaWNrIHdoaWNoIHdlXHJcbiAgICAgICAgLy8gZ2V0IGZyb20gdGhlIGV2ZW50IChlKSBjdXJyZW50VGFyZ2V0IG9yIHRhcmdldFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZS5jdXJyZW50VGFyZ2V0LmhyZWYgPSBcIiArIGUuY3VycmVudFRhcmdldC5ocmVmKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSByb3V0ZVxyXG4gICAgICAgIGxldCByb3V0ZTogc3RyaW5nID0gdGhpcy5nZXRSb3V0ZShlLmN1cnJlbnRUYXJnZXQuaHJlZik7XHJcblxyXG4gICAgICAgIC8vIHNob3cgcGFnZVxyXG4gICAgICAgIHRoaXMuc2hvd1BhZ2Uocm91dGUpO1xyXG4gICAgfVxyXG4gICAgLy8gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtXHJcblxyXG5cclxuXHJcbiAgICBzaG93UGFnZShyb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJuYXZpZ2F0aW9uSGFuZGxlci5zaG93UGFnZShyb3V0ZTpcIisgcm91dGUgKyBcIilcIik7XHJcblxyXG4gICAgICAgIGxldCBwYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tSG9tZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb21BYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbUNvbnRhY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhYm91dFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb21Ib21lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tQWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tQ29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tSG9tZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbUFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tQ29udGFjdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbUhvbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tQWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb21Db250YWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAocm91dGUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMuYnJvd3NlclRpdGxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5icm93c2VyVGl0bGUgKyBcIiA+IFwiICsgVWNGaXJzdChyb3V0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIFwicGFnZVRpdGxlXCI6IHRpdGxlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdXJsIHZpYSBoaXN0b3J5XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZSk7XHJcblxyXG4gICAgICAgIC8vIFNldCBkb2N1bWVudCB0aXRsZVxyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG5cclxuICAgIGdldFJvdXRlKHVybDogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0Um91dGUodXJsOlwiK3VybCtcIilcIik7XHJcblxyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gc2VsZi5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnVybCA9IFwiICsgdXJsKTtcclxuXHJcbiAgICAgICAgbGV0IHBhZ2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgcGFnZSA9IHVybC5yZXBsYWNlKFwiaHR0cHM6Ly9cIiwgXCJcIik7XHJcbiAgICAgICAgcGFnZSA9IHBhZ2UucmVwbGFjZShcImh0dHA6Ly9cIiwgXCJcIik7XHJcbiAgICAgICAgcGFnZSA9IHBhZ2UucmVwbGFjZShcInd3dy5cIiwgXCJcIik7XHJcbiAgICAgICAgcGFnZSA9IHBhZ2UucmVwbGFjZSh0aGlzLnNpdGVOYW1lICsgXCIvXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldFJvdXRlKCk6IHBhZ2UgPSBcIiArIHBhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFnZTtcclxuXHJcbiAgICB9XHJcbiAgICAvLyAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC1cclxuXHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFBhZ2Uge1xyXG5cclxuICAgIHZpc2libGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHNob3coKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhZ2Uuc2hvdygpXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhZ2UuaGlkZSgpXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtsb2csb25SZWFkeX0gZnJvbSBcImFmdGMtbW9kdWxlc1wiO1xyXG5pbXBvcnQgeyBEZXZTaXRlIH0gZnJvbSBcIi4vRGV2U2l0ZS9EZXZTaXRlXCI7XHJcblxyXG5vblJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBuZXcgRGV2U2l0ZSgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==