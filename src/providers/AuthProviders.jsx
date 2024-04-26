import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
     const [users, setUsers] = useState(null);

     const createUser = (email,password) =>{
         return createUserWithEmailAndPassword(auth, email,password)
     }

     const signIn = (email,password) =>{
          return signInWithEmailAndPassword(auth,email,password)
     }
    
    const userInfo = {
          users,
          createUser,
          signIn,
    }

    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;