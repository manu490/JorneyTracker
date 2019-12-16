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
    var skill_id = [];
    for(var i=0; i<7 ; i++){
      var difficult = Math.floor(Math.round(Math.random() * (9 - 2) + 1)) + 2;
      skill_id.push("skill-" + difficult);
      }
    const href = "#"+ project._id;
    return (
      <VerticalTimelineElement key={project._id}
      className="vertical-timeline-element--work"
      date={project.createdAt}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon = {<img className="Icon_img" src="Icon.png" />} >

        {this.props.loggedin ? <button className="rm-project"
                                onClick={()=>this.removeProject(project._id)}>
                                    Delete
                                </button> : null }
    <div>
      <div className="panel-group">
        <div className="panel panel-default">
        <a className="collapse-panel" data-toggle="collapse" href={href}>
          <div className="panel-heading">
            <h4 className="panel-title">
              {project.title}
            </h4>
          </div>
      </a>
    <div id={project._id} className="panel-collapse collapse">
      <div className="panel-body">
      <h4 className="p_head">
        Technologies Used
      </h4>
        <dl className="skills-diagram">
        <br></br>
        <dt className={skill_id[0]} >{project.skill1}</dt>
        <dd>5</dd>
        <dt className={skill_id[1]}>{project.skill2}</dt>
        <dd>7</dd>
        <dt className={skill_id[2] }>{project.skill3}</dt>
        <dd>3</dd>
        <dt className={skill_id[3]}>{project.skill4}</dt>
        <dd>8</dd>
        <dt className={skill_id[4] }>{project.skill5}</dt>
        <dd>4</dd>
        <dt className={skill_id[5] }>{project.skill6}</dt>
        <dd>6</dd>
        </dl>
        <div className="links-to"><h5>Git : <a href="#">Icon</a></h5>
        <h5> Link:  <a href="#">Link</a></h5>
        </div>
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
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon = {<i className="cog-icon fa fa-cog fa-2x fa-fw"></i>} >
        </VerticalTimelineElement>
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
