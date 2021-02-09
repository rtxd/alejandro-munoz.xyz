import styled from "styled-components";
import { Grid, Icon } from "semantic-ui-react";
import styles from "../styles/Skills.module.css";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 42px;
  text-transform: uppercase;
  color: #00887a;
`;

export default function Skills() {
  return (
    <Container>
      <Grid verticalAlign="middle">
        <Grid.Column floated="left">
          <Title>Skills</Title>
        </Grid.Column>
        <Grid.Column floated="right">
          <Icon name="pencil alternate" size="large"></Icon>
        </Grid.Column>
      </Grid>
      <Grid className={styles.skillsSection} rows={2}>
        <div>
          <h3 className={styles.heading}>Languages</h3>
          <ul>
            <li>Javscript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>C#</li>
            <li>C++</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>Libraries</h2>
          <ul>
            <li>React</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </Grid>
    </Container>
  );
}
