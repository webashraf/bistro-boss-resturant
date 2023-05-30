import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import DesertsMenu from "../Pages/MenuRoutes/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopRoute/OurShop/OurShop";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from './../Layout/Dashboard';
import Mycart from "../Pages/Dashboard/MyCart/Mycart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourmenu",
        element: <PrivateRoute><DesertsMenu></DesertsMenu></PrivateRoute>,
      },
      {
        path: "/ourshop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },{
        path: "signup",
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "mycart",
        element: <Mycart></Mycart>
      }
    ]
  }
]);

export default router;
