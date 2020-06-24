import React from 'react';
import headShotImage from '../Assets/16200025.JPG';
import styled from 'styled-components';

const ContainerMain = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;
  @media (max-width: 667px) {
    flex-direction: column;
  }
`;
const Container = styled.article`
  flex-grow: 1;
    @media (max-width: 667px) {
    200vw;
    }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;
  width: 100vw;
  @media (max-width: 667px) {
    margin: 1rem auto;
    padding: 3rem 0px 0px 0px;
  }
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
  color: rgb(249, 243, 242);
  @media (max-width: 667px) {
    margin: 1rem auto;
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
  text-align: right;
  margin: 0 1rem 0 22%;
  min-width: 188px;
  max-width: 188px;
  color: rgb(249, 243, 242);
  @media (max-width: 667px) {
    text-align: left;
    margin: 1rem auto;
    min-width: 70%;
    max-width: 50%;
    font-size: 1.5rem;
  }
`;

const LandingImg = styled.img`
  flex-grow: 0.2;
  width: 30vw;
  height: 50vh;
  object-fit: cover;
  object-position: 40% 0;
  @media (max-width: 667px) {
    text-align: center;
    margin: 5rem auto;
    min-width: 70%;
    max-width: 50%;
    font-size: 1.5rem;
  }
`;
const StyledH2 = styled.h2`
  margin: 0 auto 0 auto;
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: rgb(249, 243, 242);
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
    position: relative;
    top: -5.5rem;
  }
`;

const StyledSpan = styled.span`
  font-family: Jost *;
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  margin: 0 auto 0 auto;
  color: rgb(249, 243, 242);
  display: flex;
  align-items: center;
  text-align: center;
`;
export default function Home() {
  return (
    <>
      <StyledHeader>
        <PageTitle>my portfolio</PageTitle>
      </StyledHeader>
      <ContainerMain>
        <Container>
          <Section>
            <Text>
              I’m a Full Stack Developer with a background in Music and
              Teaching. I am passionate about social impact projects and working
              with new technologies. I love electronic music, cooking and cats.
            </Text>
            <LandingImg src={headShotImage} alt="Image of James" />
            <FlexDiv>
              <StyledH2>FullStack</StyledH2>
              <StyledSpan>Developer</StyledSpan>
            </FlexDiv>
          </Section>
        </Container>
      </ContainerMain>
    </>
  );
}
