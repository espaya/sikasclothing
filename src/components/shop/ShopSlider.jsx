import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

export default function ShopSlider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Initialize Swiper
        swiperRef.current = new Swiper('.js-swiper-slider', {
            modules: [Autoplay, EffectFade, Pagination],
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            pagination: {
                el: '.slideshow-pagination',
                type: 'bullets',
                clickable: true,
            },
        });

        return () => {
            // Cleanup Swiper
            if (swiperRef.current && swiperRef.current.destroy) {
                swiperRef.current.destroy(true, true);
            }
        };
    }, []);

    const slides = [
        {
            titlePart1: "Women's",
            titlePart2: 'ACCESSORIES',
            description: 'Accessories are the best way to update your look. Add a title edge with new styles and new colors, or go for timeless pieces.',
            bgColor: '#f5e6e0',
            image: '../images/shop/shop_banner6.jpg', // Make sure this path is correct
            alt: "Women's accessories",
        },
        {
            titlePart1: 'Choose',
            titlePart2: 'Your Best Suits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bgColor: '#e0e5f5',
            image: '../images/shop/shop_banner6.jpg', // Make sure this path is correct
            alt: 'Best suits collection',
        },
        {
            titlePart1: "World's",
            titlePart2: 'Leading Quality',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            bgColor: '#e0f5e8',
            image: '../images/shop/shop_banner3.jpg', // Make sure this path is correct
            alt: 'High quality products',
        },
    ];

    return (
        <div className="swiper-container js-swiper-slider slideshow slideshow_small slideshow_split">
            <div className="swiper-wrapper">
                {slides.map((slide, index) => (
                    <div className="swiper-slide" key={index}>
                        <div className="slide-split d-block d-md-flex h-100 overflow-hidden">
                            <div className="slide-split_text position-relative d-flex align-items-center" style={{ backgroundColor: slide.bgColor }}>
                                <div className="slideshow-text p-xl-5 container p-3">
                                    <h2 className="text-uppercase section-title fw-normal animate animate_fade animate_btt animate_delay-2 mb-3">
                                        {slide.titlePart1} <br />
                                        <strong>{slide.titlePart2}</strong>
                                    </h2>
                                    <p className="animate animate_fade animate_btt animate_delay-5 mb-0">{slide.description}</p>
                                </div>
                            </div>
                            <div className="slide-split_media position-relative">
                                <div className="slideshow-bg" style={{ backgroundColor: slide.bgColor }}>
                                    <img
                                        loading="lazy"
                                        src={slide.image}
                                        width="630"
                                        height="450"
                                        alt={slide.alt}
                                        className="slideshow-bg__img object-fit-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const fallbackDiv = document.createElement('div');
                                            fallbackDiv.className = 'slideshow-bg__fallback';
                                            fallbackDiv.style.backgroundColor = slide.bgColor;
                                            fallbackDiv.style.width = '100%';
                                            fallbackDiv.style.height = '100%';
                                            e.target.parentNode.appendChild(fallbackDiv);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-xl-5 container p-3">
                <div className="slideshow-pagination d-flex align-items-center position-absolute pb-xl-2 bottom-0 mb-4"></div>
            </div>
        </div>
    );
}