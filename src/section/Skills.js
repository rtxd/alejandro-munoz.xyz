import { Grid } from "@material-ui/core";
import { SectionHeading } from "../styled components/SectionStyles";
import styled from "styled-components";

const Heading = styled.h3`
  font-size: 20px;
`;

function Skills() {
  return (
    <section>
      <SectionHeading>Skills</SectionHeading>
      <Grid container direction="row" justify="space-evenly">
        <div>
          <Heading>Languages</Heading>
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
          <Heading>Libraries</Heading>
          <ul>
            <li>React</li>
            <li>Vue.js</li>
          </ul>
        </div>
      </Grid>
    </section>
  );
}

export default Skills;
