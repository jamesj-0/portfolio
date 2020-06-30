import React from 'react';
import styled from 'styled-components';
import zaatariRender from '../Assets/Renders.svg';
import bechdelRender from '../Assets/Renders2.svg';

const MainContainer = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  margin: 10vh auto 0 10%;
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #000000;

  @media (max-width: 667px) {
    margin: 4rem auto;
    font-size: 90px;
  }
`;

const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;

  @media (max-width: 667px) {
    flex-direction: column;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
`;

const RenderImg = styled.img`
  width: 30vw;
  object-fit: cover;
  margin-top: 5rem;
  @media (max-width: 667px) {
    width: 150vw;
    margin: 0 auto;
  }
`;

const BechdelImage = styled(RenderImg)`
  margin-top: 3.3rem;
`;

const StyledH2 = styled.h2`
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin: 5vh auto;
`;

const StyledP = styled.p`
  font-family: Jost *;
  font-style: normal;
  font-weight: light;
  font-size: 16px;
  line-height: 16px;
  text-align: justify;

  max-width: 410px;

  @media (max-width: 667px) {
    width: 100vw;
    margin: 0 auto 2rem auto;
    font-size: 20px;
    min-width: 500px;
    line-height: 25px;
  }
`;

const StyledUL = styled.ul`
  padding: 0;
`;
const Role = styled.li`
  list-style-type: none;
  margin: 1vh 0;

  @media (max-width: 667px) {
    margin: 1vh 0 0 5.3rem;
  }
`;

const Stack = styled.li`
  list-style-type: none;
  margin: 1vh 0;
  @media (max-width: 667px) {
    margin: 1vh 0 0 5.3rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  @media (max-width: 667px) {
    margin: 1rem 5rem 5rem 5rem;
  }
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
  text-transform: uppercase;

  background: ${(props) => props.colour};
  color: ${(props) => props.innerColour};
  font-family: Jost *;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -1px;
    left: -1px;
  }
  @media (max-width: 667px) {
    width: 10rem;
    height: 3rem;
    text-align: center;
    justify-content: center;
    font-size: 24px;
  }
`;

export default function Projects() {
  return (
    <MainContainer>
      <PageTitle>Projects</PageTitle>
      <ProjectsSection>
        <ProjectContainer>
          <RenderImg src={zaatariRender} alt="Radio Zaatari Figma Mockup" />
          <StyledH2>Project Zaatari</StyledH2>
          <StyledP>
            {`From concept through to completion, I designed & developed a
            serverless web app to help provide humanitarian relief & empower
            war-affected communities.`}
          </StyledP>
          <StyledUL>
            <Role>Role: Dev-Ops</Role>
            <Stack>
              Tech Stack: React, Netlify, Lambda, Airtable, Styled Components,
              <br />
              Material UI, Jest, Cypress, Story Book
            </Stack>
          </StyledUL>
          <ButtonWrapper>
            <Button
              href="radio-zaatari.netlify.app/"
              colour="rgb(219,132,82)"
              innerColour="rgb(0,0,0)"
            >
              Visit App
            </Button>
            <Button
              href="https://github.com/fac19/Zaatari-Radio"
              colour="rgb(45,78,53)"
              innerColour="rgb(255,255,255)"
            >
              Visit Code
            </Button>
          </ButtonWrapper>
        </ProjectContainer>
        <ProjectContainer>
          <BechdelImage src={bechdelRender} alt="Bechdel Figma Mockup" />
          <StyledH2>Bechdel & Beyond</StyledH2>
          <StyledP>
            {`A community-driven service that allows people to rate films based 
            on the gender representation proposed by the Bechdel test. 
            This Web App explores gender in-equality in the film industry. `}
          </StyledP>
          <StyledUL>
            <Role>Role: Scrum Master</Role>
            <Stack>
              Tech Stack: Node.Js Express PostgreSQL, React,
              <br />
              Material UI, Tape, Jest, Travis CI, Cypress
            </Stack>
          </StyledUL>
          <ButtonWrapper>
            <Button
              href="https://bechdelbeyond.netlify.app/"
              colour="rgb(219,132,82)"
              innerColour="rgb(0,0,0)"
            >
              Visit App
            </Button>
            <Button
              href="https://github.com/fac19/Bechdel-Beyond"
              colour="rgb(45,78,53)"
              innerColour="rgb(255,255,255)"
            >
              Visit Code
            </Button>
          </ButtonWrapper>
        </ProjectContainer>
      </ProjectsSection>
    </MainContainer>
  );
}
