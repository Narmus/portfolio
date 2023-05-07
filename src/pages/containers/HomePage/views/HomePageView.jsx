import React, { createContext } from "react";

export const HomePageContext = createContext({});
export const HomePageContextProvider = ({ children }) => {
  const providerValue = {};

  return (
    <HomePageContext.Provider value={providerValue}>
      {children}
    </HomePageContext.Provider>
  );
};
