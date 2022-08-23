import Swiper from 'swiper/bundle';
import $ from "jquery";

class GalleryCoverflowCarousel {

    constructor()
    {

        console.log('Gallery CF Carousel')

        var swiperClass = '.gallery-coverflow-swiper';

        $(swiperClass).each(function ( index ) {

            console.log('Gallery CF Carousel')

            var swiperID = 'gallery-coverflow-' + index;
            var swiperIDHash = '#gallery-coverflow-' + index;

            $(this).attr('id', swiperID);

            let coverflowSwiper = new Swiper(swiperIDHash, {
                slidesPerView: 1.9,
                centeredSlides: true,
                slideToClickedSlide: true,
                initialSlide: 1,
                loop: true,
                //cssMode: true,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0.15,
                    depth: 500,
                    modifier: 1,
                    slideShadows: false,
                },
                navigation: {
                    nextEl: swiperIDHash + ' .swiper-button-next',
                    prevEl: swiperIDHash + ' .swiper-button-prev',
                },
                on: {
                    init() {
                        setTimeout(() => {
                            window.dispatchEvent(new Event('resize'))
                            }, 200)
                    },
                },

            });

            coverflowSwiper.on('transitionStart', function () {

            });

        });
    }
}

export default GalleryCoverflowCarousel
