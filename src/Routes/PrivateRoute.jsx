import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const PrivateRoute = ({children}) => {
    const {users,loading} = useContext(AuthContext)
     if(loading){
          return  <span className="loading loading-spinner loading-lg"></span>
     }
    if(users){
        return children
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;