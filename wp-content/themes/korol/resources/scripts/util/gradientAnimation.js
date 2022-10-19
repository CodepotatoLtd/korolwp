import { gsap } from "gsap";
import $ from "jquery";

class GradientAnimation {

    constructor()
    {

        if ($('.dropdown-menu-style').length) {
            let g1a = "linear-gradient(77deg, rgba(0,0,32,1) 0%, rgba(0,0,32,1) 29%, rgba(0,0,32,0) 100%)";
            let g1b = "linear-gradient(50deg, rgba(0,0,32,1) 0%, rgba(0,0,32,1) 29%, rgba(0,0,32,0) 100%)";

            let g2a = "linear-gradient(77deg, rgba(14,54,133,0.1) 0%, rgba(14,54,133,1) 70%, rgba(14,54,133,1) 100%)";
            let g2b = "linear-gradient(90deg, rgba(14,54,133,0.2) 0%, rgba(14,54,133,1) 70%, rgba(14,54,133,1) 100%)";

            let g3a = "linear-gradient(77deg, rgba(136,187,236,0) 20%, rgba(136,187,236,1) 80%, rgba(136,187,236,1) 100%)";
            let g3b = "linear-gradient(30deg, rgba(136,187,236,0) 20%, rgba(136,187,236,1) 80%, rgba(136,187,236,1) 100%)";

            let g4a = "linear-gradient(90deg, rgba(253,197,108,0) 40%, rgba(253,197,108,1) 98%, rgba(253,197,108,1) 100%)";
            let g4b = "linear-gradient(120deg, rgba(253,197,108,0) 40%, rgba(253,197,108,1) 98%, rgba(253,197,108,1) 100%)";

            gsap.fromTo(".gradient-1", {background: g1a}, {
                ease: "sine.inOut",
                duration: 5,
                background: g1b,
                repeat: -1,
                yoyo: true
            });
            gsap.fromTo(".gradient-2", {background: g2a}, {
                ease: "sine.inOut",
                duration: 3,
                background: g2b,
                repeat: -1,
                yoyo: true
            });
            gsap.fromTo(".gradient-3", {background: g3a}, {
                ease: "sine.inOut",
                duration: 4.5,
                background: g3b,
                repeat: -1,
                yoyo: true
            });
            gsap.fromTo(".gradient-4", {background: g4a}, {
                ease: "sine.inOut",
                duration: 4,
                opacity: 0.5,
                background: g4b,
                repeat: -1,
                yoyo: true
            });
        }
    }


}

export default GradientAnimation
