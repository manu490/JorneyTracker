import { Accounts } from 'meteor/accounts-base';


AccountsTemplates.configure({
    forbidClientAccountCreation : true,

});
/*Accounts.onLogin(function(){
  console.log("Sucess");
  <Redirect exact to="/" />
});*/
