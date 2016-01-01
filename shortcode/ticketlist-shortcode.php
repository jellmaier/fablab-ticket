<?php

//namespace fablab_ticket;

include 'ticketlist-shortcode-admin.php';
include 'ticketlist-shortcode-user.php';

if (!class_exists('TicketListShortcode'))
{
  class TicketListShortcode
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'ticket-list', 'get_ticketlist_shortcode' );
    }
  }
}

//--------------------------------------------------------
// Display Tickets ViewS
//--------------------------------------------------------
function get_ticketlist_shortcode($atts){

  global $post;
  $is_manager = current_user_can( 'delete_others_posts' );

  //--------------------------------------------------------
  // Display Ticket List or Manager View Tickets
  //--------------------------------------------------------
  if ($is_manager) {
    new TicketListShortcodeAdmin();
    //display_manager_ticketlist();
  } else {
    new TicketListShortcodeUser();
    //display_user_list();
  }
  
}

?>