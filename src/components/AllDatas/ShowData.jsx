import React from "react";
import { Link } from "react-router-dom";

const ShowData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex flex-col p-4 md:flex-row justify-between items-center bg-base-100 px-5 gap-6 shadow-xl">
        <figure className="w-full md:w-[300px]">
          <img
            className="w-full h-[280px] rounded-xl"
            src={data.ImageUrl}
            alt="Craft"
          />
        </figure>
        <div className="flex-1 space-y-3 md:ml-6">
          <h2 className="card-title">{data.ItemName}</h2>
          <p>Price:<strong className="text-red-500">${data.Price}</strong></p>
          <p>Ratings: {data.Ratings}</p>
          <p>Customization: {data.Customization}</p>
          <p>StockStatus: <span className="text-red-600">{data.StockStatus}</span></p>
        </div>
        <div className="flex flex-col pb-3 md:flex-row gap-6 items-center">
          <Link to={`/details/${data._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
