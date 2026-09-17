import { useState } from "react";
import "./Plans.css";

function Plans() {
  const [activePlan, setActivePlan] = useState("site");

  const plans = {
    site: {
      title: "Site Layout",
      image: "/public/site_layout.png",
    },
    floor: {
      title: "Floor Plan",
      image: "/public/floor_plan.jpg",
    },
    map: {
      title: "Map Location",
      image: "/public/map_location.jpg",
    },
  };

  return (
    <section className="plans-section" id="plans">

      <div className="plans-container">

        {/* Section Heading */}
        <h2 className="plans-title">
          Site Layout & Floor Plans
        </h2>

        {/* Buttons */}
        <div className="plans-tabs">

          <button
            className={activePlan === "site" ? "plan-tab active" : "plan-tab"}
            onClick={() => setActivePlan("site")}
          >
            Site Layout
          </button>

          <button
            className={activePlan === "floor" ? "plan-tab active" : "plan-tab"}
            onClick={() => setActivePlan("floor")}
          >
            Floor Plan
          </button>

          <button
            className={activePlan === "map" ? "plan-tab active" : "plan-tab"}
            onClick={() => setActivePlan("map")}
          >
            Map Location
          </button>

        </div>

        {/* Image Display */}
        <div className="plans-image-container">

          <img
            src={plans[activePlan].image}
            alt={plans[activePlan].title}
            className="plans-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Plans;