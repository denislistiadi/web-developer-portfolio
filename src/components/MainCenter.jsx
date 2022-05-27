import React from "react";
import spense from "../Assets/Spense.png";
import yelpCamp from "../Assets/YelpCamp.png";

const MainCenter = () => {
  return (
    <div className="flex flex-col py-5 md:py-10 md:flex-row gap-5 md:gap-20">
      <div className="flex flex-col gap-5">
        <img src={spense} alt="Spense" className="w-full h-auto md:h-80" />
        <div className="font-Inter">
          <h3 className="font-Prata text-xl md:text-3xl py-2">Spense.com</h3>
          <p className="text-gray-500 leading-tight">
            Rethinking the way writers get paid , an open-source platform
            designed to help writers focus more on writing, and less on when and
            how they'll get paid. Project in collaborations with Codewell.cc
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <img src={yelpCamp} alt="YelpCamp" className="w-full h-auto md:h-80" />
        <div className="font-Inter">
          <h3 className="font-Prata text-xl md:text-3xl py-2">YelpCamp</h3>
          <p className="text-gray-500 leading-tight">
            Allowing backpack travelers to perfectly plan their trip through an
            open-source platform similar to TripAdvisor. With over 1m MAU,
            YelpCamp has been the crowd's favorite in 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainCenter;
