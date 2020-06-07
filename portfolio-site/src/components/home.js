// Home.js
import React, { useContext } from 'react'
import { link } from 'react-router-dom'
import { AppContext } from './appContext'

import { LandingImg, Title1, GlobalStyle } from '../styles/home'
import { useWindowSize } from '@react-hook/window-size'
import headShotImage from './Assets/16200025.JPG'

export default function Home() {
  return (
    <>
      <Title1></Title1>
      <LandingImg src={headShotImage} alt="Image of James" />
    </>
  )
}
