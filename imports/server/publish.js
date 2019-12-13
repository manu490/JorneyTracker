import MyProgress from '../api/myprogress.js';

Meteor.publish('Progress', function() {
    return MyProgress.find(); /* By setting conditions on server side like
                            Links.find(isPrivate:false) we can control
                            what to output on client side*/
  });
