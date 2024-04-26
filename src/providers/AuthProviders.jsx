import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
     const [users, setUsers] = useState(null);
     const [loading, setLoading] = useState(true)

     const createUser = (email,password) =>{
         setLoading(true)
         return createUserWithEmailAndPassword(auth, email,password)
     }

     const signIn = (email,password) =>{
        setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut = () =>{
        setLoading(true)
         return signOut(auth)
     }
     const googleLogin = () =>{
        setLoading(true)
         return signInWithPopup(auth, googleProvider)
     }
     const gitHubLogin = () =>{
        setLoading(true)
          return signInWithPopup(auth, gitHubProvider)
     }

     useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
               setUsers(currentUser);
               console.log("currentUser", currentUser)
               setLoading(false)
           })
           return () =>{
                unsubscribe()
           }
     },[])
    
    const userInfo = {
          users,
          createUser,
          signIn,
          logOut,
          googleLogin,
          gitHubLogin,
          loading
    }

    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;