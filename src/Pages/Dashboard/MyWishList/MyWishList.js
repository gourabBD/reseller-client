import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import WishlistCard from "./WishlistCard";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  const [wishProd, setWishProd] = useState();
  useEffect(() => {
    fetch(`https://resale-site-server.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setWishProd(data));
  }, [setWishProd]);
  
  return (
    <div>
      <h1 className="text-3xl">My Wish List</h1>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {wishProd?.length > 0 ? (
          wishProd?.map((wish) => (
            <WishlistCard key={wish?._id} wish={wish}></WishlistCard>
          ))
        ) : (
          <div className="">
            <p className="text-2xl text-accent">
              There is no item in your wishlist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWishList;
