import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
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
`;

const StyledLI = styled.li`
  margin: auto 60px auto 0;
  list-style-type: none;
`;

const NameLink = styled(Link)`
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
`;

const navItems = [
  {
    title: 'home',
    titleHref: '/',
    key: '1',
  },
  {
    title: 'about',
    titleHref: '/about',
    key: '2',
  },
  {
    title: 'projects',
    titleHref: '/projects',
    key: '3',
  },
  {
    title: 'contact',
    titleHref: '/contact',
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
              className="hover-3"
              key={item.key}
              to={item.titleHref}
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
