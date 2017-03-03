(function () {
  angular
    .module('app.home.user.hoop')
    .controller('UserHoopController', UserHoopController);

  /** @ngInject */
  function UserHoopController(player, $log, $state, $mdDialog, $mdMenu, Upload) {
    var vm = this;


    vm.player  = player.data;
    vm.goToUser = function () {
      $state.go("home.user", {id: vm.player._id});
    };

    vm.inputImage = null;
    vm.uploadFile = function(files, errFiles) {
      $log.log(files);
    };

    vm.originalEv = null;
    vm.openMenu = function($mdOpenMenu, ev) {
      vm.originalEv = ev;
      $mdOpenMenu(ev);
    };
    vm.sayGood = function() {
      vm.originalEv = null;
      $mdMenu.hide();
    };
    vm.comment = function(ev) {
      vm.originalEv = null;
      $mdMenu.hide();
      $mdDialog.show({
        templateUrl: '/app/home/user/userHoop/userHoop.comment.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        controller: dialogController
      });
    };
    function dialogController($scope, $mdDialog) {
      $scope.postComment = function() {
        $mdDialog.cancel();
        // console.log($('#comment').val());
      };
      $scope.cancelComment = function() {
        $mdDialog.cancel();
      }
    }
  }
})();
