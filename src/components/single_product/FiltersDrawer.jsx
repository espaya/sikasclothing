export default function FiltersDrawer() {
  const handleOnChange = () => {};

  return (
    <>
      <div className="aside-filters aside aside_right" id="shopFilter">
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
          <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
        </div>

        <div className="aside-content">
          <div className="accordion" id="categories-list">
            <div className="accordion-item mb-4">
              <h5 className="accordion-header" id="accordion-heading-11">
                <button
                  className="accordion-button p-0 border-0 fs-5 text-uppercase"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-filter-1"
                  aria-expanded="true"
                  aria-controls="accordion-filter-1"
                >
                  Product Categories
                  <svg className="accordion-button__icon" viewBox="0 0 14 14">
                    <g aria-hidden="true" stroke="none" fillRule="evenodd">
                      <path
                        className="svg-path-vertical"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                      <path
                        className="svg-path-horizontal"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                    </g>
                  </svg>
                </button>
              </h5>
              <div
                id="accordion-filter-1"
                className="accordion-collapse collapse show border-0"
                aria-labelledby="accordion-heading-11"
                data-bs-parent="#categories-list"
              >
                <div className="accordion-body px-0 pb-0">
                  <ul className="list list-inline row row-cols-2 mb-0">
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Dresses
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Shorts
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Sweatshirts
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Swimwear
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Jackets
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        T-Shirts & Tops
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Jeans
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Trousers
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Men
                      </a>
                    </li>
                    <li className="list-item">
                      <a href="#" className="menu-link py-1">
                        Jumpers & Cardigans
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="color-filters">
            <div className="accordion-item mb-4">
              <h5 className="accordion-header" id="accordion-heading-1">
                <button
                  className="accordion-button p-0 border-0 fs-5 text-uppercase"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-filter-2"
                  aria-expanded="true"
                  aria-controls="accordion-filter-2"
                >
                  Color
                  <svg className="accordion-button__icon" viewBox="0 0 14 14">
                    <g aria-hidden="true" stroke="none" fillRule="evenodd">
                      <path
                        className="svg-path-vertical"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                      <path
                        className="svg-path-horizontal"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                    </g>
                  </svg>
                </button>
              </h5>
              <div
                id="accordion-filter-2"
                className="accordion-collapse collapse show border-0"
                aria-labelledby="accordion-heading-1"
                data-bs-parent="#color-filters"
              >
                <div className="accordion-body px-0 pb-0">
                  <div className="d-flex flex-wrap">
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#0a2472" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#d7bb4f" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#282828" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#b1d6e8" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#9c7539" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#d29b48" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#e6ae95" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#d76b67" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color swatch_active js-filter"
                      style={{ color: "#bababa" }}
                    ></a>
                    <a
                      href="#"
                      className="swatch-color js-filter"
                      style={{ color: "#bfdcc4" }}
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="size-filters">
            <div className="accordion-item mb-4">
              <h5 className="accordion-header" id="accordion-heading-size">
                <button
                  className="accordion-button p-0 border-0 fs-5 text-uppercase"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-filter-size"
                  aria-expanded="true"
                  aria-controls="accordion-filter-size"
                >
                  Sizes
                  <svg className="accordion-button__icon" viewBox="0 0 14 14">
                    <g aria-hidden="true" stroke="none" fillRule="evenodd">
                      <path
                        className="svg-path-vertical"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                      <path
                        className="svg-path-horizontal"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                    </g>
                  </svg>
                </button>
              </h5>
              <div
                id="accordion-filter-size"
                className="accordion-collapse collapse show border-0"
                aria-labelledby="accordion-heading-size"
                data-bs-parent="#size-filters"
              >
                <div className="accordion-body px-0 pb-0">
                  <div className="d-flex flex-wrap">
                    <a
                      href="#"
                      className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                    >
                      XS
                    </a>
                    <a
                      href="#"
                      className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                    >
                      S
                    </a>
                    <a
                      href="#"
                      className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                    >
                      M
                    </a>
                    <a
                      href="#"
                      className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                    >
                      L
                    </a>
                    <a
                      href="#"
                      className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                    >
                      XL
                    </a>
                    <a
                      href="#"
                      className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
                    >
                      XXL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="brand-filters">
            <div className="accordion-item mb-4">
              <h5 className="accordion-header" id="accordion-heading-brand">
                <button
                  className="accordion-button p-0 border-0 fs-5 text-uppercase"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-filter-brand"
                  aria-expanded="true"
                  aria-controls="accordion-filter-brand"
                >
                  Brands
                  <svg className="accordion-button__icon" viewBox="0 0 14 14">
                    <g aria-hidden="true" stroke="none" fillRule="evenodd">
                      <path
                        className="svg-path-vertical"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                      <path
                        className="svg-path-horizontal"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                    </g>
                  </svg>
                </button>
              </h5>
              <div
                id="accordion-filter-brand"
                className="accordion-collapse collapse show border-0"
                aria-labelledby="accordion-heading-brand"
                data-bs-parent="#brand-filters"
              >
                <div className="search-field multi-select accordion-body px-0 pb-0">
                  <select
                    className="d-none"
                    multiple=""
                    name="total-numbers-list"
                  >
                    <option value="1">Adidas</option>
                    <option value="2">Balmain</option>
                    <option value="3">Balenciaga</option>
                    <option value="4">Burberry</option>
                    <option value="5">Kenzo</option>
                    <option value="5">Givenchy</option>
                    <option value="5">Zara</option>
                  </select>
                  <div className="search-field__input-wrapper mb-3">
                    <input
                      type="text"
                      name="search_text"
                      className="search-field__input form-control form-control-sm border-light border-2"
                      placeholder="SEARCH"
                      value=""
                      onChange={handleOnChange}
                    />
                  </div>
                  <ul className="multi-select__list list-unstyled">
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Adidas</span>
                      <span className="text-secondary">2</span>
                    </li>
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Balmain</span>
                      <span className="text-secondary">7</span>
                    </li>
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Balenciaga</span>
                      <span className="text-secondary">10</span>
                    </li>
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Burberry</span>
                      <span className="text-secondary">39</span>
                    </li>
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Kenzo</span>
                      <span className="text-secondary">95</span>
                    </li>
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Givenchy</span>
                      <span className="text-secondary">1092</span>
                    </li>
                    <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                      <span className="me-auto">Zara</span>
                      <span className="text-secondary">48</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="price-filters">
            <div className="accordion-item mb-4">
              <h5
                className="accordion-header mb-2"
                id="accordion-heading-price"
              >
                <button
                  className="accordion-button p-0 border-0 fs-5 text-uppercase"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-filter-price"
                  aria-expanded="true"
                  aria-controls="accordion-filter-price"
                >
                  Price
                  <svg className="accordion-button__icon" viewBox="0 0 14 14">
                    <g aria-hidden="true" stroke="none" fillRule="evenodd">
                      <path
                        className="svg-path-vertical"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                      <path
                        className="svg-path-horizontal"
                        d="M14,6 L14,8 L0,8 L0,6 L14,6"
                      ></path>
                    </g>
                  </svg>
                </button>
              </h5>
              <div
                id="accordion-filter-price"
                className="accordion-collapse collapse show border-0"
                aria-labelledby="accordion-heading-price"
                data-bs-parent="#price-filters"
              >
                <input
                  className="price-range-slider"
                  type="text"
                  name="price_range"
                  value=""
                  data-slider-min="10"
                  data-slider-max="1000"
                  data-slider-step="5"
                  data-slider-value="[250,450]"
                  data-currency="$"
                  onChange={handleOnChange}
                />
                <div className="price-range__info d-flex align-items-center mt-2">
                  <div className="me-auto">
                    <span className="text-secondary">Min Price: </span>
                    <span className="price-range__min">$250</span>
                  </div>
                  <div>
                    <span className="text-secondary">Max Price: </span>
                    <span className="price-range__max">$450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter-active-tags pt-2">
            <button className="filter-tag d-inline-flex align-items-center mb-3 me-3 text-uppercase js-filter">
              <i className="btn-close-xs d-inline-block"></i>
              <span className="ms-2">Blues</span>
            </button>
            <button className="filter-tag d-inline-flex align-items-center mb-3 me-3 text-uppercase js-filter">
              <i className="btn-close-xs d-inline-block"></i>
              <span className="ms-2">Max Price: $493</span>
            </button>
            <button className="filter-tag d-inline-flex align-items-center mb-3 text-uppercase js-filter">
              <i className="btn-close-xs d-inline-block"></i>
              <span className="ms-2">Zara</span>
            </button>

            <div>
              <button className="filter-tag d-flex align-items-center text-uppercase js-filter">
                <i className="btn-close-xs d-inline-block"></i>
                <span className="ms-2">RESET FILTER</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
