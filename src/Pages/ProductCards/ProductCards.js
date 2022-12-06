import React, { useContext, useEffect, useState } from "react";
import { VscVerified } from "react-icons/vsc";
import { GoVerified } from "react-icons/go";
import { AuthContext } from "../../contexts/AuthProvider";
import BookNowModal from "./BookNowModal/BookNowModal";
import { Navigate, useNavigate } from "react-router-dom";
import PrivateRoute from "../../Routes/PrivateRoute/PrivateRoute";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const ProductCards = ({ product, products }) => {
  const { user } = useContext(AuthContext);
  const {
    prodName,
    _id,
    description,
    loc,
    postTime,
    yearsUse,
    name,
    phone,
    orgPrice,
    resalePrice,
    verifiedSeller,
    img,
  } = product;
  // const { catProduct, setCatProduct } = useState([]);

  const handleModal = (event, _id) => {
    event.preventDefault();
    const form = event.target;
    const customer = form.customer.value;
    const customerEmail = form.customerEmail.value;
    const resellingPrice = form.resellingPrice.value;
    const customerPhone = form.customerPhone.value;

    form.reset();
  };

  const handleWishlist = (id) => {
    const wishlistInfo = {
      img: img,
      prodId: id,
      prodName,
      description,
      loc,
      postTime,
      yearsUse,
      name,
      phone,
      orgPrice,
      resalePrice,
      verifiedSeller,
      email: user?.email,
    };
    fetch(`https://resale-site-server.vercel.app/wishlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added to wishlist!");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="card lg:w-96 md:w-80 sm:w-auto bg-gray-800 shadow-xl p-5 my-5">
      <figure>
        <img src={product?.img} alt="Shoes" />
      </figure>
      <div className="card-body text-start">
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
        <label key={_id} htmlFor={_id} className="btn btn-primary">
          Book Now{" "}
        </label>
        <button
          onClick={() => handleWishlist(_id)}
          className="btn btn-accent btn-sm"
        >
          Add to wishlist <FaShoppingCart className="ml-2"></FaShoppingCart>
        </button>
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

export default ProductCards;
