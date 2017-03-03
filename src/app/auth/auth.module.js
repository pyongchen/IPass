(function() {
  'use strict';

  angular
    .module('app.auth', [
      'app.auth.register',
      'app.auth.forget'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('auth', {
      url: '/auth',
      views: {
        'main@': {
          templateUrl: 'app/auth/auth.html',
          controller: 'AuthController as vm'
        }
      }
    });
  }
})();
