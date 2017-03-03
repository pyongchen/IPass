(function () {
  angular
    .module('app.home.user.game', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.game', {
      url: '/game:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userGame/userGame.html',
          controller: 'UserGameController as vm'
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
