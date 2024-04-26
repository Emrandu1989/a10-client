import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
                <div className="flex justify-center items-center flex-col">
                         <img className="w-[600px]" src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
                         <p className="text-2xl font-bold">Page Not Found</p>
                         <Link to='/' className="btn btn-link text-red-600 text-2xl">Go Back</Link>
                  </div>
        </>
    );
};

export default ErrorPage;