import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import CraftCard from "./CraftCard";


const MyArtAndCraft = () => {
    const {users} = useContext(AuthContext);
     const [myCrafts, setMyCrafts] = useState([]);
     console.log(myCrafts);
     const url = `http://localhost:5000/crafts?email=${users.UserEmail}`

     useEffect(()=>{
          fetch(url)
          .then(res=>res.json())
          .then(data=>setMyCrafts(data))
     },[])
    return (
        <div>
              <h1>This is my Cart List page</h1>
             <div className="grid grid-cols-2 gap-5">
             {
                myCrafts.map(myCraft => <CraftCard
                key={CraftCard._id}
                myCraft={myCraft}
                ></CraftCard> )
              }
             </div>
        </div>
    );
};

export default MyArtAndCraft;