// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN0gvXoJ5QsChi0dK3Le1H1izSMhuzMZc",
  authDomain: "react-dragon-news-auth-68f98.firebaseapp.com",
  projectId: "react-dragon-news-auth-68f98",
  storageBucket: "react-dragon-news-auth-68f98.appspot.com",
  messagingSenderId: "132540928576",
  appId: "1:132540928576:web:0b2459cf3026754a0705a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;