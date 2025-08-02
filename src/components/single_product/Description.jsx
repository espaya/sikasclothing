export default function Description({ description }) {
  return (
    <>
      <div
        className="aside aside_right overflow-hidden product-single__aside"
        id="productDescription"
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">DESCRIPTION</h3>
          <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
        </div>

        <div className="aside-content">
          <div className="product-single__description">{description}</div>
        </div>
      </div>
    </>
  );
}
