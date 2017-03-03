(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  /** @ngInject */
  function AuthController($state, api) {
    var vm = this;
    vm.forgetPassword = function () {
      $state.go("auth.forget");
    };
    vm.register = function () {
      $state.go("auth.register");
    };
    vm.login = function () {
      if(!vm.username) {
        vm.errInfo = '请输入用户名';
        return;
      }
      if(!vm.password) {
        vm.errInfo = '请输入密码';
        return;
      }
      var req = {
        phone: vm.username,
        password: vm.password
      };
      api.auth.login(req).then(function (res) {
        if(!res.data.err) {
          $state.go("home.activity")
        } else {
          vm.errInfo = res.data.err;
        }
      });
    }
  }

})();
