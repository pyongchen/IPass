(function() {
  'use strict';

  angular
    .module('app.home.user.message')
    .controller('userMessageController', userMessageController);

  /** @ngInject */
  function userMessageController(message, player, $state) {
    var vm = this;
    vm.message = message.data;
    vm.player = player.data;
    vm.return = function () {
      $state.go("home.user", {id: vm.player._id});
    };
    vm.goToChat = function (id) {
      $state.go("chat", {id:id});
    };
  }

})();
