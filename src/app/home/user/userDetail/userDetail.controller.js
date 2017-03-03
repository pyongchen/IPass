(function () {
  angular
    .module('app.home.user.detail')
    .controller('UserDetailController', UserDetailController);

  /** @ngInject */
  function UserDetailController(player, $log, $mdDialog, $state) {
    var vm = this;
    vm.player  = player.data;
    makeChart(vm.player);
    vm.goToUser = function () {
      $state.go("home.user", {id: vm.player._id});
    }
  }
})();

function makeChart(player) {
  var chart = AmCharts.makeChart("chartdiv", {
    "type": "radar",
    "theme": "none",
    "dataProvider": [{
      "field": "得分",
      "value": player.strength.score
    }, {
      "field": "篮板",
      "value": player.strength.board
    }, {
      "field": "防守",
      "value": player.strength.defend
    }, {
      "field": "盖帽",
      "value": player.strength.block
    }, {
      "field": "助攻",
      "value": player.strength.assist
    }],
    "valueAxes": [{
      "axisTitleOffset": 20,
      "minimum": 0,
      "axisAlpha": 0.15
    }],
    "startDuration": 2,
    "graphs": [{
      "balloonText": "属性值[[value]]",
      "bullet": "round",
      "lineThickness": 1.5,
      "valueField": "value"
    }],
    "categoryField": "field"
  });
  $('#chartdiv div div a').hide();
}
