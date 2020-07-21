import React, { useState, useEffect } from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioList,
  PortfolioItem,
  Span,
  Overlay,
  ImageWrapper,
  Image,
} from "./style.js";
import axios from "axios";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortofolioImage = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay></Overlay>
      </ImageWrapper>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>CSS</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>UX/UI</PortfolioItem>
        <PortfolioItem>SEO</PortfolioItem>
      </PortfolioList>

      <div className="box">{PortofolioImage}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
