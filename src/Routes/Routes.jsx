import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import AddCraft from "../pages/AddCraft/AddCraft";
import AllArtAndCrafts from "../pages/AllArt&crafts/AllArtAndCrafts";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyArtAndCraft from "../pages/MyArt&Craft/MyArtAndCraft";
import Register from "../pages/Register/Register";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCraft",
        element: <AddCraft />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`https://b9-a10-serverbackend.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/myArt&CraftList",
        element: (
          <PrivateRoute>
            {" "}
            <MyArtAndCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCrafts />,
        loader: () => fetch("https://b9-a10-serverbackend.vercel.app/crafts"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch("https://b9-a10-serverbackend.vercel.app/crafts"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
