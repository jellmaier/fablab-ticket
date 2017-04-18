angular.module('ticketListUser', ['ngRoute', 'ngSanitize']);
angular.module('ticketListUser').controller('ticketListUserCtrl', function($scope, $http, $interval, $q, $timeout, $location, $window) {

  $scope.api_url = AppAPI.sharing_url;
  $scope.templates_url = AppAPI.templates_url;
  $scope.LOCAssign = assign_loc;


  //------------------------------
  // Load Data from API
  //------------------------------

  $scope.formatDate = function(date){
    return new Date(date);
  }

  $scope.loadDeviceTypes = function() {
    $http.get($scope.api_url + 'device_types')
    .then(function successCallback(response) {
      $scope.device_types = response.data.devices;
      $scope.neg_index = $scope.device_types.length;
      console.log($scope.device_types);
      $scope.loadDeviceValues();
      $scope.loadDeviceTickets();    
    }, function errorCallback(response) {
      console.log('load device error: ' + response.status);
    }); 

  }

   $scope.loadDeviceValues = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $http.get($scope.api_url + 'device_type_values/' + device_type.term_id)
      .then(function successCallback(response) {
        device_type.color = response.data.color;
        device_type.completed = true;
      }, function errorCallback(response) {
        console.log('load device color error: ' + response.status);
      }); 
    });
  }
  $scope.loadDeviceTypes();

  $scope.loadDeviceTickets = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $scope.loadDeviceTicket(device_type);
    });
  }


  $scope.loadDeviceTicket = function(device_type) {

    $http.get($scope.api_url + 'ticket' +
      '?device_id=' + device_type.term_id +
      '&hash=' + device_type.ticketshash)
    .then(function successCallback(response) {
      if(response.status == 304)
        return;
      device_type.ticketshash = response.data.hash;
      device_type.notickets = false;
      $scope.loadTicketValues(device_type, response.data.tickets);
      device_type.tickets = response.data.tickets;
      if(response.data.hash == 'empty')
        device_type.notickets = true;
      
    }, function errorCallback(response) {
      console.log('load ticket error: ' + response.status);
    }); 

  }

  $scope.loadTicketValues = function(device_type, tickets) {
    angular.forEach(tickets, function(ticket) {
      $http.get($scope.api_url + 'ticket_values/' + ticket.ID)
      .then(function successCallback(response) {
        ticket.device_title = response.data.device_title;
        ticket.available = response.data.available;
        //ticket.status = response.data.status;

        if(device_type.changedID == ticket.ID) 
          $scope.setChangeHignlight(device_type, ticket);

        ticket.completed = true;
      }, function errorCallback(response) {
        console.log('load ticket_values error: ' + response.status);
      }); 
    });
  }


  // ---------------------
  // fullscreen Methods
  // ---------------------


  var get_param = new URLSearchParams(window.location.search);
  if(get_param.has('fullscreen'))
    $scope.fullscreen = true;
  else
    $scope.fullscreen = false;

  $scope.showFullscreen = function() {
    $scope.fullscreen = true;
    //console.log($window.location.search);
    //$window.location.search = ''; works but reloads
  }

  $scope.hideFullscreen = function() {
    $scope.fullscreen = false;
  }

  $scope.calcColsAndRows = function() {
    $scope.number_rows = Math.floor(($window.innerHeight - 115)/151);
    $scope.number_cols = Math.floor($window.innerWidth/600);
  }

  
  $scope.calcColsAndRows();

  $scope.reloadPage = function() {

    if($scope.fullscreen) {
      $scope.calcColsAndRows();

      var index = $scope.neg_index - $scope.number_cols;
      if (index <= 0)
        index = $scope.device_types.length;

      var next_first_index = $scope.device_types.length - index;
      for (var i = 0; (i < $scope.number_cols && next_first_index+i < $scope.device_types.length); i++)
        $scope.loadDeviceTicket($scope.device_types[next_first_index+i]);

      //wait 5sec to load content
      $timeout(function() {
        $scope.neg_index = index;
      }, 5000);
    } else 
      $scope.loadDeviceTickets();

  }

  $interval($scope.reloadPage, 10000);


});

//------------------------------
// Nonce Handling
//------------------------------

angular.module('ticketListUser').config(['$routeProvider', '$locationProvider', '$httpProvider', 
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
