import React from 'react';
import '../styles/contactCard.css';

const ContactCard = () => {
  return (
    <div className="center">
      <form className="contact-card">
        <h2 className="contact-name">Contact Us</h2>
        <div className="contact-info">
          <label for="fname" className="contact-label">Name</label>
          <input className="contact-input" placeholder='Name' id="fname" type='text' />

          <label for="email" className="contact-label">Email</label>
          <input className="contact-input" placeholder='Email' id="email" type='email' />

          <label for="phone" className="contact-label">Phone</label>
          <input className="contact-input" placeholder='Phone' id="phone" type='phone' />

          <label for="message" className="contact-label">Message</label>
          <textarea className="contact-textarea" placeholder='Message' id="message" type='text' />
        </div>
        <button className='submit_btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactCard;
