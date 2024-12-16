// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMMoFK5jx3DPwEBpskywo65AsdPpCCnrs",
  authDomain: "netflixgpt-b0575.firebaseapp.com",
  projectId: "netflixgpt-b0575",
  storageBucket: "netflixgpt-b0575.appspot.com",
  messagingSenderId: "600248811214",
  appId: "1:600248811214:web:2c30bd1d99a98f830d9a9f",
  measurementId: "G-QJ4BYFQQWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();