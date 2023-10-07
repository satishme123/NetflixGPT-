import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies= useSelector(state => state.movies.nowPlayingMovies)
     if(movies === null) return
    const mainMovies= movies[0]
    const {original_title,overview,id
    }=mainMovies
    return (
    <div className="pt-[40%] bg-black md:pt-0">
      <VideoTitle title={original_title
} overview={overview}/>
      <VideoBackground moviesId={id}/>

    </div>
  );
}

export default MainContainer;
