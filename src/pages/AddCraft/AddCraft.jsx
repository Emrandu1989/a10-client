

const AddCraft = () => {
    return (
        <>
               <h2 className="text-center text-2xl font-bold text-gray-500 my-5">Add Your Product</h2>
               <div className="hero min-h-screen bg-base-200">
 
  
  
      <form className="card-body">
          <div className="flex gap-4 ">
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">ItemName</span>
          </label>
          <input type="text" name="ItemName"  placeholder="ItemName" className="input w-[500px] input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Subcategory_Name
</span>
          </label>
          <input type="text" name="Subcategory_Name" placeholder="Subcategory_Name" className="input w-[500px] input-bordered" required />
        </div>
          </div>
          <div className="flex gap-4 ">
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">UserName</span>
          </label>
          <input type="text" name="UserName"  placeholder="UserName" className="input w-[500px] input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">UserEmail</span>
          </label>
          <input type="email" name="UserEmail" placeholder="UserEmail" className="input w-[500px] input-bordered" required />
        </div>
          </div>
          <div className="flex gap-4 ">
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Customization</span>
          </label>
          <input type="text" name="Customization"  placeholder="Yes or No" className="input w-[500px] input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Processing_time</span>
          </label>
          <input type="text" name="Processing_time" placeholder="Processing_time" className="input w-[500px] input-bordered" required />
        </div>
          </div>
          <div className="flex gap-4 ">
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold"> StockStatus</span>
          </label>
          <input type="text" name="StockStatus"  placeholder="InStock or Made to Order" className="input w-[500px] input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Price</span>
          </label>
          <input type="text" name="Price" placeholder="Price" className="input w-[500px] input-bordered" required />
        </div>
          </div>
          <div className="flex gap-4 ">
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Ratings</span>
          </label>
          <input type="number" name="Ratings"  placeholder="out of 5" className="input w-[300px] input-bordered" required />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">ImageUrl</span>
          </label>
          <input type="text" name="ImageUrl"  placeholder="ImageUrl" className="input w-[700px] input-bordered" required />
        </div>
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Short Description</span>
          </label>
            <textarea name="D escription" id="" cols="10" rows="5"></textarea>
        </div>
          <div className="mt-5 ">
                <button className="w-full btn btn-primary">Submit</button>
       
          </div>
        
      </form>
 
  
</div>
        </>
    );
};

export default AddCraft;