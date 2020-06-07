import React from 'react';

import {
  Nav,
  HomeLink,
  HomeLinkHome,
  ListItem,
  ListItemHome,
} from '../styles/nav';

export default function NavBar({ currentPage, setCurrentPage }) {
  return (
    <Nav>
      {currentPage === 'home' ? (
        <>
          <HomeLinkHome
            key="home"
            to="/"
            onClick={() => setCurrentPage('home')}
          >
            James Hardy
          </HomeLinkHome>
          <ul>
            <ListItemHome
              key="home"
              to="/"
              onClick={() => setCurrentPage('home')}
            >
              Home>Home
            </ListItemHome>
            <ListItemHome
              key="about"
              to="/about"
              onClick={() => setCurrentPage('about')}
            >
              About
            </ListItemHome>
            <ListItemHome
              key="projects"
              to="/projects"
              onClick={() => setCurrentPage('projects')}
            >
              Projects
            </ListItemHome>
            <ListItemHome
              key="contact"
              to="/contact"
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </ListItemHome>
          </ul>
        </>
      ) : (
        <>
          <HomeLink key="home" to="/" onClick={() => setCurrentPage('home')}>
            James Hardy
          </HomeLink>
          <ul>
            <ListItem key="home" to="/" onClick={() => setCurrentPage('home')}>
              Home
            </ListItem>
            <ListItem
              key="about"
              to="/about"
              onClick={() => setCurrentPage('about')}
            >
              About
            </ListItem>
            <ListItem
              key="projects"
              to="/projects"
              onClick={() => setCurrentPage('projects')}
            >
              Projects
            </ListItem>
            <ListItem
              key="contact"
              to="/contact"
              onClick={() => setCurrentPage('contact')}
            >
              Contact
            </ListItem>
          </ul>
        </>
      )}
    </Nav>
  );
}
