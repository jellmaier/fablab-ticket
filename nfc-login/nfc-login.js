angular.module('nfcLogin', ['ngRoute', 'ngSanitize']);
angular.module('nfcLogin').controller('nfcLoginCtrl', function($scope, $http, $window) {

  $scope.api_url = AppAPI.sharing_url;
  $scope.templates_url = AppAPI.templates_url;
  $scope.blog_url = AppAPI.blog_url;

  //------------------------------
  // Load Data from API
  //------------------------------
  $scope.overlay = [];
  $scope.overlay.submitcode = "";
  
  $scope.submitCheckToken = function(){
    console.log($scope.overlay.submitcode);
    $http.get($scope.api_url + 'check_nfc_token?token=' + $scope.overlay.submitcode)
    .then(function successCallback(response) {
      $scope.overlay.login_message = "Karte gefunden!";
      $scope.overlay.submitcode = "";
      $scope.overlay.show=false;
      $window.location.reload();
    }, function errorCallback(response) {
      console.log('load set token: ' + response.status);
      $scope.overlay.submitcode = "";
      $scope.overlay.login_message = "Karte nicht gefunden, bitte versuche es erneut!";
    }); 
  }
/*
  $scope.submitSetToken = function(){
    console.log($scope.overlay.submitcode);
    $http.post($scope.api_url + 'set_nfc_token?token=' + $scope.overlay.submitcode)
    .then(function successCallback(response) {
      $scope.overlay.submitcode = "";
      $scope.overlay.show=false;
    }, function errorCallback(response) {
      console.log('load set token: ' + response.status);
    }); 
  }
*/
 

});
/*
angular.module('ticketUser').controller('nfcLoginCtrl', function($scope, $http, $window) {

  $scope.api_url = AppAPI.sharing_url;
  $scope.templates_url = AppAPI.templates_url;

  //------------------------------
  // Load Data from API
  //------------------------------
  $scope.overlay = [];
  $scope.overlay.submitcode = "";

  $scope.submitSetToken = function(){
    console.log($scope.overlay.submitcode);
    $http.post($scope.api_url + 'set_nfc_token?token=' + $scope.overlay.submitcode)
    .then(function successCallback(response) {
      $scope.overlay.submitcode = "";
      $scope.overlay.show=false;
    }, function errorCallback(response) {
      console.log('load set token: ' + response.status);
    }); 
  }

});
*/


//------------------------------
// Nonce Handling
//------------------------------

angular.module('nfcLogin').config(['$routeProvider', '$locationProvider', '$httpProvider', 
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

//------------------------------
// Common directive for Focus
// from: http://www.angulartutorial.net/2014/04/angular-js-auto-focus-for-input-box.html
//------------------------------

angular.module('nfcLogin').directive('focus',
function($timeout) {
 return {
 scope : {
   trigger : '@focus'
 },
 link : function(scope, element) {
  scope.$watch('trigger', function(value) {
    if (value === "true") {
      $timeout(function() {
       element[0].focus();
      });
   }
 });
 }
};
}); 