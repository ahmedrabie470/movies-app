import './App.css';
import TopRated from './Component/TopRated/TopRated'
import Login from './Component/Login/Login'
import Logout from './Component/Logout/Logout'
import Navbar from './Component/Navbar/Navbar'
import MovieDetails from './Component/MovieDetails/MovieDetails'
import {Routes , Route, Navigate , useNavigate} from 'react-router-dom'
import Register from './Component/Register/Register';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import Home from './Component/Home/Home';
import Movies from './Component/Movies/Movies';
import Series from './Component/Series/Series';
import Popular from './Component/Popular/Popular';
import TvDetails from './Component/TvDetails/TvDetails';
import { MovieContextProvider } from './Context/Store';


export default App;

function App() {
  let navigate = useNavigate;

  const [userData , setUserData] = useState (null );

  function saveUserData()
{
  let encodedToken = localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken);
  setUserData(decodedToken);
}

function ProtectRoute(props)
{
  if(localStorage.getItem('userToken') === null)
  {
     return <Navigate to='/login'/>
  }
  else{
       return props.children 
  }
}
function logout()
{
  setUserData(null);
  localStorage.removeItem('userToken');
  navigate('/login');
}
// component did mount for prevent refresh 
useEffect (()=> {

  if (localStorage.getItem('userToken'))
  {
    saveUserData()
  }

},
[])

  return (
    <>
    <MovieContextProvider>
    <Navbar userData={userData} logout={logout}/>
    <div className="container">

<Routes>
  <Route path='' element={<ProtectRoute><Home/></ProtectRoute>}/>
  <Route path='home' element={<ProtectRoute><Home/></ProtectRoute>}/>
  <Route path='movies' element={<ProtectRoute>< Movies/></ProtectRoute>}/>
  <Route path='series' element={<ProtectRoute><Series/></ProtectRoute>}/>
  <Route path='topRated' element={<ProtectRoute><TopRated/></ProtectRoute>}/>
  <Route path='Popular' element={<ProtectRoute><Popular/></ProtectRoute>}/>

  <Route path='moviedetails' element={<ProtectRoute><MovieDetails/></ProtectRoute>}>
     <Route path=':id' element={<ProtectRoute><MovieDetails/></ProtectRoute>}/>
  </Route>
  <Route path='tvdetails' element={<ProtectRoute><TvDetails/></ProtectRoute>}>
     <Route path=':id' element={<ProtectRoute><MovieDetails/></ProtectRoute>}/>
  </Route>
  <Route path='register' element={<Register/>}/>
  <Route path='login' element={<Login saveUserData ={saveUserData}/>}/>
  <Route path='logout' element={<Logout/>}/>
  <Route path='*' element={<h4 className='d-flex align-items-center justify-content-center '>PAGE NOT FOUND</h4>}/>
  
</Routes>

</div>
</MovieContextProvider>
    </>
  );
  
}

