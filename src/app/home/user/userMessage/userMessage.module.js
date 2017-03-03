(function() {
  'use strict';

  angular
    .module('app.home.user.message', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.user.message', {
      url: '/userMessage/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/user/userMessage/userMessage.html',
          controller: 'userMessageController as vm'
        }
      },
      resolve: {
        message: function (apiResolver, $stateParams) {
          return apiResolver.resolve("message@get", {'id':$stateParams.id});
        },
        player: function (apiResolver, $stateParams) {
          return apiResolver.resolve("player@get", {'id': $stateParams.id});
        }
      }
    });
  }
})();
