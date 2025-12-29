// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGxUjfEPFYaCLK6n0FTLFgn9dHvZP1p2Q",
  authDomain: "our-crazy-code.firebaseapp.com",
  databaseURL: "https://our-crazy-code-default-rtdb.firebaseio.com",
  projectId: "our-crazy-code",
  storageBucket: "our-crazy-code.firebasestorage.app",
  messagingSenderId: "628267915326",
  appId: "1:628267915326:web:908ef4d235fd573a40d96f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);