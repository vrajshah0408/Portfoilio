/** @format */

import React from "react";
import {MdNightsStay, MdWbSunny} from 'react-icons/md'
const Header = ({darkMode, setDarkmode}) => {
  return (
  <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-lg">Vraj Shah</h1>
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
