import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const [verified, setVerified] = useState(true);

  const [sellers, setsellers] = useState([]);
  useEffect(() => {
    fetch("https://resale-site-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setsellers(data));
  }, [sellers?.length]);

  const handleVerified = (seller) => {
    fetch(
      `https://resale-site-server.vercel.app/products/sellerproduct/${seller?.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ verifiedSeller: true }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setVerified(false);
          toast.success(`${seller?.name} is now a verified seller`);
          window.location.reload();
        }
      });
  };

  const handleMakeAdmin = (seller) => {
    fetch(`https://resale-site-server.vercel.app/users/${seller?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ category: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${seller?.name} is now an admin`);
          window.location.reload();
        }
      });
  };

  const handleDeleteseller = (seller) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this user?"
    );

    if (proceed) {
      fetch(`https://resale-site-server.vercel.app/users/${seller?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(`User deleted successfully!`);
            window.location.reload();
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl m-5">All sellers</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete User</th>
                <th>Make Admin</th>
                <th>Verify Seller</th>
              </tr>
            </thead>
            {sellers
              ?.filter((b) => b?.category === "Seller")
              ?.map((seller) => (
                <tbody key={seller?._id}>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{seller?.name}</div>
                          <div className="text-sm opacity-50">
                            {seller?.category
                              ? seller?.category
                              : "Social media account (seller)"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{seller?.email}</td>

                    <th>
                      <button
                        className="btn btn-accent btn-sm"
                        onClick={() => handleDeleteseller(seller)}
                      >
                        Delete User
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleMakeAdmin(seller)}
                        className="btn btn-primary btn-sm"
                      >
                        Make Admin
                      </button>
                    </th>
                    <th>
                      {
                        <button
                          onClick={() => handleVerified(seller)}
                          className="btn btn-primary btn-sm"
                        >
                          Verify Seller
                        </button>
                      }
                    </th>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
