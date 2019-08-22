<?php

if (!class_exists('RestV2NewTicket'))
{
  class RestV2NewTicket
  {
		public function restPofileNewTicket($data) {

		  return RestV2NewTicket::newTicketForUser($data['userId'], $data['deviceId'], 'device_type');

		}

		private	function newTicketForUser($user_id, $device_id, $ticket_type) {


      $options = fablab_get_option();

			if ($options['ticket_online'] != 1)
			  return new WP_Error( 'rest_ticket_offline', __( 'Ticket-System offline', 'fablab-ticket' ), array( 'status' => 423 ) );

			$duration = $options['ticket_max_time'];


			if (($ticket_type == 'device') && is_no_device_entry($device_id))
			  return new WP_Error( 'rest_nodevice', __( 'Is not a device', 'fablab-ticket' ), array( 'status' => 422 ) );
			else if (($ticket_type == 'device_type') && is_no_device_type($device_id))
			  return new WP_Error( 'rest_nodevice_type', __( 'Is not a device_type', 'fablab-ticket' ), array( 'status' => 422 ) );


			$post_information = array(
			  'post_title' => sprintf(__( '%s, from: ', 'fablab-ticket' ), __( 'Ticket', 'fablab-ticket' )), // . wp_get_current_user()->display_name,
			  'post_type' => 'ticket',
			  'post_author' => $user_id,
			  'post_status' => 'publish',
			);

			$ID = wp_insert_post( $post_information );


			if ($ID != 0) {
			  add_post_meta($ID, 'device_id', $device_id);
			  add_post_meta($ID, 'duration' , $duration);
			  add_post_meta($ID, 'ticket_type' , $ticket_type);
			  add_post_meta($ID, 'status' , "5-waiting");
			  $pin = wp_rand(10000,99999);
			  add_post_meta($ID, 'pin' , $pin);
			}


			return new WP_REST_Response( null, 200 );
		}



  }
}

?>