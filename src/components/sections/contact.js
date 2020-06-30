import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0 0 0;
  flex-grow: 1;
  @media (max-width: 667px) {
    margin: 30rem 0 0 0;
  }
`;

const PageTitle = styled.h1`
  margin: 10vh 0 auto 10%;
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
    font-size: 90px;
    margin: 10rem auto 5rem auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  justify-content: space-between;
  background-color: #f2ddcd;
`;

const ContactTitle = styled.h2`
  font-family: Jost *;
  font-style: normal;
  font-weight: 200;
  font-size: 80px;
  line-height: 80px;
  margin: 0 0 0 0;
  padding: 1vh;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 0 rgba(0, 0, 0, 1);
    position: relative;
    top: -1px;
    left: -1px;
  }
`;

const ContactButton = styled.div`
  background: transparent;

  display: flex;
  height: inherit;
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;
  margin: 0 0 0 0;

  @media (max-width: 667px) {
    margin: 5rem auto;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  margin: 0 auto 0 10%;
  @media (max-width: 667px) {
    margin: 10vh 0 70vh 0;
  }
`;

export default function Contact() {
  return (
    <MainContainer>
      <StyledHeader>
        <PageTitle>Contact</PageTitle>
      </StyledHeader>
      <Section>
        <FlexDiv>
          <ContactButton>
            <ContactTitle as="a" href="mailto:jamesjhardy95@gmail.com">
              jamesjhardy95@gmail.com
            </ContactTitle>
          </ContactButton>
        </FlexDiv>
      </Section>
    </MainContainer>
  );
}
