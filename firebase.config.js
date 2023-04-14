// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: 'hostmate-mvp.firebaseapp.com',
  projectId: 'hostmate-mvp',
  storageBucket: 'hostmate-mvp.appspot.com',
  messagingSenderId: '783313026230',
  appId: '1:783313026230:web:86da5c039c5c81a9347a17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const firestore = getFirestore(app);

export { auth, app, firestore, database };
