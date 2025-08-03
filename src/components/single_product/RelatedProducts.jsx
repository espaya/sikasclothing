import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cookies from "js-cookie";
import WishlistForm from "./WishlistForm";

export default function RelatedProducts({ slug }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  useEffect(() => {
    const getRelatedProducts = async () => {
      setLoading(true);
      setErrors({});

      try {
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");

        const response = await fetch(`${apiBase}/api/shop/${slug}`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
          },
        });

        const data = await response.json();

        if (!response.ok) {
          setErrors(data.errors || { general: data.message });
        } else {
          setRelated(data.relatedProducts || []);
        }
      } catch (err) {
        setErrors({ general: err.message || "Unexpected error" });
      } finally {
        setLoading(false);
      }
    };

    getRelatedProducts();
  }, [slug]);

  useEffect(() => {
    if (Array.isArray(related) && related.length > 0) {
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

      return () => swiper.destroy();
    }
  }, [related]);

  const getGalleryImages = (galleryStr) => {
    if (!galleryStr) return [];
    return galleryStr.split(",");
  };

  return (
    <section className="products-carousel container">
      <h2 className="h3 text-uppercase mb-4 pb-xl-2 mb-xl-4">
        Related <strong>Products</strong>
      </h2>

      <div id="related_products" className="position-relative">
        <div className="swiper-container js-swiper-slider">
          <div className="swiper-wrapper">
            {Array.isArray(related) && related.length > 0 ? (
              related.map((product, index) => {
                const gallery = getGalleryImages(product.gallery);
                const category =
                  product.categories && product.categories[0]
                    ? product.categories[0].name
                    : "Category";

                return (
                  <div key={index} className="swiper-slide product-card">
                    <div className="pc__img-wrapper">
                      <a href={`/shop/${product.slug}`}>
                        <img
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                          src={
                            `${apiBase}/storage/${gallery[0]}` ||
                            "/images/products/default.jpg"
                          }
                          width="330"
                          height="400"
                          alt={product.product_name}
                          className="pc__img"
                        />
                        <img
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                          src={
                            `${apiBase}/storage/${gallery[1]}` ||
                            `${apiBase}/storage/${gallery[0]}` ||
                            "/images/products/default.jpg"
                          }
                          width="330"
                          height="400"
                          alt={product.product_name}
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
                      <p className="pc__category">{category}</p>
                      <h6 className="pc__title">
                        <a href={`/shop/${product.slug}`}>
                          {product.product_name}
                        </a>
                      </h6>
                      <div className="product-card__price d-flex">
                        <span className="money price">${product.price}</span>
                      </div>

                      <WishlistForm product_id={product.id}></WishlistForm>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center py-5">No related products found.</p>
            )}
          </div>
        </div>

        <div className="products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg width="25" height="25" viewBox="0 0 25 25">
            <use href="#icon_prev_md"></use>
          </svg>
        </div>
        <div className="products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg width="25" height="25" viewBox="0 0 25 25">
            <use href="#icon_next_md"></use>
          </svg>
        </div>

        <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center"></div>
      </div>
    </section>
  );
}
