"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/timeline.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);




class Timeline {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper').length) {
      /*console.log('timeline-wrapper')
         gsap.registerPlugin(ScrollToPlugin);
         let wrapperWidth = $('#timeline-wrapper .year').length * 400
         gsap.set('#timeline-wrapper', {width: wrapperWidth})*/
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(ScrollTrigger);
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
/******/ 	__webpack_require__.h = function() { return "c8c97867f0d0a40dbc4c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.4cdfd772e49761d14cdf.hot-update.js.map