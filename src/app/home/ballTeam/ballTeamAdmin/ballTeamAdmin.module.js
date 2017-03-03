(function () {
  angular
    .module('app.home.ballTeam.admin')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.ballTeam.admin', {
      url: '/teamAdmin/:type/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/ballTeam/ballTeamAdmin/ballTeamAdmin.html',
          controller: 'teamAdminController as vm'
        }
      },
      resolve: {
        team: function (apiResolver, $stateParams) {
          return apiResolver
            .resolve("team@get", {id: $stateParams.id, type:$stateParams.type});
        }
      }
    })
  }
})();
