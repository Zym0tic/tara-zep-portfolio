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
    <section className="bg-pink-200 section">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            {/* title */}
            <h2>{title}</h2>
            {/* info items */}
            {info.map((item, index) => {
              //destructure item
              const { title, subtitle, address, phone, email, link } = item;
              return (
                <div key={index}>
                  {/* title */}
                  <div>{title}</div>
                  {/* subtitle */}
                  <div>{subtitle}</div>
                  {/* address, phone and email */}
                  <div>
                    {/* address */}
                    <div>
                    <div>{address.icon}</div>
                    <div>{address.name}</div>
                    </div>
                    {/* phone */}
                    <div>
                    <div>{phone.icon}</div>
                    <div>{phone.number}</div>
                    </div>
                    {/* email */}
                    <div>
                    <div>{email.icon}</div>
                    <div>{email.address}</div>
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
