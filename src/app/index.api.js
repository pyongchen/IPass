(function() {
  'use strict';

  angular
    .module('app')
    .factory('api', api)
    .factory('apiResolver', apiResolver);

  /** @ngInject */
  function api($resource) {
    var _api = {};
    // _api.dataUrl = 'http://172.18.181.77:3000/api/';
    _api.dataUrl = 'http://127.0.0.1:3000/api/';
    _api.jsonUrl = 'app/../data/';
    _api.baseUrl = '/api/';
    _api.baseUrl = _api.dataUrl;
    _api.authUrl = '/auth/';

    // 注册api,json文件
    _api.timeline = $resource(_api.baseUrl + 'timeline.json');


    _api.referees = $resource(_api.baseUrl + 'user/Referees.json');


    //获取所有排行榜的筛选信息
    _api.honor = $resource(_api.jsonUrl + 'honor' + '.json');
    _api.select = $resource(_api.jsonUrl + 'select' + '.json');

    //获取某个球员的聊天记录
    _api.message = $resource(_api.jsonUrl + 'message/:id' + '.json');

    // 注册api,mongodb
    _api.activities = $resource(_api.baseUrl + 'activities');
    _api.activity = $resource(_api.baseUrl + "activity/:type/:id");
    _api.players = $resource(_api.baseUrl + 'players');
    _api.player = $resource(_api.baseUrl + 'player/:id');
    _api.team = $resource(_api.baseUrl + 'team/:type/:id');

    //提交数据,返回Promise函数, method: post
    function resource(req, url) {
      return $resource(url).save(req).$promise
        .then(function (result) {
          return Promise.resolve(result);
        })
    }

    _api.publish = {
      publish: function (req) {
        return resource(req, _api.baseUrl + 'publish');
      }
    };

    //用户登录注册
    _api.auth = {
      logout: function (req) {
        return resource(req, _api.authUrl + 'logout');
      },
      isLogin: function (req) {
        return resource(req, _api.authUrl + 'isLogin');
      },
      login: function(req) {
        return resource(req, _api.authUrl + 'login');
      },
      getCode: function (req) {
        return resource(req, _api.authUrl + 'getCode');
      },
      register: function (req) {
        return resource(req, _api.authUrl + 'register');
      }
    };
    return _api;
  }

  /** @ngInject */
  function apiResolver($q, api) {
    return { resolve: resolve};

    function resolve(action, parameters) {
      var actionParts = action.split('@'),
          resource    = actionParts[0],
          method      = actionParts[1],
          params      = parameters || {};

      if (!resource || !method) {
        return false;
      }

      var deferred = $q.defer();
      // to be better: check resource
      api[resource][method](params,
        function(data) { deferred.resolve(data); },
        function(err)  { deferred.reject(err); }
      );

      return deferred.promise;
    }
  }

})();
