import { useEffect } from 'react';
import { Swiper } from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import CartDrawer from '../../components/CartDrawer';
import CustomLogin from '../../components/CustomLogin';
import Footer from '../../components/Footer';
import HeaderMobileHeaderSticky from '../../components/HeaderMobileHeaderSticky';
import MobileFooter from '../../components/MobileFooter';
import MyHeader from '../../components/MyHeader';
import MySvg from '../../components/MySvg';
import SiteMap from '../../components/SiteMap';
import AccountNavigation from '../../components/users/AccountNavigation';

// Meta data object
const metaData = {
    title: "My Wishlist | Sika's Clothing",
    metaTags: [
        { httpEquiv: 'content-type', content: 'text/html; charset=utf-8' },
        { name: 'author', content: 'flexkit' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
        { rel: 'shortcut icon', href: '/images/favicon.ico', type: 'image/x-icon' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Allura&display=swap',
        },
        { rel: 'stylesheet', href: '/assets/css/plugins/flaticon.css', type: 'text/css' },
        { rel: 'stylesheet', href: '/assets/css/plugins/swiper.min.css', type: 'text/css' },
        { rel: 'stylesheet', href: '/assets/css/plugins/jquery.fancybox.css', type: 'text/css' },
        { rel: 'stylesheet', href: '/assets/css/style.css', type: 'text/css' },
    ],
};

// Product data array
const products = [
    {
        id: 1,
        title: 'Colorful Jacket',
        category: 'Dresses',
        price: '$29',
        images: [
            { src: '/images/products/product_5.jpg', alt: 'Colorful Jacket' },
            { src: '/images/products/product_5-1.jpg', alt: 'Colorful Jacket' },
        ],
    },
    {
        id: 2,
        title: 'Shirt In Botanical Cheetah Print',
        category: 'Dresses',
        price: '$62',
        images: [
            { src: '/images/products/product_6.jpg', alt: 'Shirt In Botanical Cheetah Print' },
            { src: '/images/products/product_6-1.jpg', alt: 'Shirt In Botanical Cheetah Print' },
        ],
    },
    // Add more products as needed
];

export default function Wishlist() {
    // Initialize Swiper sliders
    useEffect(() => {
        const initSwipers = () => {
            const sliders = document.querySelectorAll('.js-swiper-slider');
            sliders.forEach((slider) => {
                new Swiper(slider, {
                    modules: [Navigation],
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                    navigation: {
                        nextEl: slider.querySelector('.swiper-button-next'),
                        prevEl: slider.querySelector('.swiper-button-prev'),
                    },
                });
            });
        };

        const timer = setTimeout(initSwipers, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Meta tags and links */}
            <title>{metaData.title}</title>
            {metaData.metaTags.map((tag, index) => (
                <meta key={index} {...tag} />
            ))}
            {metaData.links.map((link, index) => (
                <link key={index} {...link} />
            ))}

            <MySvg />
            <HeaderMobileHeaderSticky />
            <MyHeader />

            <main>
                <div className="mb-4 pb-4" />
                <section className="my-account container">
                    <h2 className="page-title">Wishlist</h2>
                    <div className="row">
                        <AccountNavigation />
                        <div className="col-lg-9">
                            <div className="page-content my-account__wishlist">
                                <div className="products-grid row row-cols-2 row-cols-lg-3" id="products-grid">
                                    {products.map((product) => (
                                        <div className="product-card-wrapper col" key={product.id}>
                                            <div className="product-card mb-md-4 mb-xxl-5 mb-3">
                                                <div className="pc__img-wrapper">
                                                    <div className="swiper-container background-img js-swiper-slider">
                                                        <div className="swiper-wrapper">
                                                            {product.images.map((image, index) => (
                                                                <div className="swiper-slide" key={index}>
                                                                    <img
                                                                        loading="lazy"
                                                                        src={image.src}
                                                                        width={330}
                                                                        height={400}
                                                                        alt={image.alt}
                                                                        className="pc__img"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <span className="swiper-button-prev pc__img-prev">
                                                            <svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                                                                <use href="#icon_prev_sm" />
                                                            </svg>
                                                        </span>
                                                        <span className="swiper-button-next pc__img-next">
                                                            <svg width={7} height={11} viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                                                                <use href="#icon_next_sm" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <button className="btn-remove-from-wishlist">
                                                        <svg
                                                            width={12}
                                                            height={12}
                                                            viewBox="0 0 12 12"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <use href="#icon_close" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="pc__info position-relative">
                                                    <p className="pc__category">{product.category}</p>
                                                    <h6 className="pc__title">{product.title}</h6>
                                                    <div className="product-card__price d-flex">
                                                        <span className="money price">{product.price}</span>
                                                    </div>
                                                    <button
                                                        className="pc__btn-wl position-absolute js-add-wishlist end-0 top-0 border-0 bg-transparent"
                                                        title="Add To Wishlist"
                                                    >
                                                        <svg
                                                            width={16}
                                                            height={16}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <use href="#icon_heart" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <nav class="d-flex justify-content-between mt-3" aria-label="Page navigation">
                                <a href="#" class="btn-link d-inline-flex align-items-center">
                                    <svg class="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                                        <use href="#icon_prev_sm"></use>
                                    </svg>
                                    <span class="fw-medium">PREV</span>
                                </a>
                                <ul class="pagination mb-0">
                                    <li class="page-item">
                                        <a class="btn-link btn-link_active mx-2 px-1" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="btn-link mx-2 px-1" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="btn-link mx-2 px-1" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="btn-link mx-2 px-1" href="#">
                                            4
                                        </a>
                                    </li>
                                </ul>
                                <a href="#" class="btn-link d-inline-flex align-items-center">
                                    <span class="fw-medium me-2">NEXT</span>
                                    <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
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
