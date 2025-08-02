import { useEffect, useState } from "react";
import md5 from "md5";

export default function ReviewsList() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const response = await fetch(`${apiBase}/`, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        setReviewList(data.data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      {reviewList.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviewList.map((review, index) => {
          const emailHash = md5((review.email || "").trim().toLowerCase());
          const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon&s=60`;

          return (
            <div key={index} className="product-single__reviews-list">
              <div className="product-single__reviews-item">
                <div className="customer-avatar">
                  <img loading="lazy" src={gravatarUrl} alt={review.name} />
                </div>
                <div className="customer-review">
                  <div className="customer-name">
                    <h6>{review.name}</h6>
                    <div className="reviews-group d-flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="review-star"
                          viewBox="0 0 9 9"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_star"></use>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="review-date">{review.created_at}</div>
                  <div className="review-text">
                    <p>{review.review ?? ""}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
