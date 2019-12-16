import React, { Component } from 'react';
import MyProgress from '../api/myprogress.js';
import { Meteor } from 'meteor/meteor';

export default class AddnewProject extends Component {
  addProject(){
    event.preventDefault();
    var title = this.refs.title.value.trim();
    var skill1 = this.refs.skill1.value.trim();
    var skill2 = this.refs.skill2.value.trim();
    var skill3 = this.refs.skill3.value.trim();
    var skill4 = this.refs.skill4.value.trim();
    var skill5 = this.refs.skill5.value.trim();
    var skill6 = this.refs.skill6.value.trim();
    Meteor.call('addProject',title,skill1,skill2,skill3,skill4,skill5,skill6);
    this.refs.title.value ="";
    this.refs.skill1.value="";
    this.refs.skill2.value="";
    this.refs.skill3.value="";
    this.refs.skill4.value="";
    this.refs.skill5.value="";
    this.refs.skill6.value="";
  }
  render() {
    return (
      <div>
          <form className="add-link" onSubmit={this.addProject.bind(this)}>
           <input type="text" ref="title" placeholder="Add title"/><br/>
           <input type="text" ref="skill1" placeholder="skill"/>
           <input type="text" ref="skill2" placeholder="skill"/>
           <input type="text" ref="skill3" placeholder="skill"/>
           <input type="text" ref="skill4" placeholder="skill"/>
           <input type="text" ref="skill5" placeholder="skill"/>
           <input type="text" ref="skill6" placeholder="skill"/>
           <button type="submit">submit</button>
          </form>
      </div>
    );
  }
}
