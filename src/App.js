import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";


import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Work from "./Components/Work";
import Index from "./Components/Index";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default App;
