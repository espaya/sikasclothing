import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { data } from "react-router-dom";

export default function WishlistForm({ product_id }) {
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const [isWishlist, setIsWishlist] = useState(false);

  const addToWishlist = async () => {
    try {
      await fetch(`${apiBase}/sanctum/csrf-cookie`, {
        credentials: "include",
      });

      const csrfToken = Cookies.get("XSRF-TOKEN");

      const response = await fetch(
        `${apiBase}/api/store/add-to-wishlist/${product_id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (data.message) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: data.message,
            timer: 2000,
            showConfirmButton: false,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Network error. Please try again.",
      });
    }
  };

  useEffect(() => {
    const checkWishlist = async () => {
      try {
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");

        const response = await fetch(
          `${apiBase}/api/store/check-wishlist/${product_id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
            },
          }
        );

        if (!response.ok) {
          if (data.message) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: data.message,
              timer: 3500,
              showConfirmButton: false,
            });
          }
        } else {
          setIsWishlist(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkWishlist();
  }, []);

  return (
    <>
      <a
        href="#"
        onClick={addToWishlist}
        className="menu-link menu-link_us-s add-to-wishlist"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          className={isWishlist ? "text-danger" : "text-muted"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_heart"></use>
        </svg>
        <span>{isWishlist ? "Added to Wishlist" : "Add to Wishlist"}</span>
      </a>
    </>
  );
}
