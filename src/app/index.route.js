(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    // $urlRouterProvider.otherwise('/home/activity');
    $urlRouterProvider.otherwise(function($injector, $location) {
      var $state = $injector.get("$state");
      $state.go('home.activity');
    });
  }

})();
