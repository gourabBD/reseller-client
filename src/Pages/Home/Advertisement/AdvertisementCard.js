import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AdvertisementCard = ({ advertise }) => {
  const { img, description, prodName, yearsUse, _id } = advertise;
  return (
    <div
      data-aos="fade-right"
      className="card rounded-none mb-2  bg-base-100 shadow-xl border border-yellow-700 "
    >
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img
              style={{ height: "300px" }}
              className="w-full "
              src={img}
              alt="Shoes"
            />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body text-left">
        <h2 className="card-title ">
          Device Name: <span>{prodName}</span>{" "}
        </h2>
        <p>
          <span className="underline">Description:</span>{" "}
          {description.length > 100
            ? `${description.slice(0, 60)}  ...`
            : description}
        </p>
        <p>
          <span className="underline">Used for:</span> {yearsUse} year
        </p>
      </div>
    </div>
  );
};

export default AdvertisementCard;
