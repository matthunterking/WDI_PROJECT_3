secureState.$inject = ['$q', '$auth', '$state'];
function secureState($q, $auth, $state) {
  return new $q(resolve => {
    if($auth.isAuthenticated()) return resolve();
    $state.go('home');
  });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'LoginCtrl as login'
    })
    .state('jobsIndex', {
      url: '/jobs',
      templateUrl: 'views/jobs/index.html',
      controller: 'JobsIndexCtrl as jobsIndex'
    })
    .state('jobsNew', {
      url: '/jobs/new',
      templateUrl: 'views/jobs/new.html',
      controller: 'JobsNewCtrl as jobsNew'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/auth/login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersProfile', {
      url: '/users/:id',
      templateUrl: 'views/users/profile.html',
      controller: 'UsersProfileCtrl as usersProfile'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
