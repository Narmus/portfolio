import React from "react";
import { HomePageContextProvider } from "./views/HomePageView";
import HomePageDisplay from "./views/HomePageDisplay";

const HomePage = () => {
  return (
    <HomePageContextProvider>
      <HomePageDisplay />
    </HomePageContextProvider>
  );
};

export default HomePage;
