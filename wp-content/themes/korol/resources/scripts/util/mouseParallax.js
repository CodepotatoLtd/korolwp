import { gsap } from 'gsap';

class MouseParallax {

    constructor()
    {

      console.log("-------- MouseParallax")

        document.addEventListener("mousemove", parallax);
        function parallax(event)
        {
            this.querySelectorAll(".parallax-wrap .p-element").forEach((element) => {
                const position = element.getAttribute("value");
                const x = (window.innerWidth - event.pageX * position) / 90;
                const y = (window.innerHeight - event.pageY * position) / 90;

                gsap.to(element, {x: x, y:y});

                //shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }

    }
}

export default MouseParallax
