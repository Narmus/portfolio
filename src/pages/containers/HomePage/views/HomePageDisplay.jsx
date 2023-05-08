import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { HomePageContext } from "./HomePageView";

const HomePageDisplay = () => {
  const {} = useContext(HomePageContext);

  return (
    <>
      <Row className="homepage">
        <h1 className="title">ARUN M S</h1>
        <ul>
          <li>Web Developer</li>
          <li>Front-End Developer</li>
          <li>Back-End Developer</li>
          <li>Fullstack Developer</li>
        </ul>
      </Row>
    </>
  );
};

export default HomePageDisplay;
