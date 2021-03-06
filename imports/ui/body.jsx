import React, { Component } from 'react';
import MyProgress from '../api/myprogress.js';
import AddnewProject from './addnewproject.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import Timeline from './Timeline.jsx';

class Body extends Component {

  render() {
      return (
        <div>
        <br/>
          <div>
          {this.props.loggedin ? <AddnewProject /> : null}
          <Timeline />
          </div>
        </div>
      );
  }
}
export default withTracker((props) => {
  const loggedin = Meteor.user();
  return {
    loggedin
  };
})(Body);
