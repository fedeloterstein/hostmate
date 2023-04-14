// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIPkdgUBf5ctbCzEv7_vj2pjm_6GWrrf0",
  authDomain: "hostmate-mvp.firebaseapp.com",
  projectId: "hostmate-mvp",
  storageBucket: "hostmate-mvp.appspot.com",
  messagingSenderId: "783313026230",
  appId: "1:783313026230:web:86da5c039c5c81a9347a17",
  measurementId: "G-Z4QT5BM9QX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)