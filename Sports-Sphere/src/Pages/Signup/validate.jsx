import React from 'react'

const validate = (value) => {


     let errors = {}

     if (!value.username || !value.username.trim()) {
       errors.username = 'Username is required'
     }

     if (!value.email.trim()) {
       errors.email = 'Email is required'
     } else if (!/\S+@\S+\.\S+/.test(value.email)) {
       errors.email = 'Email is invalid'
     }

     if (!value.password.trim()) {
       errors.password = 'Password is required'
     } else if (value.password.length < 8) {
       errors.password = 'Password must be at least 8 characters long'
     }

     if (!value.ConfirmPassword.trim()) {
       errors.ConfirmPassword = 'Confirm Password is required'
     } else if (value.ConfirmPassword !== value.password) {
       errors.ConfirmPassword = 'Passwords do not match'
     }

     return errors
   




 
}

export default validate