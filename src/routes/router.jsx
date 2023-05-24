import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DesertsMenu from "../Pages/MenuRoutes/OurMenu/OurMenu";

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
      }
    ],
  },
]);

export default router;
