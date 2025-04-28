"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/galleryBeforeAfterCoverflowCarousel.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class GalleryBeforeAfterCoverflowCarousel {
  constructor() {
    console.log("Gallery Before After Carousel");
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
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".before-after-image-wrapper").each(function (index) {
        let $before = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".before", this);
        let $after = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".after", this);
        let $switcher = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".switcher-btn", this);
        $switcher.on("click", function () {
          alert("Handler for `click` called.");
        });
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
/******/ 	__webpack_require__.h = function() { return "6bf00f736665bec3520e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.b2ff589836cf2a2457d4.hot-update.js.map