import React from 'react';
import headShotImage from '../Assets/16200025.JPG';
import styled from 'styled-components';

const ContainerMain = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;
`;
const Container = styled.article`
  flex-grow: 1;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 0 0;
  width: 100vw;
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
`;

const Section = styled.section`
  display: flex;
`;

const Text = styled.p`
  flex-grow: 0.5;
  text-align: right;
  margin: 0 1rem 0 22%;
  min-width: 188px;
  max-width: 188px;
  color: rgb(249, 243, 242);
`;

const LandingImg = styled.img`
  flex-grow: 0.1;
  width: 30vw;
  height: 50vh;
  object-fit: cover;
  object-position: 40% 0;
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
