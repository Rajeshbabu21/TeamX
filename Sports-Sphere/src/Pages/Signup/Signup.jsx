import React from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
import useForm from '../Signup/useForm'
import validate from './Validate'

const Signup = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/')
  }

  const handleLogin=(e) =>{
    navigate("/login")
  }

  const { handleChange, value, handleSubmit, Errors } = useForm(validate)

  return (
    <div className='main-content'>
      <div className='div-form1'>
        <form className='form' onSubmit={handleSubmit}>
          <p>Welcome to Teamx</p>
          <h6 className='please'>Please Signup to continue</h6>
          {Errors.username && <p className='error'>{Errors.username}</p>}

          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleChange}
            value={value.username}
          />

          {Errors.email && <p className='error'>{Errors.email}</p>}
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={value.email}
          />

          {Errors.password && <p className='error'>{Errors.password}</p>}
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={value.password}
          />

          {Errors.ConfirmPassword && (
            <p className='error'>{Errors.ConfirmPassword}</p>
          )}
          <input
            type='password'
            placeholder='Confirm Password'
            name='ConfirmPassword'
            onChange={handleChange}
            value={value.ConfirmPassword}
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

          <div className='separator'>
            <div></div>
            <span>OR</span>
            <div></div>
          </div>

          <h6>
            Already have an account?
            <a href='' className='link' onClick={handleLogin}>
              {' '}
              Login
            </a>
          </h6>
        </form>
      </div>
    </div>
  )
}

export default Signup
