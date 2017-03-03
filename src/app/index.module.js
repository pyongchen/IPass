(function() {
  'use strict';

  angular
    .module('app', [
      'ngAnimate',
      'ngMaterial',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'toastr',
      'ngFileUpload',

      'app.home',
      'app.heat',
      'app.auth',
      'app.publish',
      'app.chat'
    ]);
})();
