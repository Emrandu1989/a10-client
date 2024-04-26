import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {users,loading} = useContext(AuthContext)
     if(loading){
          return  <span className="loading loading-spinner loading-lg"></span>
     }
    if(users){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;