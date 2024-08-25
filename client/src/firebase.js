// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-21e81.firebaseapp.com",
  projectId: "mern-blog-21e81",
  storageBucket: "mern-blog-21e81.appspot.com",
  messagingSenderId: "287006405984",
  appId: "1:287006405984:web:72c1292e234c4276289a05",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
