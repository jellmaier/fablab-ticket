<?php

if (!class_exists('RestV2Devices'))
{
  class RestV2Devices
  {

    //--------------------------------------------------------
		// Load Devices available for Profile
		//--------------------------------------------------------

		public function restProfileDevices($data) {
		  
		  $user_id = $data['userId'];

      $deviceList = array();

      $deviceList['title'] = __( 'Geräte', 'fablab-ticket' );

		  if (SettingsService::getOption('ticket_online') != 1) {
        $deviceList['message'] = __( 'Das Ticket-System ist offline-', 'fablab-ticket' );
      } else if (RestV2Devices::isUserTicketLimitExceeded($user_id)) {
        $deviceList['message'] = __( 'Die maximale Anzahl an Tickets is bereits gezogen!', 'fablab-ticket' );
		  } else {
        $devices = RestV2Devices::getDeviceTypes($user_id);

        if (empty($devices)) {
          $deviceList['message'] = __( 'Zurzeit sind keine Geräte verfügbar', 'fablab-ticket' );
        } else {
          $deviceList['message'] = __( 'Verfügbare Geräte:', 'fablab-ticket' );
          foreach($devices as &$device) {
            $device['_links'] = RestV2Devices::getDeviceLinks($user_id, $device['id']);
          }
          $deviceList['devices'] = $devices;
        }

      }


      return $deviceList;
		}

		private function isUserTicketLimitExceeded($user_id) {
			// check total user ticket count
		  $query_arg = array( 'post_type' => 'ticket', 'author' => $user_id, 'post_status' => 'publish');
		  $user_ticket_count =  count(get_posts($query_arg));
		  $tickets_per_user = SettingsService::getOption('tickets_per_user');

		  return ($user_ticket_count >= $tickets_per_user);
		}

		private function getDeviceTypes($user_id) {
		  global $post;

		  $device_type_list = get_terms('device_type', array(
		    'orderby'    => 'name',
		    'hide_empty' => '1'
		  ));

		  $available_devices = array();
		  foreach($device_type_list as $device_type) {

		    if(RestV2Devices::showDeviceTypeForUser($user_id, $device_type->term_id)) {
		      $device = array();
		      $device['id'] = $device_type->term_id;
		      $device['name'] = $device_type->name;
          $device['color'] = get_term_meta($device_type->term_id, 'tag_color', true);
		      array_push($available_devices, $device);
		    }
		  }
		  return $available_devices;
    }

    public function showDeviceTypeForUser($user_id, $device_type_id) {

      return ( RestV2Devices::hasBeginnerDevicesOfDeviceType($device_type_id)
		           && !RestV2Devices::isUserTicketLimitPerDeviceTypeExceeded($user_id, $device_type_id) );
		}

    private function hasBeginnerDevicesOfDeviceType($device_type_id) {

		  $number_devices = count(get_beginner_device_of_device_type($device_type_id));

		  return ($number_devices > 0);
		}

    private function isUserTicketLimitPerDeviceTypeExceeded($user_id, $device_type_id) {

		  $device_ticket_count = get_number_of_tickets_by_device_type_and_user($device_type_id, $user_id);
			$tickets_per_device = SettingsService::getOption('tickets_per_device');

		  return ($device_ticket_count >= $tickets_per_device);
		}

		private function getDeviceLinks($user_id, $device_type_id) {
      $links = array(); 

      array_push($links, RestEndpointsV2::createGETLink( ('profiles/' . $user_id . '/devices/' . $device_type_id . '/new-ticket' ),
                                                      'new-ticket','Ticket erstellen') );

      return $links;

    }

  }
}

?>