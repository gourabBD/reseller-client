import React from 'react';

const Sponsored = () => {
    return (
        <div >
            <h3 className="text-3xl my-5">Sponsored By</h3>
            <div className="carousel w-full">
  <div id="slider1" className="carousel-item relative w-full h-96">
    <img src="https://www.techandteen.com/wp-content/uploads/2018/07/Bikroy.com-Logo_f20150421125230-1280x720.jpg" className="w-full h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slider2" className="btn btn-circle">❮</a> 
      <a href="#slider2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slider2" className="carousel-item relative w-full h-96">
    <img src="https://futurestartup.com/wp-content/uploads/2020/10/ShopUp.jpg" className="w-full h-96" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slider1" className="btn btn-circle">❮</a> 
      <a href="#slider1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
        </div>
        </div>
    );
};

export default Sponsored;