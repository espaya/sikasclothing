import CartDrawer from '../../components/CartDrawer';
import CustomLogin from '../../components/CustomLogin';
import Footer from '../../components/Footer';
import HeaderMobileHeaderSticky from '../../components/HeaderMobileHeaderSticky';
import MobileFooter from '../../components/MobileFooter';
import MyHeader from '../../components/MyHeader';
import MySvg from '../../components/MySvg';
import PagesHeader from '../../components/PagesHeader';
import QuickView from '../../components/QuickView';
import SiteMap from '../../components/SiteMap';
import AccountNavigation from '../../components/users/AccountNavigation';

export default function Orders() {
    return (
        <>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="author" content="flexkit" />
            <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />

            <link
                href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet" />

            <link rel="stylesheet" href="css/plugins/swiper.min.css" type="text/css" />
            <link rel="stylesheet" href="css/plugins/jquery.fancybox.css" type="text/css" />
            <link rel="stylesheet" href="css/style.css" type="text/css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Orders | Sika's Clothing</title>

            <MySvg></MySvg>
            <HeaderMobileHeaderSticky></HeaderMobileHeaderSticky>
            <PagesHeader></PagesHeader>

            <main>
                <div className="mb-4 pb-4" />
                <section className="my-account container">
                    <h2 className="page-title">Orders</h2>
                    <div className="row">
                        <AccountNavigation></AccountNavigation>

                        <div className="col-lg-9">
                            <div className="page-content my-account__orders-list">
                                <table className="orders-table">
                                    <thead>
                                        <tr>
                                            <th>Order</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#2416</td>
                                            <td>October 1, 2023</td>
                                            <td>On hold</td>
                                            <td>$1,200.65 for 3 items</td>
                                            <td>
                                                <button className="btn btn-primary">VIEW</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#2417</td>
                                            <td>October 2, 2023</td>
                                            <td>On hold</td>
                                            <td>$1,200.65 for 3 items</td>
                                            <td>
                                                <button className="btn btn-primary">VIEW</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#2418</td>
                                            <td>October 3, 2023</td>
                                            <td>On hold</td>
                                            <td>$1,200.65 for 3 items</td>
                                            <td>
                                                <button className="btn btn-primary">VIEW</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#2419</td>
                                            <td>October 4, 2023</td>
                                            <td>On hold</td>
                                            <td>$1,200.65 for 3 items</td>
                                            <td>
                                                <button className="btn btn-primary">VIEW</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
            <Footer></Footer>
            <MobileFooter></MobileFooter>
            <CustomLogin></CustomLogin>
            <CartDrawer></CartDrawer>
            <SiteMap></SiteMap>
            <QuickView></QuickView>
            <div id="scrollTop" className="visually-hidden end-0" />
            <div className="page-overlay" />
        </>
    );
}
