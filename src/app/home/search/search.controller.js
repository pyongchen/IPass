(function() {
  'use strict';

  angular
    .module('app.home.search')
    .controller('searchController', searchController);

  /** @ngInject */
  function searchController($log, $state, $stateParams, activities, players, player) {
    var vm = this;
    vm.input = "";
    vm.activities = [];
    vm.members = [];
    $log.log(player);

    vm.goToUser = function () {
      $state.go("home.user", {id: $stateParams.id});
    };

    vm.searchAvtivity = function() {
      vm.members = [];
      for (var index in activities.data) {
        var activity = activities.data[index];
        for (var key in activity) {
          if (typeof(activity[key]) === "string" && String(activity[key]).match(vm.input)) {
            vm.activities[vm.activities.length] = activity;
            break;
          }
        }
      }
    };
    vm.gotoDetail = function(id, type) {
      $state.go("home.activity.detail", {id:id, type: type})
    };

    vm.searchMember = function() {
      vm.activities = [];
      for (var index in players.data) {
        var player = players.data[index];
        for (var key in player) {
          $log.log("aaa");
          if (typeof(player[key]) === 'string' && String(player[key]).match(vm.input)) {
            vm.members[vm.members.length] = player;
            $log.log(player);
            break;
          }
        }
      }
    };
    vm.searchTeam = function() {
      $log.log("searchTeam");
    };
  }
})();
