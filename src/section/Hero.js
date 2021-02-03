import styled from "styled-components";
import image from "../assets/images/programmer_avatar_white.png";

const Title = styled.h1`
  font-size: 42px;
  color: #ffffff;
  margin-bottom: 16px;
`;

const Lede = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  color: #ffffff;
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #77a6f7;
  min-height: 80vh;
`;

const HeroImage = styled.img`
  width: 150px;
  height: 150px;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroImage src={image}></HeroImage>
      <Title>Alejandro Munoz</Title>
      <Lede>Front-end Developer.</Lede>
    </HeroContainer>
  );
}

export default Hero;
