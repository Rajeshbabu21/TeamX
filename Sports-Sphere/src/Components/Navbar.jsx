import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='divhome'>
          <Link className='homeimg' to='/'>
            <span className='ss'>teamx</span>
          </Link>
        </div>

        <div className='divleftlink'>
          <Link to='/Login' className='nav-link'>
            <button>Login</button>
          </Link>
          <Link to='/signup' className='nav-link'>
            <button>Signup</button>
          </Link>
          <Link to='/About' className='nav-link'>
            <button>What is teamx ?</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
