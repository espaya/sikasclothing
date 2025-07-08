
import Footer from '../components/Footer';
import Header from '../components/MyHeader.jsx';
import MySvg from '../components/MySvg.jsx';
import HeaderMobileHeaderSticky from '../components/HeaderMobileHeaderSticky.jsx';
import Slideshow from '../components/Slideshow.jsx';
import BestSelling from '../components/BestSelling.jsx';
import ShopByCategory from '../components/ShopByCategory.jsx';
import LatestProducts from '../components/LatestProducts.jsx';
import LatestNews from '../components/LatestNews.jsx';
import Brands from '../components/Brands.jsx';
import CustomLogin from '../components/CustomLogin.jsx';
import CartDrawer from '../components/CartDrawer.jsx';
import SiteMap from '../components/SiteMap.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext.jsx';



export default function Home(){

  const { user } = useContext(AuthContext);

    return (
    <>
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta name="author" content="flexkit" />
  <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  
  {/* Stylesheets */}
  <link rel="stylesheet" href="css/plugins/swiper.min.css" type="text/css" />
  <link rel="stylesheet" href="css/style.css" type="text/css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

 
  <title>Sika's Clothing</title>
  <MySvg></MySvg>
  <HeaderMobileHeaderSticky />
  <Header></Header>

  <main >
    
    <Slideshow />
    
    <div className="mb-3 mb-md-4 mb-xl-5 pb-2 pt-1" />

    <section className="grid-banner container mb-3" id="section-grid-banner">
      <div className="row">
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img
              loading="lazy"
              className="w-100 h-auto"
              src="../images/home/demo2/grid_banner_1.jpg"
              width={450}
              height={450}
              alt=""
            />
            <div className="content_abs content_center text-center">
              <h3 className="text-uppercase fw-bold mb-1">New</h3>
              <h3 className="text-uppercase fw-bold mb-1">Horizons</h3>
              <a
                href="shop1.html"
                className="btn-link default-underline text-uppercase fw-medium"
              >
                Shop Now
              </a>
            </div>
            {/* /.content_abs .content_center */}
          </div>
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img
              loading="lazy"
              className="w-100 h-auto"
              src="../images/home/demo2/grid_banner_2.jpg"
              width={450}
              height={450}
              alt=""
            />
            <div className="content_abs content_center text-center">
              <h3 className="text-uppercase fw-bold mb-1">Summer</h3>
              <h3 className="text-uppercase fw-bold mb-1">Hats</h3>
              <a
                href="shop1.html"
                className="btn-link default-underline text-uppercase fw-medium"
              >
                Shop Now
              </a>
            </div>
            {/* /.content_abs .content_center */}
          </div>
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <div className="grid-banner__item position-relative mb-3">
            <img
              loading="lazy"
              className="w-100 h-auto"
              src="../images/home/demo2/grid_banner_3.jpg"
              width={450}
              height={450}
              alt=""
            />
            <div className="content_abs content_center text-center">
              <p className="text-white mb-1">Free delivery for Uomo members</p>
              <h3 className="text-uppercase fw-bold text-white mb-1">
                Promotions Up
              </h3>
              <h3 className="text-uppercase fw-bold text-white mb-1">
                To 10% Off
              </h3>
              <a
                href="shop1.html"
                className="btn-link default-underline text-uppercase text-white fw-medium"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
    <BestSelling></BestSelling>
    <div className="mb-1 pb-4" />
    <ShopByCategory></ShopByCategory>
    <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
    <CallToAction></CallToAction>
    <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
    <LatestProducts></LatestProducts>
    <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4" />
    <LatestNews></LatestNews>
    <div className="mb-5 pb-4 pb-xl-5 mb-xl-5" />
    <Brands></Brands>
    <div className="mb-4 pb-4 pb-xl-5 mb-xl-5" />
  </main>

  <Footer></Footer>
  <CustomLogin></CustomLogin>
  <CartDrawer></CartDrawer>
  <SiteMap></SiteMap>

  <div className="modal fade" id="quickView" tabIndex={-1}>
    <div className="modal-dialog quick-view modal-dialog-centered">
      <div className="modal-content">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="product-single">
          <div className="product-single__media m-0">
            <div className="product-single__image position-relative w-100">
              <div
                className="swiper-container js-swiper-slider"
                data-settings='{
            "slidesPerView": 1,
            "slidesPerGroup": 1,
            "effect": "none",
            "loop": false,
            "navigation": {
              "nextEl": ".modal-dialog.quick-view .product-single__media .swiper-button-next",
              "prevEl": ".modal-dialog.quick-view .product-single__media .swiper-button-prev"
            }
          }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide product-single__image-item">
                    <img
                      loading="lazy"
                      src="../images/products/quickview_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide product-single__image-item">
                    <img
                      loading="lazy"
                      src="../images/products/quickview_2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide product-single__image-item">
                    <img
                      loading="lazy"
                      src="../images/products/quickview_3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="swiper-slide product-single__image-item">
                    <img
                      loading="lazy"
                      src="../images/products/quickview_4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-button-prev">
                  <svg
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </div>
                <div className="swiper-button-next">
                  <svg
                    width={7}
                    height={11}
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_next_sm" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="product-single__detail">
            <h1 className="product-single__name">
              Lightweight Puffer Jacket With a Hood
            </h1>
            <div className="product-single__price">
              <span className="current-price">$449</span>
            </div>
            <div className="product-single__short-desc">
              <p>
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
              </p>
            </div>
            <form name="addtocart-form" method="post">
              <div className="product-single__swatches">
                <div className="product-swatch text-swatches">
                  <label>Sizes</label>
                  <div className="swatch-list">
                    <input type="radio" name="size" id="swatch-1" />
                    <label
                      className="swatch js-swatch"
                      htmlFor="swatch-1"
                      aria-label="Extra Small"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Extra Small"
                    >
                      XS
                    </label>
                    <input
                      type="radio"
                      name="size"
                      id="swatch-2"
                      defaultChecked=""
                    />
                    <label
                      className="swatch js-swatch"
                      htmlFor="swatch-2"
                      aria-label="Small"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Small"
                    >
                      S
                    </label>
                    <input type="radio" name="size" id="swatch-3" />
                    <label
                      className="swatch js-swatch"
                      htmlFor="swatch-3"
                      aria-label="Middle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Middle"
                    >
                      M
                    </label>
                    <input type="radio" name="size" id="swatch-4" />
                    <label
                      className="swatch js-swatch"
                      htmlFor="swatch-4"
                      aria-label="Large"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Large"
                    >
                      L
                    </label>
                    <input type="radio" name="size" id="swatch-5" />
                    <label
                      className="swatch js-swatch"
                      htmlFor="swatch-5"
                      aria-label="Extra Large"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Extra Large"
                    >
                      XL
                    </label>
                  </div>
                  <a
                    href="#"
                    className="sizeguide-link"
                    data-bs-toggle="modal"
                    data-bs-target="#sizeGuide"
                  >
                    Size Guide
                  </a>
                </div>
                <div className="product-swatch color-swatches">
                  <label>Color</label>
                  <div className="swatch-list">
                    <input type="radio" name="color" id="swatch-11" />
                    <label
                      className="swatch swatch-color js-swatch"
                      htmlFor="swatch-11"
                      aria-label="Black"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Black"
                      style={{ color: "#222" }}
                    />
                    <input
                      type="radio"
                      name="color"
                      id="swatch-12"
                      defaultChecked=""
                    />
                    <label
                      className="swatch swatch-color js-swatch"
                      htmlFor="swatch-12"
                      aria-label="Red"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Red"
                      style={{ color: "#C93A3E" }}
                    />
                    <input type="radio" name="color" id="swatch-13" />
                    <label
                      className="swatch swatch-color js-swatch"
                      htmlFor="swatch-13"
                      aria-label="Grey"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Grey"
                      style={{ color: "#E4E4E4" }}
                    />
                  </div>
                </div>
              </div>
              <div className="product-single__addtocart">
                <div className="qty-control position-relative">
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={1}
                    min={1}
                    className="qty-control__number text-center"
                  />
                  <div className="qty-control__reduce">-</div>
                  <div className="qty-control__increase">+</div>
                </div>
                {/* .qty-control */}
                <button
                  type="submit"
                  className="btn btn-primary btn-addtocart js-open-aside"
                  data-aside="cartDrawer"
                >
                  Add to Cart
                </button>
              </div>
            </form>
            <div className="product-single__addtolinks">
              <a href="#" className="menu-link menu-link_us-s add-to-wishlist">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_heart" />
                </svg>
                <span>Add to Wishlist</span>
              </a>
              <share-button className="share-button">
                <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                  <svg
                    width={16}
                    height={19}
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_sharing" />
                  </svg>
                </button>
                <details
                  id="Details-share-template__main"
                  className="m-1 xl:m-1.5"
                  hidden=""
                >
                  <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">
                    +
                  </summary>
                  <div
                    id="Article-share-template__main"
                    className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10"
                  >
                    <div className="field grow mr-4">
                      <label className="field__label sr-only" htmlFor="url">
                        Link
                      </label>
                      <input
                        type="text"
                        className="field__input w-full"
                        id="url"
                        defaultValue="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
                        placeholder="Link"
                        onClick={ () => null }
                        readOnly=""
                      />
                    </div>
                    <button className="share-button__copy no-js-hidden">
                      <svg
                        className="icon icon-clipboard inline-block mr-1"
                        width={11}
                        height={13}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 11 13"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="sr-only">Copy link</span>
                    </button>
                  </div>
                </details>
              </share-button>
            </div>
            <div className="product-single__meta-info mb-0">
              <div className="meta-item">
                <label>SKU:</label>
                <span>N/A</span>
              </div>
              <div className="meta-item">
                <label>Categories:</label>
                <span>Casual &amp; Urban Wear, Jackets, Men</span>
              </div>
              <div className="meta-item">
                <label>Tags:</label>
                <span>biker, black, bomber, leather</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.modal-dialog */}
  </div>

  <div
    className="modal fade"
    id="newsletterPopup"
    // tabIndex={-1}
    // aria-hidden="true"
    // inert
  >
    <script>
      document.activeElement.blur(); // remove focus
      bootstrap.Modal.getInstance(document.getElementById('newsletterPopup')).hide();

    </script>
    <div className="modal-dialog newsletter-popup modal-dialog-centered">
      <div className="modal-content">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="row p-0 m-0">
          <div className="col-md-6 p-0 d-none d-md-block">
            <div className="newsletter-popup__bg h-100 w-100">
              <img
                loading="lazy"
                src="../images/newsletter-popup.jpg"
                className="h-100 w-100 object-fit-cover d-block"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 p-0 d-flex align-items-center">
            <div className="block-newsletter w-100">
              <h3 className="block__title">Sign Up to Our Newsletter</h3>
              <p>
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>
              <form
                action="./index.html"
                className="footer-newsletter__form position-relative bg-body"
              >
                <input
                  className="form-control border-2"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
                <input
                  className="btn-link fw-medium bg-transparent position-absolute top-0 end-0 h-100"
                  type="submit"
                  defaultValue="JOIN"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="scrollTop" className="visually-hidden end-0" />

  <div className="page-overlay" />

</>

    )
}
