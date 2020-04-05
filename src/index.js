import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './contact'
import About from './about-us'
import Header from "./header";
import Footer from "./footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/about-us" component={About} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
