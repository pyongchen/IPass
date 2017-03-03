(function () {
  'use strict';

  angular
    .module('app.publish.oneToOne')
    .controller('OneToOneController', OneToOneController);

  /** @ngInject */
  function OneToOneController(curPlayer, players, $log, $state, $mdSidenav) {
    var vm = this;
    vm.players = players.data;
    vm.curPlayer = curPlayer.data;
    var mySwiper;
    setTimeout(function () {
      vm.swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
      });
      mySwiper = $('.swiper-container')[0].swiper;
    }, 300);
    vm.nextPlayer = function () {
      mySwiper.slideNext();
    };

    vm.toggleRight = toggleRight;

    vm.goToPlayer = function (id) {
      $state.go("home.user", {id: id});
    };

    vm.goToChat = function (id) {
      $state.go("chat", {id:id});
    };

    vm.toggleRight = buildToggler('right');
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID).toggle();
      }
    }
  }
})();

function toggleRight() {
  $('.ui.sidebar')
    .sidebar('toggle')
  ;
}
