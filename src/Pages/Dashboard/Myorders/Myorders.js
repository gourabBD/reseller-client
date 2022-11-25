import React,{useState,useContext,useEffect} from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Myorders = () => {
    const [orders,setOrders]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/bookedProducts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
            <h1>My orders  {orders.length}</h1>
        </div>
    );
};

export default Myorders;