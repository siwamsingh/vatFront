import React, { useState } from 'react';
import './Loginpopup.css';
import axios from 'axios'

const Loginpopup = ({ showLogin, setShowLogin }) => {
  const [currState, setCurrState] = useState("sign up");

  const handleClosePopup = () => {
    setShowLogin(false);
  };

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handelSubmit = (e) => {
    e.preventDefault()
    axios.post('', { name, email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  const login = async () => {
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      console.log('Login response:', response.data);
      // Assuming response.data contains user information after successful login
      localStorage.setItem('user', JSON.stringify(response.data.user));
      location.reload();
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login error
      localStorage.removeItem('user');
    }
  };
  
  const register = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      console.log("Email, password, and username are required");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/register', { email, password, userName:name });
      console.log(response);
      await login();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  

  return (
    <div className={`login-popup ${showLogin ? 'show' : 'hide'}`}>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img className='x'
            src='https://cdn-icons-png.freepik.com/256/12837/12837885.png?uid=R103219785&ga=GA1.1.702301594.1688586332&semt=ais_hybrid'
            alt='cross'
            onClick={handleClosePopup}
          />
        </div>
        <div className='login-popup-input' onSubmit={handelSubmit}>
          {/* {currState === "sign up" && 
          <input 
          type="text" placeholder='Your name' required />} */}
          {currState === "sign up" && <input type='text' placeholder='your name'
            required
            onChange={(e) => setName(e.target.value)}
          />}
          <input type='email' placeholder='example@gmail.com' required onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
        </div>
        {currState === "sign up" ? <button onClick={register}>Create Account</button> : <button onClick={login}>Login</button>}

        {currState === "sign up" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Login")}>click header</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("sign up")}>Sign up here</span></p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
