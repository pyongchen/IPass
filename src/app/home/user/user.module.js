(function () {
  'use strict';

  angular
    .module('app.home.user', [
      'app.home.user.detail',
      'app.home.user.friend',
      'app.home.user.team',
      'app.home.user.hoop',
      'app.home.user.setting',
      'app.home.user.game',
      'app.home.user.message'
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user', {
      url: '/user/:id',
      views: {
        'content@home': {
          templateUrl: 'app/home/user/user.html',
          controller: 'UserController as vm'
        }
      },
      resolve: {
        player: function (apiResolver, $stateParams) {
          var userId = $stateParams.id;
          return apiResolver.resolve('player@get', {'id': userId});
        }
      }
    });
  }
})();
