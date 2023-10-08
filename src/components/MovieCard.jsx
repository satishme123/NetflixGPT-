import { IMG_CDN } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-40 pr-4">
        <img src={IMG_CDN+posterPath} alt="movie Card"  />
    </div>
  )
}

export default MovieCard