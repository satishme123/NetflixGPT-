// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhO4tZ0p3ZfKuQVCZ6RurYcjWW3nIzV0",
  authDomain: "netclips-afee6.firebaseapp.com",
  projectId: "netclips-afee6",
  storageBucket: "netclips-afee6.appspot.com",
  messagingSenderId: "794052653419",
  appId: "1:794052653419:web:7e70fb3fdb514dcfb09c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
