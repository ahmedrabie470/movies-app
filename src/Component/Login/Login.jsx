// import axios  from 'axios';
// import joi from 'joi';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// export default function Login(props) {
//   const [error , setError] = useState('');
//   const [user , setUser]  = useState(
//   {
   
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

//   async function submitLoginForm(e)
//   {
//     e.preventDefault();
   
//   let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin',user)
// if(data.message === 'success')
// {
//   localStorage.setItem('userToken', data.token);
//   props.saveUserData();
//   navigate ('/home')
// }
// else{
//   setError(data.message)
// }
// }



//   return (
//     <>
//     <div className='w-75 mx-auto'>
//     <h2>Login Now</h2>
//       <form onSubmit={submitLoginForm}>
//         {error.length > 0? <div className="alert alert-danger">{error}</div>:''}
       
//         <label htmlFor="email"className='my-2'>email</label>
//         <input onChange={getUserData} className='form-control' type="email" id='email' name='email' />

//         <label htmlFor="password"className='my-2'>password</label>
//         <input onChange={getUserData} className='form-control' type="password" id='password' name='password' />

//         <button className='btn btn-info my-3' >Log in</button>
//       </form>
//     </div>
    
//     </>
//   )
//   }

