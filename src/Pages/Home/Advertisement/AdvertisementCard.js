import React from 'react';

const AdvertisementCard = ({advertise}) => {
    const {img,description,prodName,yearsUse,_id}=advertise
    return (
        
            <div  className="card  bg-base-100 shadow-xl border border-gray-600 ">
            <figure><img style={{height: '300px'}} className='w-full ' src={img} alt="Shoes" /></figure>
  <div className="card-body text-left">
    <h2 className="card-title ">Device Name: <span>{prodName}</span> </h2>
    <p><span className='underline'>Description:</span> { description.length>100?`${description.slice(0,100)}  ...`: description }</p>
    <p><span className='underline'>Used for:</span> {yearsUse} year</p>
  </div>
  
</div>


    
    );
};

export default AdvertisementCard;