import React from "react";
import { heroData } from "../data.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = () => {
  //hero data destructured
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]">
      <div className="container mx-auto">
        {/* txt & btn */}
        <div className="text-white">
          {/* txt */}
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {/* btn */}
          <div>
            <button>
              {btnText} <div>{btnIcon}</div>
              </button>
          </div>
        </div>
        {/* outline text */}
        <div className="hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText"></div>
      </div>
    </section>
  );
};

export default Hero;
