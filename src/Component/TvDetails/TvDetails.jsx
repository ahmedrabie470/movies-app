import React, { useEffect  , useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function TvDetails() {

    let params = useParams();
    const [tvDetails, setTvDetails] = useState(null)
    async function getTvDetails(id  )
    {
    let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
    setTvDetails(data)
    }

    useEffect(()=>{
       getTvDetails(params.id );
    },[])

    

  return (
        <>
        {tvDetails?
    <div className='row align-items-center'>
        <div className="col-md-4"><img className='w-100' src={'https://image.tmdb.org/t/p/w500'+tvDetails.poster_path} alt=""/></div>
    <div className="col-md-8">
    <h1 className='m-2'>{tvDetails.name}</h1>

    <div >
        <div className='m-1 p-2 rounded '>release date : {tvDetails.first_air_date}</div>
        <div className='m-1 p-2 rounded '>vote average : {tvDetails.vote_average}</div>
        <div className='m-1 p-2 rounded '>vote count   : {tvDetails.vote_count}</div>
        <div className='m-1 p-2 rounded '>popularity   : {tvDetails.popularity}</div>
        </div>
        <h4 className='m-2'> overview :</h4>
        <p className=' m-2 text-muted'>{tvDetails.overview?tvDetails.overview:'no overview'}</p>
        
        

    
    </div>
    
    </div>:<div className='vh-100 d-flex align-items-center justify-content-center'>
        <i className='fas fa-spinner  fa-spin text-warning'></i>
    </div>
   
    
    }
        
        
        </>
        
                
        )}


