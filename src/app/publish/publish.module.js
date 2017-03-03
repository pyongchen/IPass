(function() {
  'use strict';

  angular
    .module('app.publish', [
      'app.publish.manyToMany',
      'app.publish.oneToOne',
      'app.publish.map'
    ]).config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('publish', {
      abstract: true,
      url: '/publish',
      views: {
        'main@': {
          templateUrl: 'app/publish/publish.html',
          controller: 'PublishController as vm'
        }
      }
    });
  }
})();