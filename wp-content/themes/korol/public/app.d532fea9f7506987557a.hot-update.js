"use strict";
self["webpackHotUpdatesage"]("app",{

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
      console.log('timeline-wrapper');
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
/******/ 	__webpack_require__.h = function() { return "523a76f4888b03ab2e6f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.d532fea9f7506987557a.hot-update.js.map