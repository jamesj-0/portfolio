import React, { useState } from 'react';
import NavBar from './components/nav';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [pageStatus, setPageStatus] = useState('home');

  return (
    <>
      <Router>
        <div className="App">
          <NavBar>{(pageStatus, setPageStatus)}</NavBar>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
            <Route exact path="/projects" component={() => <Projects />} />
            <Route exact path="/contact" component={() => <Contact />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
