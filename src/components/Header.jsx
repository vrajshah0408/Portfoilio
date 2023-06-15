import React, { useState } from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={`bg-white ${darkMode ? "dark:bg-gray-900" : ""} text-gray-900 ${darkMode ? "dark:text-white" : ""}`}>
      <nav className="flex justify-between items-center p-5">
        

        <div>
          <ul className={`hidden md:flex ${nav ? "flex" : ""}`}>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-2xl"
                onClick={toggleNav}
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <div className="pr-2" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdNightsStay className="text-2xl cursor-pointer" />
            ) : (
              <MdWbSunny className="text-2xl cursor-pointer" />
            )}
          </div>
          <div
            onClick={toggleNav}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  onClick={toggleNav}
                >
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
