// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKJwtEwxo8Qse4jZcAo4qF9LLQ9B1LxQ",
  authDomain: "netflixgpt-212ea.firebaseapp.com",
  projectId: "netflixgpt-212ea",
  storageBucket: "netflixgpt-212ea.appspot.com",
  messagingSenderId: "570353154462",
  appId: "1:570353154462:web:bea5fa2ee3f03596143e8f",
  measurementId: "G-R9WTC1D55X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);