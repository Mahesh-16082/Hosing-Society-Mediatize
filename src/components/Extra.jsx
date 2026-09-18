import "./extra.css";

function Extra() {
  const facilities = [
    {
      name: "Gym",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M6 7v10M3 9v6M9 5v14M18 7v10M21 9v6M9 12h6" />
        </svg>
      ),
    },
    {
      name: "Yoga",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="13" cy="4" r="2" />
          <path d="M13 7v5l-4 4M13 9l4 2 2 4M9 16l-2 4M17 15l3 3" />
        </svg>
      ),
    },
    {
      name: "Pool",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 9c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M3 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M8 5l3 3 3-4 3 3" />
        </svg>
      ),
    },
    {
      name: "Walking Area",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="13" cy="4" r="2" />
          <path d="M12 7l-2 5 3 2 2 5M10 12l-4 3M13 10l4 2M11 14l-4 6" />
        </svg>
      ),
    },
    {
      name: "Conference Room",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 20V7h7v13M15 20V4h5v16M2 20h20" />
          <path d="M7 10h1M7 13h1M17 8h1M17 11h1" />
        </svg>
      ),
    },
    {
      name: "EV Charging",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="3" width="10" height="17" rx="2" />
          <path d="M9 7h3l-2 4h3l-4 5 1-4H8zM15 8h3v7a2 2 0 0 0 2 2h1" />
        </svg>
      ),
    },
    {
      name: "Creche",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 4v16M8 4v16M5 8h3M5 12h3M5 16h3" />
          <path d="M10 5l9 14M19 19h2" />
        </svg>
      ),
    },
    {
      name: "Auditorium",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 20v-7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7" />
          <path d="M6 20v-5M18 20v-5M4 20h16" />
          <path d="M8 10V8a4 4 0 0 1 8 0v2" />
        </svg>
      ),
    },
    {
      name: "Garden",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 20V11" />
          <path d="M12 14c-4 0-6-2-6-5 4 0 6 2 6 5ZM12 12c0-4 2-6 6-6 0 4-2 6-6 6Z" />
          <path d="M8 20h8" />
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="9" r="2" />
        </svg>
      ),
    },
    {
      name: "Car Parking",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 17h14l-1-7H6l-1 7Z" />
          <path d="M7 10l2-4h6l2 4M3 17h2M19 17h2" />
          <circle cx="8" cy="17" r="1.5" />
          <circle cx="16" cy="17" r="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="extra-section" id="extra">

      <div className="extra-container">

        {/* Heading */}
        <h2 className="extra-title">
          Extra Fun, More Happiness
        </h2>

        {/* Description */}
        <p className="extra-description">
          Extra fun for children & alike starts the moment you are on the
          elevation at the grand floor. Designated blocks have their own areas
          for children so that they don’t have to move far from the block once
          they come down. Adventurous ones in an extra proactive area for
          growing and sweating out — swing over or slide & glide, you sure are
          in for extra fun here!
        </p>

        {/* Facilities */}
        <div className="extra-grid">

          {facilities.map((facility, index) => (
            <div className="extra-item" key={index}>

              <div className="extra-icon">
                {facility.icon}
              </div>

              <span>{facility.name}</span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Extra;