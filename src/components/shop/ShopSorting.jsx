export default function ShopSorting() {
    return (
        <div className="d-flex justify-content-between pb-md-2 mb-4">
            <div className="breadcrumb d-none d-md-block mb-0 flex-grow-1">
                <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">
                    Home
                </a>
                <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">/</span>
                <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">
                    The Shop
                </a>
            </div>

            <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                <select className="shop-acs__select form-select order-md-0 order-1 w-auto border-0 py-0" aria-label="Sort Items" name="total-number">
                    <option defaultValue="">Default Sorting</option>
                    <option value="1">Featured</option>
                    <option value="2">Best selling</option>
                    <option value="3">Alphabetically, A-Z</option>
                    <option value="3">Alphabetically, Z-A</option>
                    <option value="3">Price, low to high</option>
                    <option value="3">Price, high to low</option>
                    <option value="3">Date, old to new</option>
                    <option value="3">Date, new to old</option>
                </select>

                <div className="shop-asc__seprator bg-light d-none d-md-block order-md-0 mx-3"></div>

                <div className="col-size align-items-center d-none d-lg-flex order-1">
                    <span className="text-uppercase fw-medium me-2">View</span>
                    <button className="btn-link fw-medium js-cols-size me-2" data-target="products-grid" data-cols="2">
                        2
                    </button>
                    <button className="btn-link fw-medium js-cols-size me-2" data-target="products-grid" data-cols="3">
                        3
                    </button>
                    <button className="btn-link fw-medium js-cols-size" data-target="products-grid" data-cols="4">
                        4
                    </button>
                </div>

                <div className="shop-filter d-flex align-items-center order-md-3 d-lg-none order-0">
                    <button className="btn-link btn-link_f d-flex align-items-center js-open-aside ps-0" data-aside="shopFilter">
                        <svg
                            className="d-inline-block me-2 align-middle"
                            width="14"
                            height="10"
                            viewBox="0 0 14 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#icon_filter"></use>
                        </svg>
                        <span className="text-uppercase fw-medium d-inline-block align-middle">Filter</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
