// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //We hide api kley
  authDomain: "mern-blog-6c3fd.firebaseapp.com",
  projectId: "mern-blog-6c3fd",
  storageBucket: "mern-blog-6c3fd.appspot.com",
  messagingSenderId: "225088026573",
  appId: "1:225088026573:web:f075d264138d7c4f177684",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
