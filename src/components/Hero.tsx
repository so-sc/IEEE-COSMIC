import React from "react";
const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col md:pt-20 md:h-[50vh] h-[70vh] justify-center items-center">
        <p className="text-3xl max-w-6xl px-5 font-bold text-blue-700 leading-10">
          International Conference on Computing, Semiconductor, Mechatronics,
          Intelligent Systems, and Communications (COSMIC)
        </p>
        <p className="mt-5 max-w-6xl px-5 font-bold text-start w-full">
          22-23 November 2024 (Friday & Saturday)
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <img
          src="/bg.png"
          className="md:h-[50vh] flex w-full h-[30vh] object-cover"
          alt=""
        />
        <img
          src="/bg.png"
          className="h-[50vh] md:flex hidden object-cover"
          alt=""
        />
        <img
          src="/bg.png"
          className="h-[50vh] lg:flex hidden object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
