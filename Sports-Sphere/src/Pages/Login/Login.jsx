import React from 'react'
import { useNavigate } from 'react-router-dom' // Step 1
import './Login.css' // Assuming you have a CSS file for styles


import useForm from "./useForm"
import validate from "./validate"

const Login = () => {
    const navigate = useNavigate() // Step 2
  
    const handleNavigation = () => {
      navigate('/') // Step 3: Navigate to the home page


    }

    const handleSignup = (e)=>{
      e.preventDefault()
      navigate('/signup')
    }

    const {value,handleChange,handleSubmit,Errors} = useForm(validate)
  return (
    <div className='main-content'>
      <div className='div-form'>
        <form className='form' onSubmit={handleSubmit}>
          <p>Welcome to Teamx</p>
          <h6 className='please'>
            Please enter your email and password to login to Continue
          </h6>

          {Errors.email && <p className='error'>{Errors.email}</p>}

          <input
            type='email'
            placeholder='Email'
            name='email'
            value={value.email}
            onChange={handleChange}
          />
          {Errors.password && <p className='error'>{Errors.password}</p>}

          <input
            type='password'
            placeholder='Password'
            name='password'
            value={value.password}
            onChange={handleChange}
          />

          <button
            className='oauthButton1'
            // onClick={handleNavigation}
          >
            Let's go
            <svg
              className='icon'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m6 17 5-5-5-5'></path>
              <path d='m13 17 5-5-5-5'></path>
            </svg>
          </button>

          {/* separator */}

          <div className='separator'>
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <h6>
            Forget Password Or
            <a href="" className='link'

            onClick={handleSignup}>
            
            >
              {' '}
              Create a new Account
            </a>
          </h6>
        </form>
      </div>
    </div>
  )
}

export default Login
