(function() {
  'use strict';

  angular
    .module('app.home.search', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.search', {
      url: '/search/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/search/search.html',
          controller: 'searchController as vm'
        }
      },
      resolve: {
        activities: function (apiResolver) {
          return apiResolver.resolve('activities@get');
        },
        players: function(apiResolver) {
          return apiResolver.resolve('players@get');
        },
        player: function (apiResolver, $stateParams) {
          var userId = $stateParams.id;
          return apiResolver.resolve('player@get', {'id': userId});
        }
      }
    });
  }
})();
