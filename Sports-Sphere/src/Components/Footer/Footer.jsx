import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='/' className='footer-link'>
            Home
          </a>
          <a href='/about' className='footer-link'>
            About
          </a>
          <a href='/services' className='footer-link'>
            
          </a>
          <a href='/contact' className='footer-link'>
            
          </a>
        </div>
        <div className='footer-info'>
          <p>&copy; 2025 teamx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer