<?php


if (!class_exists('RestV2Tickets'))
{
  class RestV2Tickets
  {

    //--------------------------------------------------------
    // Get Tickets by Query
    //--------------------------------------------------------

     private function restGetTickets($user_id, $ticket_query, $old_hash) {

      $ticket_list = array();

      global $post;

      if ( $ticket_query->have_posts() ) {
        while ( $ticket_query->have_posts() ) : $ticket_query->the_post() ;

          $ticket = RestV2Tickets::getTicketValues($user_id, $post->ID);
          $ticket['post_title'] = $post->post_title;
          $ticket['post_date'] = $post->post_date;

          $ticket['_links'] = RestV2Tickets::getTicketLinks($user_id, $post->ID);

          array_push($ticket_list, $ticket);

        endwhile;

      } else {
        $result = array();
        $result['hash'] = 'empty';
        return $result;
      }

      wp_reset_query();     


      $result = array();

      $result['title'] = __( 'Tickets', 'fablab-ticket' );
       if (!empty($ticket_list)) {
         $result['message'] = __( 'Die gezogenen Tickets:', 'fablab-ticket' );
       }

      $result['tickets'] = $ticket_list;
      $result['hash'] = wp_hash(serialize($ticket_list));

      if($result['hash'] == $old_hash)
        return new WP_Error( 'rest_notmodified', __( 'Data has not changed.', 'fablab-ticket' ), array( 'status' => 304 ) );

      return $result;
    }


    //--------------------------------------------------------
    // Rest get Tickets from current User
    //--------------------------------------------------------

    public function restTicketsForUser($data) {

      $user_id = $data['userId'];
      $old_hash = sanitize_text_field($data['hash']);
      
      return RestV2Tickets::restGetTickets($user_id, get_ticket_query_from_user( $user_id ), $old_hash );

    }



    //--------------------------------------------------------
    // get Ticket values
    //--------------------------------------------------------
    private function getTicketValues($user_id, $ticket_id) {

      $ticket = array();

      $ticket['ID'] = $ticket_id;
      $ticket_type = get_post_meta($ticket_id, 'ticket_type', true );
      $ticket_status = get_post_meta($ticket_id, 'status', true );
      $ticket['status'] = substr($ticket_status, 2);
      $device_id = get_post_meta($ticket_id, 'device_id', true );

      if ($ticket_status == '5-waiting') {
        $ticket['available'] = device_available($device_id, $ticket_type, $ticket_id);
      } else {
        $ticket['available'] = false;
      }
      
      if ($ticket_type == 'device') {
        $ticket['device_title'] = get_device_title_by_id($device_id);
        $ticket['color'] = get_device_type_color_field(get_post_meta($ticket_id, 'device_id', true ));
      } else if ($ticket_type == 'device_type') {
        $ticket['device_title'] = get_term( $device_id, 'device_type')->name;
        $ticket['color'] = get_term_meta($device_id, 'tag_color', true);
      }
      $ticket['device_id'] = $device_id;

      if (get_post_field( 'post_author', $ticket_id ) == $user_id) {
        $ticket['pin'] = get_post_meta($ticket_id, 'pin', true );
      }
     
      return $ticket; 
    }

    //--------------------------------------------------------
    // get Ticket links
    //--------------------------------------------------------
    private function getTicketLinks($user_id, $ticket_id) {

      $links = array();
      array_push( $links, RestEndpointsV2::createGETLink( ('profiles/' . $user_id . '/tickets/' . $ticket_id ),
                                                       'edit', 'Ticket beabeiten'));

      return $links;
    }

  }
}

?>