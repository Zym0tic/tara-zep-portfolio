import React from 'react';
// import footer data
import { footerData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  // destructure footer data
  const { about, links } = footerData;
  return (
    <footer className='bg-dark section'>
      <div className='container mx-auto'>
        {/* grid */}
        <motion.div
          variants={staggerContainer}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='flex flex-col lg:flex-row lg:justify-between text-white gap-x-5 gap-y-14'
        >
          {/* about */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            {/* title */}
            <div className='font-primary text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            {/* subtitle */}
            <div className='leading-relaxed text-[#DBDBDB]'>
              {about.subtitle}
            </div>
            {/* address & phone & email */}
            <div className='flex flex-col gap-y-4 font-semibold text-[#DBDBDB]'>
              {/* email */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </motion.div>
          {/* links */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col xl:items-center'
          >
            <div>
              <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='flex flex-col gap-y-4 text-[#DBDBDB]'>
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a className='hover:text-white transition' href={href}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;