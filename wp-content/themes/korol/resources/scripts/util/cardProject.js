import $ from "jquery";
import {gsap} from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';

class CardProject {

    constructor()
    {

        $('.card-project').each(function ( index ) {

            let $overlay = $('.overlay', this)
            let $specification = $('.specification', this)
            let id = "p" + index
            let idHash = "#p" + index

            let specEl = document.querySelector(idHash);

            $(this).mouseover(function () {
                $overlay.addClass('visible')
                gsap.to($overlay, {opacity: 1 })
                //gsap.to($specification, {height: 'auto' })
                //gsap.to($specification, {height: 'auto', onUpdate:checkPosition })
                //checkPosition()
               // let inView = isInViewport(idHash)
            })

            $(this).mouseleave(function () {
                gsap.to($overlay, {opacity: 0, onComplete: function () {
                    $overlay.removeClass('visible') }})
                //gsap.to($specification, {height: 0 })

            })

            function checkPosition()
            {
                //let inView = isInViewport(specEl)
                //console.log(inView)
                let elem = document.getElementById(id);
                //let rect = elem.getBoundingClientRect();

                let inView = isInViewport(elem)

                console.log(inView)

                if (inView === "top") {
                    let scrollYPos = ($(idHash).offset().top - 100);

                    gsap.to(window, {scrollTo: {y: scrollYPos, autoKill: false}, duration: 0.75});
                } else if (inView === "bottom") {
                    let scrollYPos = "+=150";

                    gsap.to(window, {scrollTo: {y: scrollYPos, autoKill: false}, duration: 0.75});
                }


            }

        });


        function isInViewport(el)
        {
            const rect = el.getBoundingClientRect();

            if (rect.top <= 0) {
                return "top"
            } else if ((rect.bottom + 240) >= (window.innerHeight || document.documentElement.clientHeight)) {
                return "bottom"
            } else {
                return "visible"
            }

        }
    }
}

export default CardProject
