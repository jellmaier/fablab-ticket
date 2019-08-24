<?php

include 'rest-routes.php';
include 'rest-permission.php';
include 'rest-routes-service.php';
include 'rest-methods.php';
include 'login/rest-endpoints.php';
include 'profiles/rest-endpoints.php';

if (!class_exists('RestEndpointsV2'))
{
  class RestEndpointsV2
  {
    private $routeService;

    public function __construct()
    {
      $this->routeService = new RestV2RoutesService();
      new RestEndpointsV2Login($this->routeService);
    	new RestEndpointsV2Profiles($this->routeService);;


     // $this->routeService->registerEndpoints($this, 'restRegisterRoutes');
    }

    public function restRegisterRoutes()
    {
      $this->routeService->registerAnonymousGET('',
        'RestV2Service','restBasicResources');
    }

    //--------------------------------------------------------
		// Rest create links function
		//--------------------------------------------------------

		public static function createLink($appLink, $relation, $type = RestV2Methods::GET, $label = null) {

		  //https://www.iana.org/assignments/link-relations/link-relations.xhtml

		  $link = array();
		  $link['href'] = $appLink;
		  $link['rel'] = $relation;
		  $link['type'] = $type;
		  if ( $label != null ) {
		    $link['label'] = $label;
		  }
		  
		  return $link;

		}
  }
}
