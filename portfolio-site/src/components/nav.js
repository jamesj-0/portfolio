import React from 'react';

import {
  Nav,
  HomeLink,
  HomeLinkHome,
  ListItem,
  ListItemHome,
} from '../styles/nav';

export default function NavBar({ pageStatus }) {
  return (
    <Nav>
      {pageStatus === 'home' ? (
        <>
          <HomeLinkHome to="/">James Hardy</HomeLinkHome>
          <ul>
            <ListItemHome>Home</ListItemHome>
            <ListItemHome to="/about">About</ListItemHome>
            <ListItemHome to="/projects">Projects</ListItemHome>
            <ListItemHome to="/contact">Contact</ListItemHome>
          </ul>
        </>
      ) : (
        <>
          <HomeLink to="/"> James Hardy</HomeLink>
          <ul>
            <ListItem to="/">Home</ListItem>
            <ListItem to="/about">About</ListItem>
            <ListItem to="/projects">Projects</ListItem>
            <ListItem to="/contact">Contact</ListItem>
          </ul>
        </>
      )}
    </Nav>
  );
}
