import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <a className="footerBtn" href="mailto:example@gmail.com">Email Us</a>
      </div>
    </footer>
  );
}

export default Footer;
