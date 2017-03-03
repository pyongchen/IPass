(function() {
  'use strict';

  angular
    .module('app.publish.oneToOne', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('publish.oneToOne', {
      url: '/oneToOne',
      views: {
        'content@publish': {
          templateUrl: 'app/publish/oneToOne/oneToOne.html',
          controller: 'OneToOneController as vm'
        }
      },
      resolve: {
        players: function (apiResolver) {
          return apiResolver.resolve('players@get');
        },
        curPlayer: function (apiResolver) {
          return apiResolver.resolve('player@get', {id: "3d37a9da-e001-4675-a0ab-2290f9e91cd3"})
        }
      }
    });
  }
})();
