import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {render} from 'react-dom';

export default class Footer extends Component{
  render(){
    return(
      <footer className="app-footer">
  <div>
    <span>&copy; 2019.All Rights Reserved</span>
  </div>
  <div className="ml-auto">
    <span>Powered by Student.</span>
  </div>
</footer>

 );
}
}
