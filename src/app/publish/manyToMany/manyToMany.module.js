(function() {
  'use strict';

  angular
    .module('app.publish.manyToMany', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('publish.manyToMany', {
      url: '/manyToMany/:id',
      views: {
        'main@': {
          templateUrl: 'app/publish/manyToMany/manyToMany.html',
          controller: 'ManyToManyController as vm'
        }
      },
      resolve: {
        player: function (apiResolver, $stateParams) {
          var userId = $stateParams.id;
          return apiResolver.resolve('player@get', {'id': userId});
        }
      }
    });
  }
})();
