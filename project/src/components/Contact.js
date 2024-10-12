import React, { useState } from 'react';
import contactImage from '../assets/contact.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${name}. We will get back to you shortly.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <img src={contactImage} alt="Contact Us" className="contact-image" />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;