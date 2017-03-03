(function () {
  angular
    .module('app.home.user.game')
    .controller('UserGameController', UserGameController);

  /** @ngInject */
  function UserGameController(player, $log, $state) {
    var vm = this;
    vm.player  = player.data;
    vm.currentNavItem = 'one';
    vm.goToUser = function () {
      $state.go("home.user", {id: vm.player._id});
    };

    vm.gotoDetail = function (id, type) {
      $log.log(id, type);
      $state.go("home.activity.detail", {id:id, type:type});
    }
  }
})();
