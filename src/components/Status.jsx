import "./status.css";

function Status() {
  return (
    <section className="status-section" id="status">

      <div className="status-container">

        {/* Building Image */}
        <div className="status-image">
          <img
            src="/public/status5.png"
            alt="B06 Tower construction status"
          />
        </div>

        {/* Status Information
        <div className="status-content">

          <p className="status-label">PROJECT STATUS</p>

          <h1>
            B06 Tower
          </h1>

          <p className="status-description">
            Track the current construction progress of B06 Tower
            and stay updated with the development of the project.
          </p>

          <div className="status-info">

            <div className="status-item">
              <span className="status-dot"></span>
              <div>
                <h3>Construction Status</h3>
                <p>Ongoing</p>
              </div>
            </div>

            <div className="status-item">
              <span className="status-dot"></span>
              <div>
                <h3>Tower</h3>
                <p>B06</p>
              </div>
            </div>

          </div>

        </div> */}

      </div>

    </section>
  );
}

export default Status;