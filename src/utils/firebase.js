// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBljyhnNVrTcm1hndGqOLSY3abUH3w__ME",
  authDomain: "netflixgpt-912ca.firebaseapp.com",
  projectId: "netflixgpt-912ca",
  storageBucket: "netflixgpt-912ca.appspot.com",
  messagingSenderId: "569123310864",
  appId: "1:569123310864:web:94b1c76434eb6ccf03a995",
  measurementId: "G-9N0CYLEH02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
console.log(analytics)