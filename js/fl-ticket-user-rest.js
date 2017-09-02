angular.module('ticketUser', ['ngRoute', 'ngCookies', 'ngSanitize', 'angular-svg-round-progressbar']);
angular.module('ticketUser').controller('ticketUserCtrl', function($scope, $http, $document, $window, $cookies, $interval, $q, $timeout) {

  $scope.api_url = AppAPI.sharing_url;
  $scope.blog_url = AppAPI.blog_url;
  $scope.templates_url = AppAPI.templates_url;
  $scope.LOCAssign = assign_loc;

  //------------------------------
  // Load Data from API
  //------------------------------

  $scope.formatDate = function(date){
    return new Date(date);
  }

  var loadTAC = function() {
    $http.get($scope.api_url + 'check_and_get_tac')
    .then(function successCallback(response) {
      $scope.tac = response.data;
    }, function errorCallback(response) {
      console.log('load tac error: ' + response.status);
    }); 
  }
  loadTAC();

  $scope.setTAC = function() {
    $http.post($scope.api_url + 'set_user_tac_accaptance')
    .then(function successCallback(response) {
      $scope.tac = response.data;
    }, function errorCallback(response) {
      console.log('load tac error: ' + response.status);
    }); 
  }

  var loadTickets = function(interval_number = 0, force = false) { // interval overrides the first value 

    if (force)
      $scope.ticketshash = 0;
    else if(($scope.menuTab != 'tickets') && angular.isDefined($scope.ticketshash))
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
        ticket.pin = response.data.pin;
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
    $http.post($scope.api_url + 'add_ticket'
      + '?device_id=' + $scope.overlay.device_type.id
      + '&type=device_type' )
    .then(function successCallback(response) { 
      loadTickets(0, force=true);
      $scope.overlay.show = false;
      $scope.setMenuTab('tickets');
      $scope.loadDeviceValues($scope.overlay.device_type);
    }, function errorCallback(response) {
      console.log('load assignTicket error: ' + response.status);
      if (response.status == 423){
        $scope.ticket_system_offline = true;
        $scope.device_types = null;
        $scope.overlay.show = false;
      } else if (response.status == 403){
        $scope.overlay.show = false;
      } 
    });
    
  }

  $scope.editTicket = function(){
    $http.post($scope.api_url + 'edit_ticket'
      + '?ticket_id=' + $scope.overlay.ticket.ID
      + '&device_id=' + $scope.overlay.deviceSelect.id)
    .then(function successCallback(response) { 
      loadTickets(0, force=true);
      $scope.overlay.show = false;
      $scope.loadDevicesValues();
    }, function errorCallback(response) {
      console.log('load assignTicket error: ' + response.status);
    });
    
  }

  $scope.deleteTicket = function () {
    $http.post($scope.api_url + 'delete_ticket/' + $scope.overlay.ticket.ID)
    .then(function successCallback(response) {
      $scope.tickets.splice( $scope.overlay.ticket.index, 1);
      loadTickets(0, force=true);
      $scope.overlay.show = false;
      $scope.loadDevicesValues();
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    }); 
  }


  //------------------------------
  // Devices of Location
  //------------------------------

  $scope.loadDeviceTypes = function() {
    $http.get($scope.api_url + 'user_device_types')
    .then(function successCallback(response) {
      $scope.device_types = response.data;
      $scope.loadDevicesValues(); 
    }, function errorCallback(response) {
      console.log('load device error: ' + response.status);
      if (response.status == 423)
        $scope.ticket_system_offline = true;
    }); 
  }

  $scope.loadDevicesValues = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $scope.loadDeviceValues(device_type);
    });
  }

  $scope.loadDeviceValues = function(device_type) {
    $http.get($scope.api_url + 'device_type_values/' + device_type.id)
    .then(function successCallback(response) {
      device_type.color = response.data.color;
      device_type.available = response.data.available;
      $scope.max_available = response.data.max_available;
    }, function errorCallback(response) {
      console.log('load device color error: ' + response.status);
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

  //------------------------------
  // NFC set Token
  //------------------------------

    $scope.setTokenOverlay = function() {
    $scope.overlay = [];
    $scope.overlay.mode = 'set_nfc_token';
    $scope.overlay.submitcode = "";
    $scope.overlay.show = true;

  }


  $scope.submitSetToken = function(){
    $http.post($scope.api_url + 'set_nfc_token?token=' + $scope.overlay.submitcode)
    .then(function successCallback(response) {
      $scope.overlay.submitcode = "";
      $scope.overlay.message = "Karte erfolgreich hinzugefügt!";
      $scope.overlay.show=false;
    }, function errorCallback(response) {
      $scope.overlay.submitcode = "";
      console.log('load set token: ' + response.status);
    }); 
  }

  //------------------------------
  // Login Terminal 
  //------------------------------

  $scope.checkTerminalToken = function(){
    var get_cookie = $cookies.get('terminal_token');
    $http.get($scope.api_url + 'check_terminal_token?token=' + get_cookie)
    .then(function successCallback(response) {
      $scope.page_info = response.data;
      $scope.get_ticket_allowed = ($scope.page_info.is_terminal || !$scope.page_info.login_terminal_only);
      initTinterval();
    }, function errorCallback(response) {
      console.log('load check token: ' + response.status);
    }); 
  }
  $scope.checkTerminalToken();

  $scope.terminalToggle = function(){
    if($scope.page_info.is_terminal)
      $scope.unsetTerminal();
    else {
      $scope.setTerminal();
      $scope.page_info.is_terminal = true;
    }
    $scope.get_ticket_allowed = ($scope.page_info.is_terminal || !$scope.page_info.login_terminal_only);
  }

  $scope.setTerminal = function(){
    $http.get($scope.api_url + 'get_terminal_token')
    .then(function successCallback(response) {   
      $cookies.put('terminal_token', response.data);
      $scope.checkTerminalToken();
    }, function errorCallback(response) {
      console.log('load check token: ' + response.status);
    }); 
    //$scope.overlay.message = "Terminal erfolgreich hinzugefügt!";
  }

  $scope.unsetTerminal = function(){
    $cookies.remove('terminal_token');
    $scope.page_info.is_terminal = false;
  }

  //------------------------------
  // Logout Interval
  // from: http://www.adamthings.com/post/2015/01/27/simple-angularjs-countdown-timer/
  //------------------------------


  var initTinterval = function(){
    $scope.timerCount = $scope.page_info.auto_logout;

    var countDown = function () {
      if ($scope.timerCount > 0) {
        $scope.countDownLeft = $scope.timerCount;
        $scope.timerCount--;
        if($scope.page_info.is_terminal)
          $timeout(countDown, 1000);
      } else {
        //Any desired function upon countdown end.
        console.log('logout');
        $scope.logOut();
      } 
    };
    countDown();
  }

  $scope.logOut = function () {
    $http.get($scope.api_url + 'logout')
    .then(function successCallback(response) {   
      $window.location.reload();
    }, function errorCallback(response) {
      console.log('load check token: ' + response.status);
    }); 
  }

  $document.on('click', function(){
    $scope.timerCount = $scope.page_info.auto_logout;
  });



  // --------------------
  // Ticket System Online Methodes 
  // --------------------


  $scope.setTicketSystemOnline = function() {
    $scope.ticket_system_offline = !$scope.ticket_system_offline;

    if($scope.ticket_system_offline)
      var param = '?set_online=offline';
    else
      var param = '?set_online=online';

    $http.post($scope.api_url + 'ticket_system_online' + param)
    .then(function successCallback(response) {
      $scope.ticketSystemOnline = (response.data != '1');
    }, function errorCallback(response) {
      console.log('loadTicketSystemOnline error: ' + response.status);
    });  
  }
 

});

//------------------------------
// Filter Devices
//------------------------------

angular.module('ticketUser').filter('availableDevice', function() {
  return function(device, selected) {
    var results = [];
     for(var i = 0; i < device.length; i++){
      if(device[i].available)
        results.push(device[i]);
      else if (device[i].id == selected) 
        results.push(device[i]);
    }
    return results;
  };
})

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

//------------------------------
// Common directive for Focus
// from: http://www.angulartutorial.net/2014/04/angular-js-auto-focus-for-input-box.html
//------------------------------

angular.module('ticketUser').directive('focus',
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


/*
var app = angular.module("demoapp", ['ui-leaflet']);
app.controller("BasicFirstController", [ "$scope", function($scope) {
    // Nothing here!
}]);
*/
