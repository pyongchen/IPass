(function() {
  'use strict';

  angular
    .module('app.home', [
      'app.home.search',
      'app.home.activity',
      'app.home.honor',
      'app.home.service',
      'app.home.user',
      "app.home.activity.detail",
      "app.home.ballTeam.admin",
      "app.home.activity.signin",
      "app.home.activity.starting",
      "app.home.activity.MVP",
      "app.home.activity.PG",
      "app.home.ballTeam.detail",
      'app.home.ballTeam'
    ]).config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home', {
      abstract: true,
      url: '/home',
      views: {
        'main@': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController as vm'
        }
      }
    });
  }
})();
