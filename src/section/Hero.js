import styled from "styled-components";

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

function Hero() {
  return (
    <HeroContainer>
      <Title>Alejandro Munoz</Title>
      <Lede>Front-end Developer.</Lede>
    </HeroContainer>
  );
}

export default Hero;
