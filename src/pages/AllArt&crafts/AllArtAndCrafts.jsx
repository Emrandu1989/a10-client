import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCrafts = () => {
  const allProducts = useLoaderData();

  return (
    <div className="container mx-auto md:px-4  lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        All Products ({allProducts.length})
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="">
              <th className="md:px-6  py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                Image
              </th>
              <th className="md:px-6 py-3 text-left text-sm  text-gray-700 uppercase ">
                Name
              </th>
              <th className="md:px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                Item Name
              </th>
              <th className="md:px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
                Price
              </th>
              <th className="md:px-6 py-3">Details</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allProducts.map((singleProduct) => (
              <tr key={singleProduct._id}>
                <td className="md:px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={singleProduct.ImageUrl}
                        alt="Product"
                      />
                    </div>
                  </div>
                </td>
                <td className="md:px-6 px-0 py-4 ">
                  <div className="text-sm font-medium text-gray-900">
                    {singleProduct.UserName}
                  </div>
                </td>
                <td className="md:px-6 py-4 ">
                  <div className="text-sm text-gray-900">
                    {singleProduct.ItemName}
                  </div>
                </td>
                <td className="md:px-6 py-4  text-sm text-gray-700">
                  ${singleProduct.Price}
                </td>
                <td className="md:px-6 py-4  text-right text-sm font-medium">
                  <Link
                    to={`/details/${singleProduct._id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCrafts;
