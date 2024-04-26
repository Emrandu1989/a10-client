import { Link, useLoaderData } from "react-router-dom";



const AllArtAndCrafts = () => {
      const allProducts = useLoaderData();
      console.log(allProducts)
       
    return (
        <>
               <h1>All Products: {allProducts.length}</h1>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
           Image
        </th>
        <th>CustomerName</th>
        <th>ItemName</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
 
      
                  {allProducts.map(singleProduct =>  <tr key={singleProduct._id}>
     
        <td>
         
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singleProduct.ImageUrl} />
              </div>
            </div>
        </td>
         <td>
         <div>
              <div className="font-bold">{singleProduct.UserName}</div>
           
            </div>
         </td>
        <td>
            {singleProduct.ItemName}
        </td>
        <td>$ {singleProduct.Price}</td>
        <th>
          <Link to={`/details/${singleProduct._id}`}>
          <button className="btn btn-ghost btn-xs">View Details</button>
           </Link>
        </th>
      </tr>  )}
               
 
    </tbody>
   
    
  </table>
</div>  

             
        </>
    );
};

export default AllArtAndCrafts;