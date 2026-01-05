
import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(true); // modal visibility

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              This Contact me form is not currently working. Kindly contact me via
              WhatsApp or Instagram. Thank you for understanding!
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
