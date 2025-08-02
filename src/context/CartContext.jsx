import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/cart");
      setCart(data.cart);
      setTotal(data.total);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      await axios.post("/api/cart/add", { product_id: productId, quantity });
      await fetchCart();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const updateQuantity = async (cartItemId, quantity) => {
    try {
      await axios.put(`/api/cart/update/${cartItemId}`, { quantity });
      await fetchCart();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(`/api/cart/remove/${cartItemId}`);
      await fetchCart();
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const clearCart = async () => {
    try {
      await axios.post("/api/cart/clear");
      setCart([]);
      setTotal(0);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        loading,
        error,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
