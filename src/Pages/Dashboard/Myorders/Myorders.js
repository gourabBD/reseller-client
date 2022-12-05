import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyordersCard from "./MyoredersCard/MyordersCard";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://resale-site-server.vercel.app/bookedProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div>
<h1 className="text-3xl">My orders :</h1>
    <div className="grid lg:grid-cols-3">
      
      {orders?.map((order) => (
        <MyordersCard key={order?._id} order={order}></MyordersCard>
      ))}
    </div>
    </div>
  );
};

export default Myorders;
