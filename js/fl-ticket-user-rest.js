angular.module('ticketUser', ['ngRoute', 'ngSanitize']);
angular.module('ticketUser').controller('ticketUserCtrl', function($scope, $http, $interval, $q, $timeout) {

  $scope.api_url = AppAPI.sharing_url;
  $scope.templates_url = AppAPI.templates_url;
  $scope.LOCAssign = assign_loc;

  //------------------------------
  // Load Data from API
  //------------------------------

  $scope.formatDate = function(date){
    return new Date(date);
  }

  var loadTickets = function(interval_number = 0, force = false) { // interval overrides the first value 

    if (force)
      $scope.ticketshash = 0;

    if(($scope.menuTab != 'tickets') && angular.isDefined($scope.ticketshash))
      return;

    $http.get($scope.api_url + 'tickets_current_user' +
      '?hash=' + $scope.ticketshash)
    .then(function successCallback(response) {
      if(response.status == 304)
        return;
      $scope.ticketshash = response.data.hash;
      $scope.notickets = false;
      loadTicketValues(response.data.tickets);
      $scope.tickets = response.data.tickets;
      if(response.data.hash == 'empty')
        $scope.notickets = true;
      
    }, function errorCallback(response) {
      if(response.status == 401) {
        $scope.notickets = true;
        $scope.unauthorized = true;
      }
        
      console.log('load ticket error: ' + response.status);
    }); 
  }

  var loadTicketValues = function(tickets) {
    angular.forEach(tickets, function(ticket) {
      $http.get($scope.api_url + 'ticket_values/' + ticket.ID)
      .then(function successCallback(response) {
        ticket.device_title = response.data.device_title;
        ticket.available = response.data.available;
        ticket.color = response.data.color;
        ticket.device_id = response.data.device_id;

        //ticket.status = response.data.status;

        //if($scope.changedID == ticket.ID) 
          //$scope.setChangeHignlight(ticket);

        ticket.completed = true;
      }, function errorCallback(response) {
        console.log('load ticket_values error: ' + response.status);
      }); 
    });
  }

  loadTickets();
  $interval(loadTickets, 10000);




  //------------------------------
  // Load Overlays
  //------------------------------

  $scope.addTicketOverlay = function(device_type) {
    //console.log('load activateTicket error: ' + response.status);
    $scope.overlay = [];
    $scope.overlay.mode = 'add';
    $scope.overlay.device_type = device_type;
    $scope.overlay.show = true;
    //$scope.loadAddTicketOverlay();
  }

  $scope.loadAddTicketOverlay = function() {
    $http.get($scope.api_url + 'device_type_content/' + $scope.overlay.device_type.id)
    .then(function successCallback(response) { 
      $scope.overlay.device_type.content = response.data;
    }, function errorCallback(response) {
      console.log('load devices error: ' + response.status);
    });
  }

  $scope.editTicketOverlay = function(ticket, index) {
    //console.log('hallo');
    $scope.overlay = [];
    $scope.overlay.mode = 'edit';
    $scope.overlay.ticket = ticket;
    $scope.overlay.ticket.index = index;
    $scope.overlay.deviceSelect = {id: ticket.device_id, name: ticket.device_title};
    $scope.overlay.show = true;
  }

  //------------------------------
  // Overlays Methods
  //------------------------------


  $scope.addTicket = function(){
    $http.put($scope.api_url + 'add_ticket'
      + '?device_id=' + $scope.overlay.device_type.id
      + '&type=device_type' )
    .then(function successCallback(response) { 
      loadTickets(0, force=true);
      $scope.overlay.show = false;
      $scope.setMenuTab('tickets');
    }, function errorCallback(response) {
      console.log('load assignTicket error: ' + response.status);
    });
    
  }

  $scope.editTicket = function(){

    console.log($scope.api_url + 'edit_ticket'
      + '?ticket_id=' + $scope.overlay.ticket.ID
      + '&device_id=' + $scope.overlay.deviceSelect.id)
    $http.post($scope.api_url + 'edit_ticket'
      + '?ticket_id=' + $scope.overlay.ticket.ID
      + '&device_id=' + $scope.overlay.deviceSelect.id)
    .then(function successCallback(response) { 
      loadTickets(0, force=true);
      $scope.overlay.show = false;
    }, function errorCallback(response) {
      console.log('load assignTicket error: ' + response.status);
    });
    
  }

  $scope.deleteTicket = function () {
    $http.delete($scope.api_url + 'delete_ticket/' + $scope.overlay.ticket.ID)
    .then(function successCallback(response) {
      $scope.tickets.splice( $scope.overlay.ticket.index, 1);
      loadTickets(0, force=true);
      $scope.overlay.show = false;
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    }); 
  }


  //------------------------------
  // Devices of Location
  //------------------------------

  $scope.loadDeviceTypes = function() {
    $http.get($scope.api_url + 'user_device_types/0')
    .then(function successCallback(response) {
      $scope.device_types = response.data;
      $scope.loadDeviceValues(); 
    }, function errorCallback(response) {
      console.log('load device error: ' + response.status);
    }); 

  }

  $scope.loadDeviceValues = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $http.get($scope.api_url + 'device_type_values/' + device_type.id)
      .then(function successCallback(response) {
        device_type.color = response.data.color;
        device_type.completed = true;
      }, function errorCallback(response) {
        console.log('load device color error: ' + response.status);
      }); 
    });
  }

  $scope.loadDeviceContent = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $http.get($scope.api_url + 'device_type_content/' + device_type.id)
      .then(function successCallback(response) { 
        device_type.content = response.data;
      }, function errorCallback(response) {
        console.log('load devices error: ' + response.status);
      });
    });
  }
  $scope.loadDeviceTypes();
  $timeout(function() {$scope.loadDeviceContent()}, 5000);



  //------------------------------
  // Map handling
  //------------------------------


  $scope.menuTab = 'devices';
  $scope.setMenuTab = function(tab){
    $scope.menuTab = tab;
  }

 

});

//------------------------------
// Nonce Handling
//------------------------------

angular.module('ticketUser').config(['$routeProvider', '$locationProvider', '$httpProvider', 
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


/*
var app = angular.module("demoapp", ['ui-leaflet']);
app.controller("BasicFirstController", [ "$scope", function($scope) {
    // Nothing here!
}]);
*/
