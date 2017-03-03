(function() {
  'use strict';

  angular
    .module('app.chat', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('chat', {
      url: '/chat/:id',
      views: {
        'main@': {
          templateUrl: 'app/chat/chat.html',
          controller: 'ChatController as vm'
        }
      },
      resolve: {
        player: function (apiResolver, $stateParams) {
          return apiResolver.resolve("player@get", {'id':'3d37a9da-e001-4675-a0ab-2290f9e91cd3'});
        },
        target: function (apiResolver, $stateParams) {
          return apiResolver.resolve("player@get", {'id':$stateParams.id});
        }
      }
    });
  }
})();
