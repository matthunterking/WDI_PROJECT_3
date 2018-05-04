Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('jobsIndex', {
      url: '/jobs',
      templateUrl: 'views/jobs/index.html',
      controller: 'JobsIndexCtrl as jobsIndex'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
