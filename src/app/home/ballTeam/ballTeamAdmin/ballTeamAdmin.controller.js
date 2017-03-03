(function () {
  'use strict';

  angular
    .module('app.home.ballTeam.admin', [])
    .controller('teamAdminController', teamAdminController);

  /** @ngInject */
  function teamAdminController(team, $log, $state, $mdDialog) {
    var vm = this;
    vm.team = team.data;
    vm.chat = function (id) {
      $log.log("给球员" + id + "发消息");
    };
    vm.changeImg = changeImg;
    vm.delPlayer = function (player) {
      var info = "相对他说什么?";
      var confirm = $mdDialog.prompt()
        .title('确定将球员:' + player.name + " 逐出球队?")
        .placeholder(info)
        .ariaLabel(info)
        .targetEvent(info)
        .ok('确定')
        .cancel('取消');
      $mdDialog.show(confirm).then(function (result) {
        if (!result) result = "";
        //删除球队中该球员的数据、球员所加球队
        $log.log("消息:" + result + "已发送");
      }, function () {
        //取消修改
      });
    };

    function teamAdminController(team, $log, $state, $stateParams) {
      var vm = this;
      vm.team = team.data;
      vm.changeInfo = function (type, field, info) {
        var confirm = $mdDialog.prompt()
          .title('更改' + type)
          .placeholder(type)
          .ariaLabel(info)
          .initialValue(info)
          .targetEvent(info)
          .ok('确定')
          .cancel('取消');
        $mdDialog.show(confirm).then(function (result) {
          if (!result) result = "";
          //提交修改
          $log.log(type + "已修改为:" + result)
        }, function () {
          //取消修改
        });
      };

      vm.delTeam = function () {
        var info = "相对球员说什么?";
        var confirm = $mdDialog.prompt()
          .title('确定解散球队:' + vm.team.name + " ?")
          .placeholder(info)
          .ariaLabel(info)
          .targetEvent(info)
          .ok('确定')
          .cancel('取消');
        $mdDialog.show(confirm).then(function (result) {
          if (!result) result = "";
          $log.log(result);
        }, function () {

        })
      };
      vm.goToUser = function (id) {
        $state.go("home.user", {id: id});
      }
    }
  }
})();

function changeImg() {
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.click(function () {
    //修改图片
  });
}
