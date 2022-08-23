// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

class BurgerMenu {

    doAThing() {
        //console.log('Do a thing')
    }

    constructor() {

      gsap.registerPlugin(ScrollToPlugin);

      //let mobile = true;
        let menuOpen = false;
        let menuToggle = '#show-menu';
        let menuWrapper = '.menu-wrapper';
        let header = '.dropdown-menu-style';

        $(menuToggle).click(function () {

            //console.log('-------- main-navbar click');

            if (menuOpen) {
                //console.log('close');

                $(header).removeClass('menu-open');
                $(menuWrapper).removeClass('menu-open');

                menuOpen = false;
            } else {
                //console.log('open');

                //$(menuToggle).addClass('open');
                $(header).addClass('menu-open');
                $(menuWrapper).addClass('menu-open');

                menuOpen = true;
            }


        });

      $('.anchor a').on('click', function ( event ) {

        event.preventDefault();

        menuOpen = false;
        $(header).removeClass('menu-open');
        $(menuWrapper).removeClass('menu-open');

        console.log('click')

        let target = $(this).attr('href');

        let scrollYPos = ($(target).offset().top) - 70;

        console.log(scrollYPos)

        gsap.to(window, {scrollTo: {y: scrollYPos, autoKill:false}, duration:0.5});

      });

      $(document).scroll(function () {
        //console.log($(document).scrollTop())
      });

    }
}

export default BurgerMenu
