import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies= useSelector(state => state.movies.nowPlayingMovies)
  const popularMovies=useSelector(state => state.movies.popularMovies)

  return (
    <div className="  bg-black">
      <div className=" -mt-44 md:-mt-44  relative z-20 pl-2 md:pl-12">
      <MovieList title={"Now Playing"} movies={movies}/>
        <MovieList title={"Trending"} movies={movies}/>
        <MovieList title={"Popular"} movies={popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies}/>
        <MovieList title={"Horror"} movies={movies}/>
      </div>
       
    </div>
  )
}

export default SecondaryContainer