import React from 'react';

const AdvertisementCard = ({advertise}) => {
    const {img,description,prodName,yearsUse}=advertise
    return (
        <div className='mx-5 my-2'>
            <div className="card border  border-gray-600 lg:w-96 h-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"><strong>Device Name:</strong> {prodName}</h2>
    <p><span className='underline'>Description:</span> {description}</p>
    <p><span className='underline'>Used for:</span> {yearsUse} year</p>
  </div>
  <figure><img className='h-36 w-full' src={img} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default AdvertisementCard;