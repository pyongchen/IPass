(function() {
  'use strict';

  angular
    .module('app.heat', [
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('heat', {
      url: '/heat',
      views: {
        'main@': {
          templateUrl: 'app/heat/heat.html',
          controller: 'heatController as vm'
        }
      }
    });
  }
})();
