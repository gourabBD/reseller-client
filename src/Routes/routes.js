import { createBrowserRouter } from "react-router-dom";
import Loadings from "../components/Spinner/Loadings";

import Main from "../LayOut/Main";


import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Register from '../Pages/Register/Register';
import CategoryProducts from './../Pages/CategoryProducts/CategoryProducts';
import Dashboard from './../Pages/Dashboard/Dashboard';
import PrivateRoute from "./PrivateRoute/PrivateRoute";




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
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/register",
        element: <Loadings><Register></Register></Loadings>,
      },
      
      
    ],
  },
  
]);
export default router;
