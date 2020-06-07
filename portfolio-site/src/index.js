import React, { useContext } from 'react'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './components/AppContext'
import * as serviceWorker from './serviceWorker'

function App() {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  )
}
export default App

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
