
const VideoTitle = ({title,overview}) => {

  return (
    <div className="w-screen h-full pt-[10%]  px-8 md:px-24 absolute bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-4xl text-white font-semibold md:font-bold ">{title}</h1>
        <p className="hidden md:inline-block py-6 text-white text-sm w-1/4 ">{overview}</p>
        <div className="">
            <button className=" mt-6 p-1.5 md:p-2 bg-white  text-black px-6 md:px-8 text-sm bg-opacity-90 rounded-lg hover:bg-opacity-60">▷ Play </button>
            <button className="p-2 md:p-2 bg-gray-500 text-white px-6 md:px-6 text-sm bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-40"> <span className="text-sm">ⓘ</span>  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle