<?php

include 'devices/rest-endpoints.php';
include 'tickets/rest-endpoints.php';
include 'rest-profiles-service.php';

if (!class_exists('RestEndpointsV2Profiles'))
{
  class RestEndpointsV2Profiles
  {
    private $routeService;

    public function __construct(RestV2RoutesService $routeService)
    {
      $this->routeService = $routeService;

    	new RestEndpointsV2ProfilesTickets($routeService);
    	new RestEndpointsV2ProfilesDevices($routeService);

      $this->routeService->registerEndpoints($this, 'restRegisterRoutes');
    }

    public function restRegisterRoutes() {

      $this->routeService->registerLoggedInGET('profiles',
        'RestV2Profiles','restProfilesCurrentUser');

      $this->routeService->registerUserGET('profiles/' . RestV2Routes::userId,
        'RestV2Profiles','restProfiles');
		}

    //--------------------------------------------------------
		// Rest get Profiles for current User
		//--------------------------------------------------------

		public function restProfilesCurrentUser($data) {

		  $links = array(); 
		  array_push($links, RestEndpointsV2::createGETLink('profiles' . '/' . get_current_user_id(), 'related'));

		  $resource = array();
		  $resource['_links'] = $links;
		  
		  return $resource;

		}


		//--------------------------------------------------------
		// Rest get Profile for User
		//--------------------------------------------------------

		public function restProfiles($data) {

		  $user_id = $data['userId'];

		  $links = array(); 
		  array_push($links, RestEndpointsV2::createGETLink('profiles' . '/' . $user_id . '/devices', 'devices'));
		  array_push($links, RestEndpointsV2::createGETLink('profiles' . '/' . $user_id . '/tickets', 'tickets'));

		  $resource = array();
		  $resource['_links'] = $links;
		  
		  return $resource;

		}


  }
}
