<?php

include 'rest-routes.php';
include 'rest-methods.php';
include 'login/rest-endpoints.php';
include 'profiles/rest-endpoints.php';

if (!class_exists('RestEndpointsV2'))
{
  class RestEndpointsV2
  {
    public function __construct()
    {
      new RestEndpointsV2Login();
    	new RestEndpointsV2Profiles();

      //add_action( 'rest_api_init', array(&$this, 'restRegisterRoutes') );

    }

    public function restRegisterRoutes()
    {

      register_rest_route(RestV2Routes::appRoute, '', array(
        'methods' => RestV2Methods::GET,
        'callback' => array('RestV2Service', 'restBasicResources'),
        //  'permission_callback' => array('RestV2Permission', 'restUserPermissionById'),
        'sanitize_callback' => 'rest_data_arg_sanitize_callback',
      ));

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

?>