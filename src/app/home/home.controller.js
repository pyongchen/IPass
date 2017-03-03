(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, $state, api) {
    var vm = this;
    $log.log('home');
    angular.element('.trigger').click(function() {
      angular.element('.menu').toggleClass('active');
    });
    angular.element('.menu span').click(function() {
      angular.element('.menu').toggleClass('active');
    });
    vm.goToUser = function () {
      var id = '3d37a9da-e001-4675-a0ab-2290f9e91cd3';
      api.auth.isLogin().then(function (res) {
        if(!res.data) $state.go("auth");
        else $state.go("home.user", {id: res.data});
      });
    };
    vm.publish = function (type) {
      if(type != 'oneToOne') {
        api.auth.isLogin().then(function (res) {
          if(res.data) {
            $state.go("publish.manyToMany", {id: res.data});
          } else {
            $state.go("auth");
          }
        });
      } else {
        $state.go("publish.oneToOne");
      }
    };
    vm.search = function (id) {
      $state.go("home.search", {id: id});
    }
  }
})();
