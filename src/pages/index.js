import React from "react";
import HeaderAndFooterComponent from "./Components/HeaderAndFooterComponent/HeaderAndFooterComponent";
import HomePage from "./containers/HomePage";

export default function Home() {
  return (
    <>
      <HeaderAndFooterComponent>
        <HomePage />
      </HeaderAndFooterComponent>
    </>
  );
}
