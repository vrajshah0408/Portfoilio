/** @format */

import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://github.com/vrajshah0408",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/vraj-shah-837665208/",
      icon: <FaLinkedin />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 2) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <div name="home">
    <section className="min-h-screen flex flex-col justify-start items-center p5 text-center">
      <h2 className="text-5xl text-red-600 uppercase font-thin">Vraj Shah</h2>
      <h3 className="py-3 text-2xl">Software Dev</h3>
      <p className="max-w-xl font light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, Welcome to my
        portfolio site. I am a Computer Scicene Gradute form Gerogia State
        University. I like to work on full stack.
      </p>
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-red-600"
          >
            {icon}
          </a>
        ))}
      </div>
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradiant-to-b from-red-600 rounded-full pt-5"
        />
        <a
          href="/Vraj Resume 2023.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
    </div>
  );
};

export default Hero;
