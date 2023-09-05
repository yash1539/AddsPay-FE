import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiY-1wxowDAZjZD_McXoVuyoAHzpFvgyA",
  authDomain: "addspay-stage.firebaseapp.com",
  projectId: "addspay-stage",
  storageBucket: "addspay-stage.appspot.com",
  messagingSenderId: "650970274879",
  appId: "1:650970274879:web:0b532010499cdf78356c8a",
  measurementId: "G-W1TLWSR98D"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);