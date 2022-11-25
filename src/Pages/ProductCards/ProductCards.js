import React, { useContext, useEffect, useState } from 'react';
import { VscVerified } from 'react-icons/vsc';
import { GoVerified } from "react-icons/go";
import { AuthContext } from '../../contexts/AuthProvider';
import BookNowModal from './BookNowModal/BookNowModal';
import {Navigate,  useNavigate } from 'react-router-dom';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';


const ProductCards = ({product,products}) => {
    const {user}=useContext(AuthContext)
    const {prodName,_id,description,loc,postTime,yearsUse,name,phone,orgPrice,resalePrice,verifiedSeller}=product
    const {catProduct,setCatProduct}=useState([])

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/products/${_id}`)
    //     .then(res=>res.json())
    //     .then(data=>setCatProduct(data))
    // },[])
    
   
    const handleModal=(event,_id)=>{
        event.preventDefault()
        const form=event.target;
        const customer=form.customer.value;
        const customerEmail=form.customerEmail.value;
        const resellingPrice=form.resellingPrice.value;
        const customerPhone=form.customerPhone.value;
        console.log(_id)
        form.reset()
        
        }
    return (
    <div>
     
        <div className="card lg:w-96 md:w-80 sm:w-auto bg-gray-800 shadow-xl p-5 my-5">
  <figure><img src={product?.img}alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">{prodName} </h2>
    <p>{description}</p>
    <span className='flex '>Seller Name: {name} {verifiedSeller?<GoVerified></GoVerified>:"(Not Verified)"}</span>
    <p>Location of seller: {loc}</p>
    <p>Phone: {phone}</p>
    <p>Resale Price: {resalePrice} Tk.</p>
    <p>Original Price: {orgPrice} Tk.</p>
    <p>Used for: {yearsUse} Years</p>
     <label  key={_id} htmlFor={_id} className="btn btn-primary">Book Now </label>
    <BookNowModal   resalePrice={resalePrice} id={_id} prodName={prodName} 
     ></BookNowModal>
   
   
  </div>
  
</div>

    </div>
    );
};

export default ProductCards;