import React from 'react';
import { Title1, Text1, Button, BGContainer } from '../styles/about';

export default function About() {
  return (
    <BGContainer>
      <Title1>About</Title1>
      <Text1>
        I initially embarked on a university degree in Music Computing, building
        audio-reactive games and interactive digital instruments using Machine
        Learning.
        <br />
        <br />
        As of recently, I have been creating Full-Stack web applications. I have
        a passion for learning and expressing my creativity with a variety of
        technologies and programming languages.
        <br />
        <br />
        As a developer, I am dedicated to creating, developing, and delivering
        quality code, whilst also learning new technologies. I am positive with
        these core values, I will be a highly valued member within your team.
        <br />
        <br />
        Longer-term, I would like to contribute to projects with social impact
        and tech for better goals whilst encouraged and supported to continue
        learning and developing my programming skills. With experience and a
        keen interesting in mentoring, I want to not only work on my own
        skillset but I would love to help others develop theirs.
      </Text1>
      <Button>DOWNLOAD CV</Button>
    </BGContainer>
  );
}
