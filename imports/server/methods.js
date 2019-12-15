import MyProgress from '/imports/api/myprogress.js';

Meteor.methods({
  addProject(title,url){
    MyProgress.insert({
      title:title,
      url:url,
      completed: false ,
      createdAt: new Date(),
      user:Meteor.userId(),
    });
  },
  removeProject(project){
  MyProgress.remove({_id:project});
},

CheckboxToggle(project_id,status){
  var project = MyProgress.findOne({_id:project_id});
  if(status==null){
    MyProgress.update({_id:project_id},{$set:{complete:true}});
  }
  else{
  MyProgress.update(project_id,{
      $set:{complete:!status}
    });
  }
},


});
