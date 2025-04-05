import React, { useState } from 'react'

const useForm = (validate) => {

 const [value, SetValue] = useState({
   email: '',
   password: '',
   // ConfirmPassword: '',
 })

 const [Errors,setErrors] = useState({})


 const handleChange=(e)=>{

  const {name,value} = e.target;

  SetValue((preValue)=>{
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



  return {value,handleChange,handleSubmit,Errors}
}

export default useForm