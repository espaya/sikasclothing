import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import NavLinks from "./NavLinks";
import getCartTotal from "../controller/UpdateCart";

export default function PagesHeader() {
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
      <header id="header" className="header header_sticky position-absolute">
        <div className="container">
          <div className="header-desk header-desk_type_1">
            <div className="logo">
              <a href="/">
                <img
                  src="../images/logo.png"
                  alt="Uomo"
                  className="logo__image d-block"
                />
              </a>
            </div>

            <nav className="navigation">
              <ul className="navigation__list list-unstyled d-flex">
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Home
                  </a>
                  <div
                    className="box-menu"
                    style={{ width: "800px", left: "254px" }}
                  >
                    <div className="col pe-4">
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
                          <a
                            href="index.html"
                            className="menu-link menu-link_us-s"
                          >
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
                      <ul className="sub-menu__list list-unstyled">
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
                        <li className="sub-menu__item">
                          <a
                            href="../Demo10/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 10
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo11/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 11
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo12/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 12
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col pe-4">
                      <ul className="sub-menu__list list-unstyled">
                        <li className="sub-menu__item">
                          <a
                            href="../Demo13/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 13
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo14/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 14
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo15/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 15
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo16/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 16
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo17/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 17
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo18/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 18
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col">
                      <ul className="sub-menu__list list-unstyled">
                        <li className="sub-menu__item">
                          <a
                            href="../Demo19/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 19
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo20/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 20
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo21/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 21
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo22/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 22
                          </a>
                        </li>
                        <li className="sub-menu__item">
                          <a
                            href="../Demo23/index.html"
                            className="menu-link menu-link_us-s"
                          >
                            Home 23
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Shop
                  </a>
                  <div className="mega-menu">
                    <div className="container d-flex">
                      <div className="col pe-4">
                        <a href="#" className="sub-menu__title">
                          Shop List
                        </a>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a
                              href="shop1.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V1
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop2.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V2
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop3.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V3
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop4.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V4
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop5.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V5
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop6.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V6
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop7.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V7
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop8.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V8
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop9.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop List V9
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop10.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Item Style
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop11.html"
                              className="menu-link menu-link_us-s"
                            >
                              Horizontal Scroll
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col pe-4">
                        <a href="#" className="sub-menu__title">
                          Shop Detail
                        </a>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a
                              href="product2_variable.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V1
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product7_v2.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V2
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product8_v3.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V3
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product9_v4.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V4
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product10_v5.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V5
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product11_v6.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V6
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product12_v7.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V7
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product13_v8.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V8
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product14_v9.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V9
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product15_v10.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V10
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product16_v11.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shop Detail V11
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col pe-4">
                        <a href="#" className="sub-menu__title">
                          Other Pages
                        </a>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a
                              href="shop12.html"
                              className="menu-link menu-link_us-s"
                            >
                              Collection Grid
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product1_simple.html"
                              className="menu-link menu-link_us-s"
                            >
                              Simple Product
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product2_variable.html"
                              className="menu-link menu-link_us-s"
                            >
                              Variable Product
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product3_external.html"
                              className="menu-link menu-link_us-s"
                            >
                              External Product
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product4_grouped.html"
                              className="menu-link menu-link_us-s"
                            >
                              Grouped Product
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product5_onsale.html"
                              className="menu-link menu-link_us-s"
                            >
                              On Sale
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="product6_outofstock.html"
                              className="menu-link menu-link_us-s"
                            >
                              Out of Stock
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop_cart.html"
                              className="menu-link menu-link_us-s"
                            >
                              Shopping Cart
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop_checkout.html"
                              className="menu-link menu-link_us-s"
                            >
                              Checkout
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop_order_complete.html"
                              className="menu-link menu-link_us-s"
                            >
                              Order Complete
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop_order_tracking.html"
                              className="menu-link menu-link_us-s"
                            >
                              Order Tracking
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="mega-menu__media col">
                        <div className="position-relative">
                          <img
                            loading="lazy"
                            className="mega-menu__img"
                            src="../images/mega-menu-item.jpg"
                            alt="New Horizons"
                          />
                          <div className="mega-menu__media-content content_abs content_left content_bottom">
                            <h3>NEW</h3>
                            <h3 className="mb-0">HORIZONS</h3>
                            <a
                              href="shop1.html"
                              className="btn-link default-underline fw-medium"
                            >
                              SHOP NOW
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Blog
                  </a>
                  <ul
                    className="default-menu list-unstyled"
                    style={{ left: "449px" }}
                  >
                    <li className="sub-menu__item">
                      <a
                        href="blog_list1.html"
                        className="menu-link menu-link_us-s"
                      >
                        Blog V1
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="blog_list2.html"
                        className="menu-link menu-link_us-s"
                      >
                        Blog V2
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="blog_list3.html"
                        className="menu-link menu-link_us-s"
                      >
                        Blog V3
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="blog_single.html"
                        className="menu-link menu-link_us-s"
                      >
                        Blog Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Pages
                  </a>
                  <ul
                    className="default-menu list-unstyled"
                    style={{ left: "530px" }}
                  >
                    <li className="sub-menu__item">
                      <a
                        href="account_dashboard.html"
                        className="menu-link menu-link_us-s"
                      >
                        My Account
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="login_register.html"
                        className="menu-link menu-link_us-s"
                      >
                        Login / Register
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="store_location.html"
                        className="menu-link menu-link_us-s"
                      >
                        Store Locator
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="lookbook.html"
                        className="menu-link menu-link_us-s"
                      >
                        Lookbook
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="faq.html" className="menu-link menu-link_us-s">
                        Faq
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="terms.html" className="menu-link menu-link_us-s">
                        Terms
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a href="404.html" className="menu-link menu-link_us-s">
                        404 Error
                      </a>
                    </li>
                    <li className="sub-menu__item">
                      <a
                        href="coming_soon.html"
                        className="menu-link menu-link_us-s"
                      >
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="navigation__item">
                  <a href="about.html" className="navigation__link">
                    About
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="contact.html" className="navigation__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container">
                <div className="js-hover__open position-relative">
                  <a className="js-search-popup search-field__actor" href="#">
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

                <div className="search-popup js-hidden-content">
                  <form
                    action="./search_result.html"
                    method="GET"
                    className="search-field container"
                  >
                    <p className="text-uppercase text-secondary fw-medium mb-4">
                      What are you looking for?
                    </p>
                    <div className="position-relative">
                      <input
                        className="search-field__input search-popup__input w-100 fw-medium"
                        type="text"
                        name="search-keyword"
                        placeholder="Search products"
                      />
                      <button
                        className="btn-icon search-popup__submit"
                        type="submit"
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
                      </button>
                      <button
                        className="btn-icon btn-close-lg search-popup__reset"
                        type="reset"
                      ></button>
                    </div>

                    <div className="search-popup__results">
                      <div className="sub-menu search-suggestion">
                        <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a
                              href="shop2.html"
                              className="menu-link menu-link_us-s"
                            >
                              New Arrivals
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">
                              Dresses
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a
                              href="shop3.html"
                              className="menu-link menu-link_us-s"
                            >
                              Accessories
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">
                              Footwear
                            </a>
                          </li>
                          <li className="sub-menu__item">
                            <a href="#" className="menu-link menu-link_us-s">
                              Sweatshirt
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="search-result row row-cols-5"></div>
                    </div>
                  </form>
                </div>
              </div>

              {/* User Account */}
              {user ? (
                <div className="header-tools__item hover-container">
                  <a href="/account">
                    <svg
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

              <a className="header-tools__item" href="account_wishlist.html">
                <svg
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
                className="header-tools__item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#siteMap"
              >
                <svg
                  className="nav-icon"
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_nav"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
