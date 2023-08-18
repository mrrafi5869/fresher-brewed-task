import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import {
  BsFillArrowRightCircleFill,
  BsPatchCheckFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { SiCoursera } from "react-icons/si";
import { CgNotes } from "react-icons/cg";

import image1 from "../../assets/profile.jpg";

import { NavLink, Outlet } from "react-router-dom";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: RxDashboard, to: "" },
    { title: "Courses", src: SiCoursera, to: "Courses" },
    { title: "Progress ", src: BsPatchCheckFill, to: "" },
    { title: "Instructors", src: BsFillPersonFill, to: "" },
    { title: "Music Notes", src: CgNotes, to: "" },
  ];
  return (
    <div className="flex relative">
      <div
        className={` ${
          open ? "w-72" : "w-24 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <div
          className={`flex gap-x-2 items-center ${
            open && "bg-white text-black p-1 rounded-full"
          }`}
        >
          <img
            src={image1}
            className={`w-14 h-14 rounded-full cursor-pointer duration-500 ${
              !open && "w-14 h-12"
            }`}
            alt=""
            onClick={() => setOpen(!open)}
          />
          <span className={`origin-left duration-200 ${!open && "scale-0"}`}>
            <h3>MusicTheory</h3>
            <p>music@gmail.com</p>
          </span>
        </div>
        <ul className="pt-6 mt-5">
          {Menus.map((Menu, index) => (
            <NavLink to={`/${Menu.to}`}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-white font-semibold text-white hover:text-black text-sm items-center gap-x-4 mb-4`}
            >
              <Menu.src
                className="text-xl"
                onClick={() => setOpen(!open)}
              ></Menu.src>
              
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </NavLink>
          ))}
        </ul>
        <ul className="p-2 absolute left-0 bottom-0 w-full">
          <div className="border-t border-gray-500 mb-5"></div>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-white font-semibold text-white hover:text-black text-sm items-center gap-x-4 mb-3`}
          >
            <FiSettings className="text-xl"></FiSettings>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Settings
            </span>
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-white font-semibold text-white hover:text-black text-sm items-center gap-x-4`}
          >
            <FiLogOut className="text-xl"></FiLogOut>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              SignOut
            </span>
          </li>
        </ul>
      </div>
      
      <div className="h-screen flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SideNav;
