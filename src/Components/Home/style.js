import styled from "styled-components";

export const HomeSection = styled.div`
  height: 1100px;
  width: 100%;
  background-image: url("images/Sayiff.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
  @media (max-width: 767px) {
    height: 850px;
  }
`;

export const HomeInformation = styled.div`
  position: absolute;
  top: 8.5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeTitle = styled.h2`
  font-size: 80px;
  font-weight: bold;
  color: #5e5e5e;
`;

export const HomeInfo = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;

  @media (min-width: 467px) and (max-width: 668px) {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const HomeDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: white;
  margin-bottom: 20px;
  @media (max-width: 667px) {
      font-size: 10px;
    };
  }
`;

export const Span = styled.span`
  color: #000;
`;
export const HomeBtn = styled.button`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  @media (max-width: 667px) {
    font-size: 10px;
    width: 100px;
  }

  &:hover {
    background: #fff;
    color: #eb5424;
  }
`;
