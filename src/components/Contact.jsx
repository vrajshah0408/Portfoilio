import React from "react";
import Section from "./common/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import talk from "../assets/talk.png";

const Contact = () => {
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

  return (
    <div name="contact">
    <Section
      title="Contact Me"
      subtitle="Here you can get in contact with me. You can also leave your information if you wish to be contacted."
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={talk} alt="contact info" className="w-32 h-32" />
        </div>
        <div>
          <p className="maz-w-xs md:max-w-lg font-extralight">
            I am open to do full-time positions and freelancing. You are open to
            contact me using your preferred medium.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-red-600"
              key={id}
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="p-8 text-left w-full">
          <form action="https://getform.io/f/a6a831d8-0d83-4787-9ea1-7ef9d4ac3770" method="POST">
            <div className="w-full">
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus-outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus-outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus-outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={10}
                  className="border-2 rounded-lg p-3 flex focus-outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default Contact;
