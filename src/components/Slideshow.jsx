import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Import images
import slider1 from '/images/home/demo2/slider1.jpg';
import slider2 from '/images/home/demo2/slider2.jpg';
import slider3 from '/images/home/demo2/slider3.jpg';

export default function Slideshow() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper only if it hasn't been initialized yet
    if (!swiperRef.current) {
      swiperRef.current = new Swiper('.js-swiper-slider', {
        modules: [Autoplay, EffectFade, Pagination],
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,// Ensure autoplay waits for transition,
          stopOnLastSlide: false
        },
        slidesPerView: 1,

        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        // loopAdditionalSlides: 4, // Increased for better looping
        loopedSlides: 3, // Should match number of slides
        observer: true,
        observeParents: true,
        pagination: {
          el: '.slideshow-pagination',
          type: 'bullets',
          clickable: true
        },
        speed: 1000, // Transition speed in ms
        on: {
          init: function() {
            // Force redraw to fix potential loop issues
            this.update();
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (swiperRef.current && typeof swiperRef.current.destroy === 'function') {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, []);

  const slides = [
    {
      id: 1,
      image: slider1,
      position: '80% center',
      season: 'Summer 2024',
      title: 'Hello New Season',
      offer: 'Limited time offer - up to 60% off & free shipping'
    },
    {
      id: 2,
      image: slider2,
      position: '70% center',
      season: 'Summer 2024',
      title: 'New Arrival Tops',
      offer: 'Limited time offer - up to 60% off & free shipping'
    },
    {
      id: 3,
      image: slider3,
      position: '70% center',
      season: 'Summer 2024',
      title: 'Spring Collection',
      offer: 'Limited time offer - up to 60% off & free shipping'
    }
  ];

  return (
    <section className="swiper-container js-swiper-slider slideshow type2 full-width">
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <div className="swiper-slide" key={slide.id}>
            <div className="overflow-hidden position-relative" style={{ height: '100vh' }}>
              <div className="slideshow-bg position-absolute w-100 h-100 start-0 top-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slideshow-bg__img object-fit-cover w-100 h-100"
                  style={{ objectPosition: slide.position }}
                />
              </div>
              <div className="slideshow-text container position-absolute start-50 top-50 translate-middle w-100 px-3">
                <h6 className="text_dash text-shadow-white text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3">
                  {slide.season}
                </h6>
                <h2 className="text-uppercase text-shadow-white display-3 fw-bold mb-0 animate animate_fade animate_btt animate_delay-4">
                  {slide.title}
                </h2>
                <p className="fs-5 mb-4 pb-2 text-uppercase text-shadow-white animate animate_fade animate_btt animate_delay-5">
                  {slide.offer}
                </p>
                <button className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7 btn-55">
                  <span className="text_dash_half">Discover Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slideshow-pagination position-left-center type2 swiper-pagination-clickable swiper-pagination-bullets">

      </div>

      
      <a
        href="#section-grid-banner"
        className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-3 text_dash text-uppercase fw-medium"
      >
        Scroll
      </a>
    </section>
  );
}