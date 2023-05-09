'use client'
import React, { useState } from 'react';
import '../styles/contactCard.css';

const ContactCard = () => {
  const [user, setUser] = useState({
    username:"mahir",
    email:"",
    phone:"",
    message:""
  });

  function handlechange(e){
      const name = e.target.name;
      const value = e.target.value;

      setUser((prevuser)=>({...prevuser,[name]:value}));
  }

  function handleSubmit(){

  }

  return (
    <div className="center">
      <form className="contact-card" onSubmit={handleSubmit}>
        <h2 className="contact-name">Contact Us</h2>
        <div className="contact-info">
          <label for="fname" className="contact-label">Name</label>
          <input className="contact-input" placeholder='Name' id="fname" type='text' name="username" value={user.username} onChange={handlechange}/>

          <label for="email" className="contact-label">Email</label>
          <input className="contact-input" placeholder='Email' id="email" type='email' name="email" value={user.email} onChange={handlechange}/>

          <label for="phone" className="contact-label">Phone</label>
          <input className="contact-input" placeholder='Phone' id="phone" type='phone' name="phone" value={user.phone} onChange={handlechange}/>

          <label for="message" className="contact-label">Message</label>
          <textarea className="contact-textarea" placeholder='Message' id="message" type='text' name="message" value={user.message} onChange={handlechange}/>
        </div>
        <button className='submit_btn' onClick={handleSubmit} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactCard;
