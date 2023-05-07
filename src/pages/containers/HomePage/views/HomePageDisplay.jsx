import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { HomePageContext } from "./HomePageView";

const HomePageDisplay = () => {
  const {} = useContext(HomePageContext);

  return (
    <>
      <Row className="homepage">
        <h1 className="title">ARUN M S</h1>
        <p className="designation">Fullstack Web Developer</p>
      </Row>
    </>
  );
};

export default HomePageDisplay;
