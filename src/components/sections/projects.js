import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 10%;
`;

const PageTitle = styled.h1`
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
`;

const ProjectsSection = styled.section`
  display: flex;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;

const StyledH2 = styled.h2`
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 45px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin: 0 auto;
`;

const StyledP = styled.p`
  font-family: Jost *;
  font-style: normal;
  font-weight: light;
  font-size: 16px;
  line-height: 16px;
  text-align: justify;

  max-width: 410px;
`;

const StyledUL = styled.ul``;

const Stack = styled.li`
  list-style-type: none;
`;

const Role = styled.li`
  list-style-type: none;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.a`
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: transparent;
  color: black;
  text-decoration: none;
  background: ${(props) => props.colour};
  color: ${(props) => props.innerColour};
  font-family: Jost *;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -1px;
    left: -1px;
  }
`;

export default function Projects() {
  return (
    <MainContainer>
      <PageTitle>Projects</PageTitle>
      <ProjectsSection>
        <ProjectContainer>
          <StyledH2>Project Zaatari</StyledH2>
          <StyledP>
            {`From concept through to completion, I designed & developed a
            serverless web app to help provide humanitarian relief & empower
            war-affected communities.`}
          </StyledP>
          <StyledUL>
            <Role>Role: Dev-Ops</Role>
            <Stack>Tech Stack:</Stack>
          </StyledUL>
          <ButtonWrapper>
            <Button colour="rgb(219,132,82)" innerColour="rgb(0,0,0)">
              Visit App
            </Button>
            <Button colour="rgb(45,78,53)" innerColour="rgb(255,255,255)">
              Visit Code
            </Button>
          </ButtonWrapper>
        </ProjectContainer>
        <ProjectContainer>
          <StyledH2>Bechdel & Beyond</StyledH2>
          <StyledP>
            {`A community-driven service that allows people to rate films based 
            on the gender representation proposed by the Bechdel test. 
            This Web App explores gender in-equality in the film industry. `}
          </StyledP>
          <StyledUL>
            <Role>Role: Scrum Master</Role>
            <Stack>Tech Stack:</Stack>
          </StyledUL>
          <ButtonWrapper>
            <Button colour="rgb(219,132,82)" innerColour="rgb(0,0,0)">
              Visit App
            </Button>
            <Button colour="rgb(45,78,53)" innerColour="rgb(255,255,255)">
              Visit Code
            </Button>
          </ButtonWrapper>
        </ProjectContainer>
      </ProjectsSection>
    </MainContainer>
  );
}
