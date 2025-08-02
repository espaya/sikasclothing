import { useEffect, useState } from "react";
import Cookies from "js-cookie";

// Helper function to check if a color is white
const isWhiteColor = (color) => {
  if (!color) return false;

  const colorStr = color.toLowerCase().trim();

  // Check for hex formats
  if (
    colorStr === "#ffffff" ||
    colorStr === "#fff" ||
    colorStr === "ffffff" ||
    colorStr === "fff"
  ) {
    return true;
  }

  // Check for rgb format
  if (colorStr.startsWith("rgb(")) {
    const match = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (
      match &&
      match[1] === "255" &&
      match[2] === "255" &&
      match[3] === "255"
    ) {
      return true;
    }
  }

  // Check for rgba format (considering opaque white)
  if (colorStr.startsWith("rgba(")) {
    const match = colorStr.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
    if (
      match &&
      match[1] === "255" &&
      match[2] === "255" &&
      match[3] === "255"
    ) {
      return true;
    }
  }

  // Check for hsl format (hue doesn't matter for white)
  if (colorStr.startsWith("hsl(")) {
    const match = colorStr.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
    if (match && match[3] === "100") {
      return true;
    }
  }

  // Check for hsla format
  if (colorStr.startsWith("hsla(")) {
    const match = colorStr.match(
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/
    );
    if (match && match[3] === "100") {
      return true;
    }
  }

  // Check for color names
  const whiteColorNames = [
    "white",
    "snow",
    "ivory",
    "floralwhite",
    "ghostwhite",
  ];
  return whiteColorNames.includes(colorStr);
};

export default function Color({ colors, handleOnChange, product_id }) {
  const [selectedColors, setSelectedColors] = useState([]);
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Load colors from database
  useEffect(() => {
    const fetchDbColors = async () => {
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
          const dbColors = data.reduce((acc, item) => {
            try {
              const colorArray = JSON.parse(item.color);
              return [...acc, ...colorArray];
            } catch (e) {
              return acc;
            }
          }, []);

          setSelectedColors(dbColors);

          // Initialize with at least one color selected
          if (dbColors.length > 0) {
            handleOnChange({
              target: {
                name: "color",
                value: dbColors[0],
                checked: true,
                type: "checkbox",
              },
            });
          }
        }
      } catch (err) {
        console.error("Error fetching colors:", err);
      }
    };

    if (product_id) {
      fetchDbColors();
    }
  }, [product_id, apiBase]);

  const handleColorChange = (e) => {
    const color = e.target.value;
    const isChecked = e.target.checked;

    const newSelectedColors = isChecked
      ? [...selectedColors, color]
      : selectedColors.filter((c) => c !== color);
    setSelectedColors(newSelectedColors);

    if (newSelectedColors.length === 0) {
      setSelectedColors([color]);
      return;
    }

    handleOnChange({
      target: {
        name: "color",
        value: color,
        checked: isChecked,
        type: "checkbox",
      },
    });
  };

  return (
    <div className="product-swatch color-swatches">
      <label>Color</label>
      <div className="swatch-list">
        {colors.map((color, index) => (
          <div key={`color-${index}`}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={handleColorChange}
              value={color}
              name="color"
              id={`color-swatch-${index}`}
            />
            <label
              className="swatch swatch-color js-swatch"
              htmlFor={`color-swatch-${index}`}
              aria-label={color}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={color}
              style={{
                color: color,
                backgroundColor: isWhiteColor(color) ? "1px solid #ccc" : "none",
              }}
            ></label>
          </div>
        ))}
      </div>
    </div>
  );
}
