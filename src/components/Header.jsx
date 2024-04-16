import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Header = ({ user}) => {
  return (
    <div className="fixed z-20 w-full h-[53px] shadow-lg flex justify-between items-center px-4 bg-[#050f1d] dark:bg-gray-300 text-gray-300 dark:text-gray-800">
      <Link
        className="cursor-pointer"
        to="/"
        onClick={() => window.scrollTo(0, 0)}
      >
        <h1>{user.name}</h1>
      </Link>
      <ul className="hidden md:flex space-x-10 mr-4 text-sm">
        <li className="cursor-pointer">
          <HashLink to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#skills">Skills</HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#services">Services</HashLink>
        </li>
        <li className="cursor-pointer">
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-0px] hover:px-1 duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-65px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[100px] h-[40px] flex justify-between items-center ml-[-60px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
