import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (moviesId) => {
    const dispatch=useDispatch()
    const trailerVideos=useSelector(state=>state.movies.trailerVideo)


    const getMoviesVideos = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailers = filterData.length === 0 ? json.results[0] : filterData[0];
        console.log(trailers, "json");
        dispatch(addTrailerVideo(trailers))
      };
      useEffect(() => {
       !trailerVideos && getMoviesVideos();
      }, []);
 
}

export default useMovieTrailer;
