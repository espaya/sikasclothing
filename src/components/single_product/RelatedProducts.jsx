import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function RelatedProducts({ singleProduct }) {
  useEffect(() => {
    // Initialize Swiper after component mounts
    const swiper = new Swiper("#related_products .swiper-container", {
      modules: [Navigation, Pagination],
      autoplay: false,
      slidesPerView: 4,
      slidesPerGroup: 4,
      effect: "none",
      loop: true,
      pagination: {
        el: "#related_products .products-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: "#related_products .products-carousel__next",
        prevEl: "#related_products .products-carousel__prev",
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
          slidesPerGroup: 4,
          spaceBetween: 30,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <section className="products-carousel container">
        <h2 className="h3 text-uppercase mb-4 pb-xl-2 mb-xl-4">
          Related <strong>Products</strong>
        </h2>

        <div id="related_products" className="position-relative">
          <div className="swiper-container js-swiper-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_3.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_3-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">Kirby T-Shirt</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">$17</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_1-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">
                      Cropped Faux Leather Jacket
                    </a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">$29</span>
                  </div>
                  <div className="product-card__review d-flex align-items-center">
                    <div className="reviews-group d-flex">
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star"></use>
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star"></use>
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star"></use>
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star"></use>
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star"></use>
                      </svg>
                    </div>
                    <span className="reviews-note text-lowercase text-secondary ms-1">
                      8k+ reviews
                    </span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_2.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_2-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">Calvin Shorts</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">$62</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_6.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_6-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">
                      Shirt In Botanical Cheetah Print
                    </a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">$62</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_7.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_7-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">Cotton Jersey T-Shirt</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">$17</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_4.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_4-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">Cableknit Shawl</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price price-old">$129</span>
                    <span className="money price price-sale">$99</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_5.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_5-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">Colorful Jacket</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">$29</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="swiper-slide product-card">
                <div className="pc__img-wrapper">
                  <a href="product1_simple.html">
                    <img
                      loading="lazy"
                      src="../images/products/product_8.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                    <img
                      loading="lazy"
                      src="../images/products/product_8-1.jpg"
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img pc__img-second"
                    />
                  </a>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">Dresses</p>
                  <h6 className="pc__title">
                    <a href="product1_simple.html">Zessi Dresses</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price price-old">$129</span>
                    <span className="money price price-sale">$99</span>
                  </div>

                  <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_prev_md"></use>
            </svg>
          </div>
          <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_next_md"></use>
            </svg>
          </div>

          <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center"></div>
        </div>
      </section>
    </>
  );
}
