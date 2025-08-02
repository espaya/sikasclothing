export default function SizeGuide() {
  return (
    <>
      <div
        className="modal fade"
        id="sizeGuide"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog size-guide">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Size Guide</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="size-guide__wrapper">
                <div className="size-guide__image">
                  <img loading="lazy" src="../images/size-guide.jpg" alt="" />
                </div>
                <div className="size-guide__detail">
                  <h5>JEANS</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>SIZE</th>
                        <th>XS</th>
                        <th>S</th>
                        <th>M</th>
                        <th>L</th>
                        <th>XL</th>
                        <th>XXL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BUST</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>WAIST</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                      </tr>
                      <tr>
                        <td>HIPS</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5>FOOTWEAR</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>SIZE</th>
                        <th>XS</th>
                        <th>S</th>
                        <th>M</th>
                        <th>L</th>
                        <th>XL</th>
                        <th>XXL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BUST</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>WAIST</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                      </tr>
                      <tr>
                        <td>HIPS</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                        <td>87</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
