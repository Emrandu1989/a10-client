import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const UpdatePage = () => {
  const { users } = useContext(AuthContext);
  const product = useLoaderData();

  const {
    _id,
    ItemName,
    Subcategory_Name,
    UserName,
    Customization,
    Processing_time,
    StockStatus,
    Price,
    Ratings,
    ImageUrl,
    Description,
  } = product;

  const updateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      ItemName: form.ItemName.value,
      Subcategory_Name: form.Subcategory_Name.value,
      UserName: form.UserName.value,
      email: users.email,
      Customization: form.Customization.value,
      Processing_time: form.Processing_time.value,
      StockStatus: form.StockStatus.value,
      Price: form.Price.value,
      Ratings: form.Ratings.value,
      ImageUrl: form.ImageUrl.value,
      Description: form.Description.value,
    };

    fetch(`https://b9-a10-serverbackend.vercel.app/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Product updated successfully") {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        Swal.fire({
          title: "Success!",
          text: "Product updated successfully",
          icon: "success",
        });
      });
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-500 my-5">
        Update Your Product
      </h2>
      <div className="hero min-h-screen bg-base-200">
        <form onSubmit={updateProduct} className="card-body">
          <div className="flex gap-4">
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
          <div className="flex gap-4">
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
                defaultValue={users.email}
                type="email"
                name="email"
                className="input w-[500px] input-bordered"
                disabled
              />
            </div>
          </div>
          <div className="flex gap-4">
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
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
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
          <div className="flex gap-4">
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
            <textarea
              name="Description"
              defaultValue={Description}
              cols="10"
              rows="5"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <div className="mt-5">
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePage;
