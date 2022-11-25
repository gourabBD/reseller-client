import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import SellerProductCard from "./SellerProductCard";

const SellerProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://resale-site-server.vercel.app/products/sellerproduct/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <h1 className="text-3xl">My Selling Products:</h1>
      <div>
        {products?.map((product) => (
          <SellerProductCard
            key={product?._id}
            product={product}
          ></SellerProductCard>
        ))}
      </div>
    </div>
  );
};

export default SellerProduct;
