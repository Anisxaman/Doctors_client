import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// import firebaseConfig from "./firebase.config"

const initializeFirebase=()=>{
    console.log(firebaseConfig);
    initializeApp(firebaseConfig);
}

export default initializeFirebase;