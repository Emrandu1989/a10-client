import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home/Home";
import AddCraft from "../pages/AddCraft/AddCraft";
import AllArtAndCrafts from "../pages/AllArt&crafts/AllArtAndCrafts";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      errorElement:<ErrorPage/>,
      children:[
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/addCraft',
            element: <AddCraft />
         },
         {
            path: '/allArtAndCraft',
            element: <AllArtAndCrafts />,
            loader:() => fetch("http://localhost:5000/crafts")
         },
         {
            path: '/details/:id',
            element: <Details />,
            loader:() => fetch("http://localhost:5000/crafts")
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/register',
            element: <Register />
         },
      ]
    },
  ]);
export default router
