import { Accounts } from 'meteor/accounts-base';


AccountsTemplates.configure({
    forbidClientAccountCreation : false,

});
/*Accounts.onLogin(function(){
  console.log("Sucess");
  <Redirect exact to="/" />
});*/
