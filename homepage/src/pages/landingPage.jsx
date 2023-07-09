import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[90vh] w-[100vw] bg-green-400 flex justify-center items-center">
      <div className="h-[100%] w-[90%] bg-green-500 flex">
        <div className="h-[100%] w-[25%] bg-green-600">{/* navabr */}</div>
        <div className="h-[100%] w-[50%] bg-gray-900">
          {/* main content section */}
        </div>
        <div className="h-[100%] w-[25%] bg-green-800">
          {/* right section -new section */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
