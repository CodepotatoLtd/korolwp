"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/galleryCoverflowCarousel.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class GalleryCoverflowCarousel {
  constructor() {
    console.log('Gallery CF Carousel');
    var swiperClass = '.gallery-coverflow-swiper';
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(swiperClass).each(function (index) {
      console.log('Gallery CF Carousel');
      var swiperID = 'gallery-coverflow-' + index;
      var swiperIDHash = '#gallery-coverflow-' + index;
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('id', swiperID);
      let coverflowSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](swiperIDHash, {
        slidesPerView: 1.05,
        //slidesPerView: 1.9,
        centeredSlides: true,
        slideToClickedSlide: true,
        initialSlide: 1,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4
          }
        },
        loop: true,
        //cssMode: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 0.15,
          depth: 500,
          modifier: 1,
          slideShadows: false
        },
        navigation: {
          nextEl: swiperIDHash + ' .swiper-button-next',
          prevEl: swiperIDHash + ' .swiper-button-prev'
        },
        on: {
          init() {
            setTimeout(() => {
              window.dispatchEvent(new Event('resize'));
            }, 200);
          }

        }
      });
      coverflowSwiper.on('transitionStart', function () {});
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GalleryCoverflowCarousel);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4c8e7f5f30baffa71abf"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.fa78f0543bc407f494bb.hot-update.js.map