import React from "react";
import { GoVerified } from "react-icons/go";
import BookNowModal from "../../ProductCards/BookNowModal/BookNowModal";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const WishlistCard = ({ wish }) => {
  const {
    _id,
    email,
    description,
    img,
    loc,
    name,
    orgPrice,
    phone,
    postTime,
    prodId,
    prodName,
    resalePrice,
    verifiedSeller,
    yearsUse,
  } = wish;
  return (
    <div
      style={{ height: "550px" }}
      data-aos="fade-right"
      className="card border border-yellow-700 rounded-none  p-2 w-full  shadow-xl  my-5"
    >
      <PhotoProvider>
        <PhotoView src={img}>
          <figure style={{ height: "500px" }}>
            <img className="h-full w-full" src={img} alt="Shoes" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body text-start overflow-y-auto h-72">
        <h2 className="card-title">{prodName} </h2>
        <p>{description}</p>
        <span className="flex ">
          Seller Name: {name}{" "}
          {verifiedSeller ? <GoVerified></GoVerified> : "(Not Verified)"}
        </span>
        <p>Location of seller: {loc}</p>
        <p>Phone: {phone}</p>
        <p>Resale Price: {resalePrice} Tk.</p>
        <p>Original Price: {orgPrice} Tk.</p>
        <p>Used for: {yearsUse} Years</p>
        <p>Product Id: {prodId} </p>
        <label key={_id} htmlFor={_id} className="btn btn-success">
          Book Now{" "}
        </label>

        <BookNowModal
          img={img}
          resalePrice={resalePrice}
          id={_id}
          prodName={prodName}
        ></BookNowModal>
      </div>
    </div>
  );
};

export default WishlistCard;
