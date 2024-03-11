import React from 'react';


const CartItem = ({ item, updateQuantity, removeItem }) => {

 
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} style={{ width: '50px' }} />
        <h4>{item.name}</h4>
        {/* Dropdown for item quantity */}
        <select
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        >
          {[...Array(10).keys()].map(x => (
            <option key={x + 1} value={x + 1}>{x + 1}</option>
          ))}
        </select>
        {/* Delete button */}
        <button onClick={() => removeItem(item.id)}>Delete</button>
      </div>
    );
  };

export default CartItem;