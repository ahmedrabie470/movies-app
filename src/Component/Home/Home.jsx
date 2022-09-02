import { useContext } from 'react'
import { Link} from 'react-router-dom'
import { movieContext } from '../../Context/Store'

export default function Home() {
let {trendingMovies , trendingTv} =  useContext(movieContext)



  return (
    <>
{trendingMovies?<div className="row g-5 justify-content-center">
      <div className="col-md-3 d-flex align-items-center ">
        <div>
        <div className="border w-25 mb-4"></div>
        <h3 >Trending <br/><span className='text-warning'>Movies</span>  <br/> To Watch Now</h3>
        <p className='text-muted'>Top Trending Movies</p>
        <div className="border mt-4"></div>
        </div>
      </div>
       
     


      {trendingMovies.map((movie , i)=><div key={i} className='col-md-3'>
        <div className="movie  p-3 ">
        <Link to={`/moviedetails/${movie.id}`}>
        <div className="movie position-relative ">
          <img className='w-100 ' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
          <div className='d-flex   align-items-center  '>
          <h2 className='h6 py-3 bg-black w-100 text-center'>{movie.title} </h2>
          <div className='position-absolute bg-warning  end-0  top-0 text-center rounded-1 p-1'>{movie.media_type}</div>
          </div>
        </div>   
          </Link>
        </div>
      </div>)}

    
    </div>:<div className='vh-100  d-flex align-items-center justify-center-center'>
    <i className='fas fa-spinner fa-spin'></i>    
    </div>}
     
{trendingTv?  <div className="row g-5 justify-content-center">
      <div className="col-md-3 d-flex align-items-center ">
        <div>
        <div className="border w-25 mb-4 "></div>
        <h3 >Trending <br/> <span className='text-warning'>Tv</span> <br/> To Watch Now</h3>
        <p className='text-muted'>Top Trending Tv</p>
        <div className="border mt-4"></div>

        </div>
      
      </div>

      {trendingTv.map((tv , i)=><div key={i} className='col-md-3'>
      <Link to={`/tvdetails/${tv.id}`}>
        <div className="tv position-relative mt-5 p-0">
          <img className='w-100 ' src={'https://image.tmdb.org/t/p/w500'+tv.poster_path} alt="" />
          <div className='d-flex   align-items-center  '>
          <h2 className='h6 py-3  w-100 text-center bg-black '>{tv.name} </h2>
          <div className='bg-warning position-absolute end-0 top-0 w-259 text-center rounded-1 px-2 '>{tv.media_type}</div>
          </div>
        </div>
        </Link>
      </div>)}
    </div> :<div className='vh-100  d-flex align-items-center justify-center-center'>
    <i className='fas fa-spinner fa-spin'></i>    
    </div>}
  
    

  
    </>
  )
}
