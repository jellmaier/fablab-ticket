<?php

include 'rest-routes.php';
include 'rest-permission.php';
include 'rest-routes-service.php';
include 'rest-service.php';
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
      $this->routeService->registerAnonymousGET('/la',
        'RestV2Service','restBasicResources');
    }

    //--------------------------------------------------------
		// Rest create links functions
		//--------------------------------------------------------

		public static function createGETLink($appLink, $relation, $label = null) {
		  return RestEndpointsV2::createLink($appLink, $relation, RestV2Methods::GET, $label);
		}

    public static function createPOSTLink($appLink, $relation, $label = null) {
      return RestEndpointsV2::createLink($appLink, $relation, RestV2Methods::POST, $label);
    }
		public static function createPUTLink($appLink, $relation, $label = null) {
		  return RestEndpointsV2::createLink($appLink, $relation, RestV2Methods::PUT, $label);
		}

    public static function createDELETELink($appLink, $relation, $label = null) {
      return RestEndpointsV2::createLink($appLink, $relation, RestV2Methods::DELETE, $label);
    }

		private static function createLink($appLink, $relation, $type, $label = null) {

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

    //--------------------------------------------------------
    // Rest Input Fields functions
    //--------------------------------------------------------

    public static function createTextField($label, $parameter) {
      return RestEndpointsV2::createInputField($label, 'TEXT', $parameter, $required = false);
    }

    public static function createPasswordField($label, $parameter) {
      return RestEndpointsV2::createInputField($label, 'PASSWORD', $parameter, $required = false);
    }

    private static function createInputField($label, $type, $parameter, $required = false) {
      $inputField = array();
      $link['label'] = $label;
      $link['type'] = $type;
      $link['required'] = $required;
      $link['parameter'] = $parameter;

      return $link;
    }
  }
}
