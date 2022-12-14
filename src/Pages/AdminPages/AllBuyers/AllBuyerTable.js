import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllBuyerTable = () => {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetch("https://resale-site-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setBuyers(data));
  }, [buyers]);

  const handleMakeAdmin = (buyer) => {
    fetch(`https://resale-site-server.vercel.app/users/${buyer?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ category: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${buyer?.name} is now an admin`);
         
        }
      });
  };

  const handleDeleteBuyer = (buyer) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this user?"
    );

    if (proceed) {
      fetch(`https://resale-site-server.vercel.app/users/${buyer?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`User deleted successfully!`);
            
          }
        });
    }
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
        {buyers
          ?.filter((b) => b?.category === "Buyer" || !b?.category)
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
                    className="btn btn-accent btn-sm"
                    onClick={() => handleDeleteBuyer(buyer)}
                  >
                    Delete User
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleMakeAdmin(buyer)}
                    className="btn btn-primary btn-sm"
                  >
                    Make Admin
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default AllBuyerTable;
