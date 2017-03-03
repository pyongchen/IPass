(function () {
  angular
    .module('app.home.user.setting')
    .controller('UserSettingController', UserSettingController);

  /** @ngInject */
  function UserSettingController(player, $log, $mdDialog, $state) {
    var vm = this;
    vm.player  = player.data;

    vm.changeImg = changeImg;

    vm.changeInfo = function (type, field, info) {
      var confirm = $mdDialog.prompt()
        .title('更改' + type)
        .placeholder(type)
        .ariaLabel(info)
        .initialValue(info)
        .targetEvent(info)
        .ok('确定')
        .cancel('取消');

      $mdDialog.show(confirm).then(function(result) {
        //提交修改
        $log.log(type + "已修改为:" + result)
      }, function() {
        //取消修改
      });
    };

    vm.goToUser = function () {
      $state.go("home.user", {id: vm.player._id});
    };
  }
})();

function changeImg() {
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.click(function () {
    //修改图片
  });
}
