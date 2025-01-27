import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import CraftCard from "./CraftCard";

const MyArtAndCraft = () => {
  const { users } = useContext(AuthContext);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b9-a10-serverbackend.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5">
        
          <>
            {datas.map((data) => (
              <CraftCard
                key={data._id}
                data={data}
                datas={datas}
                setDatas={setDatas}
              ></CraftCard>
            ))}
          </>
      
      </div>
    </div>
  );
};

export default MyArtAndCraft;
