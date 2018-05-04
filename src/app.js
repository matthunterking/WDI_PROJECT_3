import angular from 'angular';

// Styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

// Our modules
import Router from './config/router';
// import Auth from './config/auth';

angular.module('neighbourgood', ['ui.router', 'satellizer'])
  .config(Router);
