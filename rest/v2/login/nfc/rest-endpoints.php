<?php


if (!class_exists('RestEndpointsV2LoginNfc'))
{
  class RestEndpointsV2LoginNfc
  {
    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;
     // $this->routeService->registerEndpoints($this, 'restRegisterRoutes');

    }

    public function restRegisterRoutes() {


      $this->routeService->registerAnonymousPOST('login/nfc',
        'RestV2Login','restPerformLogin');


		}

  }
}

