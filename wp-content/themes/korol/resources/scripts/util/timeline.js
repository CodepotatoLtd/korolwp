import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

class Timeline {

    constructor()
    {


        if ($('#timeline-wrapper').length) {
            gsap.registerPlugin(ScrollTrigger)

            let container = document.getElementById("container");

            gsap.to(container, {
                x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    invalidateOnRefresh: true,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + container.offsetWidth
                }
            })

            $('.year').each(function ( index ) {

                let $hotspot = $('.hotspot', this)
                let $c1 = $('.c1', this)
                let $c2 = $('.c2', this)

                let $corporate = $('.corporate', this)
                let $project= $('.project', this)

                $hotspot.mouseover(function () {
                    gsap.to($c1, {width: 110, height: 110 })
                    gsap.to($c2, {width: 140, height: 140 })
                    gsap.to($corporate, {top: -150 })
                    gsap.to($project, {bottom: -150 })
                })

                $hotspot.mouseleave(function () {
                    gsap.to($c1, {width: 28, height: 28 })
                    gsap.to($c2, {width: 28, height: 28 })
                    gsap.to($corporate, {top: -90 })
                    gsap.to($project, {bottom: -90 })
                })

            });
        };
    }
}

export default Timeline
