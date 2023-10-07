import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchbar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const selectLang = useSelector((state) => state.config.lang);
 
  const handleGptSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
   
  };
  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   "only  give top 5 list in hindi and example movies results like this: Sholay,Don,Golmaal,koi mil gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });

    // console.log(gptResults.choices?[0].message?.content.split(','),'gpt results')// it give array of movie like ["don","razz"]like this
    // }

    // const gptArray=getMovies.map((movie)=>handleGptSearch(movie))
    // const tmdbResults=Promise.all()
    // const gptMovies = searchText.current.value;
    // const movieList = await handleGptSearch(gptMovies)
    // // console.log(movieList,"pll")
    // dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:movieList?.results}));
    
    const content = searchText.current.value;
    const gptMovies =content.split(',').map(item=>item.trim())
    const promiseArray = gptMovies.map(movie =>handleGptSearch(movie)) 
    const tmdbResults = await Promise.all(promiseArray)
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onChange={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectLang].searchPlaceholder}
        />
        <button
          className="py2 px-2 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[selectLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
