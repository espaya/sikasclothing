import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductImages({ gallery }) {
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000";

  // Convert comma-separated string to array of image objects
  const galleryItems = gallery
    ? gallery.split(",").map((src, index) => ({
        src: src.trim(),
        thumb: src.trim(), // Using same image for thumbnails
        alt: `Product image ${index + 1}`,
        type: "image", // Assuming all are images
      }))
    : [];

  useEffect(() => {
    if (galleryItems.length === 0) return;

    // Initialize thumbnail swiper first
    const thumbsSwiper = new Swiper(
      ".product-single__thumbnail .swiper-container",
      {
        modules: [Thumbs],
        direction: "vertical",
        spaceBetween: 8,
        slidesPerView: Math.min(4, galleryItems.length),
        freeMode: true,
        watchSlidesProgress: true,
        height: 400,
        breakpoints: {
          320: {
            slidesPerView: Math.min(3, galleryItems.length),
          },
          768: {
            slidesPerView: Math.min(4, galleryItems.length),
          },
        },
      }
    );

    // Then initialize main swiper with thumbs connection
    const mainSwiper = new Swiper(".product-single__image .swiper-container", {
      modules: [Navigation, Thumbs],
      spaceBetween: 32,
      slidesPerView: 1,
      navigation: {
        nextEl: ".product-single__image .swiper-button-next",
        prevEl: ".product-single__image .swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    // Initialize fancyBox only once
    if (window.Fancybox) {
      window.Fancybox.bind("[data-fancybox='gallery']", {
        // Your fancyBox options here
      });
    }

    return () => {
      // Cleanup
      mainSwiper.destroy();
      thumbsSwiper.destroy();
      if (window.Fancybox) {
        window.Fancybox.unbind("[data-fancybox='gallery']");
        window.Fancybox.close();
      }
    };
  }, [galleryItems]);

  if (galleryItems.length === 0) {
    return <div className="text-center py-8">No images available</div>;
  }

  return (
    <div
      className="product-single__media vertical-thumbnail product-media-initialized"
      data-media-type="vertical-thumbnail"
    >
      <div className="product-single__image">
        <div
          className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
          style={{ cursor: "grab" }}
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-5e4938222106111053"
            aria-live="polite"
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="swiper-slide product-single__image-item"
                role="group"
                aria-label={`${index + 1} / ${galleryItems.length}`}
                style={{ width: 462, marginRight: 32 }}
              >
                <img
                  loading="lazy"
                  className="h-auto"
                  src={`${apiBase}/storage/${item.src}`}
                //   width={674}
                //   height={674}
                  alt={item.alt}
                  style={{
                    width: "674px",
                    height: "674px",
                    objectFit: "cover",
                  }}
                />
                <a
                  data-fancybox="gallery"
                  href={`${apiBase}/storage/${item.src}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title=""
                  data-bs-original-title="Zoom"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_zoom" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div
            className="swiper-button-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-5e4938222106111053"
            aria-disabled="false"
          >
            <svg
              width={7}
              height={11}
              viewBox="0 0 7 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_prev_sm" />
            </svg>
          </div>

          <div
            className="swiper-button-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-5e4938222106111053"
            aria-disabled="false"
          >
            <svg
              width={7}
              height={11}
              viewBox="0 0 7 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_next_sm" />
            </svg>
          </div>
        </div>
      </div>

      {/* Vertical Thumbnails */}
      <div className="product-single__thumbnail">
        <div className="swiper-container swiper-container-initialized swiper-container-vertical swiper-container-pointer-events swiper-container-free-mode swiper-container-thumbs">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-8877fc5fbc55eaf5"
            aria-live="polite"
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`swiper-slide product-single__image-item ${
                  index === 0 ? "swiper-slide-active" : ""
                }`}
                role="group"
                aria-label={`${index + 1} / ${galleryItems.length}`}
              >
                <img
                  className="h-auto"
                  loading="lazy"
                  src={`${apiBase}/storage/${item.src}`}
                  width={104}
                  height={104}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
