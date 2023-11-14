// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-project.firebaseapp.com",
  projectId: "mern-real-estate-project",
  storageBucket: "mern-real-estate-project.appspot.com",
  messagingSenderId: "176565162939",
  appId: "1:176565162939:web:0a17d12f8ed142ce03ea9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
