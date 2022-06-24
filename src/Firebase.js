import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()

export const auth = getAuth(app);
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
        //TODO: process result
    }).catch((error)=>{
        window.alert(error)
    })
};