(function() {
  'use strict';

  angular
    .module('app.home.activity.starting')
    .controller('ActivityStartingController', ActivityStartingController);

  /** @ngInject */
  function ActivityStartingController(activity, $log, $state, $mdDialog, $stateParams, $interval) {
    $log.log('activity');
    $log.log(activity);
    var  vm = this;
    $log.log($stateParams);
    //变量定义
    vm.activity = activity;
    vm.hours = 0;
    vm.minutes = 0;
    vm.seconds = 30;
    vm.Ascore = 0;
    vm.Bscore = 0;
    vm.lminutes = vm.minutes / 10;
    vm.lseconds = vm.seconds / 10;

    //方法定义
    vm.startGame = startGame;
    vm.pauseGame = pauseGame;
    vm.cancelGame = cancelGame;
    vm.increaseScore = increaseScore;
    vm.decreaseScore = decreaseScore;

    //加分
    function increaseScore(index) {
      if (index == 0) {
        vm.Ascore++;
      }
      else {
        vm.Bscore++;
      }
    }
    //减分
    function decreaseScore(index) {
      if (index == 0) {
        if (vm.Ascore == 0)
          return;
        vm.Ascore--;
      }
      else {
        if (vm.Bscore == 0)
          return
        vm.Bscore--;
      }
    }
    //开始比赛
    function startGame() {
      if (vm.interval)
        return;
      timer();
    }
    //暂停比赛
    function pauseGame() {
      if(vm.interval) {
        $interval.cancel(vm.interval)
        vm.interval = null;
      }
    }

    function cancelGame() {
      if(vm.interval) {
        $interval.cancel(vm.interval);
        vm.interval = null;
      }
      vm.hours = 0;
      vm.minutes = 0;
      vm.seconds = 0;
      $state.go("home.activity.MVP", {
        type: vm.activity._type,
        activityId: vm.activity._id,
        teamId: vm.activity.teams[0]._id
      })
    }
    //计时器
    function timer() {
      vm.interval = $interval(count, 1000);
    }
    //倒计时函数
    function count() {
      if (vm.seconds == 0) {
        if (vm.minutes == 0) {
          if (vm.hours == 0) {
            $interval.cancel(vm.interval)
          }
          else {
            vm.hours--;
            vm.minutes = 59;
            vm.lminutes = 5;
            vm.seconds = 59;
            vm.lseconds = 5;
          }
        }
        else {
          vm.minutes--;
          vm.lminutes = parseInt(vm.minutes / 10);
          vm.lseconds = 5;
          vm.seconds = 59;
        }
      }
      else {
        vm.seconds--;
        vm.lseconds = parseInt(vm.seconds / 10);
      }
    }

    vm.goToTeam = function (id) {
      console.log("id", id);
      $state.go("home.ballTeam.detail", {id: id, type: vm.activity._type});
    }
  }
})();
