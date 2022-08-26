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
      let tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
        onUpdate: updateTimeline
      });
      tl.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none"
      }); //.to('.title', { x: () => (container.scrollWidth - document.documentElement.clientWidth) + "px", ease: "none"}, 0);

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        //scrub: 3,
        scrub: true,
        markers: true,
        end: () => "+=" + 4 * container.offsetWidth,
        animation: tl
      });

      function updateTimeline() {
        console.log("w ", 4 * container.offsetWidth);
        console.log("x ", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#container').position().left);
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year').each(function (index) {
        let $hotspot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.hotspot', this);
        let $d1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.d1', this);
        let $d2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.d2', this);
        let $corporate = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.corporate', this);
        let $project = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project', this);
        let $p1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.p1', this);
        let $p2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.p2', this);
        let $c1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c1', this);
        let $c2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c2', this);
        let d = 0.35;
        $hotspot.mouseover(function () {
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($p1);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($p2);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($c1);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($c2);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($d1, {
            width: 70,
            height: 70,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($d2, {
            width: 88,
            height: 88,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($corporate, {
            y: -35,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($project, {
            y: 35,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($p1, {
            opacity: 1,
            duration: d * 3,
            delay: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($p2, {
            opacity: 1,
            duration: d * 3,
            delay: d * 1.5
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c1, {
            opacity: 1,
            duration: d * 3,
            delay: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c2, {
            opacity: 1,
            duration: d * 3,
            delay: d * 1.5
          });
        });
        $hotspot.mouseleave(function () {
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($p1);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($p2);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($c1);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.killTweensOf($c2);
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($d1, {
            width: 28,
            height: 28,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($d2, {
            width: 28,
            height: 28,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($corporate, {
            y: 0,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($project, {
            y: 0,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($p1, {
            opacity: 0,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($p2, {
            opacity: 0,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c1, {
            opacity: 0,
            duration: d
          });
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to($c2, {
            opacity: 0,
            duration: d
          });
        });
      });
      const myTimeout = setTimeout(setTriggers, 500);

      function setTriggers() {
        let numberOfYears = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper .year').length;
        let containerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper').height();
        let containerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#container').width();
        let screenHeight = window.innerHeight;
        let screenWidth = window.innerWidth;
        let yearWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year').width(); //let totalDivisions = 3 + numberOfYears
        //let divisionHeight = ((containerHeight-screenHeight) / (numberOfYears - 1))

        let divisionHeight = 4 * container.offsetWidth / 12; //   let triggerElement = "<div id='trigger-last' class='trigger'></div>"
        //   $("#timeline-wrapper").append(triggerElement);
        //   gsap.set("#trigger-last", {top: (4* container.offsetWidth)})
        //
        // ScrollTrigger.create({
        //           trigger: '#trigger-last',
        //           //invalidateOnRefresh: true,
        //           //pin: true,
        //           //scrub: 3,
        //           markers: true,
        //           //end: () => "+=" + (4 * container.offsetWidth),
        //           //animation: tl,
        //    })

        console.log('containerWidth', containerWidth);
        console.log('screenWidth', screenWidth);
        console.log('yearWidth', yearWidth);
        console.log('nY', numberOfYears);
        console.log('cH', containerHeight);
        console.log('dH', divisionHeight);

        for (let i = 0; i < 12; i++) {
          let triggerID = "trigger" + i;
          let hashTriggerID = "#trigger" + i;
          let triggerElement = "<div id=" + triggerID + " class='trigger'></div>";
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#timeline-wrapper").append(triggerElement);
          let triggerOffset = divisionHeight + i * divisionHeight;
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(hashTriggerID, {
            top: triggerOffset
          });
          gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
            trigger: hashTriggerID,
            //         //invalidateOnRefresh: true,
            //         //pin: true,
            //         //scrub: 3,
            markers: true //end: () => "+=" + (4 * container.offsetWidth),
            //animation: yearTL,

          });
        } //$('.year').each(function ( index ) {
        // ScrollTrigger.create({
        //            trigger: this,
        //   //         //invalidateOnRefresh: true,
        //   //         //pin: true,
        //   //         //scrub: 3,
        //   //         markers: true,
        //   //         //end: () => "+=" + (4 * container.offsetWidth),
        //   //         //animation: tl,
        //        })
        //
        //     let triggerID = "trigger" + index
        //     let hashTriggerID = "#trigger" + index
        //     let triggerElement = "<div id=" + triggerID + " class='trigger'></div>"
        //     $("#timeline-wrapper").append(triggerElement);
        //
        //     let triggerOffset =  (index * divisionHeight)
        //
        //     gsap.set(hashTriggerID, {top: triggerOffset})
        //     gsap.set(this, {width: divisionHeight})
        //
        //     ScrollTrigger.create({
        //         trigger: hashTriggerID,
        //         //invalidateOnRefresh: true,
        //         //pin: true,
        //         //scrub: 3,
        //         markers: true,
        //         //end: () => "+=" + (4 * container.offsetWidth),
        //         //animation: tl,
        //     })
        //});

      }
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
/******/ 	__webpack_require__.h = function() { return "893f5646f8b398fdc52f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.dbdbf4bd052c9ba3efe3.hot-update.js.map