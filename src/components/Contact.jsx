import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});


  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Remove error when user starts correcting
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };


  // =========================
  // VALIDATE FORM
  // =========================

  const validateForm = () => {
    const newErrors = {};


    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }


    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }


    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }


    // Location
    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    } else if (formData.location.trim().length < 3) {
      newErrors.location = "Please enter a valid location.";
    }


    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }


    // Consent
    if (!formData.consent) {
      newErrors.consent =
        "Please authorize us to contact you.";
    }


    return newErrors;
  };


  // =========================
  // SUBMIT FORM
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);


    // =========================
    // VALIDATION ERROR
    // =========================

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please correct the errors in the form.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });

      return;
    }


    // =========================
    // SUCCESS
    // =========================

    toast.success(
      "Your enquiry has been submitted successfully!",
      {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      }
    );


    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      consent: false,
    });

    setErrors({});
  };


  return (
    <>
      {/* =========================
          TOAST CONTAINER
      ========================= */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />


      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-container">


          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="contact-about">


            {/* Logo */}

            <div className="contact-logo">
              <img
                src="/contact_logo.png"
                alt="Housing Society"
              />
            </div>


            {/* About Heading */}

            <h2 className="contact-about-title">
              ABOUT B06 TOWER
            </h2>


            {/* About Text */}

            <p className="contact-about-text">
              Sahira Township, Gajularamaram is a large
              residential community in North Hyderabad.
              Spread over 35 acres, it offers 3 BHK
              apartments with modern amenities like a gym,
              power backup, and play areas. Located near major
              roads, schools, and hospitals, it provides great
              connectivity and is ideal for both living and
              investment.
            </p>


            {/* Address */}

            <div className="contact-address">

              <div className="address-icon">
                📍
              </div>

              <div className="address-text">
                <strong>
                  Housingsociety.net
                </strong>

                <br />

                B06 Tower, Sahira Township,

                <br />

                Gajularamaram, Hyderabad,

                <br />

                Telangana 500055
              </div>

            </div>

          </div>



          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="contact-form-wrapper">


            {/* Heading */}

            <h2 className="contact-heading">
              GET IN TOUCH
            </h2>


            {/* Description */}

            <p className="contact-description">
              Want to know more about Sahira Township?
              Fill out the contact form below, and our
              team will reach out to you soon.
            </p>


            {/* Contact Heading */}

            <h3 className="contact-form-title">
              Contact
            </h3>


            {/* =========================
                FORM
            ========================= */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >


              {/* =========================
                  NAME
              ========================= */}

              <div className="form-group">

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={
                    errors.name
                      ? "input-error"
                      : ""
                  }
                />

                {errors.name && (
                  <span className="error-text">
                    {errors.name}
                  </span>
                )}

              </div>



              {/* =========================
                  EMAIL
              ========================= */}

              <div className="form-group">

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={
                    errors.email
                      ? "input-error"
                      : ""
                  }
                />

                {errors.email && (
                  <span className="error-text">
                    {errors.email}
                  </span>
                )}

              </div>



              {/* =========================
                  PHONE
              ========================= */}

              <div className="form-group">

                <div
                  className={`phone-input ${
                    errors.phone
                      ? "input-error"
                      : ""
                  }`}
                >

                  <div className="country-code">
                    🇮🇳 +91
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                  />

                </div>

                {errors.phone && (
                  <span className="error-text">
                    {errors.phone}
                  </span>
                )}

              </div>



              {/* =========================
                  LOCATION
              ========================= */}

              <div className="form-group">

                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleChange}
                  className={
                    errors.location
                      ? "input-error"
                      : ""
                  }
                />

                {errors.location && (
                  <span className="error-text">
                    {errors.location}
                  </span>
                )}

              </div>



              {/* =========================
                  MESSAGE
              ========================= */}

              <div className="form-group">

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={
                    errors.message
                      ? "input-error"
                      : ""
                  }
                ></textarea>

                {errors.message && (
                  <span className="error-text">
                    {errors.message}
                  </span>
                )}

              </div>



              {/* =========================
                  CONSENT
              ========================= */}

              <div className="consent-group">

                <label className="consent-label">

                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />

                  <span>
                    I authorize Housingsociety.net to
                    contact me via Email, SMS, WhatsApp,
                    and Call. This will override
                    DND/NDNC preferences.
                  </span>

                </label>


                {errors.consent && (
                  <span className="error-text consent-error">
                    {errors.consent}
                  </span>
                )}

              </div>



              {/* =========================
                  SUBMIT
              ========================= */}

              <button
                type="submit"
                className="submit-button"
              >
                Submit
              </button>


            </form>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;