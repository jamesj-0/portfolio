import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
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
          <h2>Project Zaatari</h2>
          <p>
            {`From concept through to completion, I designed & developed a
            serverless web app to help provide humanitarian relief & empower
            war-affected communities.`}
          </p>
          <ul>
            <li>Role: Dev-Ops</li>
            <li>Tech Stack:</li>
          </ul>
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
