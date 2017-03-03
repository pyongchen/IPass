(function() {
  'use strict';

  angular
    .module('app.home.ballTeam', [])
    .controller('BallTeamController', BallTeamController);

  /** @ngInject */
  function BallTeamController(activity, $log) {
    $log.log('activity');
    $log.log(activity);
    var vm = this;
  }
})();