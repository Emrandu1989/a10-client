import React, { useEffect, useState } from "react";
import ShowData from "./ShowData";

const Alldata = () => {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    fetch("https://b9-a10-serverbackend.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => setdatas(data));
  }, []);
  //   console.log(datas.length);
  return (
    <div className="flex justify-center  mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {datas.map((data) => (
          <ShowData key={data._id} data={data}></ShowData>
        ))}
      </div>
    </div>
  );
};

export default Alldata;
