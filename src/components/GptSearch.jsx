import { BG_IMG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion.jsX"
import GptSearchbar from "./GptSearchbar"

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
    <img
      src={BG_IMG}
      alt="background"
      className="h-screen object-cover md:w-screen"
    />
  </div>
    <div className="pt-[30%] md:pt-8">
       
        <GptSearchbar />
        <GptMovieSuggestion />
    </div>
    </>
  )
}

export default GptSearch