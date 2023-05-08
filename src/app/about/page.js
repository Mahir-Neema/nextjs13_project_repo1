import React from 'react';
import '../styles/aboutuspage.css';

const page = () => {
  return (
    <>
      <div className="about-us">
        <h1 className="about-us__title">About Us</h1>
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
          Get in touch with us today and for any queries.
        </p>
      </div>
    </>
  )
}

export default page