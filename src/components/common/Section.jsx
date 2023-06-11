/** @format */

import React from "react";

const Section = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 text-center">
      <h3 className=" pu-3 text-3xl lg:text-5xl">{title}</h3>
      <p className="max-w-wl font-light text-gray-500 mb-10 text-sm md:text-base">{subtitle}</p>
      {children}
    </section>
  );
};

export default Section;
