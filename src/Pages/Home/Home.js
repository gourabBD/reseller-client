import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Advertisement from './Advertisement/Advertisement';
import Categories from './Categories/Categories';
import Sliders from './Sliders/Sliders';
import Sponsored from './Sponsored/Sponsored';




const Home = () => {
    
    return (
        <div className='mx-5 ' >
          <section>
          <h3 className='text-3xl my-5'>Upcoming devices in upcoming days</h3>
          <Sliders></Sliders>
          </section>
          <section className='my-10'>
          <h3 className="text-3xl">Categories:</h3>
            <Categories></Categories>
          </section>
          <section className='my-5'>
            <Advertisement></Advertisement>
          </section>
          <section className='my-5'>
            <Sponsored></Sponsored>
          </section>
 
        </div>
    );
};

export default Home;