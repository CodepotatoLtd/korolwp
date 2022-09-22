import { gsap } from 'gsap';
import $ from "jquery";

class Team {

    constructor()
    {


        if ($('.section-team').length) {
            $('.member').each(function (index) {

                let $member = this;
                $('.show-bio', $member).click(function () {

                    if ($('.bio', $member).hasClass('visible')) {
                        $('img', $member).addClass('gray')
                        $('.plus', $member).removeClass('hidden')
                        $('.minus', $member).addClass('hidden')
                        $('.bio', $member).removeClass('visible')
                    } else {
                        $('img', $member).removeClass('gray')
                        $('.plus', $member).addClass('hidden')
                        $('.minus', $member).removeClass('hidden')
                        $('.bio', $member).addClass('visible')
                    }
                  //alert( "Handler for .click() called." );
                });
            })

            // let targets = document.querySelectorAll(".tab-hotspot");
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

export default Team
