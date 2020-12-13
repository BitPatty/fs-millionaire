import React, { useState } from 'react';
import { TextBackgroundCorrect, TextBackgroundDefault, TextBackgroundSelected } from './assets';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Helmet from 'react-helmet';
import Game from './views/Game';
import Home from './views/Home';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={TextBackgroundCorrect} />
        <link rel="preload" as="image" href={TextBackgroundDefault} />
        <link rel="preload" as="image" href={TextBackgroundSelected} />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/room/:id">
            <Game />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
