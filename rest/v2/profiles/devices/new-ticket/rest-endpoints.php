<?php

include 'rest-new-ticket.php';
include 'rest-new-ticket-create.php';

if (!class_exists('RestEndpointsV2ProfilesDevicesNewTicket'))
{
  class RestEndpointsV2ProfilesDevicesNewTicket
  {
    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;
      $this->routeService->registerEndpoints($this, 'restRegisterRoutes');

    }

    public function restRegisterRoutes() {


      $this->routeService->registerUserGET('profiles/' . RestV2Routes::userId . '/devices/'. RestV2Routes::deviceId . '/new-ticket',
        'RestV2NewTicket','restProfileNewTicket');

      $this->routeService->registerUserPOST('profiles/' . RestV2Routes::userId . '/devices/'. RestV2Routes::deviceId . '/new-ticket',
        'RestV2NewTicketCreate','restNewTicket');

		}

  }
}
