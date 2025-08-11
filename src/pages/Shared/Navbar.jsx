
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navdropdown, setNavDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleNavDropdown = () => {
    setNavDropdown(!navdropdown);
  };
  const links = (
    <>
      <li className="text-white">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Home
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Meet Me
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Skills
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink
          to="eduExp"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Experience
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Portfolio
        </ScrollLink>
      </li>
      <li className="text-white">
        <ScrollLink
          to="reachOut"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </li>
    </>
  );
  return (
    <div className="lg:px-24 navbar bg-[#00000020] fixed z-10 backdrop-blur-sm">
      <div className="navbar-start">
        <div onClick={handleNavDropdown} className="dropdown">
          <div
            onClick={handleDropdown}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {navdropdown && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow border border-[#6f139b] backdrop-blur-sm bg-[#1f052bcd] rounded-box w-52"
            >
              {links}
            </ul>
          )}
        </div>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer"
        >
          <h3 className="text-3xl lg:text-5xl font-black text-white">
            &lt;Ta<span className="text-[#6f139b]">Sin</span>/&gt;
          </h3>
        </ScrollLink>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;