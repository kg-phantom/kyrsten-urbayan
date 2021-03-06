import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { init, sendForm } from "@emailjs/browser";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Please enter your ${e.target.name}.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      errorMessage.length > 0 ||
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0
    ) {
      setErrorMessage("Please fill out all sections!");
      return;
    }

    // initialize EmailJS
    init("user_5nPCOgMVPDrW07DFPNMF4");

    sendForm(
      "service_b0j23lk",
      "contact_form",
      document.getElementById("contact-form")
    ).then(
      () => {
        setErrorMessage("");
        setSubmitted(true);
      },
      (error) => {
        setErrorMessage("Something went wrong sending your email!");
        console.log("failed: ", error);
      }
    );
  }

  return (
    <div name="Contact">
      <h2 className="py-2">Contact</h2>
      <div className="flex-row space-between py-2">
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            defaultValue={email}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            onChange={handleChange}
            defaultValue={message}
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {submitted && (
            <div>
              <p className="error-text">Thank you for your message!</p>
            </div>
          )}
          <button className="submit-btn" data-testid="submit-button" type="submit">
            Submit
          </button>
        </form>
        <div className="contact-text">
          <h4>Send me a message!</h4>
          <p className="py-2">
            I am happy to answer any questions you might have. I'm also open to
            any web development or art opportiunities! You can contact me
            through this contact form, clicking on my links below, or emailing
            me directly at{" "}
            <a href="mailto:ksurbayan@gmail.com">ksurbayan@gmail.com</a>. I look
            forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
