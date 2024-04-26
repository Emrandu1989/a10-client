import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
     const [users, setUsers] = useState(null);

     const createUser = (email,password) =>{
         return createUserWithEmailAndPassword(auth, email,password)
     }

     const signIn = (email,password) =>{
          return signInWithEmailAndPassword(auth,email,password)
     }

     const googleLogin = () =>{
         return signInWithPopup(auth, googleProvider)
     }
     const gitHubLogin = () =>{
          return signInWithPopup(auth, gitHubProvider)
     }
    
    const userInfo = {
          users,
          createUser,
          signIn,
          googleLogin,
          gitHubLogin
    }

    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;