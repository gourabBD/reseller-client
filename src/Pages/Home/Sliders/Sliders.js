import React from 'react';
import { Link } from 'react-router-dom';

const Sliders = () => {
    return (
       
      <div className="hero min-h-screen " style={{ backgroundImage: `url("https://www.encashmobile.in/assests/blog/Is-it-safe-to-sell-my-old-mobile-online.jpg")` }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content mt-80">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-white font-bold">Hello there!!</h1>
          <p className="mb-5 text-white">You are not happy with your current phone? May be you can make others happy. That's why we are here, to give you a chance to make an efficient move with your used phone. </p>
          <Link to={'/products/All'}><button className="btn btn-primary">Get Started</button></Link>
        
        </div>
      </div>
    </div>
     
    );
};

export default Sliders;