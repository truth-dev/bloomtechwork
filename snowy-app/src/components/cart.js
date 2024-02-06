import React from 'react';
import {useNavigate} from 'react-router-dom';
import CartItem from './cartitem';
import '../cart.css';


 function Cart({cart, setCart}) {

    const updateQuantity = (itemId, newQuantity) => {
        console.log('update item:',itemId ,'to quantity:', newQuantity);
        setCart(current =>
            current.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };
    
const removeItem = (itemId) => {
    setCart(current => current.filter(item => item.id !== itemId));
  };
    
  let navigate = useNavigate()
  const enterCheckout = () => {
    navigate('/checkout')
  }
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className='cart'>
          
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                
                
                />
                ))}
            </ul>
          <div className='total'>Total: ${total}</div>
            <button onClick={enterCheckout}>Checkout</button>
        </div>
    )

    
}

export default Cart;