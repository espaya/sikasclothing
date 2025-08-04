import { useEffect, useState } from "react";
import { Swiper } from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import CartDrawer from "../../components/CartDrawer";
import CustomLogin from "../../components/CustomLogin";
import Footer from "../../components/Footer";
import HeaderMobileHeaderSticky from "../../components/HeaderMobileHeaderSticky";
import MobileFooter from "../../components/MobileFooter";
import MyHeader from "../../components/MyHeader";
import MySvg from "../../components/MySvg";
import SiteMap from "../../components/SiteMap";
import AccountNavigation from "../../components/users/AccountNavigation";
import Cookies from "js-cookie";
import PagesHeader from "../../components/PagesHeader";

export default function Wishlist() {
  const [errors, setErrors] = useState({});
  const [wishlists, setWishlists] = useState([]);
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";
  // Initialize Swiper sliders
  useEffect(() => {
    const initSwipers = () => {
      const sliders = document.querySelectorAll(".js-swiper-slider");

      sliders.forEach((slider) => {
        // Check if swiper-wrapper has slides before initialization
        const wrapper = slider.querySelector(".swiper-wrapper");
        if (!wrapper || wrapper.children.length === 0) {
          console.warn("Swiper wrapper has no slides", slider);
          return;
        }

        // Destroy any existing Swiper instance first
        if (slider.swiper) {
          slider.swiper.destroy();
        }

        new Swiper(slider, {
          modules: [Navigation],
          slidesPerView: 1,
          slidesPerGroup: 1,
          // height: 210,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          initialSlide: 0,
          loop: true,
          direction: "horizontal",
          observer: true, // Important for dynamic content
          observeParents: true, // Important for dynamic content
          navigation: {
            nextEl: slider.querySelector(".swiper-button-next"),
            prevEl: slider.querySelector(".swiper-button-prev"),
          },
          on: {
            init: function () {
              console.log("Swiper initialized:", slider);
            },
            error: function (e) {
              console.error("Swiper error:", e);
            },
          },
        });
      });
    };

    // Initialize after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initSwipers();
      console.log("Swiper initialization attempted");
    }, 500);

    return () => {
      clearTimeout(timer);
      // Cleanup Swiper instances
      document.querySelectorAll(".js-swiper-slider").forEach((slider) => {
        if (slider.swiper) {
          slider.swiper.destroy();
        }
      });
    };
  }, [wishlists]); // Re-run when wishlists change

  useEffect(() => {
    const getWishlists = async () => {
      try {
        // Get CSRF token first
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");

        const response = await fetch(`${apiBase}/api/get-wishlists`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
          },
          credentials: "include", // ✅ required to send auth cookies
        });

        const data = await response.json();

        if (!response.ok) {
          setErrors({ general: data.message });
        } else {
          setWishlists(data.data);
        }
      } catch (err) {
        setErrors({ general: err.message || "Something went wrong" });
      }
    };

    getWishlists();
  }, []);

  return (
    <>
      {/* Meta tags and links */}
      <title></title>

      <MySvg />
      <HeaderMobileHeaderSticky />
      <PagesHeader></PagesHeader>

      <main>
        <div className="mb-4 pb-4" />
        <section className="my-account container">
          <h2 className="page-title">Wishlist</h2>
          <div className="row">
            <AccountNavigation />
            <div className="col-lg-9">
              <div className="page-content my-account__wishlist">
                <div
                  className="products-grid row row-cols-2 row-cols-lg-3"
                  id="products-grid"
                >
                  {wishlists.map((wishlist) => {
                    const product = wishlist.product;

                    // Process gallery images (confirmed working from your logs)
                    const imageUrls = product.gallery
                      ? product.gallery.split(",").map((img) => ({
                          src: img.trim(),
                          alt: product.product_name || "Product image",
                        }))
                      : [];

                    return (
                      <div
                        className="product-card-wrapper col"
                        key={wishlist.id}
                      >
                        <div className="product-card mb-md-4 mb-xxl-5 mb-3">
                          <div
                            className="pc__img-wrapp"
                            style={{
                              height: "400px",
                              widows: "511px",
                            }}
                          >
                            <div className="swiper-container background-img js-swiper-slider">
                              <div className="swiper-wrapper">
                                {imageUrls.map((image, index) => (
                                  <div
                                    className="swiper-slide"
                                    role="group"
                                    key={index}
                                    style={{
                                      width: "330px !important",
                                      height: "400px !important",
                                      display: "block !important",
                                    }}
                                  >
                                    <img
                                      style={{
                                        height: "400px !important",
                                        width: "330px !important",
                                        maxWidth: "none !important", // Prevents any max-width interference
                                        objectFit: "cover",
                                      }}
                                      loading="lazy"
                                      src={`${apiBase}/storage/${image.src}`}
                                      alt={image.alt}
                                      className="pc__img"
                                    />
                                  </div>
                                ))}
                              </div>
                              {imageUrls.length > 1 && (
                                <>
                                  <span className="swiper-button-prev pc__img-prev">
                                    <svg
                                      width={7}
                                      height={11}
                                      viewBox="0 0 7 11"
                                    >
                                      <use href="#icon_prev_sm" />
                                    </svg>
                                  </span>
                                  <span className="swiper-button-next pc__img-next">
                                    <svg
                                      width={7}
                                      height={11}
                                      viewBox="0 0 7 11"
                                    >
                                      <use href="#icon_next_sm" />
                                    </svg>
                                  </span>
                                </>
                              )}
                            </div>
                            <button className="btn-remove-from-wishlist">
                              <svg width={12} height={12} viewBox="0 0 12 12">
                                <use href="#icon_close" />
                              </svg>
                            </button>
                          </div>
                          <div className="pc__info position-relative">
                            <p className="pc__category">
                              {product.categories?.[0]?.name || "Uncategorized"}
                            </p>
                            <h6 className="pc__title">
                              {product.product_name}
                            </h6>
                            <div className="product-card__price d-flex">
                              <span className="money price">
                                ${product.price}
                              </span>
                            </div>
                            <button
                              className="pc__btn-wl position-absolute js-add-wishlist end-0 top-0 border-0 bg-transparent"
                              title="Add To Wishlist"
                            >
                              <svg width={16} height={16} viewBox="0 0 20 20">
                                <use href="#icon_heart" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <nav
                className="d-flex justify-content-between mt-3"
                aria-label="Page navigation"
              >
                <a
                  href="#"
                  className="btn-link d-inline-flex align-items-center"
                >
                  <svg
                    className="me-2"
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm"></use>
                  </svg>
                  <span className="fw-medium">PREV</span>
                </a>
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="btn-link btn-link_active mx-2 px-1" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="btn-link mx-2 px-1" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="btn-link mx-2 px-1" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="btn-link mx-2 px-1" href="#">
                      4
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn-link d-inline-flex align-items-center"
                >
                  <span className="fw-medium me-2">NEXT</span>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm"></use>
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
      </main>

      <div className="pb-xl-5 mb-5" />
      <Footer />
      <MobileFooter />
      <CustomLogin />
      <CartDrawer />
      <SiteMap />

      {/* Quick View Modal */}
      <div className="modal fade" id="quickView" tabIndex={-1}></div>

      {/* Go To Top */}
      <div id="scrollTop" className="visually-hidden end-0" />
      {/* Page Overlay */}
      <div className="page-overlay" />
    </>
  );
}
