(function() {
  'use strict';

  angular
    .module('app.home.honor')
    .controller('honorController', honorController);

  /** @ngInject */
  function honorController(honor, players, $log, $state) {
    var vm = this;
    vm.players = players.data;
    vm.filters = honor.data;
    vm.filterHonor = function (type, info) {
      $log.log(type + '|' + info);
      setTimeout(function () {
        $('#' + type).click();
      }, 200);
    };
    vm.goToPlayer = function (id) {
      $state.go("home.user", {id: id});
    }
  }
})();
