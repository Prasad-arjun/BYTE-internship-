import React from "react";
import "../index.css";
import searchIcon from "../assests/search.svg";
import notificationIcon from "../assests/notification.svg";
import profilePic from "../assests/profile.svg";

const TopPannel = () => {
  return (
    <div className=" bg-[#0CAFFF] h-[10vh] w-[100vw] flex flex-col justify-center items-center">
      <div className="  h-[100%] w-[94%] flex justify-between items-center">
        <div className="flex  items-center justify-evenly h-[100%] w-[75%]">
          <img src="" alt="logo" />
          <img
            src={searchIcon}
            alt="searchIcon"
            className="relative left-[7rem] z-[1] h-[1.8rem] pointer-events-none"
          />
          <input
            type="text"
            className="searchBarNav h-[55%] w-[75%] relative left-6 z-[0] bg-[#f4f4f5] rounded-3xl outline-none pl-[3.5rem]"
            placeholder="Enter project name ,title or keyword to search"
          ></input>
        </div>
        <div className="flex items-center justify-evenly h-[100%] w-[25%]  ">
          <div className=" ">
            <img
              src={notificationIcon}
              className="h-[2rem]"
              alt="notificationIcon"
            />
          </div>
          {/*   <div className="h-[4rem] w-[4rem] flex  justify-center items-center   rounded-xl text-sm">
            <a href="">
              <img src={profilePic} className="h-[2.2rem]" alt="profilePic" />
            </a>
          </div> 
           */}
          <div>
            <button className="buttonDepth bg-white h-[2.5rem] w-[5rem] mr-4 rounded-3xl hover:bg-[#0caeff6a] hover:text-white  shadow-blue-900 transition-all duration-200 ease-in">
              Register
            </button>
            <button className="buttonDepth bg-white h-[2.5rem] w-[5rem] rounded-3xl hover:bg-[#0caeff6a] hover:text-white  shadow-blue-900 transition-all duration-200 ease-in">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPannel;
