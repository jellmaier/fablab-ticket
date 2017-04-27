angular.module('ticketListAdmin', ['ngRoute', 'ngSanitize']);
/*
angular.module('ticketListUserTest', ['ngAnimate']);

angular.module('ticketListUserTest').controller('TestCtrl', function($scope) {

  $scope.templates_url = AppAPI.templates_url;
});
*/

angular.module('ticketListAdmin').controller('ticketListAdminCtrl', function($scope, $http, $interval, $q, $timeout) {


  $scope.api_url = AppAPI.sharing_url;
  $scope.templates_url = AppAPI.templates_url;
  $scope.LOCAssign = assign_loc;
  $scope.LOCMinHour = minhour_loc;


  $scope.max = 60;

  $scope.over = {
    duration: 0
  };

  //------------------------------
  // Load Data from API
  //------------------------------

  $scope.formatDate = function(date){
    return new Date(date);
  }

  $scope.incrementMax = function(){
    $scope.max+=60;
  }

  $scope.setMinHour = function(){
    $scope.minutes = $scope.over.duration % 60;
    $scope.hours = Math.floor($scope.over.duration / 60);
  }

   $scope.loadDeviceTypes = function() {
    $http.get($scope.api_url + 'device_types')
    .then(function successCallback(response) {
      $scope.device_types = response.data.devices;
      $scope.loadDeviceValues();
      $scope.loadDeviceTickets();
      $interval($scope.loadDeviceTickets, 15000);    
    }, function errorCallback(response) {
      console.log('load device error: ' + response.status);
    }); 

  }

   $scope.loadDeviceValues = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $http.get($scope.api_url + 'device_type_values/' + device_type.term_id)
      .then(function successCallback(response) {
        device_type.color = response.data.color;
        device_type.usage_type = response.data.usage_type;
        device_type.completed = response.data.online; // only show when there are online devices
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


  $scope.loadDeviceTicket = function(device_type, force = false) {

    if (force)
      device_type.ticketshash = 0;

    $http.get($scope.api_url + 'ticket' +
      '?device_id=' + device_type.term_id +
      '&hash=' + device_type.ticketshash)
    .then(function successCallback(response) {
      if(response.status == 304)
        return;
     // if(force || (device_type.ticketshash != response.data.hash)) {
        //console.log(response.data.hash);
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

        console.log(ticket.available);

        if(device_type.changedID == ticket.ID) 
          $scope.setChangeHignlight(device_type, ticket);

        ticket.completed = true;
      }, function errorCallback(response) {
        console.log('load ticket_values error: ' + response.status);
      }); 
    });
  }

  $scope.setChangeHignlight = function(device_type, ticket) {
    ticket.changed = true;
    $timeout(function() {
      ticket.changed = false;
      if(device_type.changedID == ticket.ID) 
        device_type.changedID = 0;
      }, 10000);
  }

/*
  Possible order animation
  // from: http://stackoverflow.com/questions/16431136/how-can-i-animate-sorting-a-list-with-orderby-using-ng-repeat-with-ng-animate
  $scope.setOrder = function(device_type) {
    for (var i = 0; i < device_type.length; i++) {
      device_type.order = i;
    }
  };

  alternative
  // http://codepen.io/mmmeff/pen/spbfl
*/


  // --------------------
  // Ticket System Online Methodes 
  // --------------------

  var loadTicketSystemOnline = function() {
    $http.post($scope.api_url + 'ticket_system_online')
    .then(function successCallback(response) {
      $scope.ticketSystemOnline = (response.data == '1');
      //console.log($scope.ticketSystemOnline);
    }, function errorCallback(response) {
      console.log('loadTicketSystemOnline error: ' + response.status);
    });  
  }
  loadTicketSystemOnline();


  $scope.setTicketSystemOnline = function() {
    $scope.ticketSystemOnline = !$scope.ticketSystemOnline;

    if($scope.ticketSystemOnline)
      var param = '?set_online=online';
    else
      var param = '?set_online=offline';

    $http.post($scope.api_url + 'ticket_system_online' + param)
    .then(function successCallback(response) {
      $scope.ticketSystemOnline = (response.data == '1');
    }, function errorCallback(response) {
      console.log('loadTicketSystemOnline error: ' + response.status);
    });  
  }

  // --------------------
  // Ticket Handling 
  // --------------------


  $scope.deactivateTicket = function(device_type, ticket) {
    $http.post($scope.api_url + 'deactivate_ticket/' + ticket.ID)
    .then(function successCallback(response) {
      device_type.changedID = ticket.ID;
      ticket.status = 'inactive';
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    });  
  }

  $scope.activateTicket = function(device_type, ticket) {
    $http.post($scope.api_url + 'activate_ticket/' + ticket.ID)
    .then(function successCallback(response) { 
      ticket.status = 'waiting';
      device_type.changedID = ticket.ID;
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load activateTicket error: ' + response.status);
    });
  }

  $scope.deleteTicket = function (device_type, ticket, index) {
    $http.post($scope.api_url + 'delete_ticket/' + ticket.ID)
    .then(function successCallback(response) {
      device_type.tickets.splice(index, 1);
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    }); 
  }

  $scope.finishTicket = function (device_type, ticket) {
    $http.post($scope.api_url + 'finish_ticket/' + ticket.ID)
    .then(function successCallback(response) {
      ticket.status = 'finished';
      device_type.changedID = ticket.ID;
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    }); 
  }

  $scope.continueTicket = function (device_type, ticket) {
    $http.post($scope.api_url + 'continue_ticket/' + ticket.ID)
    .then(function successCallback(response) {
      ticket.status = 'assigned';
      device_type.changedID = ticket.ID;
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    }); 
  }


  // Assign Overlay Methods
  $scope.assignTicketOverlay = function(device_type, ticket) {
    //console.log('load activateTicket error: ' + response.status);
    $scope.overlay = [];
    $scope.overlay.ticket = ticket;
    $scope.overlay.device_type = device_type;
    $scope.overlay.show = true;
    $scope.overlay.url = $scope.templates_url + 'assignOverlayTemplate.html';
    $scope.loadAssignTicketOverlay();
  }

  $scope.loadAssignTicketOverlay = function() {
    $http.get($scope.api_url + 'devices_for_ticket'
      + '?user_id=' + $scope.overlay.ticket.post_author
      + '&ticket_id=' + $scope.overlay.ticket.ID)
    .then(function successCallback(response) {
      console.log(response.data);
      if(response.data.length == 0) {
        $scope.overlay.no_device = true;
      } else {
        $scope.overlay.select = response.data;
        $scope.overlay.deviceSelect =  $scope.overlay.select[0].id;
      }
    }, function errorCallback(response) {
      console.log('load devices error: ' + response.status);
    });
  }

  $scope.assignTicket = function(){
    $http.post($scope.api_url + 'assign_ticket'
      + '?ticket_id=' + $scope.overlay.ticket.ID
      + '&device_id=' + $scope.overlay.deviceSelect
      + '&duration=60')
    .then(function successCallback(response) { 
      $scope.overlay.ticket.status = 'assigned';
      $scope.overlay.device_type.changedID = $scope.overlay.ticket.ID;
      $scope.loadDeviceTicket($scope.overlay.device_type, true);
      $scope.overlay.show = false;
    }, function errorCallback(response) {
      console.log('load assignTicket error: ' + response.status);
    });
    
  }

  // Schedule Overlay Methods

  $scope.scheduleTicketOverlay = function(device_type, ticket) {
    $scope.overlay = [];
    $scope.overlay.ticket = ticket;
    $scope.overlay.device_type = device_type;
    $scope.overlay.show = true;
    $scope.overlay.url = $scope.templates_url + 'scheduleOverlayTemplate.html';
    $scope.loadAssignTicketOverlay();
  }

  $scope.scheduleTicket = function() {
    $http.post($scope.api_url + 'schedule_ticket'
      + '?ticket_id=' + $scope.overlay.ticket.ID
      + '&device_id=' + $scope.overlay.deviceSelect
      + '&device_type=device'
      + '&duration=' + $scope.over.duration)
    .then(function successCallback(response) { 
      $scope.overlay.ticket.status = 'scheduled';
      $scope.overlay.device_type.changedID = $scope.overlay.ticket.ID;
      $scope.loadDeviceTicket($scope.overlay.device_type, true);
      $scope.overlay.show = false;
    }, function errorCallback(response) {
      console.log('load sceduleTicket error: ' + response.status);
    });
  }

  $scope.hideOverlay = function() {
    $scope.overlay = null;
  }

});

//------------------------------
// Nonce Handling
//------------------------------

angular.module('ticketListAdmin').config(['$routeProvider', '$locationProvider', '$httpProvider', 
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

/* create directive --> working but not in use
// src: http://stackoverflow.com/questions/21103724/angular-directive-templateurl-relative-to-js-file

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('ticketListUser').directive('assignOverlay', function($http) {
  return {
    restrict : "EA",
    templateUrl: currentScriptPath.replace('js/fl-ticket-list-user-rest.js', 'restapi/assignOverlayTemplate.html'),
    scope: false,
    link: function(scope) {
      scope.$watch('$viewContentLoaded', function() {
        $http.get(scope.api_url + 'devices_for_ticket'
          + '?user_id=' + scope.overlay.ticket.post_author
          + '&ticket_id=' + scope.overlay.ticket.ID)
        .then(function successCallback(response) { 
          scope.overlay.select = response.data;
          scope.overlay.deviceSelect =  scope.overlay.select[0].id;
        }, function errorCallback(response) {
          console.log('load devices error: ' + response.status);
        });
      });


      
    },
  };
});

*/
