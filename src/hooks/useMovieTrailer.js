import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';
const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();    
    const trailer=useSelector(store=>store.movies?.trailerVideo);
    const getMovieVideos=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json=await data.json();
        const filterTrailer=json.results.filter((video)=>video.type==="Trailer" && video.name==="Official Trailer");
        const trailer=filterTrailer.length>0?filterTrailer[0]:json.results[0];
        console.log("-----------"+filterTrailer)
        // const movieKey=trailer.key;
        dispatch(addTrailerVideo(trailer));
        console.log(filterTrailer+" and  now playing movies: "+json.results);
    }
    useEffect(()=>{
       !trailer &&  getMovieVideos()
    },[])
}

export default useMovieTrailer;