import React, { useEffect, useState } from "react";
import ShowData from "./ShowData";
import { Typewriter } from "react-simple-typewriter";

const Alldata = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://b9-a10-serverbackend.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center text-gray-400">
        <span className="mr-2">Explore Our Latest and</span>
        <Typewriter
          words={["Unique Products"]}
          loop={true}
          cursor
          cursorStyle="<"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className="flex justify-center mt-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {datas.map((data) => (
            <ShowData key={data._id} data={data}></ShowData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alldata;
