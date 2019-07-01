import 'angular';
import '@uirouter/angularjs';
import '@babel/polyfill';

const app = angular.module('app', [
  'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider
    .state('app', {
      url: '/app',
      views: {
        '': {
          templateUrl: '/src/views/app.html'
        },
        'header@app': {
          templateUrl: '/src/views/components/header.html'
        },
        'footer@app': {
          templateUrl: '/src/views/components/footer.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      templateUrl: '/src/views/home.html'
    })
    .state('app.dashboard', {
      url: '/dashboard',
      templateUrl: '/src/views/dashboard.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/src/views/login.html'
    })
    .state('error', {
      url: '/error',
      templateUrl: '/src/views/error.html'
    });
});