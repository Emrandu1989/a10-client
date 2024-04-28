import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Details = () => {
  const products = useLoaderData();
  console.log(products);
  const { id } = useParams();
  console.log(id);
  const singleProduct = products.find((product) => product._id === id);
  console.log(singleProduct);

  const {
    Customization,
    Description,
    ImageUrl,
    ItemName,
    Price,
    Processing_time,
    Ratings,
    StockStatus,
    Subcategory_name,
    UserEmail,
    UserName,
    _id,
  } = singleProduct;

  return (
    <>
      <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={ImageUrl} alt="Shoes" className="rounded-xl w-[500px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">ProductName: {ItemName}</h2>
          <h2 className="card-title">{Subcategory_name}</h2>

          <h2 className="card-title">CustomerName:{UserName}</h2>
          <h2 className="card-title">{UserEmail}</h2>
          <div className="flex gap-12">
            <p>Price: $ {Price}</p>
            <p>Customization:{Customization}</p>
          </div>
          <div className="flex gap-5">
            <p>StockStatus: {StockStatus} </p>
            <p>Processing_time: {Processing_time} </p>
            <p>Ratings: {Ratings} </p>
          </div>
          <p>Description: {Description}</p>
          <div className="mt-8">
            <Link to={"/"}>
              <button className="btn btn-success text-white font-semibold hover:btn-ghost hover:text-black">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
