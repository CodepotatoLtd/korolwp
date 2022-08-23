import { gsap } from 'gsap';
import $ from "jquery";

class Tabs {

    constructor()
    {
        let targets = document.querySelectorAll(".tab-hotspot");
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
            gsap.set(articles[i], {autoAlpha: 0});
            targets[i].addEventListener("click", showPanel);
        }


        $('.tab-hotspot').each(function (index) {
            let id = "#tab-" + index
            $(this).mouseover(function () {
                $(id).addClass("hover");
            }).mouseleave(function () {
                $(id).removeClass("hover");
            });
        })


        gsap.set(articles[0], {autoAlpha: 1});


        function showPanel()
        {
          // check if clicked target is new and if the timeline is currently active

            console.log('doCoolStuff')
            if (this.index != activeTab) {
                //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps.
                if (animation && animation.isActive()) {
                    animation.progress(1);
                }
                animation = gsap.timeline({defaults:{duration:0.4}});
                old = activeTab;
                activeTab = this.index;
                let id = "#tab-" + this.index;
                $('.tab-button').removeClass("active");
                $(id).addClass("active");
                // animate bubble slider to clicked target
                //animation.to(".slider", {x:targets[activeTab].offsetLeft, width:targets[activeTab].offsetWidth});
                // change text color on old and new tab targets
                animation.to(targets[old], {color:"#1bb1a5", ease:"none"}, 0);
                animation.to(targets[activeTab], {color:"#fff", ease:"none"}, 0);
                // slide current article down out of view and then set it to starting position at top
                //animation.to(articles[old], {y:heights[old], opacity: 0}, 0);
                animation.to(articles[old], {autoAlpha: 0}, 0);
                 // animation.set(articles[old], {y:-heights[old], opacity: 1});
                //animation.set(articles[old], { opacity: 1});
                // resize article block to accommodate new content
                //animation.to(".panel-holder", {height:heights[activeTab]});
                // slide in new article
                animation.to(articles[activeTab], {duration: 1, autoAlpha: 1}, "-=0.25");
            }
        }

        //gsap.set('.tab-panel', {autoAlpha: 0, height: 0})

        //gsap.set('#tab-0-panel', {autoAlpha: 1, height: 'auto'}) // active panel
       // $('#b0').addClass('active'); // button



        // if ( $('.section-image-tabs').length ) {
        //     $('.tab-button').each(function (index) {
        //         let i = index
        //
        //       //console.log(i)
        //
        //         $(this).click(function () {
        //             console.log(i)
        //
        //             let id = '#tab-panel-' + i
        //           // console.log(i)
        //             $('.tab-button').removeClass('active');
        //             gsap.killTweensOf('.tab-panel');
        //             gsap.set('.tab-panel', {autoAlpha: 0, height: 0})
        //             gsap.set(id, {height: 'auto'})
        //             gsap.to('.panel-holder', {height: 'auto'})
        //             gsap.set(id, {autoAlpha: 1})
        //             $(this).addClass('active');
        //
        //         });
        //
        //     })
        // }

    }
}

export default Tabs
