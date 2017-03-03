(function() {
  'use strict';

  angular
    .module('app.home.honor', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.honor', {
      url: '/honor',
      views: {
        'content@home': {
          templateUrl: 'app/home/honor/honor.html',
          controller: 'honorController as vm'
        }
      },
      resolve: {
        players: function (apiResolver) {
          return apiResolver.resolve('players@get');
        },
        honor: function (apiResolver) {
          return apiResolver.resolve('honor@get');
        }
      }
    });
  }
})();
