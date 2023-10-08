import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDate } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserPic from "../../public/user.png"
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const navigate = useNavigate();
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  function toggleSignUpForm() {
    setSignUpForm(!signUpForm);
  }
  function handleButtonClick() {
    const message = checkValidateDate(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (signUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: UserPic
          })
            .then(() => {
              // navigate("/browse");
            })
            .catch((error) => {
            setErrorMessage (error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "_" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }
  }
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img
          src={BG_IMG}
          alt="background"
          className="h-screen object-cover md:w-screen"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full  md:w-3/12 absolute p-12 bg-black  my-40 md:my-20 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-2xl py-2">
          {signUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {signUpForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="email"
          className="p-3 my-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-3 my-4 w-full bg-gray-600 rounded-lg"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-3 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {" "}
          {signUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-white " onClick={toggleSignUpForm}>
          {signUpForm
            ? "Already have an account? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
