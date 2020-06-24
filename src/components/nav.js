import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-evenly;
  marign: auto 0 auto 0;
`;

const StyledLink = styled.button`
  font-family: Jost *;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: rgb(249, 243, 242);
  text-decoration: none;

  @media (max-width: 667px) {
    font-size: 1.3rem;
  }
`;

const StyledLI = styled.li`
  margin: auto 60px auto 0;
  list-style-type: none;
`;

const NameLink = styled.h2`
  margin: auto 0 auto 10%;
  font-family: Canela;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgb(249, 243, 242);
  text-decoration: none;

  @media (max-width: 667px) {
    margin: 0;
    padding: 0 0 0 3rem;
    font-size: 2rem;
  }
`;

const navItems = [
  {
    title: 'home',
    titleHref: '#home',
    key: '1',
  },
  {
    title: 'about',
    titleHref: '#about',
    key: '2',
  },
  {
    title: 'projects',
    titleHref: '#projects',
    key: '3',
  },
  {
    title: 'contact',
    titleHref: '#contact',
    key: '4',
  },
];

export default function NavBar({ currentPage, setCurrentPage }) {
  return (
    <Nav>
      <NameLink>James Hardy</NameLink>
      <StyledUL>
        {navItems.map((item) => (
          <StyledLI>
            <StyledLink
              as="a"
              key={item.key}
              href={item.titleHref}
              onClick={() => setCurrentPage(item.title)}
            >
              {item.title}
            </StyledLink>
          </StyledLI>
        ))}
      </StyledUL>
    </Nav>
  );
}
