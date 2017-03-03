(function() {
  'use strict';

  angular
    .module('app.home.user')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(player, $state, $log, api) {
    var vm = this;
    vm.player = player.data;

    vm.goToMessage = function () {
      $state.go("home.user.message", {id: vm.player._id});
    };
    vm.goToDetail = function () {
      $state.go("home.user.detail", {id:vm.player._id})
    };
    vm.goToMyGames = function () {
      $state.go("home.user.game", {id:vm.player._id})
    };
    vm.goToMyFriends = function () {
      $state.go("home.user.friend", {id:vm.player._id})
    };
    vm.goToMyTeams = function () {
      $state.go("home.user.team", {id:vm.player._id})
    };
    vm.goToHoop = function () {
      $state.go("home.user.hoop", {id:vm.player._id})
    };
    vm.goToSetting = function () {
      $state.go("home.user.setting", {id:vm.player._id})
    };
    vm.alertLogout = function () {
      $('.ui.basic.modal')
        .modal('show')
      ;
    };
    vm.chancel = function () {
      $('.ui.basic.modal')
        .modal('hide')
      ;
    };
    vm.logout = function () {
      $('.ui.basic.modal')
        .modal('hide')
      ;
      api.auth.logout().then(function (res) {
        if(res.data) {
          $state.go("home.activity");
        }
      });
    };
  }
})();
