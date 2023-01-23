import React, { useEffect, useState } from "react";
import AdvertisementCard from "./AdvertisementCard";

const Advertisement = () => {
  const [advertise, setAdvertise] = useState([]);
  useEffect(() => {
    fetch("https://resale-site-server.vercel.app/advertise")
      .then((res) => res.json())
      .then((data) => setAdvertise(data));
  }, [advertise]);
  return (
    <div>
      <h3 className="text-3xl my-5">Available Phones</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {advertise?.map((ad) => (
          <AdvertisementCard key={ad?._id} advertise={ad}></AdvertisementCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
