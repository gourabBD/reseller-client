import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ product }) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch(`https://resale-site-server.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="my-5  ">
      <ul className="menu menu-vertical   rounded-box">
        {categories?.map((cat) => (
          <li cat={cat} key={cat?._id}>
            <Link to={`/products/${cat?.category}`} cat={cat}>
              {cat?.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
