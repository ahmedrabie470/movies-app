import axios from 'axios';
import joi from 'joi';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorList , setErrorList] = useState([]);
  const [error , setError] = useState([]);
  const [user , setUser]  = useState({

    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''
  })  


let navigate = useNavigate();




  function getUserData(e)
  {
      let myUser ={...user}; //deep copy 
      myUser[e.target.name] = e.target.value;
      setUser(myUser);  
  }



  function validationRegisterForm()
  {
    let schema = joi.object({
      first_name:joi.string().min(3).max(10).required(),
      last_name:joi.string().min(3).max(10).required(),
      age:joi.number().min(16).max(80).required(),
      password:joi.string().pattern(new RegExp ('^[A-Z][a-z]{3,8}$')),
     email:joi.string().email({minDomainSegments:2 , tlds:{allow:['com','net']}})


    })
    return schema.validate(user , {abortEarly:false})
  }



  async function submitRegisterForm(e)
  {
    e.preventDefault();
    let validationResult = validationRegisterForm();
    if (validationResult.error)
    {
      setErrorList(validationResult.error.details)
    }   
    else
    {
  let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup',user)
      if(data.message === 'success')
      {
        setIsLoading(false);
        navigate ('/login')
      }
      else
      {
        setIsLoading(false);
        setError(data.message)
      }
  }  
}

 


  return (
    <>
    <div className='w-75 mx-auto'>
    <h2>Register Now</h2>
      <form onSubmit={submitRegisterForm}>
        {errorList.map((error)=><div className="alert py-2 alert-danger">{error.message}</div>)}
        {error.length > 0? <div className="alert alert-danger">{error}</div>:''}
        <label htmlFor="first_name" className='my-2'> first_name</label>
        <input onChange={getUserData} className='form-control' type="text" id='first_name' name='first_name' />

         <label htmlFor="last_name" className='my-2'>last_name</label>
        <input onChange={getUserData}  className='form-control' type="text" id='last_name' name='last_name' />

        <label htmlFor="email"className='my-2'>email</label>
        <input onChange={getUserData} className='form-control' type="email" id='email' name='email' />

        <label htmlFor="password"className='my-2'>password</label>
        <input onChange={getUserData} className='form-control' type="password" id='password' name='password' />
         
        <label htmlFor="age"className='my-2'>age</label>
        <input onChange={getUserData} className='form-control' type="number" id='age' name='age' />
        <button className='btn btn-info my-3' >{isLoading ?<div className='fas fa-spinner fa-spin'></div>:'Register'}</button>
      </form>
    </div>
    
    </>
  )
  }

