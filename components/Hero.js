import styled from "styled-components";
import styles from "../styles/Hero.module.css";

const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 16px;
  font-size: 49px;
  line-height: 0.4;
  letter-spacing: -0.033em;
  font-weight: 300;
  font-style: normal;
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
  width: 250px;
  height: 250px;

  overflow: hidden;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div className="avatar-background">
        <HeroImage
          className={styles.Hero}
          src="programmer_avatar_white.png"
        ></HeroImage>
      </div>
      <Title>
        Hello! I'm <b>Alejandro Munoz</b>, a front-end software developer
      </Title>
      <Lede>Front-end Developer.</Lede>
    </HeroContainer>
  );
}
