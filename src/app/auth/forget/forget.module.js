(function() {
  'use strict';

  angular
    .module('app.auth.forget', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('auth.forget', {
      url: '/forget',
      views: {
        'main@': {
          templateUrl: 'app/auth/forget/forget.html',
          controller: 'forgetController as vm'
        }
      }
    });
  }
})();
