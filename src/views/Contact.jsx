import Cookies from 'js-cookie'; // Added missing import
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

export default function Contact() {
    const [formData, setFormData] = useState({
        contact_us_name: '',
        contact_us_email: '',
        message: '',
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

        try {
            const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';

            // Step 2: Get the token from cookies
            const csrfToken = Cookies.get('XSRF-TOKEN');

            // Step 2: Send login request
            const response = await fetch(`${apiBase}/api/contact-us`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-XSRF-TOKEN': decodeURIComponent(csrfToken), // Laravel expects this
                },
                credentials: 'include', // send cookies with request
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setErrors({ general: data.message || 'An error occurred' });

                    setTimeout(() => {
                        setErrors({});
                    }, 3500);
                }
            } else {
                // Clear form fields first
                setFormData({
                    contact_us_email: '',
                    contact_us_name: '',
                    message: '',
                });

                // Then redirect
                setSuccessMessage(data.message);

                setTimeout(() => {
                    setSuccessMessage('');
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
            <meta httpEquiv="content-type" content="text/html; charset=utf-8"></meta>
            <meta name="author" content="flexkit"></meta>

            <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>

            <link rel="stylesheet" href="css/plugins/swiper.min.css" type="text/css"></link>
            <link rel="stylesheet" href="css/plugins/jquery.fancybox.css" type="text/css"></link>
            <link rel="stylesheet" href="css/style.css" type="text/css"></link>

            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>

            <title>Contact Us - Sika's Clothing</title>

            <MySvg></MySvg>
            <HeaderMobileHeaderSticky></HeaderMobileHeaderSticky>
            <MyHeader></MyHeader>

            <main>
                <div className="mb-4 pb-4"></div>
                <section className="contact-us container">
                    <div className="mw-930">
                        <h2 className="page-title">CONTACT US</h2>
                    </div>
                </section>

                <section className="google-map mb-5">
                    <h2 className="d-none">Contact US</h2>
                    <div id="map" className="google-map__wrapper"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.3955831606418!2d-73.82611190990629!3d40.86319215453903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d7d0b61c3ad%3A0x64db33402f6cd998!2s120%20Elgar%20Pl%2C%20Bronx%2C%20NY%2010475%2C%20USA!5e0!3m2!1sen!2sgh!4v1751671407675!5m2!1sen!2sgh" width="100%" height="500" style={{border: "0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </section>

                <section className="contact-us container">
                    <div className="mw-930">
                        <div className="row mb-5">
                            <div className="col-lg-6">
                                <h3 className="mb-4">Store in London</h3>
                                <p className="mb-4">
                                    1418 River Drive, Suite 35 Cottonhall, CA 9622
                                    <br />
                                    United Kingdom
                                </p>
                                <p className="mb-4">
                                    sale@uomo.com
                                    <br />
                                    +44 20 7123 4567
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="mb-4">Store in Istanbul</h3>
                                <p className="mb-4">
                                    1418 River Drive, Suite 35 Cottonhall, CA 9622
                                    <br />
                                    Turky
                                </p>
                                <p className="mb-4">
                                    sale@uomo.com
                                    <br />
                                    +90 212 555 1212
                                </p>
                            </div>
                        </div>
                        <div className="contact-us__form">
                            {successMessage && <div className="alert alert-success mb-4">{successMessage}</div>}
                            {errors.general && <div className="alert alert-danger mb-4">{errors.general}</div>}
                            <form action="#" method="POST" onSubmit={handleSubmit} name="contact-us-form" className="needs-validation">
                                <h3 className="mb-5">Get In Touch</h3>
                                <div className="form-floating my-4">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.contact_us_name ? 'is-invalid' : ''}`}
                                        name="contact_us_name"
                                        id="contact_us_name"
                                        placeholder="Name *"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={formData.contact_us_name}
                                    ></input>
                                    <label for="contact_us_name">Name *</label>
                                    {errors.contact_us_name && <small className="text-danger mt-1">{errors.contact_us_name[0]}</small>}
                                </div>
                                <div className="form-floating my-4">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.contact_us_email ? 'is-invalid' : ''}`}
                                        name="contact_us_email"
                                        id="contact_us_email"
                                        placeholder="Email address *"
                                        autoComplete="off"
                                        onChange={handleChange}
                                        value={formData.contact_us_email}
                                    ></input>
                                    <label for="contact_us_email">Email address *</label>
                                    {errors.contact_us_email && <small className="text-danger mt-1">{errors.contact_us_email[0]}</small>}
                                </div>
                                <div className="my-4">
                                    <textarea
                                        className={`form-control form-control_gray ${errors.message ? 'is-invalid' : ''}`}
                                        placeholder="Your Message"
                                        cols="30"
                                        rows="8"
                                        autoComplete="off"
                                        name="message"
                                        onChange={handleChange}
                                        value={formData.message}
                                    ></textarea>
                                    {errors.message && <small className="text-danger mt-1">{errors.message[0]}</small>}
                                </div>
                                <div className="my-4">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Submitting' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
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
            <script src="assets/js/plugins/jquery.fancybox.js"></script>
            <script src="assets/js/googlemap-setting.js"></script>
            <script src="assets/js/theme.js"></script>
        </>
    );
}
