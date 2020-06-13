import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin } from '@styled-icons/boxicons-logos';

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  width: auto;
  position: fixed;
  right: 2vw;
`;

const Button = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  margin: 10vh 0;
  height: 9rem;
  width: 2rem;
  background: transparent;
  color: black;
  text-decoration: none;
  background: ${(props) => props.colour};
  color: ${(props) => props.innerColour};
  font-family: Jost *;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 32px;
  text-transform: capitalize;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    top: -1px;
    left: -1px;
  }
`;

const InnerText = styled.p`
  positon: relative;
  transform: rotate(-90deg);
  margin: 10px 0 0;
`;

const StyledGit = styled(Github)`
  height: 25px;
  width: 25px;
  margin: 0 0 0 0.25rem;
`;

const StyledLI = styled(Linkedin)`
  height: 25px;
  width: 25px;
  margin: 0 0 0 0.25rem;
`;

const links = [
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com',
    colour: '#E9ECE6 ',
    innerColour: '#000000',
  },
  {
    title: 'github',
    href: 'https://www.github.com',
    colour: ' #2D4E35 ',
    innerColour: '#FFFFFF',
  },
];

export default function AsideButtons() {
  return (
    <StyledAside>
      {links.map((item) => (
        <Button
          colour={item.colour}
          innerColour={item.innerColour}
          href={item.href}
        >
          {item.title === 'github' ? <StyledGit /> : <StyledLI />}
          <InnerText>{item.title}</InnerText>
        </Button>
      ))}
    </StyledAside>
  );
}
