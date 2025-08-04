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
    <>
      <header
        id="header"
        className="header header-fullwidth header-transparent-bg position-absolute"
      >
        <div className="header-top d-flex bg-black color-white align-items-center">
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
          <p className="mx-auto mb-0">FREE SHIPPING WORLDWIDE</p>
          <div className="heeader-top__right flex-1 d-flex gap-1 justify-content-end">
            <ul className="social-links list-unstyled d-flex mb-0 flex-wrap">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="footer__social-link d-block color-white"
                  >
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

            <ul className="navigation__list list-unstyled d-flex">
              <li class="navigation__item">
                <a href="#" className="navigation__link">
                  Home
                </a>
                <div className="box-menu" style={{ width: "800px", left: "21px" }}>
                  <div clasNames="col pe-4">
                    <ul className="sub-menu__list list-unstyled">
                      <li className="sub-menu__item">
                        <a
                          href="../Demo1/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 1
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a href="index.html" className="menu-link menu-link_us-s">
                          Home 2
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a
                          href="../Demo3/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 3
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a
                          href="../Demo4/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 4
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a
                          href="../Demo5/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 5
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a
                          href="../Demo6/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 6
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col pe-4">
                    <ul class="sub-menu__list list-unstyled">
                      <li className="sub-menu__item">
                        <a
                          href="../Demo7/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 7
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a
                          href="../Demo8/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 8
                        </a>
                      </li>
                      <li className="sub-menu__item">
                        <a
                          href="../Demo9/index.html"
                          className="menu-link menu-link_us-s"
                        >
                          Home 9
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo10/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 10
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo11/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 11
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo12/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 12
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col pe-4">
                    <ul class="sub-menu__list list-unstyled">
                      <li class="sub-menu__item">
                        <a
                          href="../Demo13/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 13
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo14/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 14
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo15/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 15
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo16/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 16
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo17/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 17
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo18/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 18
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col">
                    <ul class="sub-menu__list list-unstyled">
                      <li class="sub-menu__item">
                        <a
                          href="../Demo19/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 19
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo20/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 20
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo21/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 21
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo22/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 22
                        </a>
                      </li>
                      <li class="sub-menu__item">
                        <a
                          href="../Demo23/index.html"
                          class="menu-link menu-link_us-s"
                        >
                          Home 23
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  Shop
                </a>
                <div class="mega-menu">
                  <div class="container d-flex">
                    <div class="col pe-4">
                      <a href="#" class="sub-menu__title">
                        Shop List
                      </a>
                      <ul class="sub-menu__list list-unstyled">
                        <li class="sub-menu__item">
                          <a href="shop1.html" class="menu-link menu-link_us-s">
                            Shop List V1
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop2.html" class="menu-link menu-link_us-s">
                            Shop List V2
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop3.html" class="menu-link menu-link_us-s">
                            Shop List V3
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop4.html" class="menu-link menu-link_us-s">
                            Shop List V4
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop5.html" class="menu-link menu-link_us-s">
                            Shop List V5
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop6.html" class="menu-link menu-link_us-s">
                            Shop List V6
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop7.html" class="menu-link menu-link_us-s">
                            Shop List V7
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop8.html" class="menu-link menu-link_us-s">
                            Shop List V8
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a href="shop9.html" class="menu-link menu-link_us-s">
                            Shop List V9
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="shop10.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Item Style
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="shop11.html"
                            class="menu-link menu-link_us-s"
                          >
                            Horizontal Scroll
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="col pe-4">
                      <a href="#" class="sub-menu__title">
                        Shop Detail
                      </a>
                      <ul class="sub-menu__list list-unstyled">
                        <li class="sub-menu__item">
                          <a
                            href="product2_variable.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V1
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product7_v2.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V2
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product8_v3.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V3
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product9_v4.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V4
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product10_v5.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V5
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product11_v6.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V6
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product12_v7.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V7
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product13_v8.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V8
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product14_v9.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V9
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product15_v10.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V10
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product16_v11.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shop Detail V11
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="col pe-4">
                      <a href="#" class="sub-menu__title">
                        Other Pages
                      </a>
                      <ul class="sub-menu__list list-unstyled">
                        <li class="sub-menu__item">
                          <a
                            href="shop12.html"
                            class="menu-link menu-link_us-s"
                          >
                            Collection Grid
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product1_simple.html"
                            class="menu-link menu-link_us-s"
                          >
                            Simple Product
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product2_variable.html"
                            class="menu-link menu-link_us-s"
                          >
                            Variable Product
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product3_external.html"
                            class="menu-link menu-link_us-s"
                          >
                            External Product
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product4_grouped.html"
                            class="menu-link menu-link_us-s"
                          >
                            Grouped Product
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product5_onsale.html"
                            class="menu-link menu-link_us-s"
                          >
                            On Sale
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="product6_outofstock.html"
                            class="menu-link menu-link_us-s"
                          >
                            Out of Stock
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="shop_cart.html"
                            class="menu-link menu-link_us-s"
                          >
                            Shopping Cart
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="shop_checkout.html"
                            class="menu-link menu-link_us-s"
                          >
                            Checkout
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="shop_order_complete.html"
                            class="menu-link menu-link_us-s"
                          >
                            Order Complete
                          </a>
                        </li>
                        <li class="sub-menu__item">
                          <a
                            href="shop_order_tracking.html"
                            class="menu-link menu-link_us-s"
                          >
                            Order Tracking
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="mega-menu__media col">
                      <div class="position-relative">
                        <img
                          loading="lazy"
                          class="mega-menu__img"
                          src="../images/mega-menu-item.jpg"
                          alt="New Horizons"
                        />
                        <div class="mega-menu__media-content content_abs content_left content_bottom">
                          <h3>NEW</h3>
                          <h3 class="mb-0">HORIZONS</h3>
                          <a
                            href="shop1.html"
                            class="btn-link default-underline fw-medium"
                          >
                            SHOP NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  Blog
                </a>
                <ul
                  class="default-menu list-unstyled"
                  style={{ left: "185px;" }}
                >
                  <li class="sub-menu__item">
                    <a href="blog_list1.html" class="menu-link menu-link_us-s">
                      Blog V1
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="blog_list2.html" class="menu-link menu-link_us-s">
                      Blog V2
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="blog_list3.html" class="menu-link menu-link_us-s">
                      Blog V3
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="blog_single.html" class="menu-link menu-link_us-s">
                      Blog Detail
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navigation__item">
                <a href="#" class="navigation__link">
                  Pages
                </a>
                <ul
                  class="default-menu list-unstyled"
                  style={{ left: "250px" }}
                >
                  <li class="sub-menu__item">
                    <a
                      href="account_dashboard.html"
                      class="menu-link menu-link_us-s"
                    >
                      My Account
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a
                      href="login_register.html"
                      class="menu-link menu-link_us-s"
                    >
                      Login / Register
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a
                      href="store_location.html"
                      class="menu-link menu-link_us-s"
                    >
                      Store Locator
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="lookbook.html" class="menu-link menu-link_us-s">
                      Lookbook
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="faq.html" class="menu-link menu-link_us-s">
                      Faq
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="terms.html" class="menu-link menu-link_us-s">
                      Terms
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="404.html" class="menu-link menu-link_us-s">
                      404 Error
                    </a>
                  </li>
                  <li class="sub-menu__item">
                    <a href="coming_soon.html" class="menu-link menu-link_us-s">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </li>
              <li class="navigation__item">
                <a href="about.html" class="navigation__link">
                  About
                </a>
              </li>
              <li class="navigation__item">
                <a href="contact.html" class="navigation__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div class="logo">
            <a href="index.html">
              <img
                src="../images/logo.png"
                alt="Uomo"
                class="logo__image d-block"
              />
            </a>
          </div>

          <div class="header-tools d-flex align-items-center">
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
              <a href="/account">
              <div className="header-tools__item">
                
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_user"></use>
                  </svg>
               
              </div>
               </a>
            ) : (
              <div className="header-tools__item hover-container">
                <a
                  className="js-open-aside"
                  href="#"
                  data-aside="customerForms"
                >
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
    </>
  );
}
