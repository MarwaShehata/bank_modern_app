import React, {useState } from "react";
import { close, logo, menu } from "./../assets";
import { navLinks } from "./../constants";
const Navbar = () => {
  const [toggle,setToggle] =useState(false)
  return (
    <nav className="w-full flex py-6 justify-between item-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none  hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal curser-pointer text[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img onClick={()=>setToggle((prev)=>!prev)} className="h[28px] w-[28px] object-contain curser-pointer" src={!toggle?menu:close} alt='menu'/>
      </div>
      <div className={`${toggle?"flex":"hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
      <ul className="list-none flex flex-col  items-start flex-1">
        {navLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal curser-pointer text[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
