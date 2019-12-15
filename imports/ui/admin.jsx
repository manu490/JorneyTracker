import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import  {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';
import {BrowserRouter as Router, Redirect, Switch,
                 Route, Link}  from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';

class AdminLogin extends Component{
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.atForm,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }
  render(){
    if (!this.props.loggedin) {
      return(

        <div className="AdminLogin">
        <br/>
        <br/><span ref="container"/>

      </div>);
      }
      return (
        <Redirect exact to="/" />
        );
  }
}
export default withTracker((props) => {
  const loggedin = Meteor.user();
  return {
    loggedin
  };
})(AdminLogin);
