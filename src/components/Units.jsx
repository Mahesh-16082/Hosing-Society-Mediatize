import "./Units.css";

function Units() {
  const unitDetails = [
    {
      value: "112",
      label: "UNITS",
    },
    {
      value: "1.4 Acres",
      label: "TOTAL AREA",
    },
    {
      value: "3",
      label: "BHK",
    },
    {
      value: "East & West",
      label: "FACING",
    },
    {
      value: "14",
      label: "FLOORS",
    },
    {
      value: "1150-1266",
      label: "SQ.FT",
    },
  ];

  return (
    <section className="units-section">
      <div className="units-container">

        {unitDetails.map((item, index) => (
          <div className="unit-item" key={index}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Units;