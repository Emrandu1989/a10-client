import React, { useEffect, useState } from "react";
import CraftCat from "./CraftCat";

const Craft = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://b9-a10-serverbackend.vercel.app/s")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="mb-10 underline  text-4xl font-semibold text-center">
        Art & Craft Categories
      </h1> 
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {datas.map((data) => (
            <CraftCat key={data.id} data={data}></CraftCat>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Craft;
