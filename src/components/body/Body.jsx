import React from 'react'
import './Body.css';
import { Link } from 'react-router-dom';


function Body() {
  return (
    <div className='front'>
     <h1 className='space'> <span><br></br></span><br></br></h1>
    <h2>FILLING THE HOME WITH </h2>
    <h1>the beautiful creation</h1>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.  </p>
<Link  to="/shop-now">
  <button>SHOP NOW</button></Link>
  <img src='/images/living.png' alt='chhhur bhn'></img>

    </div>

  )
}

export default Body