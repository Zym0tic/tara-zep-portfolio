import React from "react";
//import contact data
import { contactData } from "../data";
//import motion
import { motion } from "framer-motion";
//import fade in
import { fadeIn } from "../variants";

const Contact = () => {
  //destructure contact data
  const { title, info, form } = contactData;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            {/* title */}
            <h2 className="h2 max-w-[490px]">{title}</h2>
            {/* info items */}
            {info.map((item, index) => {
              //destructure item
              const { title, subtitle, address, phone, email, link } = item;
              return (
                <div key={index}>
                  {/* title */}
                  <div className="font-primary uppercase font-medium text-xl mb-3">{title}</div>
                  {/* subtitle */}
                  <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">{subtitle}</div>
                  {/* address, phone and email */}
                  <div className='flex flex-col gap-y-3 mb-8'>
                    {/* email */}
                    <div className="flex items-center gap-[10px]">
                    <div>{email.icon}</div>
                    <div className="font-medium">{email.address}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
