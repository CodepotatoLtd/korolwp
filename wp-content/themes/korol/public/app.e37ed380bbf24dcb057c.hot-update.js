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
/* harmony import */ var _util_team_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./resources/scripts/util/team.js");
/* harmony import */ var _util_timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./resources/scripts/util/timeline.js");
/* harmony import */ var _util_cardProject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./resources/scripts/util/cardProject.js");
/* harmony import */ var _util_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./resources/scripts/util/map.js");
/* harmony import */ var _util_gradientAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./resources/scripts/util/gradientAnimation.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  init() {},

  finalize() {
    aos__WEBPACK_IMPORTED_MODULE_11___default().init(); // JavaScript to be fired on all pages, after page specific JS is fired

    const dropdownMenu = new _util_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const downArrow = new _util_downArrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const videoPlayer = new _util_videoPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const mouseParallax = new _util_mouseParallax_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const gradientAnimation = new _util_gradientAnimation__WEBPACK_IMPORTED_MODULE_10__["default"]();
    const galleryCoverflowCarousel = new _util_galleryCoverflowCarousel_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const timeline = new _util_timeline_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    const tabs = new _util_tabs_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    const cardProject = new _util_cardProject_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    const map = new _util_map_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    const team = new _util_team_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

});

/***/ }),

/***/ "./resources/scripts/util/gradientAnimation.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



class GradientAnimation {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dropdown-menu-style').length) {
      let g1a = "linear-gradient(77deg, rgba(0,0,32,1) 0%, rgba(0,0,32,1) 29%, rgba(0,0,32,0) 100%)";
      let g1b = "linear-gradient(50deg, rgba(0,0,32,1) 0%, rgba(0,0,32,1) 29%, rgba(0,0,32,0) 100%)";
      let g2a = "linear-gradient(77deg, rgba(14,54,133,0.1) 0%, rgba(14,54,133,1) 70%, rgba(14,54,133,1) 100%)";
      let g2b = "linear-gradient(90deg, rgba(14,54,133,0.2) 0%, rgba(14,54,133,1) 70%, rgba(14,54,133,1) 100%)";
      let g3a = "linear-gradient(77deg, rgba(136,187,236,0) 20%, rgba(136,187,236,1) 80%, rgba(136,187,236,1) 100%)";
      let g3b = "linear-gradient(30deg, rgba(136,187,236,0) 20%, rgba(136,187,236,1) 80%, rgba(136,187,236,1) 100%)";
      let g4a = "linear-gradient(90deg, rgba(253,197,108,0) 40%, rgba(253,197,108,1) 98%, rgba(253,197,108,1) 100%)";
      let g4b = "linear-gradient(120deg, rgba(253,197,108,0) 40%, rgba(253,197,108,1) 98%, rgba(253,197,108,1) 100%)";
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(".gradient-1", {
        background: g1a
      }, {
        ease: "sine.inOut",
        duration: 5,
        background: g1b,
        repeat: -1,
        yoyo: true
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(".gradient-2", {
        background: g2a
      }, {
        ease: "sine.inOut",
        duration: 3,
        background: g2b,
        repeat: -1,
        yoyo: true
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(".gradient-3", {
        background: g3a
      }, {
        ease: "sine.inOut",
        duration: 4.5,
        background: g3b,
        repeat: -1,
        yoyo: true
      });
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(".gradient-4", {
        background: g4a
      }, {
        ease: "sine.inOut",
        duration: 4,
        opacity: 0.5,
        background: g4b,
        repeat: -1,
        yoyo: true
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GradientAnimation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "77bd709c6b3012fd0325"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.e37ed380bbf24dcb057c.hot-update.js.map