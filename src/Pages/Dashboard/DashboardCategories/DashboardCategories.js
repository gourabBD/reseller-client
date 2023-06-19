import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DashboardCategories = () => {
  const { user } = useContext(AuthContext);
  const [findingUser, setFindingUser] = useState("");
  useEffect(() => {
    fetch("https://resale-site-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((d) => user?.email === d?.email);
        setFindingUser(found);
      });
  }, [user?.email]);

  return (
    <div className="w-full  ">
      <ul className="menu menu-vertical   ">
        {user?.uid &&
        (findingUser?.category === "Buyer" ||
          (user?.email && !findingUser?.category)) ? (
          <div className="">
            <li className="border rounded-xl border-yellow-700 ">
              <Link to={"/dashboard/myorders"}>My Orders</Link>
            </li>
            <li className="border rounded-xl border-yellow-700 ">
              <Link to={"/dashboard/wishlist"}>My Wish list</Link>
            </li>
          </div>
        ) : (
          <></>
        )}
        {user?.uid && findingUser?.category === "Seller" ? (
          <div>
            <li className="border rounded-xl border-yellow-700 ">
              <Link to={"/dashboard/addproduct"}>Add A Product</Link>
            </li>
            <li className="border rounded-xl border-yellow-700 ">
              <Link to={"/dashboard/mysellingproducts"}>My Products</Link>
            </li>
          </div>
        ) : (
          <></>
        )}
        {user?.uid && findingUser?.category === "Admin" ? (
          <div>
            <li className="border rounded-xl border-yellow-700 ">
              <Link to={"/dashboard/allsellers"}>All Sellers</Link>
            </li>
            <li className="border rounded-xl border-yellow-700 ">
              <Link to={"/dashboard/allbuyers"}>All Buyers</Link>
            </li>
          </div>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default DashboardCategories;
