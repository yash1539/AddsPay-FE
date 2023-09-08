import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        result.user.getIdToken().then((idToken) => {
            console.log("ID Token auth: ", idToken);
        });
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("photo", profilePic);
    }).catch((error)=>{
        console.log(error);
    });
}