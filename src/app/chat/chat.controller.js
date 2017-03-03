(function() {
  'use strict';

  angular
    .module('app.chat')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController(player, target, $state) {
    var vm = this;
    vm.player = player.data;
    vm.target = target.data;
    vm.return = function () {
      $state.go("home.activity");
    }
  }

})();
