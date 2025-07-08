import Cookies from "js-cookie";
import { useState } from "react";

export default function CustomLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

      // Step 1: Get the CSRF cookie (Laravel will set it in cookies)
      await fetch(`${apiBase}/sanctum/csrf-cookie`, {
        credentials: "include",
      });

      // Step 2: Get the token from cookies
      const csrfToken = Cookies.get("XSRF-TOKEN");

      // Step 2: Send login request
      const response = await fetch(`${apiBase}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-XSRF-TOKEN": decodeURIComponent(csrfToken), // Laravel expects this
        },
        credentials: "include", // send cookies with request
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ general: data.message || "An error occurred" });
        }
      } else {
        // Clear form fields first
        setFormData({
          email: "",
          password: "",
        });

        // Then redirect
        if (data.redirect_url) {
          window.location.href = data.redirect_url;
        } else {
          setErrors({ general: "No redirect URL provided." });
        }
      }
    } catch (err) {
      setErrors({ general: err.message }); // show error message

      // clear error message after 3.5sec
      setTimeout(() => {
        document.getElementById("error-message").textContent = "";
      }, 3500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="aside aside_right overflow-hidden customer-forms aside-drawer"
      id="customerForms"
    >
      <div className="customer-forms__wrapper d-flex position-relative">
        <div className="customer__login">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Login</h3>
            <button className="btn-close-lg js-close-aside ms-auto" />
          </div>
          {errors.general && (
            <p id="error-message" className="text-danger md-5">
              {" "}
              {errors.general}{" "}
            </p>
          )}
          {successMessage && (
            <p className="alert alert-success"> {successMessage} </p>
          )}
          <form
            action="#"
            method="POST"
            className="aside-content"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                name="email"
                type="text"
                className={`form-control form-control_gray ${
                  errors.email ? "is-invalid" : ""
                }`}
                id="customerNameEmailInput"
                placeholder="name@example.com"
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
              />
              <label htmlFor="customerNameEmailInput">
                Username or email address *
              </label>
              { errors.email && <small className="text-danger"> { errors.email[0] } </small> }
            </div>
            <div className="pb-3" />
            <div className="form-label-fixed mb-3">
              <label htmlFor="customerPasswordInput" className="form-label">
                Password *
              </label>
              <input
                name="password"
                id="customerPasswordInput"
                className={`form-control form-control_gray ${errors.password ? 'is-invalid' : ''}`}
                type="password"
                placeholder="********"
                autoComplete="off"
                onChange={handleChange}
              />
              { errors.password && <small className="text-danger"> { errors.password[0] } </small> }
            </div>
            <div className="d-flex align-items-center mb-3 pb-2">
              <div className="form-check mb-0">
                <input
                  name="remember"
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-secondary"
                  htmlFor="flexCheckDefault"
                >
                  Remember me
                </label>
              </div>
              <a href="reset_password.html" className="btn-text ms-auto">
                Lost password?
              </a>
            </div>
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">No account yet? </span>
              <a
                href="/login#register-tab"
                className="btn-text js-show-register"
              >
                Create Account
              </a>
            </div>
          </form>
        </div>
        {/* /.customer__login */}
        <div className="customer__register">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
            <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
          </div>
          {/* /.aside-header */}
          <form
            action="./login_register.html"
            method="POST"
            className="aside-content"
          >
            <div className="form-floating mb-4">
              <input
                name="username"
                type="text"
                className="form-control form-control_gray"
                id="registerUserNameInput"
                placeholder="Username"
                autoComplete="off"
              />
              <label htmlFor="registerUserNameInput">Username</label>
            </div>
            <div className="pb-1" />
            <div className="form-floating mb-4">
              <input
                name="email"
                type="email"
                className="form-control form-control_gray"
                id="registerUserEmailInput"
                placeholder="user@company.com"
                autoComplete="off"
              />
              <label htmlFor="registerUserEmailInput">Email address *</label>
            </div>
            <div className="pb-1" />
            <div className="form-label-fixed mb-4">
              <label htmlFor="registerPasswordInput" className="form-label">
                Password *
              </label>
              <input
                name="password"
                id="registerPasswordInput"
                className="form-control form-control_gray"
                type="password"
                placeholder="*******"
                autoComplete="off"
              />
            </div>
            <p className="text-secondary mb-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
            >
              Register
            </button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">Already have account?</span>
              <a href="#" className="btn-text js-show-login">
                Login
              </a>
            </div>
          </form>
        </div>
        {/* /.customer__register */}
      </div>
      {/* /.customer-forms__wrapper */}
    </div>
  );
}
