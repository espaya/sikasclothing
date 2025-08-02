import { useState } from "react";
import Cookies from "js-cookie";
import ReviewsList from "./ReviewsList";

export default function Reviews({ id, singleProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    remember: "",
    review: "",
  });

  function formatNumber(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M+";
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K+";
    return n;
  }

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(`${apiBase}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    const csrfToken = Cookies.get("XSRF-TOKEN");

    const response = await fetch(`${apiBase}/api/store-reviews/${id}`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.errors) {
        setError(data.errors);
      } else {
        setError({ general: data.message });
      }
    } else {
      setFormData({
        name: "",
        email: "",
        rating: "",
        remember: "",
        review: "",
      });

      setSuccess(data.message);

      setTimeout(() => {
        setSuccess("");
      }, 3500);
    }

    try {
    } catch (err) {
      setError({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="aside aside_right overflow-hidden product-single__aside"
        id="productReviews"
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            REVIEWS ({formatNumber(singleProduct.reviews?.length || 0)})
          </h3>
          <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
        </div>

        <div className="aside-content">
          <h2 className="product-single__reviews-title">Reviews</h2>
          <ReviewsList></ReviewsList>
          <div className="product-single__review-form">
            <form onSubmit={handleSubmit} name="customer-review-form">
              <h5>Be the first to review “Message Cotton T-Shirt”</h5>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>

              {error.general && (
                <div className="alert alert-danger mb-3">{error.general}</div>
              )}
              {success && (
                <div className="alert alert-success mb-3">{success}</div>
              )}

              <div className="select-star-rating mb-4">
                <label>Your rating *</label>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          rating: star,
                        }))
                      }
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="cursor-pointer transition-all"
                      width="24"
                      height="24"
                      fill={
                        (hoverRating || parseInt(formData.rating)) >= star
                          ? "#FFD700"
                          : "#ccc"
                      }
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z"></path>
                    </svg>
                  ))}
                </div>
                <input
                  onChange={handleOnChange}
                  name="rating"
                  value={formData.rating}
                  hidden
                />
                {error.rating && (
                  <small style={{ color: "red" }}>{error.rating[0]}</small>
                )}
              </div>

              <div className="mb-4">
                <textarea
                  name="review"
                  id="form-input-review"
                  className="form-control form-control_gray"
                  placeholder="Your Review"
                  cols="30"
                  rows="8"
                  value={formData.review}
                  autoComplete="off"
                  onChange={handleOnChange}
                ></textarea>
                {error.review && (
                  <small style={{ color: "red" }}> {error.review[0]} </small>
                )}
              </div>
              <div className="form-label-fixed mb-4">
                <label htmlFor="form-input-name" className="form-label">
                  Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  id="form-input-name"
                  className="form-control form-control-md form-control_gray"
                  autoComplete="off"
                />
                {error.name && (
                  <small style={{ color: "red" }}> {error.name[0]} </small>
                )}
              </div>
              <div className="form-label-fixed mb-4">
                <label htmlFor="form-input-email" className="form-label">
                  Email address *
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleOnChange}
                  id="form-input-email"
                  className="form-control form-control-md form-control_gray"
                  autoComplete="off"
                />
                {error.email && (
                  <small style={{ color: "red" }}> {error.email[0]} </small>
                )}
              </div>
              <div className="form-check mb-4">
                <input
                  name="remember"
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  value="1"
                  id="remember_checkbox"
                  onChange={handleOnChange}
                />
                <label className="form-check-label" htmlFor="remember_checkbox">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
                {error.remember && (
                  <small style={{ color: "red" }}> {error.remember[0]} </small>
                )}
              </div>
              <div className="form-action">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Submitting your review..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
