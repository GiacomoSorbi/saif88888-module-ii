import React from "react";
import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  PartTitle,
  Line,
  PartDesc,
} from "./style.js";

const Work = () => {
  return (
    <WorkSection>
      <div className="container">
        <WorkTitle>
          <Span>My</Span> Work
        </WorkTitle>
        <WorkPart first="1">
          <Icon className="icon fa fa-chain fa-2x"></Icon>

          <PartTitle>Memory Game</PartTitle>
          <Line />
          <PartDesc>
            <a href="https://saif88888.github.io/react-deplo/">
              Visit My Game!
            </a>
          </PartDesc>
        </WorkPart>

        <WorkPart>
          <Icon className="icon fa fa-bolt fa-2x"></Icon>
          <PartTitle>Contact List App</PartTitle>
          <Line />
          <PartDesc>
            <a href="https://saif88888.github.io/react-deploy/">
              Visit My Contact app!
            </a>
          </PartDesc>
        </WorkPart>

        <WorkPart>
          <Icon className="icon fa fa-tachometer fa-2x"></Icon>
          <PartTitle>Registration form</PartTitle>
          <Line />
          <PartDesc>
            <a href="https://saif88888.github.io/react1/">Visit My Form!</a>
          </PartDesc>
        </WorkPart>
      </div>
    </WorkSection>
  );
};

export default Work;
