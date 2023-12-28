import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Root from "./Root";
import Catalog from "../Page/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/catalog',
          element: <Catalog></Catalog>
        },
    
    ]
  },
]);

export default router;
