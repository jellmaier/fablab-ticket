<?php

if (!class_exists('RestV2Devices'))
{
  class RestV2Devices
  {
    //--------------------------------------------------------
		// Rest get Profiles for current User
		//--------------------------------------------------------

		public function restPofileDevice($data) {

		  
		  return RestV2Devices::restPofileDeviceTest($data);

		}

		private function restPofileDeviceTest($data) {

		  
		  return $data['deviceId'] . 'lalgggal';

		}



		public function restPofileDevices($data) {
		  
		  $user_id = $data['userId'];

		  if (fablab_get_option('ticket_online') != 1)
		    return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

		  $devices = get_device_types($user_id);

		  foreach($devices as &$device) {
		  	$links = array(); 
		    array_push($links, RestEndpointsV2::createLink('profiles' . '/' . $user_id . '/' . 'devices' . '/' .  $device['id'], 'related'));
		    $device['links'] = $links;
		  }

		  return $devices;
		}


  }
}

?>