(function () {
  angular
    .module('app.home.user.friend')
    .controller('UserFriendController', UserFriendController);

  /** @ngInject */
  function UserFriendController(player, $log, $state) {
    var vm = this;
    vm.player  = player.data;
    vm.friends = player.data.friends;
    vm.goToUser = function () {
      $state.go("home.user", {id: vm.player._id});
    };
    vm.goToPlayer = function (id) {
      $state.go("home.user", {id: id});
    }
  }
})();
