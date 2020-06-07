import React, { useContext } from 'react';
import { LandingImg, Title1, Text1, Title2 } from '../styles/home';
import headShotImage from './Assets/16200025.JPG';

export default function Home() {
  return (
    <>
      <Title1>My Portfolio</Title1>
      <Text1>
        I’m a Full Stack Developer with a background in Music and Teaching. I am
        passionate about social impact projects and working with new
        technologies. I love electronic music, cooking and cats.
      </Text1>
      <LandingImg src={headShotImage} alt="Image of James" />
      <Title1>Full Stack</Title1>
      <Title2>Developer</Title2>
    </>
  );
}
