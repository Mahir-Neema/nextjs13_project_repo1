import React from 'react';
import '../styles/aboutuspage.css';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className="about-us">
      <h1 className="about-us__title">About Us</h1>
      <div className="about-us__content">
        <p className="about-us__description">
          We are a team of entertainment enthusiasts who are passionate about 
          bringing the best of movies, TV shows, and documentaries to your screen. 
          Our platform is designed to provide an immersive viewing experience that 
          you can enjoy anytime, anywhere.
        </p>
        <p className="about-us__description">
          We understand that everyone has different tastes and preferences, 
          which is why we have curated a vast library of content that caters to 
          a diverse audience. From classic films to the latest blockbusters, 
          from award-winning series to gripping documentaries, we have something 
          for everyone.
        </p>
        <p className="about-us__description">
          Our mission is to make entertainment accessible to everyone, regardless 
          of their location, device, or budget. That's why we offer affordable 
          subscription plans with no hidden fees or long-term commitments. 
          We believe that everyone deserves to be entertained without breaking 
          the bank.
        </p>
        <p className="about-us__description">
          At our core, we are a customer-centric platform that values your 
          feedback and suggestions. We are constantly working to improve our 
          service and enhance your viewing experience. If you have any questions 
          or feedback, our friendly support team is always here to help.
        </p>
        <p className="about-us__description">
          So, sit back, relax, and enjoy the show. We're here to entertain you 
          like never before.
        </p>
      </div>
      <Link href="/query">
        <button>
          Contact Us
        </button>
      </Link>
    </div>
    </>
  )
}

export default page