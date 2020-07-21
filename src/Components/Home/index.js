import React from "react";

import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
} from "./style.js";
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle></HomeTitle>
          <HomeInfo>Sayif Said</HomeInfo>
          <HomeDesc>
            Iam a freelancer <Span> Web Designer </Span>
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDesc>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
