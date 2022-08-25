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

            // gsap.to(container, {
            //     x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: container,
            //         invalidateOnRefresh: true,
            //         pin: true,
            //         scrub: 3,
            //         end: () => "+=" + (4 * container.offsetWidth)
            //     }
            // })

            let tl = gsap.timeline();

            tl.to(container, { x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px", ease: "none"})
              .to('.title', { x: () => (container.scrollWidth - document.documentElement.clientWidth) + "px", ease: "none"}, 0);

            ScrollTrigger.create({
                trigger: container,
                invalidateOnRefresh: true,
                pin: true,
                scrub: 3,
                end: () => "+=" + (4 * container.offsetWidth),
                animation: tl,
            })



            $('.year').each(function ( index ) {

                let $hotspot = $('.hotspot', this)
                let $d1 = $('.d1', this)
                let $d2 = $('.d2', this)

                let $corporate = $('.corporate', this)
                let $project = $('.project', this)

                let $p1 = $('.p1', this)
                let $p2 = $('.p2', this)
                let $c1 = $('.c1', this)
                let $c2 = $('.c2', this)

                let d = 0.35;

                $hotspot.mouseover(function () {
                    gsap.killTweensOf($p1);
                    gsap.killTweensOf($p2);
                    gsap.killTweensOf($c1);
                    gsap.killTweensOf($c2);
                    gsap.to($d1, {width: 70, height: 70, duration: d })
                    gsap.to($d2, {width: 88, height: 88, duration: d })
                    gsap.to($corporate, {y: -35, duration: d })
                    gsap.to($project, {y: 35, duration: d })
                    gsap.to($p1, {opacity: 1, duration: d * 3, delay: d })
                    gsap.to($p2, {opacity: 1, duration: d * 3, delay: d * 1.5 })
                    gsap.to($c1, {opacity: 1, duration: d * 3, delay: d })
                    gsap.to($c2, {opacity: 1, duration: d * 3, delay: d * 1.5 })

                })

                $hotspot.mouseleave(function () {
                    gsap.killTweensOf($p1);
                    gsap.killTweensOf($p2);
                    gsap.killTweensOf($c1);
                    gsap.killTweensOf($c2);
                    gsap.to($d1, {width: 28, height: 28, duration: d })
                    gsap.to($d2, {width: 28, height: 28, duration: d })
                    gsap.to($corporate, {y: 0, duration: d })
                    gsap.to($project, {y: 0, duration: d })
                    gsap.to($p1, {opacity: 0, duration: d })
                    gsap.to($p2, {opacity: 0, duration: d })
                    gsap.to($c1, {opacity: 0, duration: d })
                    gsap.to($c2, {opacity: 0, duration: d })
                })
            });
        };
    }
}

export default Timeline
