import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { slug } = useParams(); // get slug from url
const [singleProduct, setSingleProduct] = useState([]);
const [loading, setLoading] = useState(false);

const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

const FetchSingleProduct = async () => {
  setLoading(true);
  try {
    await fetch(`${apiBase}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    const response = await fetch(`${apiBase}/api/shop/${slug}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    setSingleProduct(data.product);
  } catch (err) {
    console.error(err.message);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  FetchSingleProduct();
}, [slug]);

export default FetchSingleProduct();
