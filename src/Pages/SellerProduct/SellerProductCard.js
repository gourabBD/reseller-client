import React from 'react';
import toast from 'react-hot-toast';

const SellerProductCard = ({product}) => {
    const {img,description,category,prodName,_id,loc,postTime,yearsUse,name,email,phone,orgPrice,resalePrice,verifiedSeller}=product;

    const handleDelete=()=>{
        
        fetch(
            `http://localhost:5000/products/${_id}`,
            {
              method: "DELETE",
             
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                
                toast.success(
                  ` ${prodName} product has been deleted successfully!`
                );
              }
            });

    }

    return (
        <div>
             <div className="card lg:w-96 md:w-80 sm:w-auto bg-gray-800 shadow-xl p-5 my-5">
  <figure><img src={product?.img}alt="Shoes" /></figure>
  <div className="card-body text-start">
    <h2 className="card-title">{prodName} </h2>
    <p>{description}</p>
    <span className='flex '>Seller Name: {name} </span>
    <p>Location of seller: {loc}</p>
    <p>Phone: {phone}</p>
    <p>Resale Price: {resalePrice} Tk.</p>
    <p>Original Price: {orgPrice} Tk.</p>
    <p>Used for: {yearsUse} Years</p>
    <button onClick={handleDelete} className='btn btn-primary'>Delete</button>
     
    
   
   
  </div>
  
</div>
        </div>
    );
};

export default SellerProductCard;