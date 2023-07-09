import React from "react";
import homeIcon from "../assests/home.svg";
import feedIcon from "../assests/newsfeed.svg";
import buildIcon from "../assests/build.svg";
import exploreIcon from "../assests/explore.svg";
import yourNetworkIcon from "../assests/connection.svg";
import messageIcon from "../assests/message.svg";
import goPremiumIcon from "../assests/diamond.svg";

const LandingPage = () => {
  return (
    <div className="h-[90vh] w-[100vw] bg-green-00  flex justify-center items-center">
      <div className="h-[100%] w-[90%] bg-green-00  flex">
        <div className="h-[95%]  w-[25%]  relative top-8">
          <div className="h-[80%] w-[100%] flex flex-col justify-evenly ">
            <a href="" className=" flex items-center relative left-5">
              <div className="h-[4rem] w-[4rem] rounded-2xl mr-4 bg-gray-200"></div>
              <div className="flex flex-col mt-2">
                <span className="h-[1.5rem] w-[3rem] bg-[#0CAFFF] rounded-sm text-center relative top-1 text-white">
                  Basic
                </span>
                <span className="font-semibold text-lg mt-2">Prathmesh</span>
              </div>
            </a>
            <a href="#" className="flex relative left-5">
              <img src={homeIcon} className="h-[1.6rem] mr-3" alt="homeIcon" />
              <span className="font-semibold">Home</span>
            </a>
            <a href="" className="flex relative left-5">
              <img src={feedIcon} className="h-[1.3rem] mr-3" alt="feedIcon" />
              <span className="font-semibold">Feed</span>
            </a>
            <div className="flex relative left-5">
              <img
                src={buildIcon}
                className="h-[1.6rem] mr-3"
                alt="buildIcon"
              />
              <span className="font-semibold">Build</span>
            </div>
            <a href="" className="flex relative left-5">
              <img
                src={exploreIcon}
                className="h-[1.6rem] mr-3"
                alt="exploreIcon"
              />
              <span className="font-semibold">Explore</span>
            </a>
            <a href="" className="flex relative left-5">
              <img
                src={yourNetworkIcon}
                className="h-[1.8rem] mr-3"
                alt="yourNetworkIcon"
              />
              <span className="font-semibold">Network</span>
            </a>
            <a href="" className="flex relative left-5">
              <img
                src={messageIcon}
                className="h-[1.3rem] mr-3"
                alt="messageIcon"
              />
              <span className="font-semibold">Message</span>
            </a>
            <a href="" className="flex relative left-5">
              <img
                src={goPremiumIcon}
                className="h-[1.6rem] mr-3"
                alt="goPremiumIcon"
              />
              <span className="font-semibold text-[#0CAFFF]">Go Premium</span>
            </a>
          </div>
        </div>

        <div className="h-[100%] w-[55%] bg-gray-00">
          {/* main content section */}
        </div>
        <div className="h-[100%] w-[30%] bg-green-00">
          {/* right section -new section */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
