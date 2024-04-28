import React from "react";
import { Link } from "react-router-dom";

const ShowData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-base-100 px-5 gap-6 shadow-xl">
        <figure>
          <img
            className="w-[300px] h-[350px] rounded-xl"
            src={data.ImageUrl}
            alt="Craft"
          />
        </figure>
        <div className="space-y-3">
          <h2 className="card-title">{data.ItemName}</h2>
          <p>Price: $ {data.Price}</p>
          <p>Ratings: {data.Ratings}</p>
          <p>Customization: {data.Customization}</p>
          <p>StockStatus: {data.StockStatus}</p>
        </div>
        <div className="flex flex-col gap-6">
          <Link to={`/details/${data._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
