import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TextBackgroundCorrect, TextBackgroundDefault, TextBackgroundSelected } from './assets';

import Game from './views/Game';
import Helmet from 'react-helmet';
import Home from './views/Home';
import React from 'react';

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
