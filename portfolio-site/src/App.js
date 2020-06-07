import GlobalFonts from './fonts/fonts';
import React, { useContext } from 'react';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <>
      <GlobalFonts />
      <Router>
        <div className="App">
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
