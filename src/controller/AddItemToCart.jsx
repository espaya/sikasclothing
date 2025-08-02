import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const [loading, setLoading] = useState(false);

const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

const AddItemToCart = async(e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await fetch(`${apiBase}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    const csrfToken = Cookies.get("XSRF-TOKEN");

    const response = await fetch(`${apiBase}/api/cart/add`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
  } catch (err) {
  } finally {
    setLoading(false);
  }
};

export default AddItemToCart();
