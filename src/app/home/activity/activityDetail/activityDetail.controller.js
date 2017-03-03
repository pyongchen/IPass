(function() {
  'use strict';

  angular
    .module('app.home.activity.detail')
    .controller('ActivityDetailController', ActivityDetailController);

  /** @ngInject */
  function ActivityDetailController(activity, $log, $state, apiResolver) {
    var vm = this;
    vm.activity = activity;
    vm.type = activity._type;
    vm.gotoActivityDetail= function () {
      $state.go('home.activity.detail');
    };
    vm.joinGame = function() {
      console.log('到签到页面哦');
      //到签到页面
    };
    vm.gotoTeamActivity = function(id) {
      $log.log(id);
      $log.log('enter');
      $state.go("home.ballTeam.detail", {id: id, type: vm.type});
    };
    vm.goToPlayer = function (id) {
      $state.go("home.user", {id:id});
    };
    vm.showMap = function () {
      $('#detail-map').fadeIn();
      $('#close-detailMap-icon').fadeIn();
      var court = getCourtByName(vm.activity.location);
      var map = new BMap.Map("detail-map");
      apiResolver.resolve('activities@get').then(function (res) {
        for(var i = 0; i < res.data.length; i++) {
          var court = getCourtByName(res.data[i].location);
          drawRectangle(map, court);
        }
      });
      map.enableScrollWheelZoom();
      map.centerAndZoom(new BMap.Point(court.middle.lng, court.middle.lat), 20);
      addLabel(map);
    };
    vm.closeDetailMap = function () {
      $('#detail-map').fadeOut();
      $('#close-detailMap-icon').fadeOut();
    }
  }
})();
