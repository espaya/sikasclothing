import { useState } from 'react';
import CartDrawer from '../components/CartDrawer';
import CustomLogin from '../components/CustomLogin';
import Footer from '../components/Footer';
import HeaderMobileHeaderSticky from '../components/HeaderMobileHeaderSticky';
import MobileFooter from '../components/MobileFooter';
import MyHeader from '../components/MyHeader';
import MySvg from '../components/MySvg';
import QuickView from '../components/QuickView';
import SiteMap from '../components/SiteMap';

export default function TrackOrder() {
    const [formData, setFormData] = useState({
        order_tracking_id: '',
        order_tracking_email: '',
    });

    return (
        <>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
            <meta name="author" content="flexkit"></meta>

            <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>

            <link rel="stylesheet" href="css/plugins/swiper.min.css" type="text/css"></link>
            <link rel="stylesheet" href="css/plugins/jquery.fancybox.css" type="text/css"></link>
            <link rel="stylesheet" href="css/style.css" type="text/css"></link>

            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>

            <title>Tracking Order | Sika's Clothing</title>

            <MySvg></MySvg>
            <HeaderMobileHeaderSticky></HeaderMobileHeaderSticky>

            <MyHeader></MyHeader>

            <main>
                <div class="mb-4 pb-4"></div>
                <section class="shop-checkout container">
                    <div class="order-tracking">
                        <form action="#" name="tracking-form" class="needs-validation" novalidate="">
                            <h2 class="page-title">Order Tracking</h2>
                            <p>
                                To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on
                                your receipt and in the confirmation email you should have received.
                            </p>
                            <div class="form-floating my-4">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="order_tracking_id"
                                    value={formData.order_tracking_id}
                                    id="order_tracking_id"
                                    placeholder="Order ID *"
                                    autoComplete="off"
                                    required=""
                                ></input>
                                <label for="order_tracking_id">Order ID *</label>
                            </div>
                            <div class="form-floating my-4">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="order_tracking_email"
                                    value={formData.order_tracking_email}
                                    id="order_tracking_email"
                                    placeholder="Billing email *"
                                    autoComplete="off"
                                    required=""
                                ></input>
                                <label for="order_tracking_email">Billing email *</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-track w-100">
                                TRACK
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <div class="pb-xl-5 mb-5"></div>

            <Footer></Footer>

            <MobileFooter></MobileFooter>

            <CustomLogin></CustomLogin>

            <CartDrawer></CartDrawer>

            <SiteMap></SiteMap>

            <QuickView></QuickView>

            <div id="scrollTop" class="visually-hidden end-0"></div>

            <div class="page-overlay"></div>

            <script src="js/plugins/jquery.min.js"></script>
            <script src="js/plugins/bootstrap.bundle.min.js"></script>
            <script src="js/plugins/bootstrap-slider.min.js"></script>

            <script src="js/plugins/swiper.min.js"></script>
            <script src="js/plugins/countdown.js"></script>
            <script src="js/plugins/jquery.fancybox.js"></script>

            <script src="js/theme.js"></script>
        </>
    );
}
