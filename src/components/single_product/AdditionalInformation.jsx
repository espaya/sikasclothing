export default function AdditionalInformation({ singleProduct }) {
  let sizes = [];

  try {
    sizes = Array.isArray(singleProduct.size)
      ? singleProduct.size
      : JSON.parse(singleProduct.size || "[]");
  } catch (e) {
    sizes = [];
  }

  let colors = [];

  try {
    colors = Array.isArray(singleProduct.color)
      ? singleProduct.color
      : JSON.parse(singleProduct.color || "[]");
  } catch (e) {
    colors = [];
  }

  return (
    <>
      <div
        className="aside aside_right overflow-hidden product-single__aside"
        id="productAdditionalInformation"
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">ADDITIONAL INFORMATION</h3>
          <button className="btn-close-lg js-close-aside btn-close-aside ms-auto"></button>
        </div>

        <div className="aside-content">
          <div className="product-single__addtional-info">
            <div className="item">
              <label className="h6">Weight:</label>
              <span>{singleProduct.weight ? singleProduct.weight : "N/A"}</span>
            </div>
            <div className="item">
              <label className="h6">Dimensions:</label>
              <span>
                {singleProduct.dimensions ? singleProduct.dimensions : "N/A"}
              </span>
            </div>

            <div className="item">
              <label className="h6">Size:</label>
              {sizes.map((size, index) => (
                <span key={index}>{size}</span>
              ))}
            </div>

            <div className="item mt-3">
              <label className="h6">Color:</label>
              <div className="d-flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      width: "25px",
                      height: "25px",
                      backgroundColor: color,
                      borderRadius: "50%",
                      border: "1px solid #ccc",
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div className="item">
              <label className="h6">Storage:</label>
              <span>
                {singleProduct.storage ? singleProduct.storage : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
