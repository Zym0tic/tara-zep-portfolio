import React from "react";
//import press data
import { pressData } from "../data";

const Press = () => {
  // destructure press data
  const { title, items } = pressData;
  return (
    <section className="section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]" name="press">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="h2">{title}</h2>
        {/* links */}
        <div>
          <ul>
            {items.map((item, index) => {
              //destructure item
              const { href, subtitle } = item;
              return (
                <div key={index}>
                  {/* link */}
                  <a href={href}>{subtitle}</a>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Press;
