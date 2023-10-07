import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  const results = useSelector((state) => state.movies.nowPlayingMovies);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  console.log(results);
  return (
    <div className="w-full">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
