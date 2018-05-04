import angular from 'angular';

// Styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

// Our modules
import Router from './config/router';
import Auth from './config/auth';

// Jobs Model
import Job from './models/job';

angular.module('neighbourgood', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .service('Job', Job);
