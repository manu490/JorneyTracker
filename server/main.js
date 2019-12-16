import { Meteor } from 'meteor/meteor';
import MyProgress from '/imports/api/myprogress.js';
import '/imports/server/methods.js';
import '/imports/server/publish.js';
import '../imports/api/Accounts-config.js';
import moment from 'moment';
const date = moment().format('MM-YYYY');

console.log(date);
function insertinit(title , link, skill1 ,
  skill2 ,skill3 ,skill4 , skill5, skill6, gitlink,) {
  MyProgress.insert({ title, link,skill1 , skill2 ,
    skill3 ,skill4 , skill5, skill6 ,createdAt: date ,gitlink,});
}
Meteor.startup(() => {
  // If the MyProgress collection is empty, add some data.
  if (MyProgress.find().count() === 0) {
    insertinit(
      'Do the Tutorial',"#" ,'skill1' , 'skill2' ,'skill3' ,'skill4' , 'skill5', 'skill6'
    ,"#");

    insertinit(
      'Follow the Guide',"#" ,'skill1' , 'skill2' ,'skill3' ,'skill4' , 'skill5', 'skill6'
    ,"#");

    insertinit(
      'Read the Docs',"#" , 'skill1' , 'skill2' ,'skill3' ,'skill4' , 'skill5', 'skill6'
    ,"#");

    insertinit(
      'Discussions', "#" , 'skill1' , 'skill2' ,'skill3' ,'skill4' , 'skill5', 'skill6'
    ,"#");
  }
});
