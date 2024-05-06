import React from 'react';
import './shopNow.css';
import axios from 'axios';
import { projects } from '../../itemData';

function ShopNow() {

  const handelOrder = async (itemId) => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    if (!user) {
      console.log("login to order items");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/add-to-ordered-items', {
        userId: user._id,
        itemId
      });
      console.log('Order items response: ', response);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Order items error:', error);
    }
  };

  return (
    <div className='felx-container'>
      {projects.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt="Project Image" />
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-price">{item.price}</p>
            <button className="buy-button" onClick={() => handelOrder(item.itemId)}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopNow;
