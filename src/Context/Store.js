import React , { useEffect  , useState } from 'react';
import axios from 'axios';
import { createContext} from 'react'
export  let movieContext = createContext(0)

export function MovieContextProvider(props) {

    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
  
      
     async function getTrending(mediaType , callback)
     {
     let {data} = await  axios(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
     callback(data.results.slice(0,20))
  
    }
   useEffect(()=>{
    getTrending("movie" ,setTrendingMovies );
    getTrending("tv" ,setTrendingTv);
   },[])

    return <movieContext.Provider value={{trendingMovies,trendingTv}}>
{props.children}

    </movieContext.Provider>
    
}