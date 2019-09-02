<?php

if (!class_exists('RestV2DeleteTicket'))
{
  class RestV2DeleteTicket
  {
		public function restDeleteTicket($data) {

		  return RestV2DeleteTicket::deleteTicket($data['userId'], $data['ticketId']);

		}

		private	function deleteTicket($user_id, $ticket_id) {


      if(!RestV2DeleteTicket::isTicketEntry($ticket_id)) {
        return WP_Error( 'rest_noticket', __( 'Is not a ticket', 'fablab-ticket' ), array( 'status' => 422 ) );
      }

      $ticket_status = get_post_meta( $ticket_id, 'status', true );
      $timeticket_id = get_post_meta( $ticket_id, 'timeticket_id', true );

      // if linked to timeticket
      if ($timeticket_id)
      {
        if ($ticket_status == '0-finished')
          disconnect_ticket_of_timeticket($timeticket_id);
        else if($ticket_status == '6-inactive')
          if (wp_delete_post($timeticket_id) == false) // delete Time-Ticket
            return WP_Error( 'rest_notdeleted', __( 'Time-Ticket not deleted', 'fablab-ticket' ), array( 'status' => 423 ) );
      }


      if (wp_delete_post($ticket_id) == false)  // delete Ticket
        return WP_Error( 'rest_notdeleted', __( 'Ticket not deleted', 'fablab-ticket' ), array( 'status' => 423 ) );

      return new WP_REST_Response( null, 200 );

		}

    function isTicketEntry($ticket_id) {
      return (get_post_field( 'post_type', $ticket_id ) == 'ticket');
    }



  }
}

?>