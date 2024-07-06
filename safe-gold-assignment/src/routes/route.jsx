import { createBrowserRouter } from "react-router-dom";
import { PublicLayouts } from "../components/Layouts/publicLayouts";
import { Login } from "../pages/Login";
import { ProductDetails } from "../pages/ProductDetails";
import { ProductList } from "../pages/ProductList";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayouts>
        <ProductList />
      </PublicLayouts>
    ),
  },
  {
    path: "/list",
    element: (
      <PublicLayouts>
        <ProductList />
      </PublicLayouts>
    ),
  },
  //   {
  //     path: "/details",
  //     element: (
  //       <PublicLayouts>
  //         <ProductDetails />
  //       </PublicLayouts>
  //     ),
  //   },
  {
    path: "/login",
    element: (
      <PublicLayouts>
        <Login />
      </PublicLayouts>
    ),
  },
]);

export default route;
