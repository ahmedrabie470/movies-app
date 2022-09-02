import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
<nav  className="navbar navbar-expand-lg bg-transparent navbar-dark " id="Nav">
        <div  className="container-fluid">
          <Link  className="navbar-brand text-warning " to="Home">Z-Movie</Link>
          <i className="fa-solid fa-clapperboard text-warning"></i>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.userData?<>
            <li  className="nav-item">
                <Link  className="nav-link p-4 "  to="Home">Home</Link>
              </li>
              
               <li  className="nav-item">
                <Link  className="nav-link p-4" to="Movies">Movies</Link>
              </li> 
      
             <li  className="nav-item p-3">
              <Link  className="nav-link" to="Series">TV Series</Link>
            </li> 
       
           
            <li  className="nav-item p-3">
              <Link  className="nav-link" to="TopRated">Top Rated</Link>
            </li>
            <li  className="nav-item p-3">
              <Link  className="nav-link"to="popular">Popular</Link>
            </li>    
            </>:''}
              
            </ul>



            <ul  className="navbar-nav  mb-2 mb-lg-0">
            <li  className="nav-item d-flex align-items-center">
                <i  className='fab fa-facebook mx-2'></i>
                <i  className='fab fa-twitter mx-2'></i>           
                <i  className='fab fa-instagram mx-2'></i>           
                <i  className='fab fa-spotify mx-2'></i>           
            </li>
            <ul/>
            {props.userData?<li className="nav-item p-3">
              <span  className="nav-link cursor-pointer" onClick={props.logout}>Logout</span>
            </li> :<>
            <li  className="nav-item">
                <Link  className="nav-link p-4" to="Register">Register</Link>
              </li> 
      
             <li  className="nav-item p-3">
              <Link  className="nav-link" to="Login">Login</Link>
            </li>  
            </>}
            </ul>
          </div>
        </div>
      </nav>    )
      
}
