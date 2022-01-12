import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LoginPage/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  ,signOut,onAuthStateChanged} from "firebase/auth";



//initialize firebase app
initializeFirebase();

const useFirebase=()=>{
    const [user, setuser] = useState({});

    const auth = getAuth();


//---------------------------- register user----------------------------------------


const registerUser=(email,password)=>{


  console.log(email,password);

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
  });

    
}


// -------------------------signInWithEmailAndPassword ----------------

const loginUser=(email,password)=>{

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}















// ------------------------------state change observer---------------------
useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user);
         
        
        } else {
         setuser({})
        }
      });
 return ()=>unsubscribe;
}, [])


//-----------------------------------signout-------------------------------------

const logout=()=>{
  alert("hi")
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      
}



    return{
        user,
        registerUser,
        logout,
        loginUser
    }

}


export default useFirebase;


//71-5