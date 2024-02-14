import React from 'react';
import '../style.css';
import backgroundImage from '../images/snowym.jpg';
import k10bumper from '../images/k10bumper.jpg';

function Home() {
    return (
      <div className="home">
        <h1>Welcome to Snowy Peaks Off-Road & Fabrication</h1>
        <p>Independently Owned and Operated </p>
        <a href="#contact" className="cta-button">Contact Us</a>
        <div className="home-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <section className="home-content">
          <div className='img-container'>
            <img src={k10bumper} alt='k10bumper'/>
          </div>
          <h2>Our Goal is to make your dream a reality</h2>
          <p>At Snowy Peaks Off-Road & Fabrication, 
            we offer a variety of services to meet your off-road vehicle needs and creation. 
            From custom fabrication to vehicle maintenance, we have you covered. 
            Our one man team is dedicated to providing the highest quality service to our customers. 
            We are committed to providing the best possible experience for our customers, 
            and we are always looking for ways to improve our services. 
            We are passionate about off-road vehicles, and we are dedicated to helping our customers 
            get the most out of their vehicles. 
            Whether you need a custom fabrication project or a simple tune-up, 
            we are here to help. Contact us today to learn more about our services and to schedule an appointment.</p>
        </section>
      </div>
    );
}

export default Home;
