import React, { useContext } from "react";
import { HomePageContext } from "./HomePageView";

const HomePageDisplay = () => {
  const {} = useContext(HomePageContext);

  return (
    <>
      <div className="homepage">
        <h1 className>ARUN M S</h1>
      </div>
    </>
  );
};

export default HomePageDisplay;
