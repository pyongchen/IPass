(function () {
  angular
    .module('app.home.user.hoop', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.hoop', {
      url: '/hoop/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userHoop/userHoop.html',
          controller: 'UserHoopController as vm'
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
