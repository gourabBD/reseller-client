import React, { useContext } from 'react';
import { VscVerified } from 'react-icons/vsc';
import { GoVerified } from "react-icons/go";
import { AuthContext } from '../../contexts/AuthProvider';


const ProductCards = ({product}) => {
    const {user}=useContext(AuthContext)
    const {prodName,_id,description,loc,postTime,yearsUse,name,phone,orgPrice,resalePrice,verifiedSeller}=product
    return (
        <div className="card lg:w-96 md:w-80 sm:w-auto bg-gray-800 shadow-xl p-5 my-5">
  <figure><img src={product?.img}alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">{prodName} </h2>
    <p>{description}</p>
    <span className='flex '>Seller Name: {name} {verifiedSeller?<GoVerified></GoVerified>:"(Not Verified)"}</span>
    <div className="card-actions justify-end">
    <label htmlFor="book-now" className="btn btn-primary">Book Now</label>
     
    </div>
  </div>
</div>
    );
};

export default ProductCards;