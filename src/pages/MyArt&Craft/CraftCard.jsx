import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const CraftCard = ({ data, datas, setDatas }) => {
  const { users } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (data.uid === users.uid) {
      setIsVisible(true);
    }
  }, [data.uid, users.uid]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-a10-serverbackend.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
              const remaining = datas.filter((product) => product._id !== _id);
              setDatas(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    });
  };

  return (
    <>
      {isVisible && (
        <div className="flex flex-row justify-between items-center bg-base-100 px-5 shadow-xl">
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
            <Link to={`/updateProduct/${data._id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(data._id)}
              className="btn bg-orange-500"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CraftCard;
