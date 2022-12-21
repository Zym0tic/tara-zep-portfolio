import React from "react";
//import press data
import { pressData } from "../data";
//import motion
import { motion } from "framer-motion";
//import fade in
import { fadeIn } from "../variants";

const Press = () => {
  // destructure press data
  const { title, items } = pressData;
  return (
    <section
      className="section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]"
      name="press"
    >
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto text-white"
      >
        {/* title */}
        <h2 className="h2 text-white">{title}</h2>
        {/* links */}
        <div>
          <ul>
            {items.map((item, index) => {
              //destructure item
              const { href, subtitle } = item;
              return (
                <div
                  key={index}
                  className="mb-6 font-bold leading-[187%] tracking-[0.02em]"
                >
                  {/* link */}
                  <a
                    href={href}
                    target="_blank"
                    className="link hover:border-b-2 hover:border-white transition duration-300 cursor-pointer"
                  >
                    {subtitle}
                  </a>
                </div>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Press;
