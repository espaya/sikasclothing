import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function QuantityControl({
  addCartLoading,
  handleOnChange,
  quantity,
  setQuantity,
  product_id,
}) {
  const [itemExist, setItemExist] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Load initial quantity and check if item exists
  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");
        const response = await fetch(
          `${apiBase}/api/cart/get-cart/${product_id}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data); // Should show your array response

          // Extract quantity from the first item in the array
          const dbQuantity = data.length > 0 ? data[0].quantity : 1;
          console.log("Extracted quantity:", dbQuantity); // Should show 4

          setItemExist(data.length > 0);
          setQuantity(Number(dbQuantity));
        } else {
          setItemExist(false);
          setQuantity(1);
        }
      } catch (err) {
        console.error("Error fetching cart item:", err);
        setItemExist(false);
        setQuantity(1);
      } finally {
        setInitialLoad(false);
      }
    };

    if (product_id && initialLoad) {
      fetchCartItem();
    }
  }, [product_id, apiBase, setQuantity, initialLoad]);

  // ... rest of your component remains the same ...
  const handleChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(newQuantity);
    handleOnChange(e);
  };

  const increaseQty = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleOnChange({ target: { value: newQuantity.toString() } });
  };

  const decreaseQty = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    handleOnChange({ target: { value: newQuantity.toString() } });
  };

  return (
    <div className="product-single__addtocart">
      <div className="qty-control position-relative">
        <input
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          className="qty-control__number text-center"
          onChange={handleChange}
          disabled={addCartLoading}
        />
        <div
          onClick={decreaseQty}
          className="qty-control__reduce"
          disabled={addCartLoading}
        >
          -
        </div>
        <div
          onClick={increaseQty}
          className="qty-control__increase"
          disabled={addCartLoading}
        >
          +
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-addtocart"
        data-aside="cartDrawer"
        disabled={addCartLoading}
      >
        {addCartLoading
          ? "Processing..."
          : itemExist
          ? "Update Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
}
