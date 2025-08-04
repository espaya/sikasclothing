import Cookies from 'js-cookie';
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

export default function AccountDetails() {
    // fetch account details
    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                const response = await fetch(`${apiBase}/api/get-account-details`, {
                    credentials: 'include',
                    headers: {
                        Accept: 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch account details');
                }

                const data = await response.json();

                // Set form data
                setFormData((prev) => ({
                    ...prev,
                    firstname: data.account_details.firstname || '',
                    lastname: data.account_details.lastname || '',
                    email: data.email || '',
                    display_name: data.account_details.display_name || '',
                }));
            } catch (error) {
                console.error('Error fetching account details:', error.message);
            }
        };

        fetchAccountDetails();
    }, []);

    // create or update account details
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        display_name: '',
        email: '',
        current_password: '',
        new_password: '',
        confirm_password: '',
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

            const response = await fetch(`${apiBase}/api/update-account-details`, {
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
                setFormData((prev) => ({
                    ...prev,
                    current_password: '',
                    new_password: '',
                    confirm_password: '',
                }));

                setTimeout(() => { setSuccessMessage('') }, 3500);

            }
        } catch (err) {
            setErrors({ general: err.message });
            setTimeout(() => setErrors({}), 3500);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta name="author" content="flexkit" />
            <link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            {/* Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet" />
            {/* Stylesheets */}
            <link rel="stylesheet" href="assets/css/plugins/swiper.min.css" type="text/css" />
            <link rel="stylesheet" href="assets/css/plugins/jquery.fancybox.css" type="text/css" />
            <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Edit Account | Sika's Clothing</title>
            <MySvg />
            <HeaderMobileHeaderSticky />
            <PagesHeader></PagesHeader>

            <main>
                <section className="my-account container">
                    <h2 className="page-title">Account Details</h2>
                    <div className="row">
                        <AccountNavigation />
                        <div className="col-lg-9">
                            <div className="page-content my-account__edit">
                                <div className="my-account__edit-form">
                                    {errors.general && (
                                        <p id="error-message" className="text-danger mb-4">
                                            {errors.general}
                                        </p>
                                    )}
                                    {successMessage && <p className="alert alert-success mb-4">{successMessage}</p>}
                                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                                                        id="account_first_name"
                                                        placeholder="First Name"
                                                        autoComplete="off"
                                                        name="firstname"
                                                        onChange={handleChange}
                                                        value={formData.firstname}
                                                    />
                                                    <label htmlFor="account_first_name">First Name *</label>
                                                    {errors.firstname && <div className="text-danger mt-1">{errors.firstname[0]}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                                                        id="account_last_name"
                                                        placeholder="Last Name"
                                                        autoComplete="off"
                                                        name="lastname"
                                                        onChange={handleChange}
                                                        value={formData.lastname}
                                                    />
                                                    <label htmlFor="account_last_name">Last Name *</label>
                                                    {errors.lastname && <div className="text-danger mt-1">{errors.lastname[0]}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.display_name ? 'is-invalid' : ''}`}
                                                        id="account_display_name"
                                                        placeholder="Display Name"
                                                        autoComplete="off"
                                                        name="display_name"
                                                        onChange={handleChange}
                                                        value={formData.display_name}
                                                    />
                                                    <label htmlFor="account_display_name">Display Name</label>
                                                    {errors.display_name && <div className="text-danger mt-1">{errors.display_name[0]}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="email"
                                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                        id="account_email"
                                                        placeholder="Email Address"
                                                        autoComplete="off"
                                                        name="email"
                                                        onChange={handleChange}
                                                        value={formData.email}
                                                    />
                                                    <label htmlFor="account_email">Email Address</label>
                                                    {errors.email && <div className="text-danger mt-1">{errors.email[0]}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-12 my-3">
                                                <h5 className="text-uppercase mb-0">Password Change</h5>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="password"
                                                        className={`form-control ${errors.current_password ? 'is-invalid' : ''}`}
                                                        id="account_current_password"
                                                        placeholder="Current password"
                                                        autoComplete="off"
                                                        name="current_password"
                                                        onChange={handleChange}
                                                        value={formData.current_password}
                                                    />
                                                    <label htmlFor="account_current_password">Current password</label>
                                                    {errors.current_password && <div className="text-danger mt-1">{errors.current_password[0]}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="password"
                                                        className={`form-control ${errors.new_password ? 'is-invalid' : ''}`}
                                                        id="account_new_password"
                                                        placeholder="New password"
                                                        autoComplete="off"
                                                        name="new_password"
                                                        onChange={handleChange}
                                                        value={formData.new_password}
                                                    />
                                                    <label htmlFor="account_new_password">New password</label>
                                                    {errors.new_password && <div className="text-danger mt-1">{errors.new_password[0]}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-floating my-3">
                                                    <input
                                                        type="password"
                                                        className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
                                                        id="account_confirm_password"
                                                        placeholder="Confirm new password"
                                                        autoComplete="off"
                                                        name="confirm_password"
                                                        onChange={handleChange}
                                                        value={formData.confirm_password}
                                                    />
                                                    <label htmlFor="account_confirm_password">Confirm new password</label>
                                                    {errors.confirm_password && <div className="text-danger mt-1">{errors.confirm_password[0]}</div>}
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="my-3">
                                                    <button className="btn btn-primary" disabled={loading}>
                                                        {loading ? 'Saving Changes...' : 'Save Changes'}
                                                    </button>
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

            <Footer />
            <MobileFooter />
            <CustomLogin />
            <CartDrawer />
            <SiteMap />
            <QuickView />
        </>
    );
}
