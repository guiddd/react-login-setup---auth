// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_s_0_3bNe--lyofVoZE_AHCYm-EukZbA",
  authDomain: "login-auth---setup.firebaseapp.com",
  projectId: "login-auth---setup",
  storageBucket: "login-auth---setup.appspot.com",
  messagingSenderId: "502136870920",
  appId: "1:502136870920:web:ae25c8a8bdb48a40d099bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};