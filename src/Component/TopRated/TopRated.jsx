import React, { useEffect  , useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Movies() {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    let nums = new Array(15).fill(1).map((elem , index)=> index+1);

    async function getTopRatedMovies(pageNumber)
    {
    let {data} = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=a5afe6ebf1a6ea062c988dc03649e1da&language=en-US&page=${pageNumber}
    `)
    setTopRatedMovies(data.results)
   }
  useEffect(()=>{
    getTopRatedMovies(1);
  
  },[])
  return (
 <>
   {topRatedMovies.length>0?<div className="row justify-content-center">  
   <div className="col-md-3 d-flex align-items-center ">
        <div>
        <div className="border w-25 mb-4"></div>
        <h3 >Top Rated <br/> <span className='text-warning'>Movies</span> <br/> To Watch Now</h3>
        <p className='text-muted'>Top Rated Movies</p>
        <div className="border mt-4"></div>

        </div>
      
      </div>
      {topRatedMovies.map((movie , i)=><div key={i} className='col-md-3'>
        <div className="movie   p-3">
        <Link to={`/moviedetails/${movie.id}`}>
          <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
          <h2 className='h6 py-3 bg-black w-100 text-muted text-center'>{movie.title} </h2>
          </Link>
        </div>
      </div>)}
     
    </div>:<div className='vh-100  d-flex d-flex justify-content-center align-items-center'>
    <div  >
    <i className='fas fa-spinner fa-spin text-warning fs-1 '></i>
    </div>
    </div>}


  <nav aria-label="...">
  <ul className="pagination d-flex justify-content-center">
    {nums?.map((pageNum)=> <li onClick={()=>getTopRatedMovies(pageNum)} key={pageNum } className="page-item pagination d-flex justify-content-center">
    <span className="page-link active text-info bg-transparent">{pageNum}</span>
  </li> )}
  
  </ul>
</nav> 

 </>
    )
}
