"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/cardProject.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");




class CardProject {
  constructor() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-project').each(function (index) {
      let $overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay', this);
      let $specification = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.specification', this);
      let id = "p" + index;
      let idHash = "#p" + index;
      let specEl = document.querySelector(idHash);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).mouseover(function () {
        $overlay.addClass('visible');
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($overlay, {
          opacity: 1
        });
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($specification, {
          height: 'auto'
        }); //gsap.to($specification, {height: 'auto', onUpdate:checkPosition })

        checkPosition(); // let inView = isInViewport(idHash)
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).mouseleave(function () {
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($overlay, {
          opacity: 0
        });
        gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($specification, {
          height: 0
        });
      });

      function checkPosition() {
        //let inView = isInViewport(specEl)
        //console.log(inView)
        let elem = document.getElementById(id); //let rect = elem.getBoundingClientRect();

        let inView = isInViewport(elem);
        console.log(inView);

        if (inView === "top") {
          let scrollYPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(idHash).offset().top - 100;
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
            scrollTo: {
              y: scrollYPos,
              autoKill: false
            },
            duration: 0.75
          });
        } else if (inView === "bottom") {
          let scrollYPos = "+=150";
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
            scrollTo: {
              y: scrollYPos,
              autoKill: false
            },
            duration: 0.75
          });
        }
      }
    });

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();

      if (rect.top <= 0) {
        return "top";
      } else if (rect.bottom + 240 >= (window.innerHeight || document.documentElement.clientHeight)) {
        return "bottom";
      } else {
        return "visible";
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardProject);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b212be7b164348b7b46f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.937591a3504d93ce487d.hot-update.js.map