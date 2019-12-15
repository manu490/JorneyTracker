import React, { Component } from 'react';
import MyProgress from '../api/myprogress.js';
import { Meteor } from 'meteor/meteor';

export default class AddnewProject extends Component {
  addProject(){
    event.preventDefault();
    var title = this.refs.title.value.trim();
    var url = this.refs.url.value.trim();
    Meteor.call('addProject',title,url);
    this.refs.title.value="";
    this.refs.url.value=""
  }
  render() {
    return (
      <div>
          <form className="add-link" onSubmit={this.addProject.bind(this)}>
           <input type="text" ref="title" placeholder="Add title"/><br/>
           <input type="text" ref="url" placeholder="Add new links"/><br/>
           <button type="submit">submit</button>
          </form>
      </div>
    );
  }
}
