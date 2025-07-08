import Cookies from 'js-cookie';
import { useState } from 'react';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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

            // Step 1: Get the CSRF cookie (Laravel will set it in cookies)
            await fetch(`${apiBase}/sanctum/csrf-cookie`, {
                credentials: 'include',
            });

            // Step 2: Get the token from cookies
            const csrfToken = Cookies.get('XSRF-TOKEN');

            // Step 2: Send login request
            const response = await fetch(`${apiBase}/api/login`, {
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
                }
            } else {
                // Clear form fields first
                setFormData({
                    email: '',
                    password: '',
                });

                // Then redirect
                if (data.redirect_url) {
                    window.location.href = data.redirect_url;
                } else {
                    setErrors({ general: 'No redirect URL provided.' });
                }
            }
        } catch (err) {
            setErrors({ general: err.message }); // show error message

            // clear error message after 3.5sec
            setTimeout(() => {
                document.getElementById('error-message').textContent = '';
            }, 3500);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form">
            {errors.general && (
                <p id="error-message" className="text-danger md-5">
                    {' '}
                    {errors.general}{' '}
                </p>
            )}
            {successMessage && <p className="alert alert-success"> {successMessage} </p>}
            <form name="login-form" className="needs-validation" onSubmit={handleSubmit} action="#">
                <div className="form-floating mb-3">
                    <input
                        name="email"
                        type="email"
                        className="form-control form-control_gray"
                        id="customerNameEmailInput1"
                        placeholder="Email address *"
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="customerNameEmailInput1">Email address *</label>
                    {errors.email && <small className="text-danger mt-5"> {errors.email[0]} </small>}
                </div>
                <div className="pb-3" />
                <div className="form-floating mb-3">
                    <input
                        name="password"
                        type="password"
                        className="form-control form-control_gray"
                        id="customerPasswodInput"
                        placeholder="Password *"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <label htmlFor="customerPasswodInput">Password *</label>
                    {errors.password && <small className="text-danger mt-5"> {errors.password[0]} </small>}
                </div>
                <div className="d-flex align-items-center mb-3 pb-2">
                    <div className="form-check mb-0">
                        <input
                            name="remember"
                            className="form-check-input form-check-input_fill"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault1"
                        />
                        <label className="form-check-label text-secondary" htmlFor="flexCheckDefault1">
                            Remember me
                        </label>
                    </div>
                    <a href="reset_password.html" className="btn-text ms-auto">
                        Lost password?
                    </a>
                </div>
                <button className="btn btn-primary text-uppercase w-100" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Log In'}
                </button>
                <div className="customer-option mt-4 text-center">
                    <span className="text-secondary">No account yet?</span>
                    <a href="#register-tab" className="btn-text js-show-register">
                        Create Account
                    </a>
                </div>
            </form>
        </div>
    );
}
