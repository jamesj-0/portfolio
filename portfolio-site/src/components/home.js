// Home.js
import React, { useContext } from 'react';
import { link } from 'react-router-dom';
// import { AppContext } from './appContext';

import { LandingImg, Title1 } from '../styles/home';
// import { useWindowSize } from '@react-hook/window-size';
import headShotImage from './Assets/16200025.JPG';

export default function Home() {
  return (
    <>
      <Title1>My Portfolio</Title1>
      <LandingImg src={headShotImage} alt="Image of James" />

      <Title1>Full Stack</Title1>
    </>
  );
}

/*  <Text1>
I’m a Full Stack Developer with a background in Music and Teaching. I am
passionate about social impact projects and working with new
technologies. I love electronic music, cooking and cats.
</Text1>
      <Title2>Full Stack</Title2>

*/
