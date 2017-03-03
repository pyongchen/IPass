(function () {
  angular
    .module('app.home.user.team')
    .controller('UserTeamController', UserTeamController);

  /** @ngInject */
  function UserTeamController(player, $log, $mdDialog, $state) {
    var vm = this;
    vm.player  = player.data;
    vm.teams = vm.player.teams;
    vm.goToUser = function () {
      $state.go("home.user", {id: vm.player._id});
    };
    vm.goToTeam = function (type, id) {
      $state.go("home.ballTeam.detail", {type:type, id:id});
    }
  }
})();
