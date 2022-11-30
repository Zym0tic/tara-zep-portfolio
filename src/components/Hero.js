import React from "react";
import { heroData } from "../data.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = () => {
  //hero data destructured
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]">
      <div className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-center">
        {/* txt & btn */}
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          {/* txt */}
          <h1 className="h1">{title}</h1>
          <p>{subtitle}</p>
          {/* btn */}
          <div>
            <button>
              {btnText} <div>{btnIcon}</div>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
