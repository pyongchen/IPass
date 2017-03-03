(function () {
  angular
    .module('app.home.user.friend', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.friend', {
      url: '/friend:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userFriend/userFriend.html',
          controller: 'UserFriendController as vm'
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
