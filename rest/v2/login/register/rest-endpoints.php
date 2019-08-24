<?php


if (!class_exists('RestEndpointsV2Register'))
{
  class RestEndpointsV2Register
  {
    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;
   //   $this->routeService->registerEndpoints($this, 'restRegisterRoutes');

    }

    public function restRegisterRoutes() {
      $this->routeService->registerAnonymousPOST('register',
        'RestV2Login','restPerformLogin');


		}

  }
}

?>