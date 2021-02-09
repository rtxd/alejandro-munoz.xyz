import styled from "styled-components";

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: greenyellow;
  min-height: 80vh;
`;

const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  color: #ffffff;
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
    </SkillsContainer>
  );
}
