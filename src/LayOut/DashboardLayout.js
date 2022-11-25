import React from "react";
import { Outlet } from "react-router-dom";
import DashboardCategories from "../Pages/Dashboard/DashboardCategories/DashboardCategories";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <DashboardCategories></DashboardCategories>
      </div>

      <div className="drawer-content ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
