import styled from "styled-components";

export const AboutSection = styled.div`
  height: 500px;
  background: url("https://github.com/GiacomoSorbi/saif88888-module-ii/blob/gh-pages/images/Home.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
export const AboutInfo = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
`;
export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
  margin: 10px 0;
`;
export const Span = styled.span`
  font-weight: normal;
`;
export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const InfoDesc = styled.p`
  color: white;
  margin-bottom: 15px;
  line-height: 1.8;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: #fa8072;
  font-size: 20px;
  @media (max-width: 991px) {
    display: none;
  }
`;
