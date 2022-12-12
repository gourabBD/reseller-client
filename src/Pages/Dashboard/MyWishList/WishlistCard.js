import React from 'react';
import { GoVerified } from 'react-icons/go';
import BookNowModal from '../../ProductCards/BookNowModal/BookNowModal';

const WishlistCard = ({wish}) => {
    const {_id,email,description,img,loc,name,orgPrice,phone,postTime,prodId,prodName,resalePrice,verifiedSeller,yearsUse}=wish
    return (
        <div className="card  w-full bg-gray-800 shadow-xl  my-5">
        <figure>
          <img className='h-96 w-full' src={img} alt="Shoes" />
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
          <p>Product Id: {prodId} </p>
          <label key={_id} htmlFor={_id} className="btn btn-primary">
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