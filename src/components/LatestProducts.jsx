import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../assets/css/style.css";
import "../assets/css/plugins/swiper.min.css";

export default function LatestProducts() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const scrollbarRef = useRef(null);

  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  useEffect(() => {
    const fetchLatestProducts = async () => {
      setLoading(true);

      try {
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const response = await fetch(`${apiBase}/api/get-latest-products`, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        setLatestProducts(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();

    const swiperParams = {
      modules: [Autoplay, Navigation, Scrollbar],
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 4,
      slidesPerGroup: 4,
      loop: false,
      spaceBetween: 30,
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },
      scrollbar: {
        el: scrollbarRef.current,
        draggable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 14,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    };

    swiperRef.current = new Swiper(".latest-products-swiper", swiperParams);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-4 pb-xl-2 mb-xl-4">
        Latest Products
      </h2>

      <div className="position-relative">
        <div className="swiper latest-products-swiper">
          <div className="swiper-wrapper">
            {latestProducts.map((product) => (
              <div className="swiper-slide product-card" key={product.id}>
                <div className="pc__img-wrapper">
                  <a href={`shop/${product.slug}`}>
                    <img
                      loading="lazy"
                      src={
                        product.gallery
                          ? `${apiBase}/storage/${
                              product.gallery.split(",")[0]
                            }`
                          : "/assets/images/products/default.png"
                      }
                      width="330"
                      height="400"
                      alt={product.product_name}
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src={
                        product.gallery
                          ? `${apiBase}/storage/${
                              product.gallery.split(",")[1]
                            }`
                          : "/assets/images/products/default.png"
                      }
                      width="330"
                      height="400"
                      alt={product.product_name}
                      className="pc__img pc__img-second"
                    />
                  </a>
                  {(() => {
                    const createdAt = new Date(product.created_at);
                    const isNew =
                      (new Date() - createdAt) / (1000 * 60 * 60 * 24) < 7;
                    const hasDiscount =
                      product.discount && Number(product.discount) > 0;

                    if (hasDiscount) {
                      return (
                        <div className="product-label bg-red text-white">
                          -{product.discount}%
                        </div>
                      );
                    }

                    if (isNew) {
                      return <div className="product-label bg-white">NEW</div>;
                    }

                    return null;
                  })()}

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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart" />
                    </svg>
                  </button>
                </div>
                <div className="pc__info position-relative">
                  <p className="pc__category third-color">{product.category}</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">{product.product_name}</a>
                  </h6>
                  <div
                    className={`product-card__price d-flex ${
                      product.sale_price ? "align-items-center" : ""
                    }`}
                  >
                    {product.sale_price && (
                      <span className="money price-old">${product.price}</span>
                    )}
                    <span className="money price">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          ref={prevRef}
          className="products-carousel__prev position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_prev_md" />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="products-carousel__next position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_next_md" />
          </svg>
        </button>

        <div className="pb-2 mb-2 mb-xl-4">
          <div
            ref={scrollbarRef}
            className="products-carousel__scrollbar swiper-scrollbar"
          ></div>
        </div>
      </div>
    </section>
  );
}
