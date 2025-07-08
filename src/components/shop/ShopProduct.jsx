export default function ShopProduct() {
    return (
        <div className="product-card-wrapper">
            <div className="product-card mb-md-4 mb-xxl-5 mb-3">
                <div className="pc__img-wrapper">
                    <div className="swiper-container background-img js-swiper-slider" data-settings='{"resizeObserver": true}'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="product1_simple.html">
                                    <img
                                        loading="lazy"
                                        src="../../images/products/product_1.jpg"
                                        width="330"
                                        height="400"
                                        alt="Cropped Faux leather Jacket"
                                        className="pc__img"
                                    ></img>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="product1_simple.html">
                                    <img
                                        loading="lazy"
                                        src="../images/products/product_1-1.jpg"
                                        width="330"
                                        height="400"
                                        alt="Cropped Faux leather Jacket"
                                        className="pc__img"
                                    ></img>
                                </a>
                            </div>
                        </div>
                        <span className="pc__img-prev">
                            <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_prev_sm"></use>
                            </svg>
                        </span>
                        <span className="pc__img-next">
                            <svg width="7" height="11" viewBox="0 0 7 11" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_next_sm"></use>
                            </svg>
                        </span>
                    </div>
                    <button
                        className="pc__atc btn anim_appear-bottom btn position-absolute text-uppercase fw-medium js-add-cart js-open-aside border-0"
                        data-aside="cartDrawer"
                        title="Add To Cart"
                    >
                        Add To Cart
                    </button>
                </div>

                <div className="pc__info position-relative">
                    <p className="pc__category">Dresses</p>
                    <h6 className="pc__title">
                        <a href="product1_simple.html">Cropped Faux Leather Jacket</a>
                    </h6>
                    <div className="product-card__price d-flex">
                        <span className="money price">$29</span>
                    </div>
                    <div className="product-card__review d-flex align-items-center">
                        <div className="reviews-group d-flex">
                            <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_star"></use>
                            </svg>
                            <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_star"></use>
                            </svg>
                            <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_star"></use>
                            </svg>
                            <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_star"></use>
                            </svg>
                            <svg className="review-star" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                <use href="#icon_star"></use>
                            </svg>
                        </div>
                        <span className="reviews-note text-lowercase ms-1 text-secondary">8k+ reviews</span>
                    </div>

                    <button className="pc__btn-wl position-absolute js-add-wishlist end-0 top-0 border-0 bg-transparent" title="Add To Wishlist">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#icon_heart"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
