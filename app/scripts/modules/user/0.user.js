angular
.module('testApp.modules.user', [
    'ngRoute',
    'ngAnimate'
  ])
.config(function($routeProvider) {
  $routeProvider
  .when('/user', {
    templateUrl: 'views/user/index.html',
    controller: 'UserController'
  })
  .otherwise({
    redirectTo: '/user'
  });
});