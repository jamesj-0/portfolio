import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronUpOutline } from '@styled-icons/evaicons-outline/ChevronUpOutline';

import NavBar from './components/nav';
import Home from './components/sections/home';
import About from './components/sections/about';
import Contact from './components/sections/contact';
import AsideButtons from './components/AsideButtons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  z-index: ${(props) => props.index};
`;
const StyledGit = styled(ChevronUpOutline)`
  height: 26px;
  position: relative;
  top: -4px;
  left: -2.6px;
  color: #f2ddcd;

  &:hover {
    color: #8b1e10;
  }
`;

const ReturnButton = styled.button``;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [displayReturn, setDisplayReturn] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    setDisplayReturn(
      currPos.y * -1 >
        Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0,
        ) *
          0.81005586592
        ? true
        : false,
    );
  });

  return (
    <>
      <Router>
        <main className="App">
          <Wrapper index={3} color="rgb(219, 132, 82)" id="home">
            <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <AsideButtons />
            <Home />
          </Wrapper>
          <Wrapper index={1} color="rgb(233,236,230)" id="about">
            <About />
          </Wrapper>
          <Wrapper index={1} color="rgb(229,229,229)" id="contact">
            <Contact />
          </Wrapper>
          {displayReturn === true ? (
            <ReturnButton as="a" href="#home" className="hvr-grow hvr-icon-bob">
              <StyledGit className="hvr-icon" />
            </ReturnButton>
          ) : null}
          <Switch>
            {/* <Route exact path="/" component={() => } /> */}
            {/* <Route exact path="/about" component={() => <About />} /> */}
            <Route exact path="/projects" component={() => <div />} />
            <Route exact path="/contact" component={() => <div />} />
          </Switch>
        </main>
      </Router>
    </>
  );
}
export default App;
