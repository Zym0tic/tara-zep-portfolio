import React from 'react';
//import contact data
import { contactData } from '../data';
//import motion
import { motion } from 'framer-motion';
//import fade in
import { fadeIn } from '../variants';

const Contact = () => {
  //destructure contact data
  const { title, info, form } = contactData;
  return <section className='bg-pink-200 section'>
    <div className='container mx-auto'>
      <div>
        {/* text */}
        <div>
          {/* title */}
        </div>
      </div>
    </div>
    </section>;
};

export default Contact;
