import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
  const {movieResults,movieNames} = useSelector((state) => state.gpt);
if(!movieNames) return null
  return (
    <div className="p-4  bg-black text-white bg-opacity-70">
      <div>
       {movieNames.map((moviesName,index) => <MovieList key={moviesName} title={moviesName} movies={movieResults[index]}/> )} 
      </div>

    </div>
  )
}

export default GptMovieSuggestion