(function () {
  'use strict';

  angular
    .module('app.home.ballTeam.detail')
    .config(config);


  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.ballTeam.detail', {
      url: '/ballTeam/detail/:type/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/ballTeam/ballTeamDetail/ballTeamDetail.html',
          controller: 'BallTeamDetailController as vm'
        }
      },
      resolve: {
        team: function (apiResolver, $stateParams) {
          return apiResolver
            .resolve("team@get", {id: $stateParams.id, type: $stateParams.type});
        }
      }
    });
  }
})();
