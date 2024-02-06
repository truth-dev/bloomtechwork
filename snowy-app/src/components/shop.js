import React from 'react';
import '../shop.css';

function Shop({addCart}) {
    const products = [
      { id: 1, name: 'Riser Plates', price: 50 },
      { id: 2, name: 'Custom Bumpers', price: 60 },
      { id: 3, name: 'Product 3', price: 70 },
    ];
    
    
    return (
      <section id="shop">
        <h2>Shop</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
                <button onClick={() => addCart(product)} >Add to Cart</button>
                
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Shop;