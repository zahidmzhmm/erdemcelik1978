import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { BiTask, BiUserCircle } from "react-icons/bi";
import { FiArchive, FiSettings } from "react-icons/fi";
import { GiProgression, GiRobotGrab } from "react-icons/gi";
import { IoCheckmarkDone } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = ({ toggle }) => {
  return (
    <>
      <div
        className={
          !toggle
            ? "h-screen z-10 hidden fixed lg:block transition ease-linear duration-300 w-1/5 p-3 bg-pr"
            : " h-screen lg:h-0 lg:w-0 lg:opacity-0 :overflow-hidden transition lg:hidden fixed ease-linear z-10 duration-300 w-60 p-3 bg-pr"
        }
      >
       
        <div className="flex items-center flex-col h-100 justify-evenly">
        <div className="pt-8">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
          <div className="flex items-center flex-col pt-16 w-full gap-3">
            <NavLink
              to="/dashboard"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <AiOutlineHome className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">DASHBOARD</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>

            <NavLink
              to="/newtask"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500 text-sm text-gray-300"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <BiTask className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">NEW TASK</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
            <NavLink
              to="/progress"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500 text-center text-gray-300 text-sm"
              activeClassName="bg-sr text-white"
            >
              {" "}
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <GiProgression className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">PROGRESS</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
            <NavLink
              to="/hold"
              className="w-full px-3 py-2 rounded-md  hover:bg-indigo-500 text-center text-gray-300 text-sm"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <GiRobotGrab className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">HOLD</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
            <NavLink
              to="/complete"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500 text-center text-gray-300 text-sm"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <IoCheckmarkDone className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">COMPLETE</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
            <NavLink
              to="/archive"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500 text-center text-gray-300 text-sm"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <FiArchive className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">ARCHIVE</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
          </div>
          <div className="flex items-center flex-col w-full gap-3">
            <NavLink
              to="/users"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500 text-center text-gray-300 text-sm"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <BiUserCircle className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">USERS</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
            <NavLink
              to="/settings"
              className="w-full px-3 py-2 rounded-md hover:bg-indigo-500 text-center text-gray-300 text-sm"
              activeClassName="bg-sr text-white"
            >
              <div className="flex animate items-center justify-between text-sm text-gray-300 ">
                <div className="flex items-center ">
                  <FiSettings className=" mr-3 w-4 h-4 text-sm" />{" "}
                  <h6 className="pt-1">SETTINGS</h6>
                </div>
                <AiOutlineRight />
              </div>
            </NavLink>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
