import React from 'react';

const MyordersCard = ({order}) => {
    const {prodId,prodName,img}=order
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl border border-gray-600 my-2 ">
  <figure><img src={img} alt="Shoes"  /></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name: {prodName}</h2>
    <p>Product Id: {prodId}</p>
    
  </div>
</div>
        
    );
};

export default MyordersCard;