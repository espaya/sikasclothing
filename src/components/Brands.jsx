import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../assets/css/style.css';
import '../assets/css/plugins/swiper.min.css';

export default function Brands() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      modules: [Autoplay],
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 7,
      slidesPerGroup: 7,
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 14
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 7,
          slidesPerGroup: 1,
          spaceBetween: 30
        }
      }
    };

    swiperRef.current = new Swiper('.brands-swiper', swiperParams);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const brands = [
    {
      id: 1,
      image: '../images/brands/brand1.png',
      width: 120,
      height: 20,
      alt: 'Brand 1'
    },
    {
      id: 2,
      image: '../images/brands/brand2.png',
      width: 87,
      height: 20,
      alt: 'Brand 2'
    },
    {
      id: 3,
      image: '../images/brands/brand3.png',
      width: 132,
      height: 22,
      alt: 'Brand 3'
    },
    {
      id: 4,
      image: '../images/brands/brand4.png',
      width: 72,
      height: 21,
      alt: 'Brand 4'
    },
    {
      id: 5,
      image: '../images/brands/brand5.png',
      width: 123,
      height: 31,
      alt: 'Brand 5'
    },
    {
      id: 6,
      image: '../images/brands/brand6.png',
      width: 137,
      height: 22,
      alt: 'Brand 6'
    },
    {
      id: 7,
      image: '../images/brands/brand7.png',
      width: 94,
      height: 21,
      alt: 'Brand 7'
    }
  ];

  return (
    <section className="brands-carousel container">
      <h2 className="d-none">Brands</h2>
      <div className="position-relative">
        <div className="swiper brands-swiper">
          <div className="swiper-wrapper">
            {brands.map(brand => (
              <div className="swiper-slide" key={brand.id}>
                <img
                  loading="lazy"
                  src={brand.image}
                  width={brand.width}
                  height={brand.height}
                  alt={brand.alt}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}