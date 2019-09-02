<?php

include 'rest-edit-ticket.php';
include 'rest-edit-ticket-delete.php';

if (!class_exists('RestEndpointsV2ProfilesEditTicket'))
{
  class RestEndpointsV2ProfilesEditTicket
  {
    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;

      $this->routeService->registerEndpoints($this, 'restRegisterRoutes');

    }

    public function restRegisterRoutes() {

      $this->routeService->registerUserGET('/profiles/' . RestV2Routes::userId . '/tickets/' . RestV2Routes::ticketId,
        'RestV2EditTicket', 'restProfileEditTicket');

      $this->routeService->registerUserTicketDELETE('/profiles/' . RestV2Routes::userId . '/tickets/' . RestV2Routes::ticketId,
        'RestV2DeleteTicket', 'restDeleteTicket');

		}

  }
}
