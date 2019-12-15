import React,{Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {render} from 'react-dom';
import "/client/main.css";

class Header extends Component{
  userLogout(){
    Meteor.logout();
    window.location.reload();
  }
  render(){
    return(
       <nav className="single-right-button">
       { this.props.loggedin ?<button className="btn-danger" onClick={this.userLogout}> Logout</button>
      : null }
      </nav>
    );
  }
}

export default withTracker((props) => {
  const loggedin = Meteor.user();
  return {
    loggedin
  }
})(Header);
