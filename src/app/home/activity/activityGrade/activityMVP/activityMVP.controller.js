(function() {
  'use strict';

  angular
    .module('app.home.activity.MVP')
    .controller('ActivityMVPController', ActivityMVPController);

  /** @ngInject */
  function ActivityMVPController(activity, $log, $state, $stateParams) {
    var vm = this;
    vm.activity = activity;
    vm.chooseMVP = chooseMVP;
    vm.ensureMVP = ensureMVP;
    vm.team = activity.winTeam;
    vm.players = getAllPlayers(vm.team);

    // 选中球员
    function chooseMVP(memberId) {
      vm.chooseId = memberId;
      /* body... */
    }
    //将选中球员选为MVP
    function ensureMVP() {
      console.log(vm.chooseId, "你被选为MVP了");
      /*将MVP评选结果录入数据库*/
      $state.go("home.activity.PG", {
        type: vm.activity._type,
        activityId: $stateParams.activityId,
        teamId: $stateParams.teamId
      });
    }

    //将首发和替补球员合在一起
    function getAllPlayers(team) {
      var players = [];
      for(var i = 0; i < team.members.starting.length; i++) {
        players.push(vm.team.members.starting[i]);
      }
      for(var j = 0; j < team.members.substitution.length; j++) {
        players.push(vm.team.members.substitution[j]);
      }
      return players;
    }
  }
})();
