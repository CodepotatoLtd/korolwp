import DropdownMenu from '../util/dropdownMenu.js';
import DownArrow from '../util/downArrow.js';
import VideoPlayer from "../util/videoPlayer.js";
import MouseParallax from "../util/mouseParallax.js";
import GalleryCoverflowCarousel  from "../util/galleryCoverflowCarousel.js";
import Tabs from "../util/tabs.js";
import Timeline from "../util/timeline.js";
import CardProject from "../util/cardProject.js";
import Map from "../util/map.js";
import AOS from 'aos';

export default {
    init() {

    },
    finalize() {
      AOS.init();
        // JavaScript to be fired on all pages, after page specific JS is fired
        const dropdownMenu = new DropdownMenu();
        const downArrow = new DownArrow();
        const videoPlayer = new VideoPlayer();
        const mouseParallax = new MouseParallax()
        const galleryCoverflowCarousel = new GalleryCoverflowCarousel()
        const timeline = new Timeline()
        const tabs = new Tabs()
        const cardProject = new CardProject()
        const map = new Map();

    },
};
