import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header/header';
import MainPage from '../main/main';
import Catalog from '../catalog/catalog';
import Available from '../available/available';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import About from '../about/about';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/available" component={Available} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
