(function() {
  'use strict';

  angular
    .module('app.home.activity.PG', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.activity.PG', {
      url: '/PlayerGrade/:type/:activityId/:teamId',
      views: {
        'main@': {
          templateUrl: 'app/home/activity/activityGrade/activityPlayerGrade/activityPlayerGrade.html',
          controller: 'ActivityPGController as vm'
        }
      },
      resolve: {
        activity: function (apiResolver, $stateParams) {
          var type = $stateParams.type;
          var actId = $stateParams.activityId;
          var teamId = $stateParams.teamId;
          return apiResolver
            .resolve('activity@get', {id: actId, type: type})
            .then(function (data) {
              var act = data.data;
              return apiResolver
                .resolve("team@get", {id: teamId, type: type})
                .then(function (team) {
                  act.winTeam = team.data;
                  return act;
                })
            })
        }
      }
    });
  }
})();
