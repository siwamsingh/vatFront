import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname.replace('/', '') || 'home');
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  const checkLoggedInUser = () => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    console.log('User logged out');
    window.location.reload();
  };

  useEffect(()=>{
     checkLoggedInUser()
  },[])

  return (
    <div className='navbar'>
      <ul className='navbar-menu'>
        <li className={menu === "home" ? "active" : ""} onClick={() => handleMenuClick("home")}>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
        </li>
        <li className={menu === "about" ? "active" : ""} onClick={() => handleMenuClick("about")}>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </li>
        <li className={menu === "service" ? "active" : ""} onClick={() => handleMenuClick("service")}>
          <NavLink to='/service' activeClassName='active'>Service</NavLink>
        </li>
        <li className={menu === "contact" ? "active" : ""} onClick={() => handleMenuClick("contact")}>
          <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </li>
      </ul>
      <div className='navbar-right'>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search" alt="Search"><img src='./images/search.png' style={{ width: '40px', height: '40px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }} /></button>
        </div>
      </div>
      <div className='cartCont'>
        <NavLink to='/cart'><img src='https://cdn-icons-png.freepik.com/256/891/891420.png?uid=R103219785&ga=GA1.1.702301594.1688586332&semt=ais_hybrid' alt='hehe' className='cart' /></NavLink>
        {!isLoggedIn ? <button onClick={() => setShowLogin(true)} className='sign'>Sign in</button> : <button onClick={logout} className='sign'>Logout</button>}
        <div className='nav-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
