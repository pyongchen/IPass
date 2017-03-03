(function () {
  'use strict';

  angular
    .module('app.home.activity.starting', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.activity.starting', {
      url: '/starting/:type/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/activity/activitystarting/activityStarting.html',
          controller: 'ActivityStartingController as vm'
        }
      },
      resolve: {
        activity: function (apiResolver, $stateParams) {
          return apiResolver
            .resolve('activity@get', {id: $stateParams.id, type: $stateParams.type})
            .then(function (data) {
              return data.data;
            })
        }
      }
    });
  }
})();
