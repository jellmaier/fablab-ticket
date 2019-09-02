<?php

if (!class_exists('RestV2EditTicket'))
{
  class RestV2EditTicket
  {
		public function restProfileEditTicket($data) {

		  return RestV2EditTicket::editTicket($data['userId'], $data['ticketId']);

		}

		private	function editTicket($user_id, $ticket_id) {

      $device_id = get_post_meta($ticket_id, 'device_id', true );

      $resource = array();
      $resource['Label'] = 'Ticket bearbeiten';
      $resource['DeviceInfo'] = RestV2EditTicket::getDeviceTypeContent($device_id);
      $resource['_links'] = RestV2EditTicket::getTicketLinks($user_id, $ticket_id);
      return $resource;
		}

    private function getDeviceTypeContent($deviceTypeId) {
      return '<p>Gerät: ' . get_term_by('id' , $deviceTypeId, 'device_type')->name . '</p>' .
        term_description($deviceTypeId, 'device_type');
    }

    private function getTicketLinks($user_id, $ticket_id) {

      $links = array();
       array_push( $links, RestEndpointsV2::createDELETELink( ('profiles/' . $user_id . '/tickets/' . $ticket_id ),
         'delete', 'Ticket löschen'));
      return $links;
    }



  }
}

?>