import {
    Outlet,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </div>
    );
};

export default Main;