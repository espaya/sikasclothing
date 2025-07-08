import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/css/style.css';
import '../assets/css/plugins/swiper.min.css';

export default function ShopByCategory() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      modules: [Autoplay, Pagination, Navigation],
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 4,
      slidesPerGroup: 4,
      loop: true,
      spaceBetween: 30,
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
      pagination: {
        el: paginationRef.current,
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 14
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
          pagination: false
        },
        1200: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 30,
          pagination: false
        }
      }
    };

    swiperRef.current = new Swiper('.category-swiper', swiperParams);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const categories = [
    {
      id: 1,
      image: '../images/home/demo2/category1.jpg',
      name: 'Accessories',
      count: '20 Products'
    },
    {
      id: 2,
      image: '../images/home/demo2/category2.jpg',
      name: 'Bags',
      count: '20 Products'
    },
    {
      id: 3,
      image: '../images/home/demo2/category3.jpg',
      name: 'Shoes',
      count: '20 Products'
    },
    {
      id: 4,
      image: '../images/home/demo2/category4.jpg',
      name: 'Outerwear',
      count: '20 Products'
    },
    {
      id: 5,
      image: '../images/home/demo2/category5.jpg',
      name: 'Top',
      count: '20 Products'
    }
  ];

  return (
    <section className="category-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">
        Shop by category
      </h2>
      
      <div className="position-relative">
        <div className="swiper category-swiper">
          <div className="swiper-wrapper">
            {categories.map(category => (
              <div className="swiper-slide" key={category.id}>
                <img
                  loading="lazy"
                  className="w-100 h-auto mb-3"
                  src={category.image}
                  width="258"
                  height="278"
                  alt={category.name}
                />
                <div className="text-center">
                  <a href="#" className="menu-link menu-link_us-s text-uppercase">
                    {category.name}
                  </a>
                  <p className="mb-0 text-secondary">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          ref={prevRef}
          className="category-prev position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <use href="#icon_prev_md" />
          </svg>
        </button>

        <button 
          ref={nextRef}
          className="category-next position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <use href="#icon_next_md" />
          </svg>
        </button>

        <div 
          ref={paginationRef}
          className="category-pagination mt-4 d-flex align-items-center justify-content-center"
        ></div>
      </div>
    </section>
  );
}