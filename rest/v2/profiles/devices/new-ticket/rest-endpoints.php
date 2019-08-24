<?php

include 'rest-create-new-ticket-service.php';

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

/*
      $this->routeService->registerUserGET('profiles/' . RestV2Routes::userId . '/devices/'. RestV2Routes::userId . '/new-ticket',
        'RestV2NewTicket','restProfileNewTicket');
*/
      // http://localhost:4200/fablab/wp-json/sharepl/v2/profiles/1/devices/2/new-ticket
      $this->routeService->registerUserPOST('profiles/' . RestV2Routes::userId . '/devices/'. RestV2Routes::deviceId . '/new-ticket',
        'RestV2NewTicket','restProfileNewTicket');

		}

  }
}
