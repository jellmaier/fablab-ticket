angular.module('ticketListUser', []);


angular.module('ticketListUser').controller('ticketListUserCtrl', function($scope, $http, $interval, $q) {


  var api_url = AppAPI.sharing_url;

  $scope.dattte = '20140313T00:00:00';

  //------------------------------
  // Load Data from API
  //------------------------------

   $scope.loadDeviceTypes = function() {
    $http.get(api_url + 'device_types')
    .then(function successCallback(response) {
      $scope.decvicetypehash = response.data.hash;
      $scope.device_types = response.data.devices;
      $scope.loadDeviceColor();
      $scope.loadDeviceTickets();
      $interval($scope.loadDeviceTickets, 15000);    
    }, function errorCallback(response) {
      console.log('load ticket error: ' + response.status);
    }); 

  }

   $scope.loadDeviceColor = function() {
    angular.forEach($scope.device_types, function(device_type) {
      $http.get(api_url + 'device_type_color/' + device_type.term_id)
      .then(function successCallback(response) {
        device_type.color = response.data;
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


  //var device_id = '12';
  $scope.loadDeviceTicket = function(device_type, force = false) {
    $http.get(api_url + 'ticket/' + device_type.term_id)
    .then(function successCallback(response) {
      if(force || (device_type.ticketshash != response.data.hash)) {
        //console.log(response.data.hash);
        device_type.ticketshash = response.data.hash;
        device_type.notickets = false;
        $scope.loadTicketValues(response.data.tickets);
        device_type.tickets = response.data.tickets;
      } else if(response.data.hash == 'empty') {
        device_type.notickets = true;
      } else 
        console.log('notchanged');
      
    }, function errorCallback(response) {
      console.log('load ticket error: ' + response.status);
    }); 

  }

  $scope.loadTicketValues = function(tickets) {
    angular.forEach(tickets, function(ticket) {
      $http.get(api_url + 'ticket_values/' + ticket.ID)
      .then(function successCallback(response) {
        ticket.color = response.data.color;
        ticket.device_title = response.data.device_title;
        ticket.available = response.data.available;
        ticket.status = response.data.status;
        ticket.completed = true;
      }, function errorCallback(response) {
        console.log('load ticket_values error: ' + response.status);
      }); 
    });
  }


  // Ticket Handling 
  $scope.deactivateTicket = function(device_type, ticket) {
    $http.put(api_url + 'deactivate_ticket/' + ticket.ID)
    .then(function successCallback(response) {
      ticket.status = 'inactive';
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    });  
  }

  $scope.deleteTicket = function (device_type, ticket, index) {
    $http.delete(api_url + 'delete_ticket/' + ticket.ID)
    .then(function successCallback(response) {
      device_type.tickets.splice(index, 1);
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load deactivateTicket error: ' + response.status);
    }); 
  }

  $scope.activateTicket = function(device_type, ticket) {
    $http.put(api_url + 'activate_ticket/' + ticket.ID)
    .then(function successCallback(response) { 
      ticket.status = 'waiting';
      $scope.loadDeviceTicket(device_type, true);
    }, function errorCallback(response) {
      console.log('load activateTicket error: ' + response.status);
    }); 
  }

  // ------------------------------------
  // handle overlay
/*

   // on click edit ticket
  $('.assign-ticket').on('click', function(event) {
    $.ticket = $(this).parent('div');
    $.edit_ticket = true;

    load_assign_ticket();
    show_overlay($);
  })

  function load_assign_ticket() {

    ticket_type = $.ticket.data('device-type');

    edit_box = $("#device-ticket-box");

    // Close icon
    edit_box.append('<a href="#" class="close">x</a>');

    // Title
    edit_box.append('<h2>'+ fl_ticket.assign_ticket + '</h2>');

    //Body

    //device Select
    device_select = $('<select id="ticket-device-select"></select>');
    device_select_p = $('<p>' + fl_ticket.ticket_device + '  : </p>');
    device_select_p.append(device_select);
    set_device_select(device_select, $.ticket.data('user-id'), ticket_type, $.ticket.data('device-id'));
    edit_box.append(device_select_p);

    if($.calc_time) {
      //Eddit Time Options
      edit_box.append('<p>' + fl_ticket.ticket_duration + ': <select id="ticket-time-select"></select></p>');
      $("#ticket-time-select").empty();
      for (time = $.time_interval; time < $.max_time; time+=$.time_interval) {
        $("#ticket-time-select").append( new Option(minutesToHours(time), time) );
      }
      $("#ticket-time-select").append( new Option(minutesToHours($.max_time), $.max_time) );
      $("#ticket-time-select").val($.ticket.data('duration'));
    }
    
    //add Buttons
    edit_box.append('<input type="submit" id="submit-ticket" class="button-primary" value="' + fl_ticket.assign_ticket + '"/>');
    edit_box.append('<input type="submit" id="cancel-ticket" class="button-primary" value="' + fl_ticket.ticket_cancel + '"/>');  
  }

  function set_device_select(device_select, user_id, ticket_type, device_id) {
    // Set Device Name Dropdown
    data = {
      action: 'get_devices_of_device_types',
      user_id: user_id,
      ticket_type: ticket_type,
      device_id: device_id,
    };
    $.post(ajaxurl, data, function(response) {
      var device_type_list = JSON.parse(response);
      $.each(device_type_list, function(id, name) {
        device_select.append( new Option(this.name, this.id) );
      });
      if(ticket_type == 'device')
        device_select.val(device_id);
    })  
  }

*/


});