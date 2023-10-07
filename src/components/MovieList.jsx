import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies,"list")

    return (
    <div className="px-4">
     
        <h1 className="text-3xl py-4  text-white">{title}</h1>
        <div className="flex overflow-x-auto "   >
      <div className="flex ">
        {movies?.map((item,index)=>(
            <MovieCard key={index} posterPath={item?.poster_path}/>
        ))}
        
      </div>
      </div>
    </div>
  );
};

export default MovieList;
