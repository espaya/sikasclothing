import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useCartItemExists(product_id) {
  const [itemExist, setItemExist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  useEffect(() => {
    const checkItemExists = async () => {
      try {
        setLoading(true);

        // First get CSRF token
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");

        const response = await fetch(
          `${apiBase}/api/cart/item-exists/${product_id}`,
          {
            method: "GET",
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
          setItemExist(!!data);
        } else {
          setItemExist(false);
        }
      } catch (err) {
        console.error("Error checking item existence:", err);
        setError(err);
        setItemExist(false);
      } finally {
        setLoading(false);
      }
    };

    if (product_id) {
      checkItemExists();
    }
  }, [product_id, apiBase]);

  return { itemExist, loading, error };
}
