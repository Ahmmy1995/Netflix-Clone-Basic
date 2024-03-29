import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      {/* backgorund image */}
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/dd485f49-8026-4349-8858-66604c8890cc/IT-it-20220725-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Loading"
        />

        {/* Overlay for background */}
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
