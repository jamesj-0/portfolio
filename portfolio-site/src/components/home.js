import React from 'react';
import {
  BGContainer,
  LandingImg,
  Title1,
  Text1,
  Title2,
  Title3,
  Container,
} from '../styles/home';
import headShotImage from './Assets/16200025.JPG';

export default function Home() {
  return (
    <BGContainer>
      <Title1>My Portfolio</Title1>
      <Container>
        <Text1>
          I’m a Full Stack Developer with a background in Music and Teaching. I
          am passionate about social impact projects and working with new
          technologies. I love electronic music, cooking and cats.
        </Text1>
        <LandingImg src={headShotImage} alt="Image of James" />
      </Container>
      <Container>
        <Title2>Full Stack</Title2>
        <Title3>Developer</Title3>
      </Container>
    </BGContainer>
  );
}
