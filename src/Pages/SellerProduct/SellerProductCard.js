import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const SellerProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const {
    img,
    description,
    category,
    prodName,
    _id,
    loc,
    postTime,
    yearsUse,
    name,
    email,
    phone,
    orgPrice,
    resalePrice,
    verifiedSeller,
  } = product;

  const handleDelete = () => {
    fetch(`https://resale-site-server.vercel.app/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(` ${prodName} product has been deleted successfully!`);
        }
      });
  };

  const handleAdvertise = (event) => {
    event.preventDefault();
    const form = event.target;

    const addProd = {
      img,
      description,
      category,
      prodName,
      loc,
      postTime,
      yearsUse,
      name: user?.displayName,
      email: user?.email,
      phone,
      orgPrice,
      resalePrice,
      verifiedSeller,
    };
    fetch("https://resale-site-server.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Advertising Confirmed!");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div className="card lg:w-96 md:w-80 sm:w-auto bg-gray-800 shadow-xl p-5 my-5">
        <figure>
          <img src={product?.img} alt="Shoes" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{prodName} </h2>
          <p>{description}</p>
          <span className="flex ">Seller Name: {name} </span>
          <p>Location of seller: {loc}</p>
          <p>Phone: {phone}</p>
          <p>Resale Price: {resalePrice} Tk.</p>
          <p>Original Price: {orgPrice} Tk.</p>
          <p>Used for: {yearsUse} Years</p>
          <button onClick={handleAdvertise} className="btn btn-primary">
            Advertise
          </button>
          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProductCard;
