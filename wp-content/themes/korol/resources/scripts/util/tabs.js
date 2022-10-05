import { gsap } from 'gsap';
import $ from "jquery";

class Tabs {

    constructor()
    {


        if ($('.section-image-tabs').length) {
            let targets = document.querySelectorAll(".tab-hotspot");
            let icons = document.querySelectorAll(".icon");
            let articles = document.querySelectorAll(".tab-panel");
            let activeTab = 0;
            let old = 0;
            let heights = [];
            let dur = 0.4;
            let animation;

            for (let i = 0; i < targets.length; i++) {
                targets[i].index = i;
                heights.push(articles[i].offsetHeight); // get height of each article
                //gsap.set(articles[i], {top: 0, y:-heights[i]}); // push all articles up out of view
                gsap.set(articles[i], {autoAlpha: 0, y:100});
                gsap.set(icons[i], {scaleX: 0.9, scaleY:0.9});
                targets[i].addEventListener("click", showPanel);
            }

            $('.tab-hotspot').each(function (index) {
                let id = "#tab-" + index
                let icon = "#icon-" + index
                $(this).mouseover(function () {
                  if (index != activeTab) {
                    $(id).addClass("hover");
                    gsap.to(icon, {scaleX: 1, scaleY: 1});
                  }
                }).mouseleave(function () {
                  if (index != activeTab) {
                    $(id).removeClass("hover");
                    gsap.to(icon, {scaleX: 0.9, scaleY: 0.9});
                  }
                });
            })


            gsap.set(articles[0], {autoAlpha: 1, y: 0});
            gsap.set(icons[0], {scaleX: 1.1, scaleY: 1.1});


            function showPanel()
            {
                // check if clicked target is new and if the timeline is currently active

                console.log('doCoolStuff')

                if (this.index != activeTab) {
                    if (animation && animation.isActive()) {
                        animation.progress(1);
                    }
                    animation = gsap.timeline({defaults: {duration: 0.4}});
                    old = activeTab;
                    activeTab = this.index;
                    let id = "#tab-" + this.index;
                    $('.tab-button').removeClass("active");
                    $(id).addClass("active");


                    let scrollYPos = ($(".panel-holder").offset().top);

                    // dgsap.to(window, {scrollTo: {y: scrollYPos, autoKill: false}, duration: 1});
                    animation.to(icons[old], {scaleX: 0.9, scaleY: 0.9}, 0);
                    animation.to(icons[activeTab], {scaleX: 1.1, scaleY: 1.1}, 0);
                    animation.to(targets[old], {color: "#1bb1a5", ease: "none"}, 0);
                    animation.to(targets[activeTab], {color: "#fff", ease: "none"}, 0);
                    animation.to(articles[old], {autoAlpha: 0, y: 100}, 0);
                    animation.to(articles[activeTab], {duration: 0.5, autoAlpha: 1, y: 0}, "-=0.25");
                }
            }
        }
    }
}

export default Tabs
