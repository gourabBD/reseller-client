import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllBuyerTable = () => {
  const [buyers, setBuyers] =useState([])
  useEffect(()=>{
      fetch('https://resale-site-server.vercel.app/users')
      .then(res=>res.json())
      .then(data=>setBuyers(data))
  },[buyers?.length])

  const handleDeleteBuyer = (buyer) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this user?"
    );
  
  if(proceed){fetch(`https://resale-site-server.vercel.app/users/${buyer?._id}`,{
        method:"DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          
          if (data.deletedCount > 0) {
            toast.success(`User deleted successfully!`);
            window.location.reload();
          }
        });}
    
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>

            <th>Delete User</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        {buyers?.filter((b) => b?.category === "Buyer" || !b?.category)
          ?.map((buyer) => (
            <tbody key={buyer?._id}>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{buyer?.name}</div>
                      <div className="text-sm opacity-50">
                        {buyer?.category
                          ? buyer?.category
                          : "Social media account (Buyer)"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{buyer?.email}</td>

                <th>
                  <button
                  className="btn btn-ghost btn-xs"
                  onClick={()=> handleDeleteBuyer(buyer)}>
                    Delete User
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Make Admin</button>
                </th>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default AllBuyerTable;
