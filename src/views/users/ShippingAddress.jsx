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
import Cookies from 'js-cookie'

export default function ShippingAddress() {
    // fetch shipping address
    useEffect(() => {
        const fetchShippingAddress = async () => {
            try {
                const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                const response = await fetch(`${apiBase}/api/get-shipping-address`, {
                    credentials: 'include',
                    headers: {
                        Accept: 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error Fetching Billing Address!');
                }

                const data = await response.json();

                setFormData((prev) => ({
                    ...prev,
                    firstname: data.shipping_address.firstname || '',
                    lastname: data.shipping_address.lastname || '',
                    company_name: data.shipping_address.company_name || '',
                    country: data.shipping_address.country || '',
                    address_line_1: data.shipping_address.address_line_1 || '',
                    address_line_2: data.shipping_address.address_line_2 || '',
                    city: data.shipping_address.city || '',
                    state: data.shipping_address.state || '',
                    zip: data.shipping_address.zip || '',
                }));
            } catch (err) {
                //
            }
        };
        fetchShippingAddress();
    }, []);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        company_name: '',
        country: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state: '',
        zip: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setSuccessMessage('');

        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';

            await fetch(`${apiBase}/sanctum/csrf-cookie`, {
                credentials: 'include',
            });

            const csrfToken = Cookies.get('XSRF-TOKEN');

            const response = await fetch(`${apiBase}/api/update-shipping-address`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            const data = await response.json(); // ❗ FIXED

            if (!response.ok) {
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setErrors({ general: data.message || 'An unknown error occurred.' });
                    setTimeout(() => setErrors({}), 3500);
                }
            } else {
                setSuccessMessage(data.message || 'Account updated successfully.');
                setTimeout(() => {
                    setSuccessMessage('');
                    window.location.reload();
                }, 3500);
            }
        } catch (err) {
            setErrors({ general: err.message });

            setTimeout(() => {
                setErrors({});
            }, 3500);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {' '}
            <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
            <meta name="author" content="flexkit"></meta>
            <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link rel="stylesheet" href="css/plugins/swiper.min.css" type="text/css"></link>
            <link rel="stylesheet" href="css/plugins/jquery.fancybox.css" type="text/css"></link>
            <link rel="stylesheet" href="css/style.css" type="text/css"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
            <title>Edit Shipping Address - Sika's Clothing</title>
            <MySvg></MySvg>
            <HeaderMobileHeaderSticky></HeaderMobileHeaderSticky>
            <MyHeader></MyHeader>
            <main>
                <div class="mb-4 pb-4"></div>
                <section class="my-account container">
                    <h2 class="page-title">Shipping Address</h2>
                    <div class="row">
                        <AccountNavigation></AccountNavigation>
                        <div class="col-lg-9">
                            <div class="page-content my-account__edit">
                                <div class="my-account__edit-form">
                                    {errors.general && (
                                        <p id="error-message" className="text-danger mb-4">
                                            {errors.general}
                                        </p>
                                    )}
                                    {successMessage && <p className="alert alert-success mb-4">{successMessage}</p>}
                                    <form
                                        onSubmit={handleSubmit}
                                        method="POST"
                                        action="#"
                                        name="account_edit_form"
                                        class="needs-validation"
                                        novalidate=""
                                    >
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                                                        id="first_name"
                                                        placeholder="First Name"
                                                        autoComplete="off"
                                                        name="firstname"
                                                        onChange={handleChange}
                                                        value={formData.firstname}
                                                    ></input>
                                                    <label for="first_name">First Name</label>
                                                    { errors.firstname && <small className='text-danger mt-1'> { errors.firstname[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                                                        id="last_name"
                                                        placeholder="Last Name"
                                                        autoComplete="off"
                                                        name="lastname"
                                                        onChange={handleChange}
                                                        value={formData.lastname}
                                                    ></input>
                                                    <label for="last_name">Last Name</label>
                                                    { errors.lastname && <small className='text-danger mt-1'> { errors.lastname[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.company_name ? 'is-invalid' : ''}`}
                                                        id="company_name"
                                                        placeholder="Company"
                                                        autoComplete="off"
                                                        name="company_name"
                                                        onChange={handleChange}
                                                        value={formData.company_name}
                                                    ></input>
                                                    <label for="company_name">Company (Optional)</label>
                                                    { errors.company_name && <small className='text-danger mt-1'> { errors.company_name[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.country ? 'is-invalid' : ''}`}
                                                        id="country"
                                                        placeholder="Country"
                                                        autoComplete="off"
                                                        name="country"
                                                        onChange={handleChange}
                                                        value={formData.country}
                                                    ></input>
                                                    <label for="country">Country</label>
                                                    { errors.country && <small className='text-danger mt-1'> { errors.country[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.address_line_1 ? 'is-invalid' : ''}`}
                                                        id="address_line_1"
                                                        placeholder="Address Line 1"
                                                        autoComplete="off"
                                                        name="address_line_1"
                                                        onChange={handleChange}
                                                        value={formData.address_line_1}
                                                    ></input>
                                                    <label for="address_line_1">Address Line 1 *</label>
                                                    { errors.address_line_1 && <small className='text-danger mt-1'> { errors.address_line_1[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.address_line_2 ? 'is-invalid' : ''}`}
                                                        id="address_line_2"
                                                        placeholder="Address Line 2"
                                                        autoComplete="off"
                                                        name="address_line_2"
                                                        onChange={handleChange}
                                                        value={formData.address_line_2}
                                                    ></input>
                                                    <label for="address_line_2">Address Line 2 </label>
                                                    { errors.address_line_2 && <small className='text-danger mt-1'> { errors.address_line_2[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                                        id="city"
                                                        placeholder="City/Town"
                                                        autoComplete="off"
                                                        name="city"
                                                        onChange={handleChange}
                                                        value={formData.city}
                                                    ></input>
                                                    <label for="city">City/Town</label>
                                                    { errors.city && <small className='text-danger mt-1'> { errors.city[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                                        id="state"
                                                        placeholder="State/Province/Region"
                                                        autoComplete="off"
                                                        name="state"
                                                        onChange={handleChange}
                                                        value={formData.state}
                                                    ></input>
                                                    <label for="city">State/Province/Region</label>
                                                    { errors.state && <small className='text-danger mt-1'> { errors.state[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        class={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                                                        id="zip"
                                                        placeholder="Zip/Postal Code"
                                                        autoComplete="off"
                                                        name="zip"
                                                        onChange={handleChange}
                                                        value={formData.zip}
                                                    ></input>
                                                    <label for="zip">Zip/Postal Code</label>
                                                    { errors.zip && <small className='text-danger mt-1'> { errors.zip[0] } </small> }
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="my-3">
                                                    <button class="btn btn-primary" disabled={loading}>
                                                        {' '}
                                                        {loading ? 'Saving Changes...' : 'Save Changes'}{' '}
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="my-3">
                                                    <a href="/account/addresses" class="btn btn-info">
                                                        Back
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
