(function () {
  'use strict';

  angular
    .module('app.home.activity.signin', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.activity.signin', {
      url: '/signin/:type/:id',
      views: {
        'main@': {
          templateUrl: 'app/home/activity/activitySignin/activitySignin.html',
          controller: 'ActivitySigninController as vm'
        }
      },
      resolve: {
        activity: function (apiResolver, $stateParams) {
          console.log($stateParams.id, $stateParams.type);
          return apiResolver
            .resolve('activity@get', {id: $stateParams.id, type: $stateParams.type})
            .then(function (data) {
              console.log(data.data.teams);
              data.data.teamsinfo = [];
              return apiResolver
                .resolve("team@get", {id: data.data.teams[0]._id, type: $stateParams.type})
                .then(function (team) {
                  data.data.teamsinfo.push(team.data);
                }).then(function () {
                  return apiResolver
                    .resolve("team@get", {id: data.data.teams[1]._id, type: $stateParams.type}).then(function (team) {
                    data.data.teamsinfo.push(team.data);
                    console.log(data.data);
                    return data.data
                  })
                })
            })
        }
      }
    });
  }
})();
