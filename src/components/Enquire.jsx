import "./Enquire.css";

function Enquire() {
  const handleEnquireClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      className="enquire-now"
      onClick={handleEnquireClick}
      aria-label="Enquire Now"
    >
      ENQUIRE NOW
    </button>
  );
}

export default Enquire;