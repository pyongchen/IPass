(function() {
  'use strict';

  angular
    .module('app.auth.register', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('auth.register', {
      url: '/register',
      views: {
        'main@': {
          templateUrl: 'app/auth/register/register.html',
          controller: 'RegisterController as vm'
        }
      }
    });
  }
})();
