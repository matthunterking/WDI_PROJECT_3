import angular from 'angular';
import 'angular-messages';

// Styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

// Our modules
import Router from './config/router';
import Auth from './config/auth';

//our controllers
import MainCtrl from './controllers/main';
import LoginCtrl from './controllers/auth/login';
import RegisterCtrl from './controllers/auth/register';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';
import UsersProfileCtrl from './controllers/users/profile';
import JobsIndexCtrl from './controllers/jobs/index';
import JobsNewCtrl from './controllers/jobs/new';
import JobsShowCtrl from './controllers/jobs/show';
import JobsEditCtrl from './controllers/jobs/show';

// Jobs and Users Models
import Job from './models/job';
import User from './models/user';

//directives
import gMap from './directives/gMap';
import gAutocomplete from './directives/gAutocomplete';

angular.module('neighbourgood', ['ui.router', 'satellizer', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .controller('UsersProfileCtrl', UsersProfileCtrl)
  .controller('JobsIndexCtrl', JobsIndexCtrl)
  .controller('JobsNewCtrl', JobsNewCtrl)
  .controller('JobsShowCtrl', JobsShowCtrl)
  .controller('JobsEditCtrl', JobsEditCtrl)
  .service('Job', Job)
  .service('User', User)
  .directive('gMap', gMap)
  .directive('gAutocomplete', gAutocomplete);
