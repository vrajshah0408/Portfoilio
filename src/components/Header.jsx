/** @format */

import React from "react";
import {MdNightsStay, MdWbSunny} from 'react-icons/md'
const Header = ({darkMode, setDarkmode}) => {



   const links = () => [
    {
      id: 1,
      link: 'Home',
    },    
    {
      id: 1,
      link: 'Services',
    },
    {
      id: 1,
      link: 'Portfolio',
    },
    {
      id: 1,
      link: 'Contact Me',
    },


  ]
  return (
  <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-lg">Vraj Shah</h1>

      <div>
      <ul className="hidden md:flex">

      {links().map(({ id, link }) => (

    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">{link}</li>
  ))}
  
</ul>
      </div>
      
      <div onClick={() => setDarkmode(!darkMode)}>
      
        {darkMode ? (
        <MdNightsStay className="text-2xl cursor-pointer" />
        ) : (
        <MdWbSunny className="text-2xl cursor-pointer" />
        )}
        
      </div>
    </nav>
  </header>
  );
};
export default Header;
