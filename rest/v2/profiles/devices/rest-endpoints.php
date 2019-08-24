<?php

include 'rest-devices-service.php';
include 'new-ticket/rest-endpoints.php';

if (!class_exists('RestEndpointsV2ProfilesDevices'))
{
  class RestEndpointsV2ProfilesDevices
  {

    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;
    	new RestEndpointsV2ProfilesDevicesNewTicket($routeService);
      $this->routeService->registerEndpoints($this, 'restRegisterRoutes');
    }

    public function restRegisterRoutes() {
      $this->routeService->registerUserGET('/profiles/' . RestV2Routes::userId . '/devices',
        'RestV2Devices', 'restProfileDevices');

//      $this->routeService->registerUserGET('/profiles/' . RestV2Routes::userId . '/devices/' . RestV2Routes::deviceId,
  //      'RestV2Devices', 'restPofileDevice');

		}

  }
}

?>