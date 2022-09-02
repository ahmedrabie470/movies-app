import React, { useEffect  , useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type';

export default function MovieDetails() {

    let params = useParams();
    const [movieDetails, setMovieDetails] = useState(null)
    async function getMovieDetails(id  )
    {
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
    setMovieDetails(data)
    }

    useEffect(()=>{
       getMovieDetails(params.id );
    },[])

    

  return (
        <>
        {movieDetails?
    <div className='row align-items-center'>
       
       
        <div className="col-md-4"><img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt=""/></div>
    <div className="col-md-8">
    <h1 className='m-2'>{movieDetails.title}</h1>

    <div >
        <div className='m-1 p-2 rounded '>release date : {movieDetails.release_date}</div>
        <div className='m-1 p-2 rounded '>vote average : {movieDetails.vote_average}</div>
        <div className='m-1 p-2 rounded '>vote count   : {movieDetails.vote_count}</div>
        <div className='m-1 p-2 rounded '>popularity   : {movieDetails.popularity}</div>
        <h4 className='m-2 '> overview :</h4>
        <p className='m-2 text-muted'>{movieDetails.overview}</p>
        
        </div>
        
        

    
    </div>
    
    </div>:<div className='vh-100 d-flex align-items-center justify-content-center'>
    <i className='fas fa-spinner  fa-spin text-warning'></i>
    </div>
   
    
    }
        
        
        </>
        
                
        )}


