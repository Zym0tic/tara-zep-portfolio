import React from "react";
//import Link
import { Link } from "react-scroll";
//import nav data
import { navData } from "../data";
//import components
import Socials from "./Socials";


const NavMobile = (props) => {
  //destructure nav data
  const { items } = navData;
  return (
    <nav className="w-full h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li  key={index}>
              <Link
                onClick={() => props.closeNavMobile(true)}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-2xl font-primary cursor-pointer uppercase"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="link hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer">
          <a href="https://tarazep.myshopify.com/" target="_blank" rel="noopener noreferrer">webstore</a>
        </li>
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};


export default NavMobile;
