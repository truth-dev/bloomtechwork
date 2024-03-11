import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./cartitem";
import "../cart.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage when the component mounts
    console.log("Loading cart from localStorage");
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, [setCart]);
  
  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    console.log("Saving cart to localStorage:", cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (itemId, newQuantity) => {
    console.log("update item:", itemId, "to quantity:", newQuantity);
    setCart((current) =>
      current.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

   const removeItem = (itemId) => {
     setCart((current) => current.filter((item) => item.id !== itemId));
     console.log("remove item:", itemId)
   };

  const enterCheckout = () => {
    navigate("/checkout");
  };
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
             removeItem={removeItem}
          />
        ))}
      </div>
      

      <div className="total">Total: ${total}</div>
      <button onClick={enterCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;
