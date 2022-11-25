import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DashboardCategories = () => {
    const {user}=useContext(AuthContext)
    const [findingUser,setFindingUser]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            const found=data.find(d=>user?.email===d?.email)
            setFindingUser(found)
        })
    },[])
   console.log(findingUser)
    
    return (
        <div>
              <ul className="menu menu-vertical bg-gray-800  rounded-box">
        
           {
            user?.uid && findingUser?.category==='Buyer' || null ? <div>
            <li ><Link  to={'/dashboard/myorders'} >My Orders</Link></li>
            <li ><Link  to={'/dashboard/wishlist'} >My Wish list</Link></li>

            </div> :<></>
            }
           {
            user?.uid && findingUser?.category==='Seller'  ? <div>
            <li ><Link  to={'/dashboard/addproduct'} >Add A Product</Link></li>
            <li ><Link  to={'/dashboard/wishlist'} >My Products</Link></li>

            </div> :<></>
            }
           {
            user?.uid && findingUser?.category==='Admin'  ? <div>
            <li ><Link  to={'/dashboard/myorders'} >All Sellers</Link></li>
            <li ><Link  to={'/dashboard/wishlist'} >All Buyers</Link></li>

            </div> :<></>
            }
           
        
  
</ul>
        </div>
    );
};

export default DashboardCategories;