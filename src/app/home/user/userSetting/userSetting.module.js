(function () {
  angular
    .module('app.home.user.setting', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.setting', {
      url: '/setting:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userSetting/userSetting.html',
          controller: 'UserSettingController as vm'
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
