(function () {
  angular
    .module('app.home.user.detail', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.detail', {
      url: '/detail:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userDetail/userDetail.html',
          controller: 'UserDetailController as vm'
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
