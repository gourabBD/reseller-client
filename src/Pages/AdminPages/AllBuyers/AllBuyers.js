import React, { useEffect, useState } from 'react';
import AllBuyerTable from './AllBuyerTable';

const AllBuyers = () => {
    const [buyers, setBuyers] =useState([])
    useEffect(()=>{
        fetch('https://resale-site-server.vercel.app/users')
        .then(res=>res.json())
        .then(data=>setBuyers(data))
    },[setBuyers])
    return (
        <div>
            <h2 className="text-3xl">All Buyers</h2>
            <div>
               
               <AllBuyerTable key={Math.random()} buyers={buyers} setBuyers={setBuyers}></AllBuyerTable>
            </div>
        </div>
    );
};

export default AllBuyers;