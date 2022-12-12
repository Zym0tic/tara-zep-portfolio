import React from "react";
import { heroData } from "../data.js";
//import link scroll
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  //hero data destructured
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className="bg-hero bg-cover bg-center min-h-[100vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-center"
      >
        {/* txt & btn */}
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          {/* txt */}
          <motion.h1 variants={fadeIn("down")} className="h1">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            className="mb-8 lg:mb-16 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          {/* btn */}
          <motion.div variants={fadeIn("down")}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
                {btnText} <div>{btnIcon}</div>
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
