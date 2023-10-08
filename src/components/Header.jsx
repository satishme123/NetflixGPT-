import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const path=useLocation()
  const user=useSelector((state)=>state.user)
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  const dispatch=useDispatch()
  
  const handleGptSearchClick=()=>{
// toggle gpt search 
dispatch(toggleGptSearchView())
  }

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe()
  },[])

  function handleLanguageChange(e){
dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-full flex justify-between  px-8 py-2 bg-gradient-to-b from-black z-10  flex-col md:flex-row ">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />
     
       
        {user &&
         <div className="flex p-2 justify-between">
          {showGptSearch &&
          <select className=" p-2 m-2 mt-4 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange}>
  {SUPPORTED_LANGUAGES.map((lang) => (
    <option key={lang.identifier} value={lang.identifier} >
      {lang.name}
    </option>
  ))}
</select> }
        
         <button className="p-0 px-2 mx-4 mt-4 bg-purple-800 text-sm h-10 text-white rounded-lg" onClick={(e)=>handleGptSearchClick(e)}>GPT Search</button>
         <img
         className=" hidden md:block h-10 mt-4 rounded-3xl mr-2 ml-4 mr-6"
src={user?.photoURL}          
alt="userIcon"
       />
        <button className="mt-4  text-white font-bold " onClick={handleSignout}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-6 w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
<span className="text-sm">(Sign Out)</span> 
      </button>
      </div>
      }
        
      
    </div>
  );
};

export default Header;
