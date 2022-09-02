import React, { useEffect  , useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Tv() {
    const [PopularMovie, setPopularMovie] = useState([])
    let nums = new Array(12).fill(1).map((elem , index)=> index+1);

    async function getPopularMovie(pageNumber)
    {
    let {data} = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=a5afe6ebf1a6ea062c988dc03649e1da&language=en-US&page=${pageNumber}`)
    setPopularMovie(data.results)
   }
  useEffect(()=>{
   getPopularMovie(1);
  
  },[])
  return (
 <>
   {PopularMovie?<div className="row justify-content-center">  
   <div className="col-md-3 d-flex align-items-center ">
        <div>
        <div className="border w-25 mb-4"></div>
        <h3 >Popular <br/> <span className='text-warning'>Movie</span> <br/> To Watch Now</h3>
        <p className='text-muted'>Top Popular Movie</p>
        <div className="border mt-4"></div>

        </div>
      
      </div>
      {PopularMovie.map((movie , i)=><div key={i} className='col-md-3'>
        <div className="movie   p-3">
        <Link to={`/moviedetails/${movie.id}`}>
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
          <h2 className='h6 py-3 bg-black w-100 text-center'>{movie.title} </h2>
          </Link>
        </div>
      </div>)}
    </div>:<div className='vh-100  d-flex align-items-center justify-center-center'>
    <i className='fas fa-spinner  fa-spin text-warning'></i>
    </div>}


  <nav aria-label="...">
  <ul className="pagination d-flex justify-content-center">
    {nums?.map((pageNum)=> <li onClick={()=>getPopularMovie(pageNum)} key={pageNum } className="page-item pagination d-flex justify-content-center">
    <span className="page-link active text-info bg-transparent">{pageNum}</span>
  </li> )}
  
  </ul>
</nav>

 </>
    )
}
