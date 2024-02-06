import React from 'react';
import '../style.css';
import backgroundImage from '../snowym.jpg';

function Home() {



    return (

      <section className="home">
        <h1>Welcome to Snowy Peaks Off-Road & Fabrication</h1>
        <p>Independently Owned and Operated </p>
        <a href="#contact" className="cta-button">Contact Us</a>
      <div className="home-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </section>
     
    );
  }
  
  export default Home;