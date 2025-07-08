import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/css/style.css';
import '../assets/css/plugins/swiper.min.css';

export default function BestSelling() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRefs = useRef([]);
  const prevRefs = useRef([]);
  const nextRefs = useRef([]);
  const paginationRefs = useRef([]);

  // Initialize swipers when active tab changes
  useEffect(() => {
    const initializeSwiper = (index) => {
      if (!swiperRefs.current[index]) {
        swiperRefs.current[index] = new Swiper(`.best-selling-swiper-${index}`, {
          modules: [Autoplay, Pagination, Navigation],
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          speed: 1000,
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          pagination: {
            el: paginationRefs.current[index],
            clickable: true,
          },
          navigation: {
            prevEl: prevRefs.current[index],
            nextEl: nextRefs.current[index],
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
            }
          }
        });
      }
    };

    // Initialize current tab's swiper
    initializeSwiper(activeTab);

    // Cleanup function
    return () => {
      swiperRefs.current.forEach(swiper => {
        if (swiper && swiper.destroy) {
          swiper.destroy(true, true);
        }
      });
      swiperRefs.current = [];
    };
  }, [activeTab]);

  // Best selling product data
  const bestSellingProducts = [
    {
      id: 1,
      images: ['/images/home/demo2/product-0-1.jpg', '/images/home/demo2/product-0-2.jpg'],
      category: 'JEAN',
      title: 'Cropped Faux Leather Jacket',
      price: '$29',
      oldPrice: null,
      label: null
    },
    {
      id: 2,
      images: ['/images/home/demo2/product-1-1.jpg', '/images/home/demo2/product-1-2.jpg'],
      category: 'JEAN',
      title: 'Calvin Shorts',
      price: '$62',
      oldPrice: null,
      label: 'NEW'
    },
    {
      id: 3,
      images: ['/images/home/demo2/product-2-1.jpg', '/images/home/demo2/product-2-2.jpg'],
      category: 'JEAN',
      title: 'Kirby T-Shirt',
      price: '$17',
      oldPrice: null,
      label: null
    },
    {
      id: 4,
      images: ['/images/home/demo2/product-3-1.jpg', '/images/home/demo2/product-3-2.jpg'],
      category: 'JEAN',
      title: 'Cableknit Shawl',
      price: '$99',
      oldPrice: '$129',
      label: '-67%'
    }
  ];

  const bestSellingTabs = [
    { id: 'best-selling-tab-1', label: 'Tops' },
    { id: 'best-selling-tab-2', label: 'Jeans' },
    { id: 'best-selling-tab-3', label: 'Bags' },
    { id: 'best-selling-tab-4', label: 'Accessories' }
  ];

  return (
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Best Selling
      </h2>
      
      <ul className="nav nav-tabs mb-3 mb-xl-5 text-uppercase justify-content-center" id="best-selling-tab" role="tablist">
        {bestSellingTabs.map((tab, index) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <a
              className={`nav-link nav-link_underscore ${activeTab === index ? 'active' : ''}`}
              id={`${tab.id}-trigger`}
              onClick={() => setActiveTab(index)}
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === index}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-2" id="best-selling-tab-content">
        {bestSellingTabs.map((tab, index) => (
          <div
            className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-trigger`}
            key={tab.id}
          >
            <div className="position-relative">
              <div className={`swiper best-selling-swiper-${index}`}>
                <div className="swiper-wrapper">
                  {bestSellingProducts.map(product => (
                    <div className="swiper-slide product-card" key={product.id}>
                      <div className="pc__img-wrapper">
                        <a href="product1_simple.html">
                          <img
                            loading="lazy"
                            src={product.images[0]}
                            width="330"
                            height="400"
                            alt={product.title}
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src={product.images[1]}
                            width="330"
                            height="400"
                            alt={product.title}
                            className="pc__img pc__img-second"
                          />
                        </a>
                        {product.label && (
                          <div className={`product-label ${product.label.includes('-') ? 'bg-red text-white' : 'bg-white'}`}>
                            {tab.label} - {product.label}
                          </div>
                        )}
                        <div className="anim_appear-bottom position-absolute bottom-0 start-0 w-100 d-none d-sm-flex align-items-center">
                          <button
                            className="btn btn-primary flex-grow-1 fs-base ps-3 ps-xxl-4 pe-0 border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                            data-aside="cartDrawer"
                            title="Add To Cart"
                          >
                            Add To Cart
                          </button>
                          <button
                            className="btn btn-primary flex-grow-1 fs-base ps-0 pe-3 pe-xxl-4 border-0 text-uppercase fw-medium js-quick-view"
                            data-bs-toggle="modal"
                            data-bs-target="#quickView"
                            title="Quick view"
                          >
                            Quick View
                          </button>
                        </div>
                        <button
                          className="pc__btn-wl position-absolute bg-body rounded-circle border-0 text-primary js-add-wishlist"
                          title="Add To Wishlist"
                        >
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#icon_heart" />
                          </svg>
                        </button>
                      </div>
                      <div className="pc__info position-relative">
                        <p className="pc__category third-color">{product.category}</p>
                        <h6 className="pc__title">
                          <a href="product1_simple.html">{product.title}</a>
                        </h6>
                        <div className={`product-card__price d-flex ${product.oldPrice ? 'align-items-center' : ''}`}>
                          {product.oldPrice && (
                            <span className="money price-old">{product.oldPrice}</span>
                          )}
                          <span className="money price">{product.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                ref={el => prevRefs.current[index] = el}
                className={`best-selling-prev position-absolute top-50 d-flex align-items-center justify-content-center ${activeTab === index ? '' : 'd-none'}`}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_prev_md" />
                </svg>
              </button>

              <button 
                ref={el => nextRefs.current[index] = el}
                className={`best-selling-next position-absolute top-50 d-flex align-items-center justify-content-center ${activeTab === index ? '' : 'd-none'}`}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <use href="#icon_next_md" />
                </svg>
              </button>

              <div 
                ref={el => paginationRefs.current[index] = el}
                className={`best-selling-pagination mt-4 mb-5 d-flex align-items-center justify-content-center ${activeTab === index ? '' : 'd-none'}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}