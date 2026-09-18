import "./location.css";

function Location() {
  const address =
    "Rajiv Swagruha Township, Mettakanigudem, Hyderabad, Telangana 500055";

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rajiv+Swagruha+Township+Mettakanigudem+Hyderabad+Telangana+500055";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=Rajiv+Swagruha+Township,+Mettakanigudem,+Hyderabad,+Telangana+500055&output=embed";

  return (
    <section className="location-section" id="location">

      <div className="location-container">

        <h2 className="location-title">
          Location
        </h2>

        <p className="location-address">
          Find us at {address}
        </p>

        <div className="map-container">

          <iframe
            src={mapEmbedUrl}
            title="Housing Society Location"
            className="google-map"
            loading="lazy"
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="open-maps-button"
          >
            Open in Maps ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default Location;