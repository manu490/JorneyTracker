import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from './vertical-timeline/vtl.js';
import MyProgress from '../api/myprogress.js';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
//import 'react-vertical-timeline-component/style.min.css';
class Timeline extends Component{
  constructor(){
    super();
    this.state = {
      subsciptions:{
        projects:Meteor.subscribe("allProjects")
      }
    }
  }
  ComponentWillUnmount(){
    this.state.subscription.projects.stop();
  }
  removeProject(project){
      event.preventDefault();
      Meteor.call('removeProject',project);
  }
  makeTimeline(project) {
    const status = project.complete ? "Completed" : "";
    return (
      <VerticalTimelineElement key={project._id}
      className="vertical-timeline-element--work"
      date="2011 - present"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon = {<img className="Icon_img" src="Icon.png" />} >
        <a href={project.url} target="_blank">{project.title}</a>
        {this.props.loggedin ? <button className="rm-project"
                                onClick={()=>this.removeProject(project._id)}>
                                    Delete
                                </button> : null }
    <div>
      <div className="panel-group">
        <div className="panel panel-default">
        <a data-toggle="collapse" href="#collapse1">
          <div className="panel-heading">
            <h4 className="panel-title">
            Collapsible panel
            </h4>
          </div>
      </a>
    <div id="collapse1" className="panel-collapse collapse">
      <div className="panel-body">
        <dl className="skills-diagram">
        <dt className="skill-5">UNIX</dt>
        <dd>5</dd>
        <dt className="skill-10">Ruby</dt>
        <dd>7</dd>
        <dt className="skill-3">Java</dt>
        <dd>3</dd>
        <dt className="skill-8">PHP</dt>
        <dd>8</dd>
        <dt className="skill-4">RegEx</dt>
        <dd>4</dd>
        <dt className="skill-6">HTML5</dt>
        <dd>6</dd>
        </dl>
        </div>
    </div>
    </div>
    </div>
    </div>
      </VerticalTimelineElement>
          );
   }
  render(){
    const projects = this.props.projects.map(
      project => this.makeTimeline(project)
    );
    return(
      <div>
<VerticalTimeline>
  { projects }

</VerticalTimeline>
      </div>

    );
  }
}
export default TimelineContainer = withTracker((props) => {
  const loggedin = Meteor.user();
  return {
    projects: MyProgress.find().fetch(),
    loggedin
  };
})(Timeline);
