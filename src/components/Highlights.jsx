import { useState } from "react";
import "./Highlights.css";

function Highlights() {
  const [activeCategory, setActiveCategory] = useState("schools");

  const highlightsData = {
    schools: [
      {
        name: "Urban International School",
        distance: "1.9 KM",
      },
      {
        name: "Geetanjali Concept School",
        distance: "2.6 KM",
      },
      {
        name: "Tatva Global School",
        distance: "2.6 KM",
      },
      {
        name: "Bachpan A Play School",
        distance: "3.0 KM",
      },
      {
        name: "Orchids The International School",
        distance: "3.2 KM",
      },
    ],

    hospitals: [
      {
        name: "Lifespan Super Specialty Hospital",
        distance: "2.1 KM",
      },
      {
        name: "Care Hospital",
        distance: "3.4 KM",
      },
      {
        name: "Apollo Hospital",
        distance: "4.2 KM",
      },
      {
        name: "KIMS Hospital",
        distance: "5.0 KM",
      },
      {
        name: "Yashoda Hospital",
        distance: "5.5 KM",
      },
    ],

    transport: [
      {
        name: "Mettakanigudem Bus Stop",
        distance: "0.5 KM",
      },
      {
        name: "Miyapur Metro Station",
        distance: "6.2 KM",
      },
      {
        name: "JNTU Metro Station",
        distance: "7.1 KM",
      },
      {
        name: "Hyderabad Railway Station",
        distance: "10.5 KM",
      },
      {
        name: "Rajiv Gandhi International Airport",
        distance: "35 KM",
      },
    ],

    malls: [
      {
        name: "Forum Sujana Mall",
        distance: "5.5 KM",
      },
      {
        name: "Manjeera Mall",
        distance: "6.0 KM",
      },
      {
        name: "Nexus Mall",
        distance: "7.2 KM",
      },
      {
        name: "Sarath City Capital Mall",
        distance: "8.5 KM",
      },
      {
        name: "AMB Cinemas",
        distance: "10 KM",
      },
    ],

    educational: [
      {
        name: "JNTU Hyderabad",
        distance: "6.8 KM",
      },
      {
        name: "VNR VJIET",
        distance: "7.2 KM",
      },
      {
        name: "Malla Reddy University",
        distance: "8.4 KM",
      },
      {
        name: "CBIT",
        distance: "15 KM",
      },
      {
        name: "University of Hyderabad",
        distance: "12 KM",
      },
    ],

    parks: [
      {
        name: "KPHB Park",
        distance: "5.0 KM",
      },
      {
        name: "Botanical Garden",
        distance: "9.5 KM",
      },
      {
        name: "Kasu Brahmananda Reddy Park",
        distance: "15 KM",
      },
      {
        name: "Durgam Cheruvu Park",
        distance: "16 KM",
      },
      {
        name: "Indira Park",
        distance: "20 KM",
      },
    ],
  };

  const categories = [
    {
      id: "schools",
      label: "SCHOOLS",
    },
    {
      id: "hospitals",
      label: "HOSPITALS",
    },
    {
      id: "transport",
      label: "TRANSPORT",
    },
    {
      id: "malls",
      label: "MALLS",
    },
    {
      id: "educational",
      label: "EDUCATIONAL INSTITUTIONS",
    },
    {
      id: "parks",
      label: "PARKS",
    },
  ];

  return (
    <section className="highlights-section" id="highlights">

      <div className="highlights-container">

        {/* Heading */}
        <h2 className="highlights-title">
          Location Highlights
        </h2>

        {/* Category Buttons */}
        <div className="highlights-tabs">

          {categories.map((category) => (
            <button
              key={category.id}
              className={
                activeCategory === category.id
                  ? "highlight-tab active"
                  : "highlight-tab"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* Places List */}
        <div className="highlights-list">

          {highlightsData[activeCategory].map((place, index) => (
            <div
              className="highlight-item"
              key={index}
            >

              <div className="highlight-place">
                <span className="highlight-arrow">
                  →
                </span>

                <span className="highlight-name">
                  {place.name}
                </span>
              </div>

              <span className="highlight-distance">
                {place.distance}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Highlights;