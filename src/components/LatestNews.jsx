import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/css/style.css';
import '../assets/css/plugins/swiper.min.css';

export default function LatestNews() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      modules: [Autoplay, Pagination],
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: paginationRef.current,
        clickable: true,
        type: 'bullets',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 14
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 24
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30
        }
      }
    };

    swiperRef.current = new Swiper('.latest-news-swiper', swiperParams);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      image: '../images/home/demo2/post1.jpg',
      author: 'By Admin',
      date: 'April 05, 2023',
      title: 'Woman with good shoes is never be ugly place',
      link: 'blog_single.html'
    },
    {
      id: 2,
      image: '../images/home/demo2/post2.jpg',
      author: 'By Admin',
      date: 'April 05, 2023',
      title: 'What Freud Can Teach Us About Furniture',
      link: 'blog_single.html'
    },
    {
      id: 3,
      image: '../images/home/demo2/post3.jpg',
      author: 'By Admin',
      date: 'April 05, 2023',
      title: 'Habitant morbi tristique senectus',
      link: 'blog_single.html'
    }
  ];

  return (
    <section className="blog-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">
        Latest News
      </h2>
      
      <div className="position-relative">
        <div className="swiper latest-news-swiper">
          <div className="swiper-wrapper blog-grid row-cols-xl-3">
            {newsItems.map(item => (
              <div className="swiper-slide blog-grid__item mb-4" key={item.id}>
                <div className="blog-grid__item-image">
                  <img
                    loading="lazy"
                    className="h-auto w-100"
                    src={item.image}
                    width="450"
                    height="300"
                    alt={item.title}
                  />
                </div>
                <div className="blog-grid__item-detail">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">{item.author}</span>
                    <span className="blog-grid__item-meta__date">
                      {item.date}
                    </span>
                  </div>
                  <div className="blog-grid__item-title mb-0">
                    <a href={item.link}>
                      {item.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={paginationRef}
          className="blog-pagination type2 mt-1 mt-md-4 d-flex align-items-center justify-content-center"
        ></div>
      </div>
    </section>
  );
}