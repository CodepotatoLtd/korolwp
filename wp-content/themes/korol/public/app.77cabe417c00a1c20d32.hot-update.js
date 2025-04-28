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
/* harmony import */ var _util_galleryBeforeAfterCoverflowCarousel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./resources/scripts/util/galleryBeforeAfterCoverflowCarousel.js");
/* harmony import */ var _util_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./resources/scripts/util/tabs.js");
/* harmony import */ var _util_team_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./resources/scripts/util/team.js");
/* harmony import */ var _util_timeline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./resources/scripts/util/timeline.js");
/* harmony import */ var _util_cardProject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./resources/scripts/util/cardProject.js");
/* harmony import */ var _util_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./resources/scripts/util/map.js");
/* harmony import */ var _util_gradientAnimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./resources/scripts/util/gradientAnimation.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(711);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_12__);













/* harmony default export */ __webpack_exports__["default"] = ({
  init() {},

  finalize() {
    aos__WEBPACK_IMPORTED_MODULE_12___default().init(); // JavaScript to be fired on all pages, after page specific JS is fired

    const dropdownMenu = new _util_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const downArrow = new _util_downArrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const videoPlayer = new _util_videoPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const mouseParallax = new _util_mouseParallax_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    const gradientAnimation = new _util_gradientAnimation__WEBPACK_IMPORTED_MODULE_11__["default"]();
    const galleryCoverflowCarousel = new _util_galleryCoverflowCarousel_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const galleryBeforeAfterCoverflowCarousel = new _util_galleryBeforeAfterCoverflowCarousel_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    const timeline = new _util_timeline_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
    const tabs = new _util_tabs_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    const cardProject = new _util_cardProject_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
    const map = new _util_map_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
    const team = new _util_team_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  }

});

/***/ }),

/***/ "./resources/scripts/util/galleryBeforeAfterCoverflowCarousel.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class GalleryBeforeAfterCoverflowCarousel {
  constructor() {
    console.log("Gallery CF Carousel");
    var swiperClass = ".gallery-before-after-coverflow-swiper";
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(swiperClass).each(function (index) {
      console.log("Gallery CF Carousel");
      var swiperID = "gallery-before-after-coverflow-" + index;
      var swiperIDHash = "#gallery-before-after-coverflow-" + index;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr("id", swiperID);
      let coverflowSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](swiperIDHash, {
        slidesPerView: 1.05,
        //slidesPerView: 1.9,
        centeredSlides: true,
        slideToClickedSlide: true,
        initialSlide: 1,
        breakpoints: {
          // when window width is >= 320px
          992: {
            slidesPerView: 1.9
          }
        },
        loop: true,
        //cssMode: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0.15,
          depth: 500,
          modifier: 1,
          slideShadows: false
        },
        navigation: {
          nextEl: swiperIDHash + " .swiper-button-next",
          prevEl: swiperIDHash + " .swiper-button-prev"
        },
        on: {
          init() {
            setTimeout(() => {
              window.dispatchEvent(new Event("resize"));
            }, 200);
          }

        }
      });
      coverflowSwiper.on("transitionStart", function () {});
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GalleryBeforeAfterCoverflowCarousel);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "42ae9256656a7d998a1a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.77cabe417c00a1c20d32.hot-update.js.map