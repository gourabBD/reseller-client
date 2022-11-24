import React from 'react';

const Sliders = () => {
    return (
       
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img src="https://www.gsmarena.com.bd/images/products/Vivo-X90-Pro-Red.jpg" className="w-full h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96">
    <img src="https://www.gsmarena.com.bd/images/products/Honor-80.jpg" className="w-full h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
        </div>
        
     
    );
};

export default Sliders;