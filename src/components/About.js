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
    <section className="bg-pink-200">
      <div className="container mx-auto">
        <div>
          {/* numbers */}
          <div>
            <div>01</div>
          </div>
          {/* text */}
          <div>
            <h2>{title}</h2>
            <div>
              <div>
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
