import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Points from "./Points";
import Content from "./Content";

import { connect } from "react-redux";
import { initializeApp } from "./redux/movies";

 class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
    
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Nav />
        <Content />
        <Points />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, {initializeApp} )(App));
