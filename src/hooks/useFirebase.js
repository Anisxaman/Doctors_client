import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LoginPage/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  ,signOut,onAuthStateChanged} from "firebase/auth";



//initialize firebase app
initializeFirebase();

const useFirebase=()=>{
  const [isloading, setisloading] = useState(true);
  const [authError, setauthError] = useState("")
    const [user, setuser] = useState({});

    const auth = getAuth();


//---------------------------- register user----------------------------------------


const registerUser=(email,password)=>{

setisloading(true);
  console.log(email,password);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setauthError("");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setauthError(error.message);

    console.log(errorCode,errorMessage);
    // ..
  })
  .finally(()=>setisloading(false));

    
}


// -------------------------signInWithEmailAndPassword ----------------

const loginUser=(email,password)=>{
  setisloading(true);

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setauthError("");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setauthError(error.message);

  })
  .finally(()=>setisloading(false));

  

}















// ------------------------------state change observer---------------------
useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user);
         
        
        } else {
         setuser({})
        }
        setisloading(false);

      });
 return ()=>unsubscribe;
}, [])


//-----------------------------------signout-------------------------------------

const logout=()=>{
  alert("hi")
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        setauthError(error);

      })
      .finally(()=>setisloading(false));
      
      
      
}



    return{
        user,
        registerUser,
        logout,
        loginUser,
        isloading,
        authError
    }

}


export default useFirebase;


//71-5