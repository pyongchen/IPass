(function() {
  'use strict';

  angular
    .module('app.home.service')
    .controller('serviceController', serviceController);

  /** @ngInject */
  function serviceController(player, $log, $state) {
    var vm = this;
    vm.friends = player.data.friends;
    vm.teams = player.data.teams;
    $log.log(player.data);

    vm.goToPlayer = function (id) {
      $state.go("user", {id: id});
    };

    vm.goToTeam = function (type, id) {
      $state.go("home.ballTeam.detail", {id: id, type: type});
    }
  }
})();
