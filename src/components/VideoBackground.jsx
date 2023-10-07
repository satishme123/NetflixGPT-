import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ moviesId }) => {
  const trailer = useSelector((state) => state.movies.trailerVideo);
  //fetch trailer api call
  useMovieTrailer(moviesId);
  return (
    <div className="w-screen">
      <iframe
        className="h-screen w-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        // src="https://www.youtube.com/embed/sgaghIpUC4c?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
