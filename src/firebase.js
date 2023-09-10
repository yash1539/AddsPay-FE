// src/firebase.js (Create a Firebase configuration file)

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBiY-1wxowDAZjZD_McXoVuyoAHzpFvgyA",
  authDomain: "addspay-stage.firebaseapp.com",
  projectId: "addspay-stage",
  storageBucket: "addspay-stage.appspot.com",
  messagingSenderId: "650970274879",
  appId: "1:650970274879:web:0b532010499cdf78356c8a",
  measurementId: "G-W1TLWSR98D",
};


const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export const storage = getStorage(app);

 export {db};
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// Get a list of cities from your database


