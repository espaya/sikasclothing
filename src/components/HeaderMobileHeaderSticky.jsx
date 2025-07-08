export default function HeaderMobileHeaderSticky(){
    return (
        <div className="header-mobile header_sticky">
    <div className="container d-flex align-items-center h-100">
      <a className="mobile-nav-activator d-block position-relative" href="#">
        <svg className="nav-icon" width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg"><use href="#icon_nav"></use></svg>
        <span className="btn-close-lg position-absolute top-0 start-0 w-100"></span>
      </a>

      <div className="logo">
        <a href="index.html">
          <img src="../images/logo.png" alt="Uomo" className="logo__image d-block"></img>
        </a>
      </div>

      <a href="#" className="header-tools__item header-tools__cart js-open-aside" data-aside="cartDrawer">
        <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart"></use></svg>
        <span className="cart-amount d-block position-absolute js-cart-items-count">3</span>
      </a>
    </div>

    <nav className="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto">
      <div className="container">
        <form action="search.html" method="GET" className="search-field position-relative mt-4 mb-3">
          <div className="position-relative">
            <input className="search-field__input w-100 border rounded-1" type="text" name="search-keyword" placeholder="Search products"></input>
            <button className="btn-icon search-popup__submit pb-0 me-2" type="submit">
              <svg className="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search"></use></svg>
            </button>
            <button className="btn-icon btn-close-lg search-popup__reset pb-0 me-2" type="reset"></button>
          </div>

          <div className="position-absolute start-0 top-100 m-0 w-100">
            <div className="search-result"></div>
          </div>
        </form>
      </div>

      <div className="container">
        <div className="overflow-hidden">
          <ul className="navigation__list list-unstyled position-relative">
            <li className="navigation__item">
              <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Home<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
              <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Home</a>
                <ul className="list-unstyled">
                  <li className="sub-menu__item"><a href="../Demo1/index.html" className="menu-link menu-link_us-s">Home 1</a></li>
                  <li className="sub-menu__item"><a href="index.html" className="menu-link menu-link_us-s">Home 2</a></li>
                  <li className="sub-menu__item"><a href="../Demo3/index.html" className="menu-link menu-link_us-s">Home 3</a></li>
                  <li className="sub-menu__item"><a href="../Demo4/index.html" className="menu-link menu-link_us-s">Home 4</a></li>
                  <li className="sub-menu__item"><a href="../Demo5/index.html" className="menu-link menu-link_us-s">Home 5</a></li>
                  <li className="sub-menu__item"><a href="../Demo6/index.html" className="menu-link menu-link_us-s">Home 6</a></li>
                  <li className="sub-menu__item"><a href="../Demo7/index.html" className="menu-link menu-link_us-s">Home 7</a></li>
                  <li className="sub-menu__item"><a href="../Demo8/index.html" className="menu-link menu-link_us-s">Home 8</a></li>
                  <li className="sub-menu__item"><a href="../Demo9/index.html" className="menu-link menu-link_us-s">Home 9</a></li>
                  <li className="sub-menu__item"><a href="../Demo10/index.html" className="menu-link menu-link_us-s">Home 10</a></li>
                  <li className="sub-menu__item"><a href="../Demo11/index.html" className="menu-link menu-link_us-s">Home 11</a></li>
                  <li className="sub-menu__item"><a href="../Demo12/index.html" className="menu-link menu-link_us-s">Home 12</a></li>
                  <li className="sub-menu__item"><a href="../Demo13/index.html" className="menu-link menu-link_us-s">Home 13</a></li>
                  <li className="sub-menu__item"><a href="../Demo14/index.html" className="menu-link menu-link_us-s">Home 14</a></li>
                  <li className="sub-menu__item"><a href="../Demo15/index.html" className="menu-link menu-link_us-s">Home 15</a></li>
                  <li className="sub-menu__item"><a href="../Demo16/index.html" className="menu-link menu-link_us-s">Home 16</a></li>
                  <li className="sub-menu__item"><a href="../Demo17/index.html" className="menu-link menu-link_us-s">Home 17</a></li>
                  <li className="sub-menu__item"><a href="../Demo18/index.html" className="menu-link menu-link_us-s">Home 18</a></li>
                  <li className="sub-menu__item"><a href="../Demo19/index.html" className="menu-link menu-link_us-s">Home 19</a></li>
                  <li className="sub-menu__item"><a href="../Demo20/index.html" className="menu-link menu-link_us-s">Home 20</a></li>
                  <li className="sub-menu__item"><a href="../Demo21/index.html" className="menu-link menu-link_us-s">Home 21</a></li>
                  <li className="sub-menu__item"><a href="../Demo22/index.html" className="menu-link menu-link_us-s">Home 22</a></li>
                  <li className="sub-menu__item"><a href="../Demo23/index.html" className="menu-link menu-link_us-s">Home 23</a></li>
                </ul>
              </div>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Shop<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
              <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-3"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Shop</a>
                <div className="sub-menu__wrapper">
                  <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Shop List<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
                  <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                    <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Shop List</a>
                    <ul className="sub-menu__list list-unstyled">
                      <li className="sub-menu__item"><a href="shop1.html" className="menu-link menu-link_us-s">Shop List V1</a></li>
                      <li className="sub-menu__item"><a href="shop2.html" className="menu-link menu-link_us-s">Shop List V2</a></li>
                      <li className="sub-menu__item"><a href="shop3.html" className="menu-link menu-link_us-s">Shop List V3</a></li>
                      <li className="sub-menu__item"><a href="shop4.html" className="menu-link menu-link_us-s">Shop List V4</a></li>
                      <li className="sub-menu__item"><a href="shop5.html" className="menu-link menu-link_us-s">Shop List V5</a></li>
                      <li className="sub-menu__item"><a href="shop6.html" className="menu-link menu-link_us-s">Shop List V6</a></li>
                      <li className="sub-menu__item"><a href="shop7.html" className="menu-link menu-link_us-s">Shop List V7</a></li>
                      <li className="sub-menu__item"><a href="shop8.html" className="menu-link menu-link_us-s">Shop List V8</a></li>
                      <li className="sub-menu__item"><a href="shop9.html" className="menu-link menu-link_us-s">Shop List V9</a></li>
                      <li className="sub-menu__item"><a href="shop10.html" className="menu-link menu-link_us-s">Shop Item Style</a></li>
                      <li className="sub-menu__item"><a href="shop11.html" className="menu-link menu-link_us-s">Horizontal Scroll</a></li>
                    </ul>
                  </div>

                  <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Shop Detail<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
                  <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                    <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Shop Detail</a>
                    <ul className="sub-menu__list list-unstyled">
                      <li className="sub-menu__item"><a href="product2_variable.html" className="menu-link menu-link_us-s">Shop Detail V1</a></li>
                      <li className="sub-menu__item"><a href="product7_v2.html" className="menu-link menu-link_us-s">Shop Detail V2</a></li>
                      <li className="sub-menu__item"><a href="product8_v3.html" className="menu-link menu-link_us-s">Shop Detail V3</a></li>
                      <li className="sub-menu__item"><a href="product9_v4.html" className="menu-link menu-link_us-s">Shop Detail V4</a></li>
                      <li className="sub-menu__item"><a href="product10_v5.html" className="menu-link menu-link_us-s">Shop Detail V5</a></li>
                      <li className="sub-menu__item"><a href="product11_v6.html" className="menu-link menu-link_us-s">Shop Detail V6</a></li>
                      <li className="sub-menu__item"><a href="product12_v7.html" className="menu-link menu-link_us-s">Shop Detail V7</a></li>
                      <li className="sub-menu__item"><a href="product13_v8.html" className="menu-link menu-link_us-s">Shop Detail V8</a></li>
                      <li className="sub-menu__item"><a href="product14_v9.html" className="menu-link menu-link_us-s">Shop Detail V9</a></li>
                      <li className="sub-menu__item"><a href="product15_v10.html" className="menu-link menu-link_us-s">Shop Detail V10</a></li>
                      <li className="sub-menu__item"><a href="product16_v11.html" className="menu-link menu-link_us-s">Shop Detail V11</a></li>
                    </ul>
                  </div>

                  <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Other Pages<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
                  <div className="sub-menu__wrapper position-absolute top-0 start-100 w-100 d-none">
                    <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Other Pages</a>
                    <ul className="sub-menu__list list-unstyled">
                      <li className="sub-menu__item"><a href="shop12.html" className="menu-link menu-link_us-s">Collection Grid</a></li>
                      <li className="sub-menu__item"><a href="product1_simple.html" className="menu-link menu-link_us-s">Simple Product</a></li>
                      <li className="sub-menu__item"><a href="product2_variable.html" className="menu-link menu-link_us-s">Variable Product</a></li>
                      <li className="sub-menu__item"><a href="product3_external.html" className="menu-link menu-link_us-s">External Product</a></li>
                      <li className="sub-menu__item"><a href="product4_grouped.html" className="menu-link menu-link_us-s">Grouped Product</a></li>
                      <li className="sub-menu__item"><a href="product5_onsale.html" className="menu-link menu-link_us-s">On Sale</a></li>
                      <li className="sub-menu__item"><a href="product6_outofstock.html" className="menu-link menu-link_us-s">Out of Stock</a></li>
                      <li className="sub-menu__item"><a href="shop_cart.html" className="menu-link menu-link_us-s">Shopping Cart</a></li>
                      <li className="sub-menu__item"><a href="shop_checkout.html" className="menu-link menu-link_us-s">Checkout</a></li>
                      <li className="sub-menu__item"><a href="shop_order_complete.html" className="menu-link menu-link_us-s">Order Complete</a></li>
                      <li className="sub-menu__item"><a href="shop_order_tracking.html" className="menu-link menu-link_us-s">Order Tracking</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Blog<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
              <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Blog</a>
                <ul className="list-unstyled">
                  <li className="sub-menu__item"><a href="blog_list1.html" className="menu-link menu-link_us-s">Blog V1</a></li>
                  <li className="sub-menu__item"><a href="blog_list2.html" className="menu-link menu-link_us-s">Blog V2</a></li>
                  <li className="sub-menu__item"><a href="blog_list3.html" className="menu-link menu-link_us-s">Blog V3</a></li>
                  <li className="sub-menu__item"><a href="blog_single.html" className="menu-link menu-link_us-s">Blog Detail</a></li>
                </ul>
              </div>
            </li>

            <li className="navigation__item">
              <a href="#" className="navigation__link js-nav-right d-flex align-items-center">Pages<svg className="ms-auto" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_next_sm"></use></svg></a>
              <div className="sub-menu position-absolute top-0 start-100 w-100 d-none">
                <a href="#" className="navigation__link js-nav-left d-flex align-items-center border-bottom mb-2"><svg className="me-2" width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg"><use href="#icon_prev_sm"></use></svg>Pages</a>
                <ul className="list-unstyled">
                  <li className="sub-menu__item"><a href="account_dashboard.html" className="menu-link menu-link_us-s">My Account</a></li>
                  <li className="sub-menu__item"><a href="login_register.html" className="menu-link menu-link_us-s">Login / Register</a></li>
                  <li className="sub-menu__item"><a href="store_location.html" className="menu-link menu-link_us-s">Store Locator</a></li>
                  <li className="sub-menu__item"><a href="lookbook.html" className="menu-link menu-link_us-s">Lookbook</a></li>
                  <li className="sub-menu__item"><a href="faq.html" className="menu-link menu-link_us-s">Faq</a></li>
                  <li className="sub-menu__item"><a href="terms.html" className="menu-link menu-link_us-s">Terms</a></li>
                  <li className="sub-menu__item"><a href="404.html" className="menu-link menu-link_us-s">404 Error</a></li>
                  <li className="sub-menu__item"><a href="coming_soon.html" className="menu-link menu-link_us-s">Coming Soon</a></li>
                </ul>
              </div>
            </li>

            <li className="navigation__item">
              <a href="about.html" className="navigation__link">About</a>
            </li>

            <li className="navigation__item">
              <a href="contact.html" className="navigation__link">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-top mt-auto pb-2">
        <div className="customer-links container mt-4 mb-2 pb-1">
          <svg className="d-inline-block align-middle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user"></use></svg>
          <span className="d-inline-block ms-2 text-uppercase align-middle fw-medium">My Account</span>
        </div>

        <div className="container d-flex align-items-center">
          <label htmlFor="footerSettingsLanguage_mobile" className="me-2 text-secondary">Language</label>
          <select id="footerSettingsLanguage_mobile" className="form-select form-select-sm bg-transparent border-0" aria-label="Default select example" name="store-language">
            <option className="footer-select__option" defaultValue="">United Kingdom | English</option>
            <option className="footer-select__option" value="1">United States | English</option>
            <option className="footer-select__option" value="2">German</option>
            <option className="footer-select__option" value="3">French</option>
            <option className="footer-select__option" value="4">Swedish</option>
          </select>
        </div>

        <div className="container d-flex align-items-center">
          <label htmlFor="footerSettingsCurrency_mobile" className="me-2 text-secondary">Currency</label>
          <select id="footerSettingsCurrency_mobile" className="form-select form-select-sm bg-transparent border-0" aria-label="Default select example" name="store-language">
            <option defaultValue="">$ USD</option>
            <option value="1">£ GBP</option>
            <option value="2">€ EURO</option>
          </select>
        </div>

        <ul className="container social-links list-unstyled d-flex flex-wrap mb-0">
          <li>
            <a href="https://www.facebook.com" className="footer__social-link d-block ps-0">
              <svg className="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_facebook"></use></svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="footer__social-link d-block">
              <svg className="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_twitter"></use></svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" className="footer__social-link d-block">
              <svg className="svg-icon svg-icon_instagram" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><use href="#icon_instagram"></use></svg>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" className="footer__social-link d-block">
              <svg className="svg-icon svg-icon_youtube" width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg"><path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"></path></svg>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com" className="footer__social-link d-block">
              <svg className="svg-icon svg-icon_pinterest" width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><use href="#icon_pinterest"></use></svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    )
  
}