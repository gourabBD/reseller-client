import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCards from '../ProductCards/ProductCards';

const CategoryProducts = ({cat}) => {
  
    const products=useLoaderData()
    console.log(products)
    return (
        <div className='p-5'>
            {
                products.map(prod=><ProductCards key={prod?._id} product={prod} prodId={prod._id} products={products}></ProductCards>)
            }
        </div>
    );
};

export default CategoryProducts;