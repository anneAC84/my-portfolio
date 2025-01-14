import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const validateForm = () => {
    const { name, email, message } = formData;
    return name.trim() && email.includes('@') && message.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all fields correctly.');
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Use the env variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // Use the env variable
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY  // Use the env variable
      )
      .then((res) => alert('Message sent successfully!'))
      .catch((err) => alert('Failed to send message. Try again later.'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-5">
          Have questions or want to collaborate? Drop me a message below, and I’ll get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control mb-4"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-control mb-4"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className="form-control mb-4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;