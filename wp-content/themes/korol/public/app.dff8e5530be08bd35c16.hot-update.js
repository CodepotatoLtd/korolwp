"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/team.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);



class Team {
  constructor() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section-team').length) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.member').each(function (index) {
        let $member = this;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show-bio', $member).click(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bio', $member).hasClass('visible')) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('img', $member).removeClass('gray');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plus', $member).removeClass('hidden');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus', $member).addClass('hidden');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bio', $member).removeClass('visible');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plus', $member).addClass('hidden');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus', $member).removeClass('hidden');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bio', $member).addClass('visible');
          } //alert( "Handler for .click() called." );

        });
      }); // let targets = document.querySelectorAll(".tab-hotspot");
      // let articles = document.querySelectorAll(".tab-panel");
      // let activeTab = 0;
      // let old = 0;
      // let heights = [];
      // let dur = 0.4;
      // let animation;
      //
      // for (let i = 0; i < targets.length; i++) {
      //     targets[i].index = i;
      //     heights.push(articles[i].offsetHeight); // get height of each article
      //     //gsap.set(articles[i], {top: 0, y:-heights[i]}); // push all articles up out of view
      //     gsap.set(articles[i], {autoAlpha: 0});
      //     targets[i].addEventListener("click", showPanel);
      // }
      //
      // $('.tab-hotspot').each(function (index) {
      //     let id = "#tab-" + index
      //     $(this).mouseover(function () {
      //         $(id).addClass("hover");
      //     }).mouseleave(function () {
      //         $(id).removeClass("hover");
      //     });
      // })
      //
      //
      // //gsap.set(articles[0], {autoAlpha: 1});
      //
      //
      // function showPanel()
      // {
      //     // check if clicked target is new and if the timeline is currently active
      //
      //     console.log('doCoolStuff')
      //     if (this.index != activeTab) {
      //         if (animation && animation.isActive()) {
      //             animation.progress(1);
      //         }
      //         animation = gsap.timeline({defaults: {duration: 0.4}});
      //         old = activeTab;
      //         activeTab = this.index;
      //         let id = "#tab-" + this.index;
      //         $('.tab-button').removeClass("active");
      //         $(id).addClass("active");
      //
      //
      //         let scrollYPos = ($(".panel-holder").offset().top);
      //
      //         gsap.to(window, {scrollTo: {y: scrollYPos, autoKill: false}, duration: 1});
      //
      //         animation.to(targets[old], {color: "#1bb1a5", ease: "none"}, 0);
      //         animation.to(targets[activeTab], {color: "#fff", ease: "none"}, 0);
      //         animation.to(articles[old], {autoAlpha: 0}, 0);
      //         animation.to(articles[activeTab], {duration: 1, autoAlpha: 1}, "-=0.25");
      //     }
      // }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "df9ac4b2669749c926b7"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.dff8e5530be08bd35c16.hot-update.js.map