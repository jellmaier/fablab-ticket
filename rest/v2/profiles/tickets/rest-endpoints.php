<?php

include 'rest-ticket-service.php';

if (!class_exists('RestEndpointsV2ProfilesTickets'))
{
  class RestEndpointsV2ProfilesTickets
  {
    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;
      $this->routeService->registerEndpoints($this, 'restRegisterRoutes');
    }

    public function restRegisterRoutes() {
      $this->routeService->registerUserGET('/profiles/' . RestV2Routes::userId . '/tickets',
        'RestV2Tickets', 'restTicketsForUser');

		}

  }
}
