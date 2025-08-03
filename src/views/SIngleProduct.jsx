import MySvg from "../components/MySvg";
import HeaderMobileHeaderSticky from "../components/HeaderMobileHeaderSticky";
import MyHeader from "../components/MyHeader";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import CartDrawer from "../components/CartDrawer";
import CustomLogin from "../components/CustomLogin";
import SiteMap from "../components/SiteMap";
import Description from "../components/single_product/Description";
import AdditionalInformation from "../components/single_product/AdditionalInformation";
import Reviews from "../components/single_product/Reviews";
import RelatedProducts from "../components/single_product/RelatedProducts";
import SizeGuide from "../components/single_product/SizeGuide";
import ProductImages from "../components/single_product/ProductImages";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import QuantityControl from "../components/single_product/QuantityControl";
import Share from "../components/single_product/Share";
import Cookies from "js-cookie";
import getCartTotal from "../controller/UpdateCart";
import Sizes from "../components/single_product/Sizes";
import Color from "../components/single_product/Color";
import SingleProductWishlistForm from "../components/single_product/SingleProductWishlistForm";

export default function SingleProduct() {
  const [selectedOptions, setSelectedOptions] = useState({
    color: [],
    size: [],
  });

  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name === "quantity") {
      const val = parseInt(value);
      if (!isNaN(val) && val >= 1) {
        setQuantity(val);
      }
    } else if (type === "checkbox") {
      setSelectedOptions((prev) => {
        const current = new Set(prev[name] || []);
        if (checked) {
          current.add(value);
        } else {
          current.delete(value);
        }
        return {
          ...prev,
          [name]: Array.from(current),
        };
      });
    } else {
      setSelectedOptions((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  function formatNumber(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M+";
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K+";
    return n;
  }

  const { slug } = useParams(); // get slug from url
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Parse the size string safely
  const sizes = Array.isArray(singleProduct.size)
    ? singleProduct.size
    : JSON.parse(singleProduct.size || "[]");

  // Parse color to string safely
  const colors = Array.isArray(singleProduct.color)
    ? singleProduct.color
    : JSON.parse(singleProduct.color || "[]");

  useEffect(() => {
    const fetchSingleProduct = async () => {
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
    fetchSingleProduct();
  }, [slug]);

  //  Add product to cart
  const [formData, setFormData] = useState({
    product_id: "",
    quantity: "",
    size: [],
    color: [],
  });

  const [itemExist, setItemExist] = useState(false); // Define it here instead of importing
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [addCartLoading, setAddCartLoading] = useState(false);
  const [dismissedErrors, setDismissedErrors] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartTotal, setCartTotal] = useState();

  const payload = {
    ...formData,
    product_id: singleProduct.id,
    size: selectedOptions.size,
    color: selectedOptions.color,
    quantity,
  };

  useEffect(() => {
    const checkItemExists = async () => {
      try {
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");

        const response = await fetch(
          `${apiBase}/api/cart/item-exists/${singleProduct.id}`,
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
        setItemExist(response.ok && data);
      } catch (err) {
        console.error("Error checking item existence:", err);
        setItemExist(false);
      }
    };

    if (singleProduct?.id) {
      checkItemExists();
    }
  }, [singleProduct?.id, apiBase]);

  const handleCartSubmit = async (e) => {
    e.preventDefault();
    setAddCartLoading(true);

    try {
      // Get CSRF token
      await fetch(`${apiBase}/sanctum/csrf-cookie`, {
        credentials: "include",
      });
      const csrfToken = Cookies.get("XSRF-TOKEN");

      // Dynamic endpoint
      const endpoint = itemExist
        ? `${apiBase}/api/cart/update/${singleProduct.id}`
        : `${apiBase}/api/cart/add`;

      const response = await fetch(endpoint, {
        method: itemExist ? "PUT" : "POST",
        credentials: "include",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
          setTimeout(() => setErrors({}), 5000);
        } else {
          setErrors({ general: data.message });
          setTimeout(() => setErrors({}), 3500);
        }
      } else {
        // Success handling
        setItemExist(true); // Item now exists in cart
        setSuccessMsg(
          data.message ||
            (itemExist ? "Cart updated successfully" : "Item added to cart")
        );

        setTimeout(() => setSuccessMsg(""), 3500);
      }
    } catch (err) {
      setErrors({ general: err.message });
      setTimeout(() => setErrors({}), 5000);
    } finally {
      setAddCartLoading(false);
    }
  };

  return (
    <>
      <meta name="author" content="flexkit" />
      <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>

      <title>Product Details | Sika's Clothing</title>

      <MySvg></MySvg>
      <HeaderMobileHeaderSticky></HeaderMobileHeaderSticky>
      <MyHeader></MyHeader>

      <main>
        <div className="mb-md-1 pb-md-3"></div>

        {loading ? (
          <Spinner></Spinner>
        ) : (
          <>
            <section className="product-single container product-single__type-9">
              <div className="row">
                {successMsg && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {successMsg}
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => setSuccessMsg("")}
                    ></button>
                  </div>
                )}

                {errors?.general && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    {errors.general}
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() =>
                        setErrors((prev) => ({ ...prev, general: null }))
                      }
                    ></button>
                  </div>
                )}

                {errors &&
                  Object.values(errors)
                    .flat()
                    .map((msg, index) =>
                      !dismissedErrors.includes(index) ? (
                        <div
                          key={index}
                          className="alert alert-danger alert-dismissible fade show"
                          role="alert"
                        >
                          {msg}
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() =>
                              setDismissedErrors([...dismissedErrors, index])
                            }
                          ></button>
                        </div>
                      ) : null
                    )}

                <div className="col-lg-7">
                  <ProductImages
                    gallery={singleProduct.gallery}
                  ></ProductImages>
                </div>
                <div className="col-lg-5">
                  <h1 className="product-single__name">
                    {singleProduct.product_name}
                  </h1>
                  <div className="product-single__rating">
                    {singleProduct.reviews &&
                    singleProduct.reviews.length > 0 ? (
                      <>
                        {/* Average rating calculation */}
                        <div className="reviews-group d-flex">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <svg
                              key={index}
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use
                                href={
                                  index <
                                  Math.round(
                                    singleProduct.reviews.reduce(
                                      (acc, r) => acc + (r.rating || 0),
                                      0
                                    ) / singleProduct.reviews.length
                                  )
                                    ? "#icon_star"
                                    : "#icon_star_outline"
                                }
                              ></use>
                            </svg>
                          ))}
                        </div>

                        {/* Reviews count */}
                        <span className="reviews-note text-lowercase text-secondary ms-1">
                          {singleProduct.reviews.length} review
                          {singleProduct.reviews.length > 1 ? "s" : ""}
                        </span>
                      </>
                    ) : (
                      <span className="text-secondary">No reviews yet</span>
                    )}
                  </div>

                  <div className="product-single__price">
                    <span className="current-price">
                      ${singleProduct.price}
                    </span>
                  </div>
                  <div className="product-single__short-desc">
                    <p>
                      {singleProduct.description?.length > 150
                        ? `${singleProduct.description.slice(0, 150)}...`
                        : singleProduct.description}
                    </p>
                  </div>
                  <form
                    onSubmit={handleCartSubmit}
                    // name="addtocart-form"
                    method="post"
                  >
                    <div className="product-single__swatches">
                      <Sizes
                        sizes={sizes}
                        handleOnChange={handleOnChange}
                        product_id={singleProduct.id}
                      ></Sizes>

                      <Color
                        colors={colors}
                        handleOnChange={handleOnChange}
                        product_id={singleProduct.id}
                      ></Color>
                    </div>

                    <QuantityControl
                      addCartLoading={addCartLoading}
                      handleOnChange={handleOnChange}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      product_id={singleProduct.id}
                    ></QuantityControl>
                  </form>
                  <div className="product-single__addtolinks">
                    <SingleProductWishlistForm
                      product_id={singleProduct.id}
                    ></SingleProductWishlistForm>
                    <Share></Share>
                  </div>
                  <div className="product-single__meta-info">
                    <div className="meta-item">
                      <label>SKU: </label>
                      <span>{singleProduct.sku}</span>
                    </div>
                    <div className="meta-item">
                      <label>Categories:</label>
                      <span>
                        {singleProduct.categories &&
                        singleProduct.categories.length > 0
                          ? singleProduct.categories.map((category, index) => (
                              <span key={category.id}>
                                {category.name}
                                {index !==
                                  singleProduct.categories.length - 1 && ", "}
                              </span>
                            ))
                          : "N/A"}
                      </span>
                    </div>

                    <div className="meta-item">
                      <label>Tags:</label>
                      <span>
                        {singleProduct.tags?.map((tag, index) => (
                          <span key={tag.id}>
                            {tag.name}
                            {index < singleProduct.tags.length - 1 && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                    <div className="meta-item">
                      <label>Material:</label>
                      <span>{singleProduct.material}</span>
                    </div>
                  </div>
                  <div className="product-single__details">
                    <a
                      href="#"
                      className="js-open-aside"
                      data-aside="productDescription"
                    >
                      Description
                    </a>
                    <a
                      href="#"
                      className="js-open-aside"
                      data-aside="productAdditionalInformation"
                    >
                      Additional Information
                    </a>
                    <a
                      href="#"
                      className="js-open-aside"
                      data-aside="productReviews"
                    >
                      Reviews (
                      {formatNumber(singleProduct.reviews?.length || 0)})
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <RelatedProducts slug={slug}></RelatedProducts>
          </>
        )}
      </main>

      <div className="mb-5 pb-xl-5"></div>

      <Footer></Footer>
      <MobileFooter></MobileFooter>

      {/* <!-- Filters Drawer --> */}

      <CustomLogin></CustomLogin>
      <CartDrawer></CartDrawer>
      <SiteMap></SiteMap>
      <div id="scrollTop" className="visually-hidden end-0"></div>
      <SizeGuide></SizeGuide>
      <Description description={singleProduct.description}></Description>
      <AdditionalInformation
        singleProduct={singleProduct}
      ></AdditionalInformation>
      <Reviews slug={singleProduct.id} singleProduct={singleProduct}></Reviews>

      <div className="page-overlay"></div>
    </>
  );
}
