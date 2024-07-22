import React, { useState } from 'react';

function Contact() {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setShowResult(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "4ac7a41f-4960-4ab7-998a-73705e357203");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => {
      setShowResult(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {showSuccessMessage && (
        <div className="success-message">
          Message sent successfully
        </div>
      )}
      <div className="contact-container">
        <h1 className="contact-header">Contact Me</h1>
        <p className="contact-subheader">I'm looking forward to working with you!</p>
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Send me a Message"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" className="contact-button">Send</button>
        </form>
        {showResult && <p className="result-message">{result}</p>}
      </div>
      <div className="myLinks">
        <a className="link" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a>
        <a className="link" href="https://github.com/EmilyCassel">GitHub</a>
      </div>
    </div>
  );
}

export default Contact;
