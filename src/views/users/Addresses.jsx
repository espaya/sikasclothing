import { useEffect, useState } from 'react';
import CartDrawer from '../../components/CartDrawer';
import CustomLogin from '../../components/CustomLogin';
import Footer from '../../components/Footer';
import HeaderMobileHeaderSticky from '../../components/HeaderMobileHeaderSticky';
import MobileFooter from '../../components/MobileFooter';
import MyHeader from '../../components/MyHeader';
import MySvg from '../../components/MySvg';
import QuickView from '../../components/QuickView';
import SiteMap from '../../components/SiteMap';
import AccountNavigation from '../../components/users/AccountNavigation';
import PagesHeader from '../../components/PagesHeader';

export default function Addresses() {
    const [billing, setBilling] = useState({});
    const [shipping, setShipping] = useState({});

    const fetchAddress = async (endpoint, setter) => {
        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await fetch(`${apiBase}/api/${endpoint}`, {
                credentials: 'include',
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) throw new Error(`Error fetching ${endpoint}`);

            const data = await response.json();
            const key = endpoint.includes('billing') ? 'billing_address' : 'shipping_address';
            const address = data[key];

            setter({
                firstname: address.firstname || '',
                lastname: address.lastname || '',
                company_name: address.company_name || '',
                country: address.country || '',
                address_line_1: address.address_line_1 || '',
                address_line_2: address.address_line_2 || '',
                city: address.city || '',
                state: address.state || '',
                zip: address.zip || '',
                phone: address.phone || '',
                email: address.email || '',
                default: Boolean(address.default),
            });
        } catch (err) {
            console.error(`Failed to load ${endpoint}:`, err.message);
        }
    };

    useEffect(() => {
        fetchAddress('get-billing-address', setBilling);
        fetchAddress('get-shipping-address', setShipping);
    }, []);

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
            <link rel="stylesheet" href="assets/css/plugins/swiper.min.css" />
            <link rel="stylesheet" href="assets/css/plugins/jquery.fancybox.css" />
            <link rel="stylesheet" href="css/style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Edit Address | Sika's Clothing</title>

            <MySvg />
            <HeaderMobileHeaderSticky />
            <PagesHeader></PagesHeader>

            <main>
                <div className="mb-4 pb-4" />
                <section className="my-account container">
                    <h2 className="page-title">Addresses</h2>
                    <div className="row">
                        <AccountNavigation />
                        <div className="col-lg-9">
                            <div className="page-content my-account__address">
                                <p className="notice">The following addresses will be used on the checkout page by default.</p>
                                <div className="my-account__address-list">
                                    {/* Billing Address */}
                                    <div className="my-account__address-item">
                                        <div className="my-account__address-item__title">
                                            <h5>Billing Address</h5>
                                            <a href="/account/edit-billing-address">Edit</a>
                                        </div>
                                        {billing.default && (
                                            <i style={{ fontSize: 12 }}>(Default Address)</i>
                                        )}
                                        <div className="my-account__address-item__detail">
                                            <p>{billing.firstname} {billing.lastname}</p>
                                            <p>{billing.address_line_1}{billing.address_line_2 && `, ${billing.address_line_2}`}</p>
                                            <p>{billing.city}, {billing.state} {billing.zip}</p>
                                            <p>{billing.country}</p>
                                            <br />
                                            <p>{billing.email}</p>
                                            <p>{billing.phone}</p>
                                        </div>
                                    </div>

                                    {/* Shipping Address */}
                                    <div className="my-account__address-item">
                                        <div className="my-account__address-item__title">
                                            <h5>Shipping Address</h5>
                                            <a href="/account/edit-shipping-address">Edit</a>
                                        </div>
                                        {shipping.default && (
                                            <i style={{ fontSize: 12 }}>(Default Address)</i>
                                        )}
                                        <div className="my-account__address-item__detail">
                                            <p>{shipping.firstname} {shipping.lastname}</p>
                                            <p>{shipping.address_line_1}{shipping.address_line_2 && `, ${shipping.address_line_2}`}</p>
                                            <p>{shipping.city}, {shipping.state} {shipping.zip}</p>
                                            <p>{shipping.country}</p>
                                            <br />
                                            <p>{shipping.email}</p>
                                            <p>{shipping.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            <QuickView />
            <div id="scrollTop" className="visually-hidden end-0" />
            <div className="page-overlay" />
        </>
    );
}
