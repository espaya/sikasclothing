import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import NavLinks from "./NavLinks";
import getCartTotal from "../controller/UpdateCart";

export default function MyHeader() {
  const { user } = useContext(AuthContext);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchPopupRef = useRef(null);
  const searchToggleButtonsRef = useRef([]);
  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    getCartTotal(setCartTotal);
    // const intervalID = setInterval(() => {
    //   getCartTotal(setCartTotal);
    // }, 3500);

    const openButtons = document.querySelectorAll(".js-open-aside");
    const overlay = document.querySelector(".page-overlay");

    const closeAside = () => {
      document.querySelectorAll(".aside-drawer").forEach((drawer) => {
        drawer.classList.remove("active");
      });
      if (overlay) overlay.classList.remove("active");
    };

    const handleOpen = (e) => {
      e.preventDefault();
      const asideTarget = e.currentTarget.getAttribute("data-aside");
      const asideDrawer = document.getElementById(asideTarget);
      if (asideDrawer) {
        asideDrawer.classList.add("active");
        if (overlay) overlay.classList.add("active");
      }
    };

    const handleClickOutside = (e) => {
      if (
        isSearchOpen &&
        searchPopupRef.current &&
        !searchPopupRef.current.contains(e.target) &&
        !searchToggleButtonsRef.current.some((btn) => btn.contains(e.target))
      ) {
        setIsSearchOpen(false);
      }
    };

    openButtons.forEach((btn) => btn.addEventListener("click", handleOpen));
    document
      .querySelectorAll(".js-close-aside")
      .forEach((btn) => btn.addEventListener("click", closeAside));
    if (overlay) overlay.addEventListener("click", closeAside);
    document.addEventListener("click", handleClickOutside);

    return () => {
      openButtons.forEach((btn) =>
        btn.removeEventListener("click", handleOpen)
      );
      document
        .querySelectorAll(".js-close-aside")
        .forEach((btn) => btn.removeEventListener("click", closeAside));
      if (overlay) overlay.removeEventListener("click", closeAside);
      document.removeEventListener("click", handleClickOutside);

      // clearInterval(intervalID);
    };
  }, [isSearchOpen]);

  const toggleSearchPopup = (e) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };

  // Navigation links data
  const topLinks = [
    { text: "Shipping", href: "#" },
    { text: "FAQ", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Track Order", href: "#" },
  ];

  // Social media links data
  const socialLinks = [
    { icon: "icon_facebook", width: 9, height: 15 },
    { icon: "icon_twitter", width: 14, height: 13 },
    { icon: "icon_instagram", width: 14, height: 13 },
    { icon: "icon_pinterest", width: 14, height: 15 },
  ];

  // Language options
  const languages = [
    { value: "english", label: "English" },
    { value: "german", label: "German" },
    { value: "french", label: "French" },
    { value: "swedish", label: "Swedish" },
  ];

  // Currency options
  const currencies = [
    { value: "usd", label: "$ USD" },
    { value: "gbp", label: "£ GBP" },
    { value: "eur", label: "€ EURO" },
  ];

  // Quicklinks data (updated to match screenshot)
  const quickLinks = [
    { text: "New Arrivals", href: "shop2.html" },
    { text: "Dresses", href: "#" },
    { text: "Accessories", href: "shop3.html" },
    { text: "Footwear", href: "#" },
    { text: "Sweatshirt", href: "#" },
  ];

  // Search results data (added to match screenshot)
  const searchResults = [
    { title: "Dresses", price: "$29" },
    { title: "Coolful jacket", price: "$62" },
    { title: "Shirt in Botanical Cheetah Print", price: "$17" },
    { title: "Carton Jersey T-Shirt", price: "$29" },
  ];

  return (
    <header
      id="header"
      className="header header-fullwidth header-transparent-bg"
    >
      {/* Top Header Section */}
      <div className="header-top d-flex color-white align-items-center bg-black">
        {/* Left Navigation */}
        <ul className="list-unstyled d-flex m-0 flex-1 gap-3">
          {topLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="menu-link menu-link_us-s color-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Banner */}
        <p className="mx-auto mb-0">FREE SHIPPING WORLDWIDE</p>

        {/* Right Section */}
        <div className="heeader-top__right d-flex justify-content-end flex-1 gap-1">
          {/* Social Links */}
          <ul className="social-links list-unstyled d-flex mb-0 flex-wrap">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href="#" className="footer__social-link d-block color-white">
                  <svg
                    className={`svg-icon svg-icon_${social.icon.replace(
                      "icon_",
                      ""
                    )}`}
                    width={social.width}
                    height={social.height}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href={`#${social.icon}`}></use>
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <select
            className="form-select form-select-sm color-white bg-transparent"
            name="store-language"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>

          {/* Currency Selector */}
          <select
            className="form-select form-select-sm color-white bg-transparent"
            name="store-currency"
          >
            {currencies.map((curr) => (
              <option key={curr.value} value={curr.value}>
                {curr.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="header-desk header-desk_type_2">
        <nav className="navigation d-flex">
          <a
            className="navigation__item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#siteMap"
          >
            <svg
              width="30"
              height="11"
              viewBox="0 0 30 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="2"></rect>
              <rect y="9" width="25" height="2"></rect>
            </svg>
          </a>
          <NavLinks></NavLinks>
        </nav>

        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Uomo"
              className="logo__image d-block"
            />
          </a>
        </div>

        {/* Header Tools */}
        <div className="header-tools d-flex align-items-center">
          {/* Search */}
          <div className="header-tools__item hover-container">
            <div className="js-hover__open position-relative">
              <a
                className="js-search-popup search-field__actor"
                href="#"
                onClick={toggleSearchPopup}
                ref={(el) => (searchToggleButtonsRef.current[0] = el)}
              >
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_search"></use>
                </svg>
                <i className="btn-icon btn-close-lg"></i>
              </a>
            </div>

            {isSearchOpen && (
              <div
                ref={searchPopupRef}
                className="search-popup"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "#fff",
                  padding: "30px 20px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  zIndex: 1050,
                }}
              >
                <form
                  action="./search_result.html"
                  method="GET"
                  className="search-field container"
                >
                  <p
                    className="text-uppercase fw-medium mb-4 text-secondary"
                    style={{ fontSize: "14px", color: "#666" }}
                  >
                    WHAT ARE YOU LOOKING FOR?
                  </p>
                  <div className="position-relative">
                    <input
                      className="search-field__input search-popup__input fw-medium w-100"
                      type="text"
                      name="search-keyword"
                      placeholder="Search products"
                      style={{
                        border: "none",
                        borderBottom: "1px solid #ddd",
                        padding: "10px 0",
                        fontSize: "16px",
                        outline: "none",
                      }}
                    />
                    <button
                      className="btn-icon search-popup__submit"
                      type="submit"
                      style={{
                        position: "absolute",
                        right: "40px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <svg
                        className="d-block"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <use href="#icon_search"></use>
                      </svg>
                    </button>
                    <button
                      className="btn-icon btn-close-lg search-popup__reset"
                      type="reset"
                      onClick={() => setIsSearchOpen(false)}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    ></button>
                  </div>

                  <div className="search-popup__results mt-4">
                    <div className="sub-menu search-suggestion">
                      <h6
                        className="sub-menu__title fs-base mb-3"
                        style={{
                          fontSize: "14px",
                          textTransform: "uppercase",
                          color: "#666",
                        }}
                      >
                        QUICKLINKS
                      </h6>
                      <ul className="sub-menu__list list-unstyled d-flex mb-4 flex-wrap gap-3">
                        {quickLinks.map((link, index) => (
                          <li key={index} className="sub-menu__item">
                            <a
                              href={link.href}
                              className="menu-link menu-link_us-s"
                              style={{
                                color: "#333",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="search-result"
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "20px",
                      }}
                    >
                      {searchResults.map((item, index) => (
                        <div key={index}>
                          <span style={{ fontSize: "14px", color: "#333" }}>
                            {item.title}
                          </span>
                          <span
                            style={{
                              fontSize: "14px",
                              color: "#666",
                              marginTop: "5px",
                              display: "block",
                            }}
                          >
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* User Account */}
          {user ? (
            <div className="header-tools__item hover-container">
              <a href="/account">
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_user"></use>
                </svg>
              </a>
            </div>
          ) : (
            <div className="header-tools__item hover-container">
              <a className="js-open-aside" href="#" data-aside="customerForms">
                <svg
                  className="d-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_user"></use>
                </svg>
              </a>
            </div>
          )}

          {/* Wishlist */}
          <a className="header-tools__item" href="/account/wishlist">
            <svg
              className="d-block"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_heart"></use>
            </svg>
          </a>

          {/* Shopping Cart */}
          <a
            href="#"
            className="header-tools__item header-tools__cart js-open-aside"
            data-aside="cartDrawer"
          >
            <svg
              className="d-block"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_cart"></use>
            </svg>
            <span className="cart-amount d-block position-absolute js-cart-items-count">
              {cartTotal}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
