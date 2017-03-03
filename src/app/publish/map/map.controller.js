(function() {
  'use strict';

  angular
    .module('app.publish.map')
    .controller('MapController', MapController);

  /** @ngInject */
  function MapController(ballGame, $state, $log) {
    var vm = this;
    vm.ballGame = ballGame;
    $log.log(ballGame);
  }
})();
