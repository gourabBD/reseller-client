import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCards from '../ProductCards/ProductCards';

const CategoryProducts = ({cat}) => {
  
    const products=useLoaderData()
    console.log(products)
    return (
        <div className='p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(prod=><ProductCards key={prod?._id} product={prod} prodId={prod._id} products={products}></ProductCards>)
            }
        </div>
    );
};

export default CategoryProducts;