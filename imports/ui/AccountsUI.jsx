import React, { Component, useState, useEffect } from 'react';
import {Meteor}  from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import {BrowserRouter as Router, Redirect, Switch, Route, Link}  from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';

class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.atForm,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    // Just render a placeholder container that will be filled in
    if (!this.props.loggedin) {
      return <span ref="container"/>;
    }
    return (
      <Redirect to="/" refresh="true" />

    );
  }
}
export default withTracker((props) => {
  const loggedin = Meteor.user();
  return {
    loggedin
  };
})(AccountsUIWrapper);
