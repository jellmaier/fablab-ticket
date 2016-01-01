<?php

//namespace fablab_ticket;

if (!class_exists('CalendarShortcode'))
{
  class CalendarShortcode
  {
    public function __construct()
    {
      // Displaying Ticket options
      add_shortcode( 'calendar', 'get_calendar_shortcode' );
    }
  }
}

// Get Ticket Shortcut
function get_calendar_shortcode($atts){
  global $post;
  global $fl_calendar_script;
  $fl_calendar_script = true;
  //$timeticket_query = get_ticket_query_from_user($user_id);
  echo '<div id="fullcalendar"></div>';
  is_device_availabel('44');
  
}
    

//--------------------------------------------------------
// Display User Tickets
//--------------------------------------------------------
function display_calendar_tickets($ticket_query) {
  global $post;
  echo '<p>Hier wird dir dein gezogenes Ticket angezeigt:</p>';
  echo '<div id="ticket-listing" action="" metod="POST">';
  
}

?>