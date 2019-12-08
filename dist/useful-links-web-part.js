define("da8953e9-67cb-4ee5-af60-1770478fcf60_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-loader","@microsoft/sp-webpart-base","UsefulLinksWebPartStrings","bootstrap","jquery","popper.js"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__, __WEBPACK_EXTERNAL_MODULE_UsefulLinksWebPartStrings__, __WEBPACK_EXTERNAL_MODULE_bootstrap__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_popper_js__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/webparts/usefulLinks/UsefulLinksWebPart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/webparts/usefulLinks/UsefulLinksHTML.js":
/*!*****************************************************!*\
  !*** ./lib/webparts/usefulLinks/UsefulLinksHTML.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UsefulLinksHTML = /** @class */ (function () {
    function UsefulLinksHTML() {
    }
    UsefulLinksHTML.templateHtml = "\n    <div id=\"accordion\">\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <a class=\"card-link accordionToggle\" data-toggle=\"collapse\" href=\"#collapseOne\">\n          <h5>Collapsible Group Item #1</h5>\n        </a>\n      </div>\n      <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n          Lorem ipsum..\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"card\">\n      <div class=\"card-header\">\n        <a class=\"collapsed card-link accordionToggle\" data-toggle=\"collapse\" href=\"#collapseTwo\">\n          <h5>Collapsible Group Item #2</h5>\n        </a>\n      </div>\n      <div id=\"collapseTwo\" class=\"collapse\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n          Lorem ipsum..\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"card\">\n      <div class=\"card-header\">\n        <a class=\"collapsed card-link accordionToggle\" data-toggle=\"collapse\" href=\"#collapseThree\">\n          <h5>Collapsible Group Item #3</h5>\n        </a>\n      </div>\n      <div id=\"collapseThree\" class=\"collapse\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n          Lorem ipsum..\n        </div>\n      </div>\n    </div>\n  </div>";
    return UsefulLinksHTML;
}());
/* harmony default export */ __webpack_exports__["default"] = (UsefulLinksHTML);


/***/ }),

/***/ "./lib/webparts/usefulLinks/UsefulLinksWebPart.js":
/*!********************************************************!*\
  !*** ./lib/webparts/usefulLinks/UsefulLinksWebPart.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-loader */ "@microsoft/sp-loader");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "@microsoft/sp-webpart-base");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var UsefulLinksWebPartStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! UsefulLinksWebPartStrings */ "UsefulLinksWebPartStrings");
/* harmony import */ var UsefulLinksWebPartStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(UsefulLinksWebPartStrings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UsefulLinksHTML__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UsefulLinksHTML */ "./lib/webparts/usefulLinks/UsefulLinksHTML.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popper.js */ "popper.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(popper_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap */ "bootstrap");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




//*** Custom Imports ***/

// import node modules external libraries
//import 'jquery';



var UsefulLinksWebPart = /** @class */ (function (_super) {
    __extends(UsefulLinksWebPart, _super);
    function UsefulLinksWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsefulLinksWebPart.prototype.render = function () {
        var bootstrapCssURL = "/node_modules/bootstrap/dist/css/bootstrap.min.css";
        //let fontawesomeCssURL = "/node_modules/@fortawesom/fontawesome-free/css/all.min.css";
        //let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadCss(bootstrapCssURL);
        //SPComponentLoader.loadCss(fontawesomeCssURL);
        this.domElement.innerHTML = _UsefulLinksHTML__WEBPACK_IMPORTED_MODULE_4__["default"].templateHtml;
        jquery__WEBPACK_IMPORTED_MODULE_5__('.accordion', this.domElement).accordion();
    };
    Object.defineProperty(UsefulLinksWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    UsefulLinksWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: UsefulLinksWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: UsefulLinksWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["PropertyPaneTextField"])('description', {
                                    label: UsefulLinksWebPartStrings__WEBPACK_IMPORTED_MODULE_3__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return UsefulLinksWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (UsefulLinksWebPart);


/***/ }),

/***/ "@microsoft/sp-core-library":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__;

/***/ }),

/***/ "@microsoft/sp-loader":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_loader__;

/***/ }),

/***/ "@microsoft/sp-webpart-base":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__;

/***/ }),

/***/ "UsefulLinksWebPartStrings":
/*!********************************************!*\
  !*** external "UsefulLinksWebPartStrings" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UsefulLinksWebPartStrings__;

/***/ }),

/***/ "bootstrap":
/*!****************************!*\
  !*** external "bootstrap" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_bootstrap__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "popper.js":
/*!****************************!*\
  !*** external "popper.js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_popper_js__;

/***/ })

/******/ })});;
//# sourceMappingURL=useful-links-web-part.js.map