import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './components/nav';
import Home from './components/sections/home';
import About from './components/sections/about';
import Contact from './components/sections/contact';
import AsideButtons from './components/AsideButtons';

const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  z-index: ${(props) => props.index};
`;

const ReturnButton = styled.button`
  z-index: 2;
  position: fixed;
  right: 0;
  top: 22vh;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: auto 30% auto 0;
  border: none;

  background: #f2ddcd;
  box-shadow: 4px 4px 1px #8b1e10;

  &:hover {
    transform: translate(0%, -30%);
    transition: 0.5s ease-out;
  }
`;
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Router>
        <main className="App">
          <Wrapper index={3} color="rgb(219, 132, 82)">
            <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <AsideButtons />
            <Home />
          </Wrapper>
          <Wrapper index={1} color="rgb(233,236,230)">
            <About />
          </Wrapper>
          <Wrapper index={1} color="rgb(229,229,229)">
            <Contact />
          </Wrapper>
          <ReturnButton />
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
