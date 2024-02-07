import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart = [] }) { // Default cart to an empty array if it's not provided
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  console.log('cart:', itemCount)
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart"><span>Cart</span><span>({itemCount})</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;