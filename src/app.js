import angular from 'angular';
import 'angular-messages';

// Styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';

// Our modules
import Router from './config/router';
import Auth from './config/auth';
import Upload from './config/upload';

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
import JobsEditCtrl from './controllers/jobs/edit';

// Jobs and Users Models
import Job from './models/job';
import User from './models/user';

//directives
import gMapIndexView from './directives/gMapIndexView';
import gMapShowView from './directives/gMapShowView';
import gAutocomplete from './directives/gAutocomplete';
import uploadImage from './directives/uploadImage';

angular.module('neighbourgood', ['ui.router', 'satellizer','angular-filepicker', 'ngMessages'])
  .config(Router)
  .config(Auth)
  .config(Upload)
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
  .directive('gMapIndexView', gMapIndexView)
  .directive('gMapShowView', gMapShowView)
  .directive('gAutocomplete', gAutocomplete)
  .directive('uploadImage', uploadImage);
