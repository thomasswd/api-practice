import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { Register } from './components/Register'
import { Login } from './components/Login'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router> 
        <Header></Header>

        <Switch>
          <Route exact path="/" component= { Posts }></Route>
          <Route path="/auth/register" component= { Register }></Route>
          <Route path="/auth/login" component= { Login }></Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
