(function() {
  'use strict';

  angular
    .module('app.auth.register')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController(api, $state, $log) {
    var vm = this;
    var canGetCode = true;
    vm.getCode = function () {
      if(!canGetCode) return;
      if(!vm.phone) {
        vm.errInfo = "请填写手机号码";
        return;
      }
      if(vm.phone.length != 11) {
        vm.errInfo = "请输入正确的手机号码";
        return;
      }
      var req = { phone: vm.phone };
      api.auth.getCode(req);
      var time = 60;
      canGetCode = false;
      $('#getCode').text(time + 's后重新发送');
      $('#getCode').css('background-color', 'grey');
      var timeInterval = setInterval(function () {
        time--;
        $('#getCode').text(time + 's后重新发送');
        if(time == 0) {
          clearInterval(timeInterval);
          $('#getCode').text("获取验证码");
          $('#getCode').css('background-color', '#E0E1E2');
          canGetCode = true;
        }
      }, 1000);
    };

    vm.register = function () {
      if(!vm.code) {
        vm.errInfo = "请输入验证码";
        return;
      }
      if(!vm.password) {
        vm.errInfo = "请输入密码";
        return;
      }
      if(vm.password != vm.repeatPassword) {
        vm.errInfo = "两次输入的密码不一致";
        return;
      }
      vm.errInfo = '';
      var req = {
        phone: vm.phone,
        password: vm.password,
        code: vm.code
      };
      api.auth.register(req).then(function (res) {
        var result = res.data;
        vm.errInfo = result.info;
      })
    }
  }

})();
