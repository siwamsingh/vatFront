import React, { useEffect, useState } from 'react';
import './cart.css' 
import axios from 'axios';
import { projects } from '../../itemData';

const Cart = () => {
  const [user,setUser] = useState({});
  const [ids,setIds] = useState([]);

  useEffect(()=>{
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    if(!user){
      console.log("login to procedd");
    }else{
      setUser(user);
      setIds(user.orderedItems);
    }
  },[])

  const filteredItems = projects.filter(item => ids.includes(item.itemId));

  const handelCancel = async (itemId) => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    if(!user){
      console.log("login to procedd");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/remove-from-ordered-items', {
        userId:user?._id,
        itemId
      });
      console.log('Remove from ordered items response:', response);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      location.reload();
    } catch (error) {
      console.error('Remove from ordered items error:', error);
    }
  };

  
  return (
    <div className=' container'>
      {filteredItems.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt="Project Image" />
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-price">{item.price}</p>
            <button className="buy-button" onClick={()=>handelCancel(item.itemId)}>Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
