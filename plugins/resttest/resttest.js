angular.module('restTest', ['ngRoute', 'ngCookies']);
angular.module('restTest').controller('restTestCtrl', function($scope, $http, $window) {

  $scope.api_url = AppAPI.sharing_url;
  $scope.templates_url = AppAPI.templates_url;
  $scope.blog_url = AppAPI.blog_url;

  
  $scope.loadRestRoutesSaved = function(){
    $http.get($scope.blog_url + '/wp-content/plugins/fablab-ticket/plugins/resttest/restroutes-save.json')
    .then(function successCallback(response) {
      $scope.routes = response.data.routes;
      $scope.loadRestRoutes();
    }, function errorCallback(response) {
      console.log('load set token: ' + response.status);
    }); 
  }

  $scope.loadRestRoutes = function(){
    console.log('huhu');
    $http.get($scope.blog_url + '/wp-content/plugins/fablab-ticket/plugins/resttest/restroutes.json')
    .then(function successCallback(response) {
      $scope.routes = angular.merge($scope.routes, response.data.routes);
      console.log($scope.routes);
      $scope.loadRestResponses($scope.routes);
    }, function errorCallback(response) {
      console.log('load set token: ' + response.status);
    }); 
  }

  $scope.loadRestRoutesSaved();

  $scope.loadRestResponses = function(routes){
    angular.forEach(routes, function(route) {
      if(route.test){
        $scope.loadRestResponse(route);
      }
    });
  }

  $scope.loadRestResponse = function(route){
    $http.get($scope.api_url + route.route)
    .then(function successCallback(response) {
      route.response = response.status;
      $scope.checkResonse(route);
    }, function errorCallback(response) {
      route.response = response.status;
      $scope.checkResonse(route);
    }); 
  }


  $scope.checkResonse = function(route){
    if (route.code == route.response) {
      route.color = 'green';
      route.class = ' rest-status-icon-ok';
    } else {
      route.color = 'red';
      route.class = ' rest-status-icon-error';
    }
  }
 

});


//------------------------------
// Nonce Handling
//------------------------------

angular.module('restTest').config(['$routeProvider', '$locationProvider', '$httpProvider', 
  function($routeProvider, $locationProvider, $httpProvider) {
  // ...

  $httpProvider.interceptors.push([function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        //add nonce to avoid CSRF issues
        config.headers['X-WP-Nonce'] = AppAPI.nonce;

        return config;
      }
    };
  }]);
}]);