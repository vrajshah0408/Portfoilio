/** @format */

import React from "react";
import Section from "./common/Section";

import { FaGithub } from "react-icons/fa";
import fcc from "../assets/fcc.png";
import mern from "../assets/mern-stack.png";
import weather from "../assets/weather.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: fcc,
      title: " Code Camp BE Cert",
      github: "https://github.com/vrajshah0408/FileMetadata.git",
    },
    {
      id: 2,
      image: mern,
      title: "MERN Stack Social App",
      github: "https://github.com/vrajshah0408/Social-App.git",
    },
    {
      id: 3,
      image: weather,
      title: "React Weather App",
      github: "https://github.com/vrajshah0408/weather-app-custom-css.git",
    },
  ];

  return (
    <div name="portfolio">
      <Section
        title={"Portfolio"}
        subtitle={
          "These are some of my projects. I am still learning and growing and getting experience with different technologies"
        }
      >
        <div className="grid gap-9 lg:gap-14 lg:grid-cols-2">
          {projects.map(({ id, image, title, github }) => (
            <div
              key={id}
              className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden "
            >
              <img src={image} alt="{title" className="w-2/3" />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2>{title}</h2>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                {/* <a href={""}
              target="_blank"
            rel="noopener noreferrer">
                <FaExternalLinkSquareAlt />
              </a> */}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
