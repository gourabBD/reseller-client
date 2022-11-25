import React,{useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const SellerAddProductCard = () => {
    const { user } = useContext(AuthContext);
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    
    const handleAddProduct = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const description = form.description.value;
        const category = form.category.value;
        const prodName = form.prodName.value;
        const loc = form.loc.value;
        const postTime = form.postTime.value;
        const yearsUse = form.yearsUse.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const orgPrice = form.orgPrice.value;
        const resalePrice = form.resalePrice.value;
        const verifiedSeller = false
        
        const addProd = {
            img,
            description,
            category,
            prodName,
            loc,
            postTime,
            yearsUse,
            name:user?.displayName,
            email:user?.email,
            phone,
            orgPrice,
            resalePrice,
            verifiedSeller

        };
    
        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addProd),
        })
          .then((res) => res.json())
          .then((data) => {
            
    
            if (data.acknowledged) {
              
              toast.success("Booking Confirmed!");
              form.reset()
              
            } else {
              toast.error(data.message);
            }
          });
      };
    return (
        <div className='flex justify-center'>
            <form 
            onSubmit={handleAddProduct}
            className="grid grid-cols-1  gap-3 mt-10 w-1/2"
          >
            <input
              type="text"
              placeholder='Image Address Link'
              name="img"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              placeholder='Description'
              name="description"
              className="input w-full input-bordered "
            />
             <select name="category" className="select select-bordered w-full">
             
                <option value="smartPhone" >smartPhone </option>
                <option value="tablet" >tablet </option>
                <option value="featured" >featured </option>
                
              
            </select>
            <input
              type="text"
              placeholder='Product Name'
              name="prodName"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              placeholder='Location'
              name="loc"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              placeholder='Post Time'
              name="postTime"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              placeholder='Years of Using'
              name="yearsUse"
              className="input w-full input-bordered "
            />
            
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
             disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="orgPrice"
              type="text"
              placeholder="Original Price"
              className="input w-full input-bordered"
            />
            <input
              name="resalePrice"
              type="text"
              placeholder="Resale Price"
              className="input w-full input-bordered"
            />
            
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
    );
};

export default SellerAddProductCard;