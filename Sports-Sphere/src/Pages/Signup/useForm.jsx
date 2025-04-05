import React, { useState } from 'react'
// import { use } from 'react'

const useForm = (validate) => {

 const [value,setValue] = useState({
  username:"",
  email:"",
  password:"",
  ConfirmPassword:""
 })

 const [Errors,setErrors] = useState({})


  const handleChange=(e)=>{

   const {name,value } = e.target;

   setValue((preValue)=>{
    return{
     ...preValue,
     [name]:value
    }
   })


  }


  const handleSubmit=(e)=>{
   e.preventDefault()
   setErrors(validate(value))
  }







  return {handleChange,value,handleSubmit,Errors}
}

export default useForm