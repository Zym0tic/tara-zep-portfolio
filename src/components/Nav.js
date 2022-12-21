import React from "react";
//import link scroll
import { Link } from "react-scroll";
//import nav data
import { navData } from "../data";

const Nav = () => {
  //destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="link hover:border-b-2 hover:border-dark transition duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
