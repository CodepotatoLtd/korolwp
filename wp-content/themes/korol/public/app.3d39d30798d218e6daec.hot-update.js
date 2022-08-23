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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year').each(function (index) {
        let $hotspot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hotspot', this);
        let $c1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c1', this);
        let $c2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c2', this);
        let $corporate = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.corporate', this);
        let $project = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project', this);
        $hotspot.mouseover(function () {
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c1, {
            width: 112,
            height: 112
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c2, {
            width: 140,
            height: 140
          }); //gsap.to($corporate, {top: -160 })
          //gsap.to($project, {bottom: -160 })
        });
        $hotspot.mouseleave(function () {
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c1, {
            width: 28,
            height: 28
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c2, {
            width: 28,
            height: 28
          });
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
/******/ 	__webpack_require__.h = function() { return "9e08383fee92aa967502"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.3d39d30798d218e6daec.hot-update.js.map