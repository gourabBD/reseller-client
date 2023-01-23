import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Sliders = () => {
  return (
    <div
      className="hero  min-h-screen "
      style={{
        backgroundImage: `url("https://i.ibb.co/7kc7rnw/mobiles.webp")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content grid text-center text-neutral-content mt-80">
        <div className="max-w-md lg:h-48 md:h-48 sm:h-48 h-72 ">
          <TypeAnimation
            sequence={["Hello there!!", 1000, "", 2000]}
            wrapper="div"
            className="mb-5 text-5xl text-yellow-400 font-bold"
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              `You are not happy with your current phone? May be you can make others happy. That's why we are here, to give you a chance to make an efficient move with your used phone.`,
              1000,
              "",
              2000,
            ]}
            wrapper="div"
            className="mb-5  font-medium text-yellow-50 "
            repeat={Infinity}
          />

          
        </div>
        <Link to={"/products/All"}>
            <button className="btn btn-success ">Get Started</button>
          </Link>
      </div>
    </div>
  );
};

export default Sliders;
