(function() {
  'use strict';

  angular
    .module('app.publish.map', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('publish.map', {
      url: '/map',
      views: {
        'main@': {
          templateUrl: 'app/publish/map/map.html',
          controller: 'MapController as vm'
        }
      },
      resolve: {
        publishInfo: function (apiResolver) {
          return apiResolver.resolve('publishInfo@get');
        }
      }
    });
  }
})();
