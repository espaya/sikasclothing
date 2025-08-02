import Cookies from "js-cookie";

const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

const getCartTotal = async (setCartTotal) => {
  try {
    await fetch(`${apiBase}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    const csrfToken = Cookies.get("XSRF-TOKEN");

    const response = await fetch(`${apiBase}/api/cart/total`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
      },
    });

    const data = await response.json();

    setCartTotal(data);
  } catch (err) {
    console.log(err.message);
  }
};

export default getCartTotal;
