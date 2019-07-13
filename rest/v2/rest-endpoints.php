<?php

include 'profiles/rest-endpoints.php';

if (!class_exists('RestEndpointsV2'))
{
  class RestEndpointsV2
  {
    public function __construct()
    {
    	new RestEndpointsV2Profiles();

    }

    //--------------------------------------------------------
		// Rest create links function
		//--------------------------------------------------------

		public static function createLink($appLink, $relation, $type = 'GET', $label = null) {

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