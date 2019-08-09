<?php

if (!class_exists('RestV2Profiles'))
{
  class RestV2Profiles
  {

    //--------------------------------------------------------
		// Rest get Profiles for current User
		//-------------------------------------------------------

		public function restProfilesCurrentUser($data) {

		  $links = array(); 
		  array_push($links, RestEndpointsV2::createLink('profiles' . '/' . get_current_user_id(), 'related'));

		  $resource = array();
		  $resource['links'] = $links;
		  
		  return $resource;

		}


		//--------------------------------------------------------
		// Rest get Profile for User
		//--------------------------------------------------------

		public function restProfiles($data) {

		  $user_id = $data['userId'];


		  $links = array(); 
		  array_push($links, RestEndpointsV2::createLink('profiles' . '/' . $user_id . '/devices', 'devices'));
		  array_push($links, RestEndpointsV2::createLink('profiles' . '/' . $user_id . '/tickets', 'tickets'));

		  $resource = array();
		  $resource['links'] = $links;
		  
		  return $resource;

		}

  }
}

?>