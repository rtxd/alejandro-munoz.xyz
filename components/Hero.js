import styled from "styled-components";
import styles from "../styles/Hero.module.css";

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
  background-color: #0b0c10;
  min-height: 80vh;
`;

const HeroImage = styled.img`
  width: 300px;
  height: 300px;
  background-color: #1f2833;
  padding: 50px;
  border-radius: 150px;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroImage
        className={styles.Hero}
        src="programmer_avatar_white.png"
      ></HeroImage>
      <Title>
        Hello! I'm <b>Alejandro Munoz</b>, a front-end software developer
      </Title>
      <Lede>Front-end Developer.</Lede>
    </HeroContainer>
  );
}
