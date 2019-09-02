<?php

if (!class_exists('RestV2NewTicket'))
{
  class RestV2NewTicket
  {
		public function restProfileNewTicket($data) {

		  return RestV2NewTicket::newTicketForUser($data['userId'], $data['deviceId'], 'device_type');

		}

		private	function newTicketForUser($user_id, $device_id, $ticket_type) {

      if(!RestV2Devices::showDeviceTypeForUser($user_id, $device_id)) {
        return new WP_Error( 'rest_forbidden', 'You are not allowed to add a ticket to this device_type', array( 'status' => 401 ) );
      }

      $resource = array();
      $resource['Label'] = 'Ticket ziehen';
      $resource['DeviceInfo'] = RestV2NewTicket::getDeviceTypeContent($device_id);
      $resource['_links'] = RestV2NewTicket::getSubmitLinks($user_id, $device_id);
      return $resource;
		}

    private function getDeviceTypeContent($deviceTypeId) {
      return '<p>Gerät: ' . get_term_by('id' , $deviceTypeId, 'device_type')->name . '</p>' .
        term_description($deviceTypeId, 'device_type');
    }

    private function getSubmitLinks($user_id, $device_type_id) {
      $links = array();

      array_push($links, RestEndpointsV2::createPOSTLink( ('profiles/' . $user_id . '/devices/' . $device_type_id . '/new-ticket' ),
        'new-ticket', 'Ticket ziehen') );

      return $links;

    }



  }
}

?>