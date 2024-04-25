import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home/Home";
import AddCraft from "../pages/AddCraft/AddCraft";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/addCraft',
            element: <AddCraft />
         },
      ]
    },
  ]);
export default router
