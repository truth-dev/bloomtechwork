import React, {useEffect, useState} from 'react';

const Notification = ({ item }) => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // Hide notification after 3 seconds
  
      return () => clearTimeout(timer);
    }, [item]); // Depend on item to reset the timer if a new item is added
  
    if (!visible || !item) return null; // Do not render if not visible or item is undefined
  
    return (
      <div className="notification">
        {/* Use optional chaining to safely access item properties */}
        {/* <img src={item?.image} alt={item?.name} style={{ width: 50, height: 50 }} /> */}
        <p>{item?.name} added to cart!</p>
      </div>
    );
  };

export default Notification;