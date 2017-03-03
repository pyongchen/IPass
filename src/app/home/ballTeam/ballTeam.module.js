(function() {
  'use strict';

  angular
    .module('app.home.ballTeam')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.ballTeam', {
      url: "/ballTeam",
      abstract: true
    })
  }
})();
