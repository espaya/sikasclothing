import { useEffect, useState, useRef } from "react";
import getCartTotal from "../controller/UpdateCart";
import Cookies from "js-cookie";

export default function CartDrawer() {
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({});
  const updateTimeouts = useRef({});
  const quantitiesRef = useRef({});

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Helper functions
  const parseJsonSafely = (jsonString) => {
    try {
      return jsonString ? JSON.parse(jsonString) : [];
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  };

  const getFirstImage = (galleryString) => {
    return galleryString?.split(",")[0] || "";
  };

  // Cart operations
  const getCart = async () => {
    setLoading(true);
    try {
      await fetch(`${apiBase}/sanctum/csrf-cookie`, {
        credentials: "include",
      });

      const response = await fetch(`${apiBase}/api/cart`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to fetch cart");

      const data = await response.json();
      setCartProducts(data.cartItems || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setCartProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (e, product_id) => {
    e?.preventDefault();
    try {
      await fetch(`${apiBase}/sanctum/csrf-cookie`, {
        credentials: "include",
      });

      const csrfToken = Cookies.get("XSRF-TOKEN");
      const response = await fetch(`${apiBase}/api/cart/remove/${product_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
        },
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ general: data.message });
      } else {
        setSuccessMsg(data.message);
        await getCart();
        await getCartTotal(setCartTotal);
      }
    } catch (err) {
      setErrors({ general: err.message });
    }
  };

  // Quantity management
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (cartProducts.length > 0) {
      const initialQuantities = {};
      cartProducts.forEach((product) => {
        initialQuantities[product.id] = product.quantity || 1;
      });
      quantitiesRef.current = initialQuantities; // Initialize the ref
      setQuantities(initialQuantities);
    }
  }, [cartProducts]);

  const handleQuantityChange = (productId, newQuantity) => {
    // Update both ref and state
    const updatedQuantities = {
      ...quantitiesRef.current,
      [productId]: newQuantity,
    };
    quantitiesRef.current = updatedQuantities;
    setQuantities(updatedQuantities);

    // Clear existing timeout
    if (updateTimeouts.current[productId]) {
      clearTimeout(updateTimeouts.current[productId]);
    }

    // Set new timeout with current quantity from ref
    updateTimeouts.current[productId] = setTimeout(() => {
      updateQuantity(productId, quantitiesRef.current[productId]);
    }, 250);
  };

  //FIXED increase/decrease functions
  const increaseQuantity = (productId) => {
    const newQuantity = (quantitiesRef.current[productId] || 1) + 1;
    handleQuantityChange(productId, newQuantity);
  };

  const decreaseQuantity = (productId) => {
    const newQuantity = Math.max(
      1,
      (quantitiesRef.current[productId] || 1) - 1
    );
    handleQuantityChange(productId, newQuantity);
  };

  // FIXED updateQuantity function
  const updateQuantity = async (cartItemId, quantity) => {
    const cartItem = cartProducts.find((item) => item.id === cartItemId);
    if (!cartItem || !quantity) return;

    try {
      await fetch(`${apiBase}/sanctum/csrf-cookie`, {
        credentials: "include",
      });

      const csrfToken = Cookies.get("XSRF-TOKEN");
      const response = await fetch(
        `${apiBase}/api/cart/update-quantity/${cartItemId}`,
        {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify({
            quantity: quantity,
            product_id: cartItem.product_id,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update quantity");
      }

      // Update local state to match server
      setCartProducts((prev) =>
        prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: quantity } : item
        )
      );

      setSuccessMsg(data.message || "Quantity updated successfully");
      setTimeout(() => setSuccessMsg(""), 3500);
      await getCartTotal(setCartTotal);
    } catch (err) {
      setErrors({ general: err.message });
      setTimeout(() => setErrors({}), 3500);

      // Revert to the original quantity in case of error
      setQuantities((prev) => ({
        ...prev,
        [cartItemId]: cartItem.quantity,
      }));
      quantitiesRef.current = {
        ...quantitiesRef.current,
        [cartItemId]: cartItem.quantity,
      };
    }
  };

  // Initial load
  useEffect(() => {
    getCartTotal(setCartTotal);
    getCart();

    return () => {
      Object.values(updateTimeouts.current).forEach(clearTimeout);
    };
  }, []);

  if (loading) {
    return (
      <div className="aside aside_right overflow-hidden cart-drawer aside-drawer">
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">Loading cart...</h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="aside aside_right overflow-hidden cart-drawer aside-drawer"
      id="cartDrawer"
    >
      <div className="aside-header d-flex align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">
          SHOPPING BAG (
          <span className="cart-amount js-cart-items-count">{cartTotal}</span>)
        </h3>
        <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
      </div>

      <div className="aside-content cart-drawer-items-list">
        {successMsg && <p className="alert alert-success">{successMsg}</p>}
        {errors.general && (
          <p className="alert alert-danger">{errors.general}</p>
        )}

        {cartProducts.length > 0 ? (
          cartProducts.map((product) => {
            const colors = parseJsonSafely(product.color);
            const sizes = parseJsonSafely(product.size);
            const firstImage = getFirstImage(product.product?.gallery);

            return (
              <div key={product.id} className="cart-drawer-item-container">
                <div className="cart-drawer-item d-flex position-relative">
                  <div className="position-relative">
                    <a href={`product1_simple.html?id=${product.id}`}>
                      <img
                        loading="lazy"
                        className="cart-drawer-item__img"
                        src={`${apiBase}/storage/${firstImage}`}
                        alt={product.product?.product_name}
                        onError={(e) => {
                          e.target.src = "/images/placeholder-product.jpg";
                        }}
                      />
                    </a>
                  </div>
                  <div className="cart-drawer-item__info flex-grow-1">
                    <h6 className="cart-drawer-item__title fw-normal">
                      <a href={`product1_simple.html?id=${product.id}`}>
                        {product.product?.product_name || "Product Name"}
                      </a>
                    </h6>

                    <p className="cart-drawer-item__option text-secondary">
                      Color:
                      {colors.length > 0 ? (
                        <span className="color-swatches ms-2">
                          {colors.map((color, index) => (
                            <span
                              key={index}
                              className="color-swatch d-inline-block"
                              style={{
                                backgroundColor: color,
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                marginRight: "6px",
                                border:
                                  color.toLowerCase() === "#ffffff"
                                    ? "1px solid #ddd"
                                    : "none",
                              }}
                              title={color}
                            />
                          ))}
                        </span>
                      ) : (
                        "N/A"
                      )}
                    </p>

                    <p className="cart-drawer-item__option text-secondary">
                      Size:
                      {sizes.length > 0 ? (
                        <span className="size-list ms-2">
                          {sizes.map((size, index, array) => (
                            <span key={index}>
                              {size}
                              {index < array.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </span>
                      ) : (
                        "N/A"
                      )}
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <div className="qty-control position-relative">
                        <input
                          type="number"
                          name="quantity"
                          value={quantities[product.id] || 1}
                          min={1}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value)) {
                              handleQuantityChange(
                                product.id,
                                Math.max(1, value)
                              );
                            }
                          }}
                          className="qty-control__number border-0 text-center"
                        />
                        <div
                          className="qty-control__reduce text-start"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          -
                        </div>
                        <div
                          className="qty-control__increase text-end"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </div>
                      </div>
                      <span className="cart-drawer-item__price money price">
                        ${parseFloat(product.price || 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleRemoveItem(e, product.id)}
                    className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
                  />
                </div>
                <hr className="cart-drawer-divider" />
              </div>
            );
          })
        ) : (
          <p className="text-center py-4">Your cart is empty</p>
        )}
      </div>

      <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
        <hr className="cart-drawer-divider" />
        <div className="d-flex justify-content-between">
          <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
          <span className="cart-subtotal fw-medium">
            $
            {cartProducts
              .reduce(
                (sum, item) =>
                  sum + parseFloat(item.price) * (item.quantity || 1),
                0
              )
              .toFixed(2)}
          </span>
        </div>
        <a href="#" className="btn btn-light mt-3 d-block">
          View Cart
        </a>
        <a href="#" className="btn btn-primary mt-3 d-block">
          Checkout
        </a>
      </div>
    </div>
  );
}
