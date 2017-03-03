(function () {
  angular
    .module('app.home.user.team', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.team', {
      url: '/team:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userTeam/userTeam.html',
          controller: 'UserTeamController as vm'
        }
      },
      resolve: {
        player: function (apiResolver, $stateParams) {
          var id = $stateParams.id;
          return apiResolver.resolve('player@get', {'id': id});
        }
      }
    })
  }
})();
