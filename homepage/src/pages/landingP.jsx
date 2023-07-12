import { NavbarContainer, FeedContainer, NewsContainer } from "../componets/LandingPage.styled";
import "../index.css";
import homeIcon from "../assests/home.svg";
import feedIcon from "../assests/newsfeed.svg";
import buildIcon from "../assests/build.svg";
import exploreIcon from "../assests/explore.svg";
import yourNetworkIcon from "../assests/connection.svg";
import messageIcon from "../assests/message.svg";
import goPremiumIcon from "../assests/diamond.svg";
import sampleNewsPhoto from "../assests/101409634.webp";
import likeIcon from "../assests/like.svg";
import commentIcon from "../assests/comment.svg";
import saveIcon from "../assests/save.svg";
import photoIcon from "../assests/photo.svg";
import videoIcon from "../assests/video.svg";
import calendarIcon from "../assests/event.svg";
import writeIcon from "../assests/article.svg";
import shareIcon from "../assests/share.svg";
import { useState } from "react";
import TopPannel from "./TopPannel";

const newsData = [
  {
    category: "EDUCATION",
    title: "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
    time: "7:00 AM | April 14",
  },
  // Rest of the newsData
];

const navbarList = [
  {
    icon: homeIcon,
    name: "Home",
    url: "www.google.com",
  },
  {
    icon: feedIcon,
    name: "Feed",
    url: "www.ogle.com",
  },
  {
    icon: buildIcon,
    name: "Build",
    url: "www.ogle.com",
  },
  {
    icon: exploreIcon,
    name: "Explore",
    url: "www.ogle.com",
  },
  {
    icon: yourNetworkIcon,
    name: "Network",
    url: "www.ogle.com",
  },
  {
    icon: messageIcon,
    name: "Message",
    url: "www.ogle.com",
  },
  {
    icon: goPremiumIcon,
    name: "Go Premium",
    url: "www.ogle.com",
  },
];

const LandingPage = () => {
  const [showComment, setShowComment] = useState(true);

  const handleCommentVisibility = () => {
    setShowComment(!showComment);
  };

  return (
    <main className="w-screen flex justify-center bg-green-00 items-center">
      <div className="h-auto w-11/12 bg-green-00 flex">
        <div className="h-[90vh] w-1/5 bg-green-00 relative top-10">
          <div className="h-[80%] w-full flex flex-col justify-evenly">
            {/* Navbar code */}
            <a href="" className="flex items-center relative left-5">
              <div className="h-[4rem] w-[4rem] rounded-2xl mr-4 bg-gray-200"></div>
              <div className="flex flex-col mt-2">
                <span className="h-[1.5rem] w-[3rem] bg-[#0CAFFF] rounded-sm text-center relative top-1 text-white">
                  Basic
                </span>
                <span className="font-semibold text-lg mt-2">Prathmesh</span>
              </div>
            </a>
            {navbarList.map((navbarItem, index) => (
              <a
                href={navbarItem.url}
                className={`flex relative left-5 ${
                  navbarItem.name === "Go Premium" ? "text-[#0CAFFF]" : ""
                }`}
                key={index}
              >
                <img
                  src={navbarItem.icon}
                  className="h-[1.6rem] mr-3"
                  alt="homeIcon"
                />
                <span className="font-semibold">{navbarItem.name}</span>
              </a>
            ))}
          
          </div>
        </div>

        <div className="h-[100vh] w-1/2 flex flex-col items-center bg-gray-00 relative left-8">
          {/* Start a post section */}
          <div className="flex flex-col justify-center bg-gray-50 border-2 border-gray-200 h-[20%] w-[95%] rounded-xl relative top-16">
            {/* Start a post form */}
            <img
                src="https://placekitten.com/40/40"
                className="h-[2.8rem] rounded-full"
                alt="profileIcon"
              />
              <input
                type="text"
                className="searchBarNav h-[6vh] w-[78%] relative left-2 border-2 border-gray-300 bg-[#f4f4f5] rounded-3xl outline-none pl-4"
                placeholder="Start a post"
              ></input>
            </div>
            <div className="flex justify-evenly items-start relative top-2">
              <div className="center">
                <img
                  src={photoIcon}
                  className="h-[1.5rem] m-1"
                  alt="photoIcon"
                />
                <span>Photo</span>
              </div>
              <div className="center">
                <img
                  src={videoIcon}
                  className="h-[1.8rem] m-1"
                  alt="profileIcon"
                />
                <span>Video</span>
              </div>
              <div className="center">
                <img
                  src={calendarIcon}
                  className="h-[1.5rem] m-1"
                  alt="profileIcon"
                />
                <span>Event</span>
              </div>
              <div className="center">
                <img
                  src={writeIcon}
                  className="h-[1.5rem] m-1"
                  alt="profileIcon"
                />
                <span>Write article</span>
              </div>
            </div>
          </div>
</div>
          {/* Feed section */}
          <div className="w-[95%] relative top-[6rem] bg-slate-00">
            <div className="flex flex-col space-y-4 border-2 border-gray-100 rounded-xl">
              <div className="bg-white rounded-lg shadow-lg p-4">
                {/* Feed content */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://placekitten.com/40/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                  </div>
                </div>
                <p className="mt-4">
                  Lorem ipsum dolorsit amet, consectetur adipiscing elit. Sed
                  mattis convallis ante, ac facilisis ipsum commodo a. Nunc eu
                  efficitur risus.
                </p>
                <img
                  src="https://placekitten.com/500/300"
                  alt="Feed Image"
                  className="mt-4 rounded-lg w-[100%] h-[60%]"
                />
                <div className="h-[0.1vh] w-[100%] bg-black mt-4"></div>
                <div className="flex  justify-around items-center space-x-4 mt-4">
                  <div className="flex">
                    <img
                      src={likeIcon}
                      className="h-[1.8rem] mr-2"
                      alt="likeButton"
                    />
                    <span>Like</span>
                  </div>
                  <div className="flex" onClick={handleCommentVisibilty}>
                    <img
                      src={commentIcon}
                      className="h-[1.5rem] mr-2 "
                      alt="commentButton"
                    />
                    <button>Comment</button>
                  </div>
                  <div className="flex">
                    <img
                      src={saveIcon}
                      className="h-[1.6rem] mr-2"
                      alt="saveButton"
                    />
                    <span>Save</span>
                  </div>
                  <div className="flex">
                    <img
                      src={shareIcon}
                      className="h-[1.4rem] mr-2"
                      alt="shareButton"
                    />
                    <span>share</span>
            </div>  
        </div>
      
        </div>

        <NewsContainer className="h-[100%] w-1/4 bg-green-00 flex justify-center items-start">
          <div className="h-[80%] w-[85%] bg-gray-50 border-2 border-gray-200 rounded-md relative top-16 left-6 flex justify-center items-center p-4">
            <div className="h-[90%] w-[95%] bg-gray-00">
              {/* News content */}
            </div>
          </div>
        </NewsContainer>
      
    </main>
  );
};

export default LandingPage;
