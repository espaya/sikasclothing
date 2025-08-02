import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Sizes({ sizes, handleOnChange, product_id }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Load sizes from database
  useEffect(() => {
    const fetchDbSizes = async () => {
      try {
        await fetch(`${apiBase}/sanctum/csrf-cookie`, {
          credentials: "include",
        });

        const csrfToken = Cookies.get("XSRF-TOKEN");
        const response = await fetch(
          `${apiBase}/api/cart/get-cart/${product_id}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "X-XSRF-TOKEN": decodeURIComponent(csrfToken),
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const dbSizes = data.reduce((acc, item) => {
            try {
              const sizeArray = JSON.parse(item.size);
              return [...acc, ...sizeArray];
            } catch (e) {
              return acc;
            }
          }, []);

          setSelectedSizes(dbSizes);

          // Send all sizes from DB to parent
          if (dbSizes.length > 0) {
            handleOnChange({
              target: {
                name: "size",
                value: dbSizes,
              },
            });
          }
        }
      } catch (err) {
        console.error("Error fetching sizes:", err);
      }
    };

    if (product_id) {
      fetchDbSizes();
    }
  }, [product_id, apiBase]);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    const isChecked = e.target.checked;

    let newSelectedSizes;

    if (isChecked) {
      newSelectedSizes = [...selectedSizes, size];
    } else {
      newSelectedSizes = selectedSizes.filter((s) => s !== size);

      // Prevent unchecking last size
      if (newSelectedSizes.length === 0) {
        return;
      }
    }

    setSelectedSizes(newSelectedSizes);

    // Send updated sizes array
    handleOnChange({
      target: {
        name: "size",
        value: newSelectedSizes,
      },
    });
  };

  return (
    <>
      <div className="product-swatch text-swatches">
        <label>Sizes</label>
        <div className="swatch-list">
          {sizes.map((size, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={handleSizeChange}
                value={size}
                name="size"
                id={`swatch-${index}`}
              />
              <label
                className="swatch js-swatch"
                htmlFor={`swatch-${index}`}
                aria-label={size}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={size}
              >
                {size}
              </label>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="sizeguide-link"
          data-bs-toggle="modal"
          data-bs-target="#sizeGuide"
        >
          Size Guide
        </a>
      </div>
    </>
  );
}
