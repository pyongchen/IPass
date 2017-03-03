(function() {
  'use strict';

  angular
    .module('app.heat')
    .controller('heatController', heatController);

  /** @ngInject */

  function heatController($state, $log, apiResolver) {
    var vm = this;
    setTimeout(function () {
      var map = new BMap.Map("container");          // 创建地图实例
      addLabel(map);

      apiResolver.resolve('activities@get').then(function (res) {
        for(var i = 0; i < res.data.length; i++) {
          var court = getCourtByName(res.data[i].location);
          drawRectangle(map, court);
        }
      });

      map.centerAndZoom("广州大学城中大篮球场", 18);             // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(); // 允许滚轮缩放

      // 热力图信息
      var points = [];
      var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 10});

      map.addEventListener("click",function(e){
        $log.log(e.point.lng + "," + e.point.lat);
        points.push({"lng": e.point.lng, "lat": e.point.lat, "count": 20});
        map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({data: points, max: 100});
      });

      //是否显示热力图
      vm.openHeatmap = function () {
        heatmapOverlay.show();
      };

      vm.closeHeatmap = function() {
        heatmapOverlay.hide();
      };

    }, 300);
  }

})();
