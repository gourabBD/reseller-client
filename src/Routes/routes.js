import { createBrowserRouter } from "react-router-dom";

import Main from "../LayOut/Main";


import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Register from '../Pages/Register/Register';
import CategoryProducts from './../Pages/CategoryProducts/CategoryProducts';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.category}`),
      },
      {
        path: `/products/:category`,
        element: <CategoryProducts></CategoryProducts>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.category}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
      
    ],
  },
  
]);
export default router;
