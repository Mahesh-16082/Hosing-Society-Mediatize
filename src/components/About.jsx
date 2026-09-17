import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Heading */}
        <h2 className="about-title">
          About Housing Society
        </h2>

        {/* Description */}
        <p className="about-description">
          HousingSociety.net is a platform created to promote real estate
          projects — including apartments, plots, and townships — that are
          affordable and value-driven. Our goal is to help people find
          reliable, low-cost housing options that fit their budget. With a
          focus on transparency and accessibility, we aim to connect
          communities with genuine, budget-friendly projects, making property
          ownership easier and more attainable for everyone.
        </p>

        {/* Building Image */}
        <div className="about-image-container">
          <img
            src="/about.jpg"
            alt="Housing Society Building"
            className="about-image"
          />
        </div>

      </div>

    </section>
  );
}

export default About;