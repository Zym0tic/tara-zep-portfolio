import React from "react";
//import about data
import { aboutData } from "../data";
// import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "../variants";

const About = () => {
  //destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          {/* numbers */}
          <div className="flex flex-col lg:flex-row flex-1">
            <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">TZ</div>
          </div>
          {/* text */}
          <div className="flex-1 h-full xl:mt-48">
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end bg-pink-200">
              <div className="max-w-[530px] text-grey">
                <p>{subtitle1}</p>
                <p>{subtitle2}</p>
                <button>
                  {btnText} <div>{btnIcon}</div>
                  {""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
