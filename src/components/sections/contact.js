import React from 'react';
import styled from 'styled-components';
import { Send } from '@styled-icons/feather/Send';

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
`;

const PageTitle = styled.h1`
  margin: auto 0 auto 10%;
  font-family: Jost *;
  font-style: normal;
  font-weight: 200;
  font-size: 70px;
  line-height: 101px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  background-color: #f2ddcd;
`;

const copyrightText = styled.p``;

const ContactTitle = styled.h2`
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 80px;
  margin: 0 7vh 0 0;
  padding: 1vh;
  display: flex;
  align-items: center;
  text-decoration-line: underline;

  color: #000000;
`;

const ContactButton = styled.button`
  background: transparent;
  display: flex;
  height: inherit;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -1px;
    left: -1px;
  }
`;

const StyledSend = styled(Send)`
  width: 70px;
  margin: auto 0;
`;

const FlexDiv = styled.div`
  display: flex;
  margin: 0 auto 0 10%;
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
            <ContactTitle>hey@jameshardy.site</ContactTitle>
            <StyledSend />
          </ContactButton>
        </FlexDiv>
      </Section>
    </MainContainer>
  );
}
