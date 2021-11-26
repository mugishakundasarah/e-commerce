import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar'
import './App.css';
import HomePage from './pages/HomePage';
const App = () => {
  return <Router>
    <Navbar/>
    <HomePage/>
    <main>
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/Collections" exact>
      </Route>
      <Route path="/Women" exact>
      </Route>
      <Route path="/Men" exact>
      </Route>
      <Route path="/About" exact>
      </Route>
      <Route path="/Contact" exact>
      </Route>
      <Redirect to="/"/>
    </Switch>
    </main>
  </Router>
}

export default App;
