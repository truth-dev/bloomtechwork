
import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Shop from './components/shop';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Notification from './components/notification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





export default function App() {

  const [cart, setCart] = useState([])
 
   const [lastAddedItem, setLastAddedItem] = useState(null)
 



  const addCart =(product) => {
    setCart(current => {
      console.log(current, product)
      const productInCart = current.find(item => item.id === product.id);
      if (productInCart) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setLastAddedItem(product)
  }
 
    return (
      <div>
        
      {lastAddedItem && <Notification item={lastAddedItem} />}
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/shop" element={<Shop addCart={addCart}/>} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                  <Route path='checkout' element={<Checkout/>} />

              </Routes>
          </div>
      </Router>
  </div>
     
     
        )
  }




