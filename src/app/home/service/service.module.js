(function() {
  'use strict';

  angular
    .module('app.home.service', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.service', {
      url: '/service',
      views: {
        'content@home': {
          templateUrl: 'app/home/service/service.html',
          controller: 'serviceController as vm'
        }
      },
      resolve: {
        player: function (apiResolver) {
          return apiResolver.resolve('player@get', {'id': '3d37a9da-e001-4675-a0ab-2290f9e91cd3'});
        }
      }
    });
  }
})();
