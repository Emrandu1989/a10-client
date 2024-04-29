import React from "react";

const CraftCat = ({ data }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <img
          className="w-full h-40 object-cover object-center"
          src={data.image}
          alt={data.subcategory_name}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {data.subcategory_name}
          </h2>
          <p className="mt-2 text-gray-600">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CraftCat;
