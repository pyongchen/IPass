(function () {
  'use strict';

  angular
    .module('app.home.activity.signin')
    .controller('ActivitySigninController', ActivitySigninController);

  /** @ngInject */
  function ActivitySigninController(activity, $log, $state, $stateParams) {
    $log.log('activity');
    $log.log(activity);
    var vm = this;
    vm.activity = activity;
    vm.hassub = true;
    if (!vm.activity.teamsinfo[0].members.substitution ||
      vm.activity.teamsinfo[0].members.substitution.length == 0) {
      vm.hassub = false;
    }
    var overall1 = vm.activity.teamsinfo[0].overall, overall2 = vm.activity.teamsinfo[1].overall;
    var flex = overall1 / (overall1 + overall2) * 100;
    vm.flex = parseInt(flex / 5) * 5;
    $log.log(vm.flex);
    vm.signin = function () {
      //签到
    };
    vm.goToPlayer = function (id) {
      $state.go("home.user", {id: id});
    };
    vm.goToTeam = function (id) {
      console.log("id", id);
      $state.go("home.ballTeam.detail", {id: id, type: vm.activity._type});
    }
  }
})();
