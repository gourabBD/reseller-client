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
      <h3 className="text-3xl my-5">Advertisements:</h3>
      <div className="lg:flex md:grid sm:grid">
        {advertise?.map((ad) => (
          <AdvertisementCard key={ad?._id} advertise={ad}></AdvertisementCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
