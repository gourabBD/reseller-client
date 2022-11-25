import { createBrowserRouter } from "react-router-dom";
import Loadings from "../components/Spinner/Loadings";
import DashboardLayout from "../LayOut/DashboardLayout";

import Main from "../LayOut/Main";
import AllSellers from "../Pages/AdminPages/AllSellers/AllSellers";
import Blogs from "../Pages/Blogs/Blogs";
import Myorders from "../Pages/Dashboard/Myorders/Myorders";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";


import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFoundError from "../Pages/NotFoundError/NotFoundError";

import Register from '../Pages/Register/Register';
import SellerAddProduct from "../Pages/SellerAddProducts/SellerAddProduct";
import CategoryProducts from './../Pages/CategoryProducts/CategoryProducts';
import Dashboard from './../Pages/Dashboard/Dashboard';
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllBuyers from './../Pages/AdminPages/AllBuyers/AllBuyers';
import SellerProduct from "../Pages/SellerProduct/SellerProduct";




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
        path: `/products/:category`,
        element: <CategoryProducts></CategoryProducts>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.category}`),
      },

      {
        path: "/login",
        element: <Loadings><Login></Login></Loadings>,
      },
     
      {
        path: "/register",
        element: <Loadings><Register></Register></Loadings>,
      },
      
      {
        path: "/blogs",
        element: <Loadings><Blogs></Blogs></Loadings>,
      },
      
     
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path: "/dashboard/myorders",
        element: <PrivateRoute><Myorders></Myorders></PrivateRoute>,
      },
      {
        path: "/dashboard/wishlist",
        element: <PrivateRoute><MyWishList></MyWishList></PrivateRoute>,
      },
      {
        path: "/dashboard/addproduct",
        element: <PrivateRoute><SellerAddProduct></SellerAddProduct></PrivateRoute>,
      },
      {
        path: "/dashboard/mysellingproducts",
        element: <PrivateRoute><SellerProduct></SellerProduct></PrivateRoute>,
      },
      {
        path: "/dashboard/allsellers",
        element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>,
      },

    ]
  },
  {
    path: "*",
    element: <NotFoundError></NotFoundError>,
  },
  
]);
export default router;
