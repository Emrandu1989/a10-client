import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import CraftCard from "./CraftCard";

const MyArtAndCraft = () => {
  const { users } = useContext(AuthContext);
  // const [myCrafts, setMyCrafts] = useState([]);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  //  const url = `http://localhost:5000/crafts/${users.email}`

  //  useEffect(()=>{
  //       fetch(url)
  //       .then(res=>res.json())
  //       .then(data=>setMyCrafts(data))
  //  },[users])

  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);



  
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {datas.map((data) => (
          <CraftCard key={data._id} data={data}
          datas={datas}
           setDatas={setDatas}
          ></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraft;
