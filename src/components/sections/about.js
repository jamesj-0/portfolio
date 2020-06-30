import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.article``;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0 0 0;
`;

const PageTitle = styled.h1`
  margin: auto 0 auto 10%;
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
    margin: 3rem auto;
    font-size: 90px;
  }
`;

const Section = styled.section`
  display: flex;
  @media (max-width: 667px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  flex-grow: 0.5;
  text-align: justify;
  margin: 10vh auto auto 10%;
  width: 40%;
  min-width: 544px;

  font-family: Jost *;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;

  color: #000000;

  @media (max-width: 667px) {
    margin: 3rem auto;
    font-size: 22px;
  }
`;

const FlexDiv = styled.div`
  flex-grow: 1;
  margin: 0 10vw 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 58vh;
  @media (max-width: 667px) {
    height: 0;
    margin: 10rem auto;
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

  @media (max-width: 667px) {
    height: 100px;
    font-size: 40px;
    padding: 2rem;
  }
`;

export default function About() {
  return (
    <>
      <MainContainer>
        <StyledHeader>
          <PageTitle>about</PageTitle>
        </StyledHeader>
        <Section>
          <Text>
            I initially embarked on a university degree in Music Computing,
            building audio-reactive games and interactive digital instruments
            using Machine Learning.
            <br />
            <br />
            As of recently, I have been creating Full-Stack web applications. I
            have a passion for learning and expressing my creativity with a
            variety of technologies and programming languages.
            <br />
            <br />
            As a developer, I am dedicated to creating, developing, and
            delivering quality code, whilst also learning new technologies. I am
            positive with these core values, I will be a highly valued member
            within your team.
            <br />
            <br />
            Longer-term, I would like to contribute to projects with social
            impact and tech for better goals whilst encouraged and supported to
            continue learning and developing my programming skills. With
            experience and a keen interesting in mentoring, I want to not only
            work on my own skillset but I would love to help others develop
            theirs.
          </Text>
          <FlexDiv>
            <Button
              href="/JamesHardy_CV.pdf"
              colour="#DB8452"
              innerColour="#FFFFFF"
              download
            >
              Download CV
            </Button>
          </FlexDiv>
        </Section>
      </MainContainer>
    </>
  );
}
