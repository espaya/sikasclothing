export default function CartDrawer(){
    return (<div
    className="aside aside_right overflow-hidden cart-drawer aside-drawer"
    id="cartDrawer"
  >
    <div className="aside-header d-flex align-items-center">
      <h3 className="text-uppercase fs-6 mb-0">
        SHOPPING BAG ({" "}
        <span className="cart-amount js-cart-items-count">1</span> ){" "}
      </h3>
      <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
    </div>
    {/* /.aside-header */}
    <div className="aside-content cart-drawer-items-list">
      <div className="cart-drawer-item d-flex position-relative">
        <div className="position-relative">
          <a href="product1_simple.html">
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src="../images/cart-item-1.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="cart-drawer-item__info flex-grow-1">
          <h6 className="cart-drawer-item__title fw-normal">
            <a href="product1_simple.html">Zessi Dresses</a>
          </h6>
          <p className="cart-drawer-item__option text-secondary">
            Color: Yellow
          </p>
          <p className="cart-drawer-item__option text-secondary">Size: L</p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <div className="qty-control position-relative">
              <input
                type="number"
                name="quantity"
                defaultValue={1}
                min={1}
                className="qty-control__number border-0 text-center"
              />
              <div className="qty-control__reduce text-start">-</div>
              <div className="qty-control__increase text-end">+</div>
            </div>
            {/* .qty-control */}
            <span className="cart-drawer-item__price money price">$99</span>
          </div>
        </div>
        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
      </div>
      {/* /.cart-drawer-item d-flex */}
      <hr className="cart-drawer-divider" />
      <div className="cart-drawer-item d-flex position-relative">
        <div className="position-relative">
          <a href="product1_simple.html">
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src="../images/cart-item-2.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="cart-drawer-item__info flex-grow-1">
          <h6 className="cart-drawer-item__title fw-normal">
            <a href="product1_simple.html">Kirby T-Shirt</a>
          </h6>
          <p className="cart-drawer-item__option text-secondary">
            Color: Black
          </p>
          <p className="cart-drawer-item__option text-secondary">Size: XS</p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <div className="qty-control position-relative">
              <input
                type="number"
                name="quantity"
                defaultValue={4}
                min={1}
                className="qty-control__number border-0 text-center"
              />
              <div className="qty-control__reduce text-start">-</div>
              <div className="qty-control__increase text-end">+</div>
            </div>
            {/* .qty-control */}
            <span className="cart-drawer-item__price money price">$89</span>
          </div>
        </div>
        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
      </div>
      {/* /.cart-drawer-item d-flex */}
      <hr className="cart-drawer-divider" />
      <div className="cart-drawer-item d-flex position-relative">
        <div className="position-relative">
          <a href="product1_simple.html">
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src="../images/cart-item-3.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="cart-drawer-item__info flex-grow-1">
          <h6 className="cart-drawer-item__title fw-normal">
            <a href="product1_simple.html">Cableknit Shawl</a>
          </h6>
          <p className="cart-drawer-item__option text-secondary">
            Color: Green
          </p>
          <p className="cart-drawer-item__option text-secondary">Size: L</p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <div className="qty-control position-relative">
              <input
                type="number"
                name="quantity"
                defaultValue={3}
                min={1}
                className="qty-control__number border-0 text-center"
              />
              <div className="qty-control__reduce text-start">-</div>
              <div className="qty-control__increase text-end">+</div>
            </div>
            {/* .qty-control */}
            <span className="cart-drawer-item__price money price">$129</span>
          </div>
        </div>
        <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
      </div>
      {/* /.cart-drawer-item d-flex */}
    </div>
    {/* /.aside-content */}
    <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
      <hr className="cart-drawer-divider" />
      <div className="d-flex justify-content-between">
        <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
        <span className="cart-subtotal fw-medium">$176.00</span>
      </div>
      {/* /.d-flex justify-content-between */}
      <a href="shop_cart.html" className="btn btn-light mt-3 d-block">
        View Cart
      </a>
      <a href="shop_checkout.html" className="btn btn-primary mt-3 d-block">
        Checkout
      </a>
    </div>
    {/* /.aside-content */}
  </div>)
}