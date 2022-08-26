import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

class Timeline {
    yearSimple;

    constructor()
    {


        if ($('#timeline-wrapper').length) {
            gsap.registerPlugin(ScrollTrigger)

            let container = document.getElementById("container");

            let tl = gsap.timeline();

            tl.to(container, { x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px", ease: "none"})
              .to('.title', { x: () => (container.scrollWidth - document.documentElement.clientWidth) + "px", ease: "none"}, 0);

            ScrollTrigger.create({
                trigger: container,
                invalidateOnRefresh: true,
                pin: true,
                //scrub: 3,
                scrub: true,
                //markers: true,
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

                // $hotspot.mouseover(function () {
                //     gsap.killTweensOf($p1);
                //     gsap.killTweensOf($p2);
                //     gsap.killTweensOf($c1);
                //     gsap.killTweensOf($c2);
                //     gsap.to($d1, {width: 70, height: 70, duration: d })
                //     gsap.to($d2, {width: 88, height: 88, duration: d })
                //     gsap.to($corporate, {y: -35, duration: d })
                //     gsap.to($project, {y: 35, duration: d })
                //     gsap.to($p1, {opacity: 1, duration: d * 3, delay: d })
                //     gsap.to($p2, {opacity: 1, duration: d * 3, delay: d * 1.5 })
                //     gsap.to($c1, {opacity: 1, duration: d * 3, delay: d })
                //     gsap.to($c2, {opacity: 1, duration: d * 3, delay: d * 1.5 })
                //
                // })
                //
                // $hotspot.mouseleave(function () {
                //     gsap.killTweensOf($p1);
                //     gsap.killTweensOf($p2);
                //     gsap.killTweensOf($c1);
                //     gsap.killTweensOf($c2);
                //     gsap.to($d1, {width: 28, height: 28, duration: d })
                //     gsap.to($d2, {width: 28, height: 28, duration: d })
                //     gsap.to($corporate, {y: 0, duration: d })
                //     gsap.to($project, {y: 0, duration: d })
                //     gsap.to($p1, {opacity: 0, duration: d })
                //     gsap.to($p2, {opacity: 0, duration: d })
                //     gsap.to($c1, {opacity: 0, duration: d })
                //     gsap.to($c2, {opacity: 0, duration: d })
                // })
            });




            const myTimeout = setTimeout(setTriggers, 500);

            function setTriggers()
            {
                let numberOfEntries = $('#timeline-wrapper .year-entry').length
                let numberOfYears = $('#timeline-wrapper .year').length
                let containerHeight = $('#timeline-wrapper').height()
                let containerWidth = $('#container').width()
                let screenHeight = window.innerHeight;
                let screenWidth = window.innerWidth;
                let yearWidth = $('.year').width()
                let divisionHeight = ( 4 * container.offsetWidth / ( numberOfEntries + 1  ))

                console.log('containerWidth', containerWidth)
                console.log('screenWidth', screenWidth)
                console.log('yearWidth', yearWidth)
                console.log('nE', numberOfEntries)
                console.log('nY', numberOfYears)
                console.log('cH', containerHeight)
                console.log('dH', divisionHeight)

                $("#timeline-wrapper .year-entry").each(function ( i ) {

                    let triggerID = "trigger" + i
                    let hashTriggerID = "#trigger" + i
                    let triggerElement = "<div id=" + triggerID + " class='trigger'></div>"
                    $("#timeline-wrapper").append(triggerElement);

                    let triggerOffset = (2 * divisionHeight ) + (i * divisionHeight)
                    gsap.set(hashTriggerID, {top: triggerOffset})

                    let year = "#y" + i;

                    let yearEnterTl = gsap.timeline({});
                    let yearLeaveTl = gsap.timeline({});
                    let yearSimple = gsap.timeline({});

                    //gsap.set(year, {opacity: 0})

                    let $d1 = $('.d1', this)
                    let $d2 = $('.d2', this)

                    let $corporate = $('.corporate', this)
                    let $project = $('.project', this)

                    let $p1 = $('.p1', this)
                    let $p2 = $('.p2', this)
                    let $c1 = $('.c1', this)
                    let $c2 = $('.c2', this)

                    let d = 0.35;

                    yearEnterTl
                    .to($d1, {width: 70, height: 70, duration: d })
                    .to($d2, {width: 88, height: 88, duration: d }, 0)
                    .to($corporate, {y: -35, duration: d }, 0)
                    .to($project, {y: 35, duration: d }, 0)
                    .to($p1, {opacity: 1, duration: d * 3}, d)
                    .to($p2, {opacity: 1, duration: d * 3}, d * 1.5)
                    .to($c1, {opacity: 1, duration: d * 3}, d)
                    .to($c2, {opacity: 1, duration: d * 3}, d * 1.5)

                    yearLeaveTl
                    .to($d1, {width: 50, height: 70, duration: d })
                    .to($d2, {width: 60, height: 88, duration: d }, 0)
                    .to($corporate, {y: 0, duration: d }, 0)
                    .to($project, {y: 0, duration: d }, 0)
                    .to($p1, {opacity: 0})
                    .to($p2, {opacity: 0})
                    .to($c1, {opacity: 0})
                    .to($c2, {opacity: 0})

                    yearSimple
                    .to($d1, {width: 70, height: 70, duration: d })
                    .to($d2, {width: 88, height: 88, duration: d },0)
                    .to($corporate, {y: -35, duration: d }, 0)
                    .to($project, {y: 35, duration: d }, 0)
                    .to($p1, {opacity: 1, duration: d * 3},0)
                    .to($p2, {opacity: 1, duration: d * 3},0)
                    .to($c1, {opacity: 1, duration: d * 3},0)
                    .to($c2, {opacity: 1, duration: d * 3},0)

                    yearEnterTl.pause()
                    yearLeaveTl.pause()
                    yearSimple.pause()

                    function onEnter()
                    {
                        if (yearSimple) {
                            yearSimple.pause()
                            yearSimple.play()
                        }
                    }

                    function onLeave()
                    {
                        if (yearSimple) {
                            yearSimple.pause()
                            yearSimple.reverse()
                        }
                    }

                    ScrollTrigger.create({
                        trigger: hashTriggerID,
                        //markers: {startColor: "yellow", endColor: "green", indent: 60 },
                        start: "center 60%",
                        end: "center 30%",
                        onEnter: () => onEnter(),
                        onLeave: () => onLeave(),
                        })

                   ScrollTrigger.create({
                        trigger: hashTriggerID,
                        //markers: {startColor: "blue", endColor: "orange"},
                        start: "center 60%",
                        end: "center 30%",
                        onEnterBack: () => onEnter(),
                        onLeaveBack: () => onLeave(),
                      })


                });


                // for (let i = 0; i < numberOfEntries; i++) {
                //     let triggerID = "trigger" + i
                //     let hashTriggerID = "#trigger" + i
                //     let triggerElement = "<div id=" + triggerID + " class='trigger'></div>"
                //     $("#timeline-wrapper").append(triggerElement);
                //
                //     let triggerOffset = (2 * divisionHeight ) + (i * divisionHeight)
                //     gsap.set(hashTriggerID, {top: triggerOffset})
                //
                //     let year = "#y" + i;
                //
                //     let yearTl = gsap.timeline();
                //
                //     yearTl.to(year, {opacity: 0.25})
                //
                //     yearTl.pause()
                //
                //     function playTL()
                //     {
                //         yearTl.play()
                //     }
                //
                //     function reverseTL()
                //     {
                //         yearTl.reverse()
                //     }
                //
                //     ScrollTrigger.create({
                //         trigger: hashTriggerID,
                //         start: "top 60%",
                //         end: "bottom 40%",
                //         markers: true,
                //                //end: () => "+=" + (4 * container.offsetWidth),
                //                //animation: yearTL,
                //         onEnter: () => playTL(),
                //         onLeave: () => reverseTL(),
                //         onEnterBack: () => playTL(),
                //         onLeaveBack: () => reverseTL(),
                //     })
                // }

            }
        };
    }
}

export default Timeline
