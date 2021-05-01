import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState, useEffect } from "react";
import Home from "./components/"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
    </>
  );
}

export default App;
