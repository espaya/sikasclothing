import CartDrawer from '../components/CartDrawer';
import CustomLogin from '../components/CustomLogin';
import Footer from '../components/Footer';
import HeaderMobileHeaderSticky from '../components/HeaderMobileHeaderSticky';
import MobileFooter from '../components/MobileFooter';
import MyHeader from '../components/MyHeader';
import MySvg from '../components/MySvg';
import QuickView from '../components/QuickView';
import ShopFilter from '../components/shop/ShopFilter';
import ShopProduct from '../components/shop/ShopProduct';
import ShopSlider from '../components/shop/ShopSlider';
import ShopSorting from '../components/shop/ShopSorting';
import SiteMap from '../components/SiteMap';

export default function Shop() {
    return (
        <>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
            <meta name="author" content="flexkit"></meta>

            <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>

            <link rel="stylesheet" href="assets/css/plugins/swiper.min.css" type="text/css"></link>
            <link rel="stylesheet" href="assets/css/style.css" type="text/css"></link>

            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Shop - Sika's Clothing</title>

            <MySvg></MySvg>
            <HeaderMobileHeaderSticky></HeaderMobileHeaderSticky>

            <MyHeader></MyHeader>

            <main>
                <section className="shop-main d-flex pt-xl-5 container pt-4">
                    <ShopFilter></ShopFilter>

                    <div className="shop-list flex-grow-1">
                        <ShopSlider></ShopSlider>

                        <div className="pb-xl-3 mb-3 pb-2"></div>

                        <ShopSorting></ShopSorting>

                        <div className="products-grid row row-cols-2 row-cols-md-3" id="products-grid">
                            <ShopProduct></ShopProduct>
                        </div>

                        <nav className="shop-pages d-flex justify-content-between mt-3" aria-label="Page navigation">
                            <a href="#" className="btn-link d-inline-flex align-items-center">
                                <svg className="me-1" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
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
                            <a href="#" className="btn-link d-inline-flex align-items-center">
                                <span className="fw-medium me-1">NEXT</span>
                                <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                                    <use href="#icon_next_sm"></use>
                                </svg>
                            </a>
                        </nav>
                    </div>
                </section>
            </main>

            <div className="pb-xl-5 mb-5"></div>

            <Footer></Footer>

            <MobileFooter></MobileFooter>

            <CustomLogin></CustomLogin>

            <CartDrawer></CartDrawer>

            <SiteMap></SiteMap>

            <QuickView></QuickView>

            <div id="scrollTop" className="visually-hidden end-0"></div>

            <div className="page-overlay"></div>

            <script src="assets/js/plugins/jquery.min.js"></script>
            <script src="assets/js/plugins/bootstrap.bundle.min.js"></script>
            <script src="assets/js/plugins/bootstrap-slider.min.js"></script>

            <script src="assets/js/plugins/swiper.min.js"></script>
            <script src="assets/js/plugins/countdown.js"></script>

            <script src="assets/js/theme.js"></script>
        </>
    );
}
