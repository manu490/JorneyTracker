import { Accounts } from 'meteor/accounts-base';
import React from 'react';
import {BrowserRouter as 
  Router,
  Redirect,
  Switch,
  Route,
  Link } from "react-router-dom";
import App from '../ui/App.jsx' ;

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL",

});
