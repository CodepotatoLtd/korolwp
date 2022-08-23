import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import $ from "jquery";

class DownArrow {

    constructor()
    {

        gsap.registerPlugin(ScrollToPlugin);

        $('.down-arrow').on('click', function ( event ) {

            event.preventDefault();

            let target = $(this).attr('href');
            let offset = '90';

            var scrollYPos = ($(target).offset().top - offset);

            gsap.to(window, {scrollTo: {y: scrollYPos, autoKill: false}, duration: 0.75});

        })

    }
}

export default DownArrow
