import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const AddCraft = () => {
  const { users } = useContext(AuthContext);
   const navigate = useNavigate()
  const handleAddCraft = (e) => {
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
    const uid = form.uid.value;
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
      uid,
    };
    console.log(products);

    fetch("https://b9-a10-serverbackend.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
           navigate('/myArt&CraftList')
        }
      });
  };
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-500 my-5">
        Add Your Product
      </h2>
      <div className="hero min-h-screen bg-base-200">
        <form onSubmit={handleAddCraft} className="card-body -ml-8">
          <div className="flex md:flex-row flex-col gap-4 ">
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
                required
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
                placeholder="Subcategory_Name"
                className="input w-[500px] input-bordered"
                required
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
                placeholder="UserName"
                className="input w-[500px] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  UserEmail
                </span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={users?.email}
                className="input w-[500px] input-bordered"
                required
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
                type="text"
                name="Customization"
                placeholder="Yes or No"
                className="input w-[500px] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Processing_time
                </span>
              </label>
              <input
                type="text"
                name="Processing_time"
                placeholder="Processing_time"
                className="input w-[500px] input-bordered"
                required
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
                type="text"
                name="StockStatus"
                placeholder="InStock or Made to Order"
                className="input w-[500px] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <input
                type="text"
                name="Price"
                placeholder="Price"
                className="input w-[500px] input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Ratings
                </span>
              </label>
              <input
                type="number"
                name="Ratings"
                placeholder="out of 5"
                className="input lg:w-[300px] input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  ImageUrl
                </span>
              </label>
              <input
                type="text"
                name="ImageUrl"
                placeholder="ImageUrl"
                className="input md:w-[700px] input-bordered"
                required
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
            <input
              type="text"
              name="uid"
              defaultValue={users?.uid}
              className="input input-bordered sr-only"
            />
          </div>
          <div className="mt-5 w-1/2 md:w-full px-2 ">
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="AddProduct"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCraft;
