(function() {
  'use strict';

  angular
    .module('app.home.activity', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.activity', {
      url: '/activity',
      views: {
        'content@home': {
          templateUrl: 'app/home/activity/activity.html',
          controller: 'ActivityController as vm'
        }
      },
      resolve: {
        activities: function (apiResolver) {
          return apiResolver.resolve('activities@get');
        }
      }
    });
  }
})();
