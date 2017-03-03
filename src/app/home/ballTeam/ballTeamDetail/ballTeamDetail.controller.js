(function() {
  'use strict';

  angular
    .module('app.home.ballTeam.detail', [])
    .controller('BallTeamDetailController', BallTeamDetailController);

  /** @ngInject */
  function BallTeamDetailController(team, $state, $log) {
    var vm = this;
    vm.team = team.data;
    vm.goToTeamAdmin = function (type, id) {
      $log.log(type, id);
      $state.go("home.ballTeam.admin", {id: id, type: type});
    };
  }
})();
