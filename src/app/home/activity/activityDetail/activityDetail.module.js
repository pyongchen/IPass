(function () {
  'use strict';

  angular
    .module('app.home.activity.detail', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.activity.detail', {
        url: '/activityDetail/:type/:id',
        views: {
          'main@': {
            templateUrl: 'app/home/activity/activityDetail/activityDetail.html',
            controller: 'ActivityDetailController as vm'
          }
        },
        resolve: {
          activity: function (apiResolver, $stateParams) {
            return apiResolver.resolve('activity@get', {id: $stateParams.id, type: $stateParams.type})
              .then(function (data) {
                return data.data;
              })
          }
        }
      }
    );
  }
})();
