import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
const BookNowModal = ({prodName,id,resalePrice,img}) => {
    const {user}=useContext(AuthContext)
    const {modalError,setModalError}=useState()


    
 const handleModal=(event)=>{
event.preventDefault()
const form=event.target;

const customer=form.customer.value;
const customerEmail=form.customerEmail.value;
const custphone=form.custphone.value;
const recLocation=form.recLocation.value;

const purchaseInfo={
  img:img,
  prodId: id,
  prodName,
  customer,
  customerEmail,
  custphone,
  recLocation
}
fetch("http://localhost:5000/bookedProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        

        if (data.acknowledged) {
          
          toast.success("Purchase Confirmed!");
          
        } else {
          toast.error(data.message);
        }
      });

form.reset()

}
    return (
        <>
        <input type="checkbox" id={id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label 
              htmlFor={id}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{prodName}</h3>
            <form
              onSubmit={handleModal}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                type="text"
                name='resalePrice'
                disabled
                value={resalePrice}
                className="input w-full input-bordered "
              />
              
              <input
                name="customer"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input w-full input-bordered"
              />
              <input
                name="customerEmail"
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="Email Address"
                className="input w-full input-bordered"
              />
              <input
                name="custphone"
                type="text"
                placeholder="Buyer's Phone Number"
                className="input w-full input-bordered"
                required
              />
              <br />
              <input
                name="recLocation"
                type="text"
                placeholder="Location of recieving the product"
                className="input w-full input-bordered"
                required
              />
              <br />
              {user?.email ? <input
                className="btn btn-primary w-full"
                type="submit"
                value="Purchase"
              /> : <h1 className='text-red-600 text-xl text-center'>Log In first to buy anything.</h1>}
            </form>
          </div>

          
        </div>
      </>
    );
};

export default BookNowModal;