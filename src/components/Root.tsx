import React, { Component } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import '../assets/styles/main.scss';

import Home from './Home';
import Joke from './Jokes/Joke';
import Layout from './Layout';

const Root = () => (
  <Layout title='Joke Reader'>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/jokes/:id' component={Joke} />
        <Route path='/jokes/add' component={Joke} />
        <Route path='/jokes/:id/edit' component={Joke} />
        <Route path='/jokes/:id/play' component={Joke} />
      </Switch>
    </Router>
  </Layout>
);

export default Root;
