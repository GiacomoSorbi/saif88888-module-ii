import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Work from "./Components/Work";
import Index from "./Components/Index";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Work" component={Work} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
