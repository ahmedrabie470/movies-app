// import  axios from 'axios';
// import joi from 'joi';
// import React, {  useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// export default function Register() {
//   const [isLoading, setIsLoading] = useState(false)
//   const [errorList , setErrorList] = useState([]);
//   const [error , setError] = useState([]);
//   const [user , setUser]  = useState({

//     name:'',
//     phone:'',
//     email:'',
//     password:''
//   })  


// let navigate = useNavigate();




//   function getUserData(e)
//   {
//       let myUser ={...user}; //deep copy 
//       myUser[e.target.name] = e.target.value;
//       setUser(myUser);  
//   }



//   function validationRegisterForm()
//   {
//     let schema = joi.object({
//       name:joi.string().min(3).max(10).required(),
//       phone:joi.number().min(16).max(80).required(),
//       password:joi.string().required(),
//       email:joi.string().email({minDomainSegments:2 , tlds:{allow:['com','net']}})


//     })
//     return schema.validate(user , {abortEarly:false})
//   }



//   async function submitRegisterForm(e)
//   {
//     e.preventDefault();
//     setIsLoading(true)
//     let validationResult = validationRegisterForm();
//     if (validationResult.error)
//     {
//       setErrorList(validationResult.error.details)
//       setIsLoading(false)
//     }   
//     else
//     {
//   const obj  =  await axios.post('localhost:5000/api/v1/user/signup')
     
//     if(obj.message === 'success')
//       {
//         setIsLoading(false);
//         navigate ('/login')
//       }
//       else
//       {
//         setIsLoading(false);
//         setError(obj.message)
//       }
//   }  
// }

 


//   return (
//     <>
//     <div className='w-75 mx-auto'>
//     <h2>Register Now</h2>
//       <form onSubmit={submitRegisterForm}>
//         {errorList.map((error  )=><div className="alert py-2 alert-danger">{error.message}</div>)}
//         {error.length > 0? <div className="alert alert-danger">{error}</div>:''}
//         <label htmlFor="name" className='my-2'> name</label>
//         <input onChange={getUserData} className='form-control' type="text" id='name' name='name' />         

//         <label htmlFor="email"className='my-2'>email</label>
//         <input onChange={getUserData} className='form-control' type="email" id='email' name='email' />

//         <label htmlFor="password"className='my-2'>password</label>
//         <input onChange={getUserData} className='form-control' type="password" id='password' name='password' />
         
//         <label htmlFor="phone"className='my-2'>phone</label>
//         <input onChange={getUserData} className='form-control' type="number" id='phone' name='phone' />
//         <button type='submit' className='btn btn-info my-3' >
//           {isLoading === true ?<div className='fas fa-spinner fa-spin'></div>:'Register'}
//           </button>
//       </form>
//     </div>
    
//     </>
//   )
//   }

