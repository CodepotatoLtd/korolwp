"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/timeline.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);





class Timeline {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper').length) {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);
      let container = document.getElementById("container");
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" + container.offsetWidth
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year').each(function (index) {});
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year .hotspot').mouseover(function () {
        let $hotspot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hotspot', this);
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($hotspot, {
          scaleX: 4.5,
          scaleY: 4.5
        });
      }).mouseenter(function () {
        let $hotspot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hotspot', this);
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($hotspot, {
          scaleX: 1,
          scaleY: 1
        });
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
/******/ 	__webpack_require__.h = function() { return "92259bdc5973802f6dea"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.2663163115de2bfd6188.hot-update.js.map