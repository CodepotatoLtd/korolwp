"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/routes/common.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./resources/scripts/util/dropdownMenu.js");
/* harmony import */ var _util_downArrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./resources/scripts/util/downArrow.js");
/* harmony import */ var _util_videoPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./resources/scripts/util/videoPlayer.js");
/* harmony import */ var _util_mouseParallax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./resources/scripts/util/mouseParallax.js");
/* harmony import */ var _util_galleryCoverflowCarousel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./resources/scripts/util/galleryCoverflowCarousel.js");
/* harmony import */ var _util_tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./resources/scripts/util/tabs.js");
/* harmony import */ var _util_timeline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./resources/scripts/util/timeline.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = ({
  init() {},

  finalize() {
    aos__WEBPACK_IMPORTED_MODULE_7___default().init(); // JavaScript to be fired on all pages, after page specific JS is fired

    const dropdownMenu = new _util_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const downArrow = new _util_downArrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const videoPlayer = new _util_videoPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const mouseParallax = new _util_mouseParallax_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const galleryCoverflowCarousel = new _util_galleryCoverflowCarousel_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const timeline = new _util_timeline_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    const tabs = new _util_tabs_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    console.log('Gallery CF Carousel');
  }

});

/***/ }),

/***/ "./resources/scripts/util/timeline.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




class Timeline {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper').length) {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollToPlugin_js__WEBPACK_IMPORTED_MODULE_2__.ScrollToPlugin);
      let wrapperWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper .year').length * 400;
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set('#timeline-wrapper', {
        width: wrapperWidth
      });
    }

    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "48a1e0e43d5985d4ceb6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.fa1722ece3740bce5caf.hot-update.js.map