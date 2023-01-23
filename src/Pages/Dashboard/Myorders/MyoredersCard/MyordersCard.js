import React from 'react';

const MyordersCard = ({order}) => {
    const {prodId,prodName,img}=order
    return (
        
            <div data-aos="fade-right" className="card  bg-base-100 shadow-xl border border-gray-600 my-2  ">
  <figure><img className='w-full h-96' src={img} alt="Shoes"  /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Product Name: {prodName}</h2>
    <p>Product Id: {prodId}</p>
    
  </div>
</div>
        
    );
};

export default MyordersCard;