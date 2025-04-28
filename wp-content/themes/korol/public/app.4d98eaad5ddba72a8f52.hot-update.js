"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ "./resources/scripts/util/timeline.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Timeline {
  constructor() {
    _defineProperty(this, "yearSimple", void 0);

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper').length) {
      gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);
      let container = document.getElementById("container");
      let tl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline();
      tl.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none"
      }).to('.title', {
        x: () => container.scrollWidth - document.documentElement.clientWidth + "px",
        ease: "none"
      }, 0).to('.timeline-footer', {
        x: () => container.scrollWidth - document.documentElement.clientWidth + "px",
        ease: "none"
      }, 0);
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 3,
        //scrub: true,
        //markers: true,
        end: () => "+=" + 4 * container.offsetWidth,
        animation: tl
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year').each(function (index) {
        let $year = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
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
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.d1', this).addClass('active');
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
      }); //const myTimeout = setTimeout(setTriggers, 500);

      function setTriggers() {
        let numberOfEntries = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper .year-entry').length;
        let numberOfYears = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper .year').length;
        let containerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#timeline-wrapper').height();
        let containerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#container').width();
        let screenHeight = window.innerHeight;
        let screenWidth = window.innerWidth;
        let yearWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.year').width();
        let divisionHeight = 4 * container.offsetWidth / (numberOfEntries + 1);
        console.log('containerWidth', containerWidth);
        console.log('screenWidth', screenWidth);
        console.log('yearWidth', yearWidth);
        console.log('nE', numberOfEntries);
        console.log('nY', numberOfYears);
        console.log('cH', containerHeight);
        console.log('dH', divisionHeight);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#timeline-wrapper .year-entry").each(function (i) {
          let triggerID = "trigger" + i;
          let hashTriggerID = "#trigger" + i;
          let triggerElement = "<div id=" + triggerID + " class='trigger'></div>";
          jquery__WEBPACK_IMPORTED_MODULE_0___default()("#timeline-wrapper").append(triggerElement); //let triggerOffset = (2 * divisionHeight ) + (i * divisionHeight)

          let triggerOffset = divisionHeight + i * divisionHeight;
          gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.set(hashTriggerID, {
            top: triggerOffset
          });
          let year = "#y" + i;
          let yearEnterTl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({});
          let yearLeaveTl = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({});
          let yearSimple = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({}); //gsap.set(year, {opacity: 0})

          let $d1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.d1', this);
          let $d2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.d2', this);
          let $corporate = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.corporate', this);
          let $project = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project', this);
          let $p1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.p1', this);
          let $p2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.p2', this);
          let $c1 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c1', this);
          let $c2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c2', this);
          let d = 0.35;
          yearEnterTl.to($d1, {
            width: 70,
            height: 70,
            duration: d
          }).to($d2, {
            width: 88,
            height: 88,
            duration: d
          }, 0).to($corporate, {
            y: -35,
            duration: d
          }, 0).to($project, {
            y: 35,
            duration: d
          }, 0).to($p1, {
            opacity: 1,
            duration: d * 3
          }, d).to($p2, {
            opacity: 1,
            duration: d * 3
          }, d * 1.5).to($c1, {
            opacity: 1,
            duration: d * 3
          }, d).to($c2, {
            opacity: 1,
            duration: d * 3
          }, d * 1.5);
          yearLeaveTl.to($d1, {
            width: 50,
            height: 70,
            duration: d
          }).to($d2, {
            width: 60,
            height: 88,
            duration: d
          }, 0).to($corporate, {
            y: 0,
            duration: d
          }, 0).to($project, {
            y: 0,
            duration: d
          }, 0).to($p1, {
            opacity: 0
          }).to($p2, {
            opacity: 0
          }).to($c1, {
            opacity: 0
          }).to($c2, {
            opacity: 0
          });
          yearSimple.to($d1, {
            width: 70,
            height: 70,
            duration: d
          }).to($d2, {
            width: 88,
            height: 88,
            duration: d
          }, 0).to($corporate, {
            y: -35,
            duration: d
          }, 0).to($project, {
            y: 35,
            duration: d
          }, 0).to($p1, {
            opacity: 1,
            duration: d * 3
          }, 0).to($p2, {
            opacity: 1,
            duration: d * 3
          }, 0).to($c1, {
            opacity: 1,
            duration: d * 3
          }, 0).to($c2, {
            opacity: 1,
            duration: d * 3
          }, 0);
          yearEnterTl.pause();
          yearLeaveTl.pause();
          yearSimple.pause();

          function onEnter() {
            if (yearSimple) {
              yearSimple.pause();
              yearSimple.play();
            }
          }

          function onLeave() {
            if (yearSimple) {
              yearSimple.pause();
              yearSimple.reverse();
            }
          }

          gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
            trigger: hashTriggerID,
            //markers: {startColor: "yellow", endColor: "green", indent: 60 },
            start: "center 60%",
            end: "center 25%",
            onEnter: () => onEnter(),
            onLeave: () => onLeave()
          });
          gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
            trigger: hashTriggerID,
            markers: {
              startColor: "blue",
              endColor: "orange"
            },
            start: "center 60%",
            end: "center 25%",
            onEnterBack: () => onEnter(),
            onLeaveBack: () => onLeave()
          });
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).click(function () {
            let scrollYPos = jquery__WEBPACK_IMPORTED_MODULE_0___default()(hashTriggerID).offset().top - divisionHeight / 2;
            gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(window, {
              ease: "Sine.easeOut",
              duration: 1,
              scrollTo: {
                y: scrollYPos
              }
            });
          });
        });
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
/******/ 	__webpack_require__.h = function() { return "9c345401927773a92d08"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.4d98eaad5ddba72a8f52.hot-update.js.map