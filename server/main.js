import { Meteor } from 'meteor/meteor';
import MyProgress from '/imports/api/myprogress.js';
import '/imports/server/methods.js';
import '/imports/server/publish.js';
import '../imports/api/Accounts-config.js';

function insertjunk(title, url) {
  MyProgress.insert({ title, url, createdAt: new Date() });
}
Meteor.startup(() => {
  // If the MyProgress collection is empty, add some data.
  if (MyProgress.find().count() === 0) {
    insertjunk(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertjunk(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertjunk(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertjunk(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});
