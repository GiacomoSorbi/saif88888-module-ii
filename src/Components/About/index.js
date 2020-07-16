import React from "react";
import {
  AboutSection,
  AboutInfo,
  InfoTitle,
  Span,
  InfoDir,
  InfoDesc,
  Anchor,
} from "./style.js";
const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <AboutInfo>
          <InfoTitle>
            <Span>This is</Span> Me
          </InfoTitle>
          <InfoDir>Web Designer</InfoDir>
          <InfoDesc>
            I manage all aspects of client’s online content platforms and
            implementing content strategy across all platforms Registering web
            domain names and organizing the hosting of the website
          </InfoDesc>
          <InfoDesc>
            I plan, create and code web pages, using both technical and
            non-technical skills to produce websites that fit customer's
            requirements . for more
            <Anchor href="https://www.linkedin.com/in/sayif-said-37315928/">
              Please visit me on linkdenpage
            </Anchor>
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};

export default About;
