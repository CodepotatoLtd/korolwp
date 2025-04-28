import Swiper from "swiper/bundle";
import $ from "jquery";
import { gsap } from "gsap";

class GalleryBeforeAfterCoverflowCarousel {
  constructor() {
    console.log("Gallery Before After Carousel");

    var swiperClass = ".gallery-before-after-coverflow-swiper";

    $(swiperClass).each(function (index) {
      console.log("Gallery CF Carousel");

      var swiperID = "gallery-before-after-coverflow-" + index;
      var swiperIDHash = "#gallery-before-after-coverflow-" + index;

      $(this).attr("id", swiperID);

      let coverflowSwiper = new Swiper(swiperIDHash, {
        slidesPerView: 1.05,
        slideToClickedSlide: true,
        //slidesPerView: 1.9,
        centeredSlides: true,
        threshold: 10,
        followFinger: false,
        initialSlide: 1,

        breakpoints: {
          // when window width is >= 320px
          992: {
            slidesPerView: 1.9,
          },
        },
        loop: true,
        a11y: false,
        //cssMode: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0.15,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: swiperIDHash + " .swiper-button-next",
          prevEl: swiperIDHash + " .swiper-button-prev",
        },
        on: {
          init() {
            setTimeout(() => {
              window.dispatchEvent(new Event("resize"));
            }, 200);
          },
        },
      });

      $(".before-after-image-wrapper").each(function (index) {
        let $before = $(".before", this);
        let $after = $(".after", this);
        let $switcher = $(".img-switcher", this);
        let $btn = $(".switcher-btn", this);

        $switcher.on("click", function () {
          if ($btn.hasClass("active")) {
            $btn.removeClass("active");
          } else {
            $btn.addClass("active");
          }

          if ($after.hasClass("active")) {
            $after.removeClass("active");
          } else {
            $after.addClass("active");
          }
        });

        // //const container = document.getElementsByClassName("gallery-before-after-coverflow-swiper");
        // let switchBtns = document.getElementsByClassName("img-switcher");
        // // this.imgContainers =
        // //   this.container.getElementsByClassName("img-container");

        // for (let i = 0; i < switchBtns.length; i++) {
        //   const id = i;

        //   switchBtns[i].addEventListener("click", (evt) => {
        //     const e = evt;
        //     clickSwitcher(e);
        //   });
        // }

        // function clickSwitcher(e) {
        //   alert("button");
        // }

        // $switcher.on("click", function () {
        //   alert("Handler for `click` called.");
        // });

        // $switcher.on("mouseenter", handlerIn).on("mouseleave", handlerOut);

        // function handlerIn() {
        //   gsap.set($switcher.parent(), { opacity: 0.1 });
        // }

        // function handlerOut() {
        //   gsap.set($switcher.parent(), { opacity: 1 });
        // }
      });

      coverflowSwiper.on("transitionStart", function () {});
    });
  }
}

export default GalleryBeforeAfterCoverflowCarousel;
