import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Advertisement from './Advertisement/Advertisement';
import Categories from './Categories/Categories';
import Sliders from './Sliders/Sliders';
import Sponsored from './Sponsored/Sponsored';




const Home = () => {
    
    return (
      <div className='lg:flex md:grid sm:grid '>
      <div className='relative'>
<div className='sticky top-0'>

      <div className=' rounded  mx-2 '>
      <section className=' mx-2 border  border-yellow-700 p-2'>
          <h3 className="text-3xl">Categories:</h3>
            <Categories></Categories>
          </section>
      </div>
</div>
      </div>

        <div className='mx-2 lg:my-0 my-5' >
          <section>
          
          <Sliders></Sliders>
          </section>
          
          <section className='my-5 '>
            <Advertisement></Advertisement>
          </section>
          <section className='my-5'>
            <Sponsored></Sponsored>
          </section>
 
        </div>
      </div>
    );
};

export default Home;