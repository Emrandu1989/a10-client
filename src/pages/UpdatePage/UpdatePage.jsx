import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { users } = useContext(AuthContext);

  const product = useLoaderData();
  console.log(product);
  const {
    _id,
    ItemName,
    Subcategory_Name,
    UserName,
    email,
    Customization,
    Processing_time,
    StockStatus,
    Price,
    Ratings,
    ImageUrl,
    Description,
  } = product;

  console.log(_id);

  const updateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const ItemName = form.ItemName.value;
    const Subcategory_Name = form.Subcategory_Name.value;
    const UserName = form.UserName.value;
    const email = users.email;
    const Customization = form.Customization.value;
    const Processing_time = form.Processing_time.value;
    const StockStatus = form.StockStatus.value;
    const Price = form.Price.value;
    const Ratings = form.Ratings.value;
    const ImageUrl = form.ImageUrl.value;
    const Description = form.Description.value;
    const products = {
      ItemName,
      Subcategory_Name,
      UserName,
      email,
      Customization,
      Processing_time,
      StockStatus,
      Price,
      Ratings,
      ImageUrl,
      Description,
    };
    console.log(products);
    fetch(`http://localhost:5000/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-500 my-5">
        Update Your Product:{" "}
      </h2>
      <div className="hero min-h-screen bg-base-200">
        <form onSubmit={updateProduct} className="card-body">
          <div className="flex gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  ItemName
                </span>
              </label>
              <input
                type="text"
                name="ItemName"
                placeholder="ItemName"
                className="input w-[500px] input-bordered"
                defaultValue={ItemName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Subcategory_Name
                </span>
              </label>
              <input
                type="text"
                name="Subcategory_Name"
                defaultValue={Subcategory_Name}
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  UserName
                </span>
              </label>
              <input
                type="text"
                name="UserName"
                defaultValue={UserName}
                className="input w-[500px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  UserEmail
                </span>
              </label>
              <input
                defaultValue={email}
                type="email"
                name="email"
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Customization
                </span>
              </label>
              <input
                defaultValue={Customization}
                type="text"
                name="Customization"
                className="input w-[500px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Processing_time
                </span>
              </label>
              <input
                defaultValue={Processing_time}
                type="text"
                name="Processing_time"
                placeholder="Processing_time"
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  {" "}
                  StockStatus
                </span>
              </label>
              <input
                defaultValue={StockStatus}
                type="text"
                name="StockStatus"
                placeholder="InStock or Made to Order"
                className="input w-[500px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <input
                defaultValue={Price}
                type="text"
                name="Price"
                placeholder="Price"
                className="input w-[500px] input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Ratings
                </span>
              </label>
              <input
                defaultValue={Ratings}
                type="number"
                name="Ratings"
                placeholder="out of 5"
                className="input w-[300px] input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  ImageUrl
                </span>
              </label>
              <input
                defaultValue={ImageUrl}
                type="text"
                name="ImageUrl"
                placeholder="ImageUrl"
                className="input w-[700px] input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Short Description
              </span>
            </label>
            <textarea name="Description" id="" cols="10" rows="5"></textarea>
          </div>
          <div className="mt-5 ">
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="UpdateProduct"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePage;
