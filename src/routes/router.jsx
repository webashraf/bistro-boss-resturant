import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DesertsMenu from "../Pages/MenuRoutes/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopRoute/OurShop/OurShop";

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
        element: <DesertsMenu></DesertsMenu>
      },
      {
        path: "/ourshop/:category",
        element: <OurShop></OurShop>,
      },
      // {
      //   path: "/ourshop/",
      //   element: <OurShop></OurShop>,
      // }
    ],
  },
]);

export default router;
