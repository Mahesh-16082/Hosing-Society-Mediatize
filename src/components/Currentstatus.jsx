import { useState } from "react";
import "./Currentstatus.css";

function CurrentStatus() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/public/status1.png",
    "/public/status2.png",
    "/public/status3.jpg",
    "/public/status4.jpg",
  ];

  // Previous image
  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Next image
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="current-status-section" id="current-status">

      <div className="current-status-container">

        {/* Heading */}
        <h2 className="current-status-title">
          Current Project Status - Nov 2025
        </h2>

        {/* Image Slider */}
        <div className="current-status-image-container">

          {/* Image */}
          <img
            src={images[currentImage]}
            alt={`Project status ${currentImage + 1}`}
            className="current-status-image"
          />

          {/* Previous Button */}
          <button
            className="status-arrow status-arrow-left"
            onClick={previousImage}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Next Button */}
          <button
            className="status-arrow status-arrow-right"
            onClick={nextImage}
            aria-label="Next image"
          >
            &#8250;
          </button>

        </div>

      </div>

    </section>
  );
}

export default CurrentStatus;