/** @format */

import React from "react";
import Section from "./common/Section";
import web from "../assets/web.png";
import backend from "../assets/backend.png";
const Services = () => {
  const services = [
    {
      id: 1,
      image: web,
      title: "Web Development",
    },
    {
      id: 2,
      image: backend,
      title: "Backend Development",
    },
  ];

  return (
    <Section
      title="Services"
      subtitle="Here are some types of services I can provide"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {services.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain"
            />
            <h3 className="mt-5 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
