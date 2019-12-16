import MyProgress from '/imports/api/myprogress.js';
import moment from 'moment';
const date = moment().format('MM-YYYY');

Meteor.methods({
  addProject(title,skill1,skill2,skill3,skill4,skill5,skill6){
    MyProgress.insert({
      title:title,
      createdAt: date,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
      skill4: skill4,
      skill5: skill5,
      skill6: skill6,
      user:Meteor.userId(),
    });
  },
  removeProject(project){
  MyProgress.remove({_id:project});
},


});
