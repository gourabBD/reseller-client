import React, { useContext, useEffect, useState } from "react";
import { VscVerified } from "react-icons/vsc";
import { GoVerified } from "react-icons/go";
import { AuthContext } from "../../contexts/AuthProvider";
import BookNowModal from "./BookNowModal/BookNowModal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PrivateRoute from "../../Routes/PrivateRoute/PrivateRoute";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const ProductCards = ({ product, products }) => {
  const { user } = useContext(AuthContext);
  
  const [findingUser, setFindingUser] = useState('');
  useEffect(() => {
    fetch("https://resale-site-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((d) => user?.email === d?.email);
        setFindingUser(found);
      });
  }, [user?.email]);
  


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
   if(user?.email){ fetch(`https://resale-site-server.vercel.app/wishlist`, {
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
      });}
      else{
        toast.error("LogIn First Please!")
      }
  };
  return (
    <div data-aos="flip-up" className="card lg:w-96 md:w-80 sm:w-auto bg-gray-800 shadow-xl p-5 my-5 ">
      <figure>
        <img className="h-64 w-full " src={product?.img} alt="Shoes" />
      </figure>
      <div className="card-body text-start h-64 overflow-y-auto   my-2">
        <h2 className="card-title">{prodName} </h2>
        <p ><span className="font-bold underline mx-1">Description:</span> {description}</p>
        <p className="flex ">
        <span className="font-bold underline mx-1">Seller Name:</span>   {name} {" "}
          {verifiedSeller ?  <GoVerified className="text-blue-600"></GoVerified> : "(Not Verified)"}
        </p>
        <p><span className="font-bold underline mx-1">Location of seller:</span> {loc}</p>
        <p> <span className="font-bold underline mx-1">Phone:</span>  {phone}</p>
        <p><span className="font-bold underline mx-1">Resale Price:</span>  {resalePrice} Tk.</p>
        <p><span className="font-bold underline mx-1">Original Price:</span>  {orgPrice} Tk.</p>
        <p><span className="font-bold underline mx-1">Used for:</span>  {yearsUse} Years</p>
       {user?.uid && findingUser?.category === "Buyer" ?<label key={_id} htmlFor={_id} className="btn btn-sm btn-primary">
          Book Now{" "}
        </label> :<></>}
       {user?.uid && findingUser?.category === "Buyer" ?<button
          onClick={() => handleWishlist(_id)}
          className="btn btn-secondary btn-sm "
        >
          Add to wishlist <FaShoppingCart className="ml-2"></FaShoppingCart>
        </button>: <></>}
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
