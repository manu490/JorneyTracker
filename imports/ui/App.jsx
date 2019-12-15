import React from 'react';
//import Footer from './footer.jsx';
import Header from './header.jsx';
import {BrowserRouter as Router, Redirect, Switch, Route, Link}  from "react-router-dom";
import Body from './body.jsx';
import Footer from './footer.jsx';

const App = () => (

  <span>
    <Header />
    <Body /><br/><br/><br/><br/><br/>
  <Footer />
  </span>
);

export default App;
