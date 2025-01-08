import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap first
import './Contact.css'; // Then your custom styles

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_8adwiny';
    const templateID = 'template_gwfyfwc';
    const publicKey = 'xO4SjrFvXSpPUF8Dx';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message was sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message. Please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-primary">Contact Me</h2>
        <p className="text-center mb-5 text-muted">
          Have questions or want to collaborate? Drop me a message below, and I’ll get back to you as soon as possible.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control bg-light text-dark border-0 rounded-pill"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control bg-light text-dark border-0 rounded-pill"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              className="form-control bg-light text-dark border-0 rounded-3"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;