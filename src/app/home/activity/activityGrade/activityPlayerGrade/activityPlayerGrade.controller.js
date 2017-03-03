(function() {
  'use strict';

  angular
    .module('app.home.activity.PG')
    .controller('ActivityPGController', ActivityPGController);

  /** @ngInject */
  function ActivityPGController(activity, $log, $state, $stateParams) {
    $log.log('activity');
    $log.log(activity);
    var vm = this;
    vm.activity = activity;
    vm.ensure = ensure;
    vm.team = activity.winTeam;
    vm.players = getAllPlayers(vm.team);

    //确认评分
    function ensure() {
      $state.go("home.activity");
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
