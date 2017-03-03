(function() {
  'use strict';

  angular
    .module('app.home.activity')
    .controller('ActivityController', ActivityController);

  /** @ngInject */
  function ActivityController(activities, $log, $state, apiResolver) {
    $log.log(activities);
    var vm = this;
    vm.gotoDetail =  gotoDetail;
    vm.searchByType = searchBytype;
    vm.activities = activities.data;
    vm.sactivities = activities.data;
    vm.add = add;
    vm.reset = function() {
      vm.sactivities = vm.activities;
    };

    apiResolver.resolve('select@get').then(function (res) {
      vm.timeSelect = res.data.time;
      vm.locationSelect = res.data.location;
      vm.typeSelect = res.data.type;
      vm.multiSelect = res.data.multi;
    });

    function searchBytype(type) {
      console.log(type);
      vm.sactivities = [];
      vm.activities.forEach( function(element, index) {
        if (element.type == type) {
          vm.sactivities.push(element);
        }
      });
    }
    function gotoDetail(activity) {
      if (activity.status == "未参赛" || activity._type == "wild") {
        $state.go("home.activity.detail", {id: activity._id, type: activity._type});
      } else if (activity.status == "正在比赛") {
        $log.log("跳转到比赛信息");
        $state.go("home.activity.starting", {id: activity._id, type: activity._type});
      } else if (activity.status == "未开始") {
        $log.log("跳转到签到页面", activity._id, activity._type);
        $state.go("home.activity.signin", {id: activity._id, type: activity._type});
      }
    }
    vm.goToHeatMap = function () {
      $state.go("heat");
    };

    vm.multiSelect = function (condition) {
      console.log("以" + condition + "筛选");
      $('.multiSelect').click();
    }
  }
})();
