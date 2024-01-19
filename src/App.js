import Layout from "./component/layout";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order from "./pages/order";
import Cart from "./pages/cart/cart";
import AdminDashboard from "./pages/admin/adminDashboard";
import Nopage from "./pages/nopage";
import Allproduct from "./pages/allproducts";
import Login from "./pages/Registration/Login";
import SignUp from "./pages/Registration/Signup";
import ProductInfo from "./pages/productinfo/productinfo";
import AddProduct from "./pages/admin/pages/addproduct";
import UpdateProduct from "./pages/admin/pages/updateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/order",
    element: <Order />,
  },
  { path: "/cart", element: <Cart /> },
  { path: "/allproducts", element: <Allproduct /> },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  { path: "/nopage", element: <Nopage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/updateproduct",
    element: <UpdateProduct />,
  },
  { path: "/productinfo/:id", element: <ProductInfo /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </>
  );
}

export default App;
