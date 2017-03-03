(function () {
  'use strict';

  angular
    .module('app.publish.manyToMany')
    .controller('ManyToManyController', ManyToManyController);

  /** @ngInject */
  function ManyToManyController(player, $state, $log, api, apiResolver) {
    var vm = this, map;
    vm.marker = null;
    var convertor, errTiem = 0;
    vm.player = player.data;
    $log.log(player.data);
    vm.types = ['野球', '3V3', '5V5'];
    vm.publishInfo = {};
    vm.sendInfo = sendInfo;

    // 时间滑动组件的参数设置
    var currYear = (new Date()).getFullYear();
    var opt = {};
    opt.date = {preset: 'date'};
    opt.datetime = {preset: 'datetime'};
    opt.time = {preset: 'time'};
    opt.default = {
      theme: 'android-ics light', //皮肤样式
      display: 'modal', //显示方式
      mode: 'scroller', //日期选择模式
      dateFormat: 'yyyy-mm-dd',
      lang: 'zh',
      showNow: true,
      nowText: "今天",
      startYear: currYear - 100, //开始年份
      endYear: currYear + 100 //结束年份
    };
    var optDateTime = $.extend(opt['datetime'], opt['default']);
    $("#appDateTime").mobiscroll(optDateTime);

    function sendInfo() {
      vm.publishInfo.time = $("#appDateTime").getResult();
      vm.publishInfo.phone = vm.player.phone;
      api.publish.publish(vm.publishInfo);
      $state.go('publish.map');
      console.log(vm.publishInfo);
    }

    //初始化地图
    map = new BMap.Map("publish-map");
    var place = "广州大学城";
    convertor = new BMap.Convertor();
    map.enableScrollWheelZoom();
    map.centerAndZoom(place, 16);
    apiResolver.resolve('activities@get').then(function (res) {
      for(var i = 0; i < res.data.length; i++) {
        var court = getCourtByName(res.data[i].location);
        drawRectangle(map, court);
      }
    });
    addLabel(map);

    // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.addEventListener("click", function (e) {
      if (vm.marker) vm.marker.hide();
      var point = new BMap.Point(e.point.lng, e.point.lat);
      vm.marker = new BMap.Marker(point);
      map.addOverlay(vm.marker);
      vm.publishInfo.point = e.point;
      console.log(e.point.lng, e.point.lat);
      var index = isInCourt(e.point);
      if (index) {
        $('#appPlace').val(courts[index].name);
        vm.publishInfo.place = courts[index].name;
      }
    });

    if (navigator.geolocation) {
      var getOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      //成功回调, 此时的position为gps坐标,需要转化为百度地图坐标
      var getSuccess = function (position) {
        var pointArr = [];
        var gpsPoint = new BMap.Point(position.coords.longitude, position.coords.latitude);
        pointArr.push(gpsPoint);
        convertor.translate(pointArr, 1, 5, translateCallback);

        console.log(position.coords.longitude);
        console.log(position.coords.latitude);
      };

      //失败回调
      var getError = function (error) {
        switch (error.code) {
          case error.TIMEOUT:
            errTiem++;
            console.log("超时");
            if (errTiem <= 5) navigator.geolocation.getCurrentPosition(getSuccess, getError, getOptions);
            break;
          case error.PERMISSION_DENIED:
            $log.log('用户拒绝提供地理位置');
            break;
          case error.POSITION_UNAVAILABLE:
            $log.log('地理位置不可用');
            break;
          default:
            break;
        }
      };

      navigator.geolocation.getCurrentPosition(getSuccess, getError, getOptions);
    }

    var translateCallback = function (data) {
      if (data.status === 0) map.setCenter(data.points[0]);
    }
  }

})();

