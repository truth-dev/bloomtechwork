import React from 'react';
import '../header.css';
import logo from '../images/snowPLogo.png'

function Header({ cart = [] }) { 



  // Default cart to an empty array if it's not provided
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  console.log('cart:', itemCount)
  


  return (
    <header className="header">
    <div className="top-row">
        <img src={logo} alt="Company Logo"/>
        <h1>Snowy Peaks Off-Road & Fabrication</h1>
    </div>
    <nav className="nav">
       
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">Cart ({itemCount})</a></li>
            
        </ul>
    </nav>

</header>
  );
}

export default Header;