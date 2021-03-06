import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header'
import { PostsList } from './components/PostsList'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { AddPost } from './components/AddPost'
import { Post } from './components/Post'
import { GlobalProvider } from './context/GlobalState'
import { EditPost } from './components/EditPost'

function App() {
  return (
    <GlobalProvider>
      <Router> 
        <Header></Header>

        <Switch>
          <Route exact path="/" component= { PostsList }></Route>
          <Route path="/auth/register" component= { Register }></Route>
          <Route path="/auth/login" component= { Login }></Route>
          {/* protected route */}
          <Route path="/post/add" component= { AddPost }></Route>
          <Route exact path="/post/:id" component= { Post }></Route>
          <Route path="/post/:id/edit" component={ EditPost }></Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
